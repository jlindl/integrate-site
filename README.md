<div align="center">
	<h1>Integrate – AI-Powered Automation Platform</h1>
	<p><strong>We build automated systems that scale your business.</strong></p>
	<p>AI voice & sales agents • Lead gen engines • Workflow automations • Web scraping pipelines • Custom apps</p>
</div>

## ✨ Features
- AI reception & voice agents (inbound + outbound)
- Automated multi-channel sales & follow-up workflows
- Lead enrichment & scraping pipelines
- CRM synchronization and data hygiene automations
- Custom workflow orchestration UI components
- Framer Motion animation layer + Tailwind v4 styling

## 🧱 Tech Stack
- **Framework:** Next.js (App Router)
- **UI:** React + Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide
- **Forms & Data:** Custom API route → Google Sheets integration

## 📂 Key Directories
- `app/` – Route segments & page layout
- `app/components/` – Reusable UI + About page modules
- `app/api/contact/route.ts` – Contact form → Google Sheets append
- `public/` – Static assets (logos, images)

## 🔐 Environment Variables
Create `.env.local` (never commit it):
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY_BASE64=BASE64_ENCODED_PRIVATE_KEY
GOOGLE_SHEETS_ID=your-spreadsheet-id
GOOGLE_SHEETS_TAB_NAME=Web_Leads
```
How to generate `GOOGLE_PRIVATE_KEY_BASE64`:
```bash
node -e "const fs=require('fs');const j=JSON.parse(fs.readFileSync('key.json','utf8'));console.log(Buffer.from(j.private_key,'utf8').toString('base64'))" 
```
Then place the output in `.env.local`.

## 🚀 Local Development
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## 🧪 Contact Form Test
```bash
curl -X POST http://localhost:3000/api/contact \
	-H "Content-Type: application/json" \
	-d '{"name":"Test","email":"test@example.com","company":"Acme","phone":"","message":"Hello","consent":true}'
```

## 📦 Production Build
```bash
npm run build
npm start
```

## ☁️ Deployment (Vercel Recommended)
1. Push repository to GitHub (no secrets).
2. Import in Vercel → Framework auto-detected.
3. Set Environment Variables in Vercel → Deploy.
4. Enable automatic redeploys on `main`.

## 🛡 Security & Secrets
- Service account JSON must never be committed.
- `.gitignore` blocks common secret patterns.
- If a secret is ever committed: rotate key, purge history (filter-repo / BFG), force push.

## 🧭 Project Conventions
- Use server components by default; add `"use client"` only when interactivity is needed.
- Tailwind color theming: electric blues + neutral grays.
- Motion variants defined inline for readability; abstract only if reused 3+ times.

## 🗂 Future Enhancements
- Rate limiting & spam protection (hCaptcha / Turnstile)
- Central metrics dashboard
- Auth & per-client automation consoles

## 📬 Contact
For inquiries: update footer email to your active domain (currently placeholder).

---
Made with Next.js, Tailwind, and lots of automation.
