import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Practice Automation: AI Booking & Patient Intake | Integrate",
  description:
    "Automate appointment booking, patient data intake, and insurance pre-checks for clinics and private healthcare. CQC compliant, GDPR secure. UK-based support.",
  keywords: [
    "AI automation for healthcare",
    "clinic appointment booking",
    "patient intake automation",
    "healthcare automation UK",
    "insurance verification automation",
    "private clinic software",
    "medical practice automation",
    "CQC compliant software",
    "patient registration automation",
    "healthcare admin automation",
    "GP practice automation",
    "dental practice software",
    "physio clinic booking",
    "private hospital automation",
    "patient journey automation",
  ],
  openGraph: {
    title: "AI Automation for Clinics & Private Healthcare | Integrate",
    description:
      "Automate appointment booking, patient data intake, and insurance pre-checks. CQC compliant automation for clinics and private healthcare.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Clinics & Private Healthcare | Integrate",
    description:
      "Automate appointment booking, patient data intake, and insurance pre-checks. CQC compliant automation for clinics and private healthcare.",
  },
  alternates: {
    canonical: "https://integrate.co.uk/industry-automation/healthcare-automation",
  },
};

export default function HealthcareLayout({
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
              "name": "Healthcare Automation",
              "provider": {
                "@type": "Organization",
                "name": "Integrate",
              },
              "description": "Automated appointment booking, patient intake, and insurance verification for private clinics.",
              "areaServed": "UK",
              "audience": "Clinics & Private Healthcare",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does smart appointment booking work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Patients can book 24/7 via an intelligent system that automatically matches them with the right practitioner and handles waitlists."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is patient data intake secure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our system provides secure, GDPR-compliant digital forms for medical history and consent, protecting sensitive patient data."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it check insurance coverage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it automates insurance verification, checking policy details and pre-authorisation before the patient arrives."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it CQC compliant?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. The platform is built with NHS-grade security and full audit trails to meet CQC and healthcare compliance standards."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Automate Patient Journeys",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Patient Enquires",
                  "text": "Patient visits booking page to request an appointment."
                },
                {
                  "@type": "HowToStep",
                  "name": "AI Books",
                  "text": "System schedules appointment with the correct practitioner."
                },
                {
                  "@type": "HowToStep",
                  "name": "Data Collected",
                  "text": "Intake forms and medical history are completed digitally."
                },
                {
                  "@type": "HowToStep",
                  "name": "Insurance Verified",
                  "text": "Coverage is confirmed automatically before arrival."
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
