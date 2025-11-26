import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
  consent?: boolean; // accepted but not stored
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const { name, email, company, phone, message } = body || {};

    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKeyB64 = process.env.GOOGLE_PRIVATE_KEY_BASE64;
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const tabName = process.env.GOOGLE_SHEETS_TAB_NAME || "Sheet1";

    if (!spreadsheetId || !clientEmail || (!privateKey && !privateKeyB64)) {
      return NextResponse.json(
        { error: "Server not configured for Sheets. Missing env vars." },
        { status: 500 }
      );
    }

    // Resolve private key from either BASE64 or escaped form
    if (!privateKey && privateKeyB64) {
      try {
        privateKey = Buffer.from(privateKeyB64, "base64").toString("utf8");
      } catch {
        return NextResponse.json(
          { error: "Invalid base64 private key (GOOGLE_PRIVATE_KEY_BASE64)." },
          { status: 500 }
        );
      }
    }

    if (!privateKey) {
      return NextResponse.json(
        { error: "Private key not provided." },
        { status: 500 }
      );
    }

    // Normalize common formatting issues
    privateKey = privateKey
      .replace(/\r\n/g, "\n") // collapse CRLF to LF if present
      .replace(/\\r\\n/g, "\n") // handle escaped CRLF
      .replace(/\\n/g, "\n") // handle escaped LF
      .trim();

    // Strip surrounding quotes if accidentally included
    if ((privateKey.startsWith('"') && privateKey.endsWith('"')) || (privateKey.startsWith("'") && privateKey.endsWith("'"))) {
      privateKey = privateKey.slice(1, -1);
    }

    if (!/-----BEGIN [A-Z ]*PRIVATE KEY-----/.test(privateKey)) {
      return NextResponse.json(
        { error: "Private key appears malformed. Check newline escapes or use GOOGLE_PRIVATE_KEY_BASE64." },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toISOString();
    const values = [[
      timestamp,
      name,
      email,
      company,
      phone || "",
      message,
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/contact error:", (err as Error)?.message || err);
    return NextResponse.json(
      { error: (err instanceof Error && err.message.includes("DECODER routines")) ? "Private key parsing failed. Verify GOOGLE_PRIVATE_KEY formatting or set GOOGLE_PRIVATE_KEY_BASE64." : "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}
