import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Recruitment Agency Software & Agency Automation UK | Integrate",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Recruitment Automation",
              "provider": {
                "@type": "Organization",
                "name": "Integrate",
              },
              "description": "Automated candidate sourcing, CV parsing, and interview scheduling for recruitment agencies.",
              "areaServed": "UK",
              "audience": "Recruitment Agencies",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does automated sourcing work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI searches across multiple job boards and LinkedIn to identify qualified candidates and build talent pools automatically."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it parse CVs intelligently?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it extracts skills, experience, and contact details from any CV format and populates your ATS with structured data."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it handle interview scheduling?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, candidates can self-book interviews into available slots, with automated timezone handling and reminders."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it automate candidate outreach?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It runs personalised multi-channel sequences via email and LinkedIn to engage candidates at scale."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Automate Recruitment",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Source & Parse",
                  "text": "AI finds candidates and extracts CV data automatically."
                },
                {
                  "@type": "HowToStep",
                  "name": "Screen & Match",
                  "text": "Candidates are scored against job requirements."
                },
                {
                  "@type": "HowToStep",
                  "name": "Engage & Schedule",
                  "text": "Automated outreach and self-booking for interviews."
                },
                {
                  "@type": "HowToStep",
                  "name": "Track & Place",
                  "text": "Visual pipeline management triggers workflow stages."
                }
              ]
            }
          ]),
        }}
      />
      {children}
    </>
  );
}
