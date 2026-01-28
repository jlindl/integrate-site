import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.integrate-tech.co.uk"),
  title: {
    default: "Integrate | AI Automation Agency & Specialists",
    template: "%s | Integrate AI Agency",
  },
  description: "Integrations, automations, and AI workflows. Automating voice, email and CRM so your team focuses on growth.",
  keywords: ["AI automation", "workflow automation", "business integration", "lending automation", "voice agents", "CRM automation"],
  openGraph: {
    title: "Integrate | AI Automation & Workflows",
    description: "Integrations, automations, and AI workflows. Automating voice, email and CRM so your team focuses on growth.",
    url: "https://www.integrate-tech.co.uk",
    siteName: "Integrate",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrate | AI Automation & Workflows",
    description: "Integrations, automations, and AI workflows. Automating voice, email and CRM so your team focuses on growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // Primary favicon (PNG). Browsers may still request /favicon.ico; optional to add later.
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Integrate",
              "alternateName": [
                "Integrate Automation Agency",
                "Integrate AI Systems",
                "Integrate Agency UK"
              ],
              "url": "https://www.integrate-tech.co.uk",
              "logo": "https://www.integrate-tech.co.uk/icon.png",
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "City",
                  "name": "London"
                },
                {
                  "@type": "City",
                  "name": "Manchester"
                },
                {
                  "@type": "City",
                  "name": "Birmingham"
                },
                {
                  "@type": "City",
                  "name": "Leeds"
                },
                {
                  "@type": "City",
                  "name": "Bristol"
                },
                {
                  "@type": "City",
                  "name": "Glasgow"
                }
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Process Automation",
                "Make.com",
                "n8n",
                "OpenAI",
                "CRM Integration"
              ],
              "sameAs": [
                "https://www.linkedin.com/company/integrate-tech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@integrate-tech.co.uk",
                "contactType": "customer service",
                "areaServed": "GB"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
