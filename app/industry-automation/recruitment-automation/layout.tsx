import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Recruitment Agencies | Integrate",
  description:
    "Automate candidate sourcing, CV parsing, interview scheduling, and outreach for your recruitment agency. Place more candidates with less admin. UK-based support.",
  keywords: [
    "AI automation for recruitment agencies",
    "recruitment automation software",
    "automated candidate sourcing",
    "CV parsing automation",
    "interview scheduling software",
    "recruitment CRM automation",
    "LinkedIn outreach automation",
    "recruitment agency software UK",
    "ATS automation",
    "candidate pipeline management",
    "recruitment workflow automation",
    "automated recruiter tools",
    "AI recruitment software",
    "talent acquisition automation",
  ],
  openGraph: {
    title: "AI Automation for Recruitment Agencies | Integrate",
    description:
      "Automate candidate sourcing, CV parsing, interview scheduling, and outreach. Place more candidates with less admin.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Recruitment Agencies | Integrate",
    description:
      "Automate candidate sourcing, CV parsing, interview scheduling, and outreach. Place more candidates with less admin.",
  },
  alternates: {
    canonical: "https://integrate.co.uk/industry-automation/recruitment-automation",
  },
};

export default function RecruitmentAgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
