import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Cleaning Companies | Apex Automations",
  description:
    "Automate quote intake, job scheduling, CRM pipeline, and review collection for your cleaning business. Scale operations without adding staff. UK-based support.",
  keywords: [
    "AI automation for cleaning companies",
    "cleaning business automation",
    "automated quote system cleaning",
    "cleaning company CRM",
    "job scheduling software cleaning",
    "cleaning business software UK",
    "commercial cleaning automation",
    "residential cleaning software",
    "cleaning company lead generation",
    "review automation cleaning business",
    "cleaning business management software",
    "automated scheduling cleaning",
  ],
  openGraph: {
    title: "AI Automation for Cleaning Companies | Apex Automations",
    description:
      "Automate quote intake, job scheduling, CRM pipeline, and review collection. Scale your cleaning business without adding staff.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Cleaning Companies | Apex Automations",
    description:
      "Automate quote intake, job scheduling, CRM pipeline, and review collection. Scale your cleaning business without adding staff.",
  },
  alternates: {
    canonical: "https://apexautomations.co.uk/industries/cleaning-companies",
  },
};

export default function CleaningCompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
