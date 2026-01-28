import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Advisor Automation & IFA Client Intake Software | Integrate",
  description:
    "Automate lead capture, KYC workflows, fact finders, and appointment setting for IFAs and wealth managers. FCA compliant, GDPR secure. UK-based support.",
  keywords: [
    "AI automation for financial advisors",
    "IFA lead capture",
    "wealth manager automation",
    "KYC automation",
    "digital fact finder",
    "financial advisor appointment booking",
    "FCA compliant software",
    "IFA client onboarding",
    "wealth management automation UK",
    "financial services automation",
    "investment advisor lead generation",
    "AML automation",
    "pension advisor software",
    "financial planner CRM",
    "advisor practice management",
  ],
  openGraph: {
    title: "AI Automation for Financial Advisors & Wealth Managers | Integrate",
    description:
      "Automate lead capture, KYC workflows, fact finders, and appointment setting. FCA compliant automation for IFAs and wealth managers.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Financial Advisors & Wealth Managers | Integrate",
    description:
      "Automate lead capture, KYC workflows, fact finders, and appointment setting. FCA compliant automation for IFAs and wealth managers.",
  },
  alternates: {
    canonical: "https://www.integrate-tech.co.uk/industry-automation/financial-automation",
  },
};

export default function FinancialAdvisorsLayout({
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
              "name": "Financial Automation",
              "provider": {
                "@type": "Organization",
                "name": "Integrate",
              },
              "description": "Automated KYC, digital fact finders, and appointment setting for financial advisors.",
              "areaServed": "UK",
              "audience": "Financial Advisors & Wealth Managers",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does automated lead capture work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Intelligent intake forms capture high-net-worth prospects 24/7, qualify them based on assets and goals, and route priority leads to your team immediately."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it automate KYC checks?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it streamlines KYC verification with automated ID checks, document collection, and risk profiling, all fully FCA compliant."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a digital fact finder?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It replaces paper forms with intelligent digital questionnaires that collect financial circumstances, risk appetite, and objectives through a guided flow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it sync with my calendar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, qualified prospects can book consultations directly into your calendar. The system handles automated reminders and rescheduling."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Automate Client Onboarding",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Prospect Enquires",
                  "text": "Lead submits details via your website or landing page."
                },
                {
                  "@type": "HowToStep",
                  "name": "AI Qualifies",
                  "text": "Investable assets, goals, and timeline are assessed automatically."
                },
                {
                  "@type": "HowToStep",
                  "name": "Data Collected",
                  "text": "Fact finder and KYC documentation are gathered digitally."
                },
                {
                  "@type": "HowToStep",
                  "name": "Meeting Booked",
                  "text": "Qualified prospect is scheduled directly into your calendar for advice."
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
