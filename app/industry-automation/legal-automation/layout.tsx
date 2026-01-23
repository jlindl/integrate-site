import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Firm Automation Consultants | Automate Client Intake | Integrate",
  description:
    "Automate case intake, claims data collection, and evidence upload flows for your law firm. SRA compliant, GDPR secure. UK-based support for legal practices.",
  keywords: [
    "AI automation for law firms",
    "legal case intake automation",
    "solicitor intake software",
    "claims data collection",
    "evidence upload system",
    "law firm automation UK",
    "SRA compliant software",
    "legal document automation",
    "client intake for solicitors",
    "personal injury intake",
    "conveyancing automation",
    "legal practice management",
    "AI for legal services",
    "law firm lead capture",
    "automated case management",
  ],
  openGraph: {
    title: "AI Automation for Law Firms & Solicitors | Integrate",
    description:
      "Automate case intake, claims data collection, and evidence upload flows. SRA compliant, GDPR secure automation for legal practices.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Law Firms & Solicitors | Integrate",
    description:
      "Automate case intake, claims data collection, and evidence upload flows. SRA compliant, GDPR secure automation for legal practices.",
  },
  alternates: {
    canonical: "https://integrate.co.uk/industry-automation/legal-automation",
  },
};

export default function LawFirmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
