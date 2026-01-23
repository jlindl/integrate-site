import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Loan Processing Software & Lending Automation UK | Integrate",
  description:
    "Automate loan applications, document collation, risk pre-screening, and payment follow-ups for your lending business. FCA compliant workflows. UK-based support.",
  keywords: [
    "AI automation for lending",
    "credit firm automation",
    "loan application automation",
    "automated loan processing",
    "FCA compliant automation",
    "lending workflow automation",
    "document collation software",
    "risk pre-screening automation",
    "loan management software UK",
    "credit lending automation",
    "automated underwriting",
    "payment follow-up automation",
    "consumer credit automation",
    "lending CRM automation",
    "loan origination software",
  ],
  openGraph: {
    title: "AI Automation for Credit & Lending Firms | Integrate",
    description:
      "Automate loan applications, document collation, risk pre-screening, and payment follow-ups. FCA compliant workflows built for UK lenders.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Credit & Lending Firms | Integrate",
    description:
      "Automate loan applications, document collation, risk pre-screening, and payment follow-ups. FCA compliant workflows built for UK lenders.",
  },
  alternates: {
    canonical: "https://integrate.co.uk/industry-automation/lending-automation",
  },
};

export default function CreditLendingLayout({
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
              "name": "Lending Automation",
              "provider": {
                "@type": "Organization",
                "name": "Integrate",
              },
              "description": "Automated loan applications, document collation, risk pre-screening, and payment follow-ups.",
              "areaServed": "UK",
              "audience": "Credit & Lending Firms",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does application intake automation work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It captures loan and credit applications 24/7 through intelligent forms, automatically validates data, checks for completeness, and routes applications to the right team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it automate document collection?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it automatically requests, collects, and organises supporting documents like bank statements and ID verification without manual chasing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it FCA compliant?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, every automation is built with UK regulatory requirements in mind, including audit trails and sensitive arrears communication."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What about risk pre-screening?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The system runs initial affordability and eligibility checks to filter out unsuitable applications early."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Automate Loan Processing",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Capture & Validate",
                  "text": "Application is submitted via smart forms and data is validated automatically."
                },
                {
                  "@type": "HowToStep",
                  "name": "Collect Documents",
                  "text": "Supporting documents are requested and gathered securely via upload portal."
                },
                {
                  "@type": "HowToStep",
                  "name": "Pre-Screen Risk",
                  "text": "Automated affordability and eligibility checks are run immediately."
                },
                {
                  "@type": "HowToStep",
                  "name": "Decision & Disburse",
                  "text": "Approved applications are fast-tracked to completion and disbursement."
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
