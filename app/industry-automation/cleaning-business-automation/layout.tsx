import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Business Scheduling Software & Automation UK | Integrate",
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
    title: "AI Automation for Cleaning Companies | Integrate",
    description:
      "Automate quote intake, job scheduling, CRM pipeline, and review collection. Scale your cleaning business without adding staff.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Cleaning Companies | Integrate",
    description:
      "Automate quote intake, job scheduling, CRM pipeline, and review collection. Scale your cleaning business without adding staff.",
  },
  alternates: {
    canonical: "https://integrate.co.uk/industry-automation/cleaning-business-automation",
  },
};

export default function CleaningCompaniesLayout({
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
              "name": "Cleaning Business Automation",
              "provider": {
                "@type": "Organization",
                "name": "Integrate",
              },
              "description": "Automated quote intake, smart job scheduling, and review collection for cleaning companies.",
              "areaServed": "UK",
              "audience": "Cleaning Companies",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does automated quoting work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Leads submit details 24/7 via an intelligent form, and our AI automatically scores the lead and provides an instant estimate based on your pricing logic."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it help with scheduling?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it offers smart drag-and-drop scheduling with route optimisation to minimize travel time and maximize team capacity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it manage customer follow-ups?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. It tracks every lead in a visual pipeline and sends automated follow-up sequences to convert more enquiries into jobs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does review automation work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After a job is marked complete, the system automatically sends a review request to the client, directing happy customers to Google or Trustpilot."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Scale a Cleaning Business",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Quote Request",
                  "text": "Customer submits enquiry details online."
                },
                {
                  "@type": "HowToStep",
                  "name": "Auto-Qualification",
                  "text": "AI scores the lead and generates an estimate."
                },
                {
                  "@type": "HowToStep",
                  "name": "Smart Scheduling",
                  "text": "Customer books a slot optimized for your route."
                },
                {
                  "@type": "HowToStep",
                  "name": "Job & Follow-up",
                  "text": "Completion triggers automated review collection."
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
