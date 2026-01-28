import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Admin Software & Trade Business Automation UK | Integrate",
  description:
    "Automate quote intake, job scheduling, H&S documentation, and renewal reminders for builders, plumbers, electricians, and contractors. UK-based support.",
  keywords: [
    "AI automation for construction",
    "trade business automation",
    "quote intake automation",
    "job scheduling software trades",
    "health and safety automation",
    "certification renewal reminders",
    "builder automation UK",
    "plumber business software",
    "electrician scheduling",
    "contractor management",
    "trades paperwork automation",
    "construction admin software",
    "H&S compliance automation",
    "gas safe reminders",
    "trade business management",
  ],
  openGraph: {
    title: "AI Automation for Construction & Trades | Integrate",
    description:
      "Automate quote intake, job scheduling, H&S documentation, and renewal reminders. Cut admin time by 15+ hours per week.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Construction & Trades | Integrate",
    description:
      "Automate quote intake, job scheduling, H&S documentation, and renewal reminders. Cut admin time by 15+ hours per week.",
  },
  alternates: {
    canonical: "https://www.integrate-tech.co.uk/industry-automation/construction-automation",
  },
};

export default function ConstructionTradesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
