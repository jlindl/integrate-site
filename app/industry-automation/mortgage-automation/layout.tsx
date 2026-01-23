import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Broker Lead Gen Automation & Tracking | Integrate",
  description: "Automate lead capture, appointment booking, and renewal tracking for your mortgage brokerage. FCA compliant AI solutions designed for UK mortgage professionals.",
  keywords: [
    "AI automation for mortgage brokers",
    "automated lead gen mortgage brokers",
    "AI for brokers UK",
    "mortgage broker automation",
    "lead qualification mortgage",
    "appointment booking mortgage brokers",
    "renewal tracking mortgage",
    "FCA compliant automation"
  ],
  openGraph: {
    title: "AI Automation for Mortgage Brokers | Integrate",
    description: "Automate lead capture, appointment booking, and renewal tracking for your mortgage brokerage.",
    type: "website",
  },
  alternates: {
    canonical: "https://integrate-tech.co.uk/industry-automation/mortgage-automation",
  },
};

export default function MortgageBrokersLayout({
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
              "name": "Mortgage Broker Automation",
              "provider": {
                "@type": "Organization",
                "name": "Integrate",
              },
              "description": "Automated lead qualification, appointment booking, and renewal tracking for mortgage brokers.",
              "areaServed": "UK",
              "audience": "Mortgage Brokers",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does lead qualification work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Leads from any channel are instantly engaged by AI, which gathers income, deposit, and property details to score their viability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can clients book their own meetings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, qualified leads can book directly into your calendar via a self-service portal that respects your availability rules."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it track mortgage renewals?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the system tracks renewal dates and automatically triggers personalised outreach campaigns 6 months in advance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it FCA compliant?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our automations are designed with FCA regulations in mind, ensuring all communications are compliant and auditable."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Automate Mortgage Lead Gen",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Lead Arrives",
                  "text": "New enquiry captures via form or partner referral."
                },
                {
                  "@type": "HowToStep",
                  "name": "AI Qualifies",
                  "text": "Automated chat gathers financial details and scores lead."
                },
                {
                  "@type": "HowToStep",
                  "name": "Appointment Booked",
                  "text": "Qualified lead books consultation slot directly."
                },
                {
                  "@type": "HowToStep",
                  "name": "You Close",
                  "text": "Meeting held with fully pre-qualified client."
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
