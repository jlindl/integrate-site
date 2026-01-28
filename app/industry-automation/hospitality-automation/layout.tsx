import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Booking System & Event Management Automation | Integrate",
  description:
    "Automate booking handling, payments, staffing coordination, and review requests for restaurants, hotels, and event venues. PCI compliant. UK-based support.",
  keywords: [
    "AI automation for hospitality",
    "restaurant booking automation",
    "hotel automation UK",
    "event venue software",
    "hospitality payment automation",
    "staff scheduling hospitality",
    "review request automation",
    "restaurant reservation system",
    "event booking software",
    "hospitality management automation",
    "table booking automation",
    "hotel guest experience",
    "venue management software",
    "hospitality staff coordination",
    "TripAdvisor review automation",
  ],
  openGraph: {
    title: "AI Automation for Hospitality & Events | Integrate",
    description:
      "Automate booking handling, payments, staffing coordination, and review requests. Elevate guest experience for restaurants, hotels, and event venues.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Hospitality & Events | Integrate",
    description:
      "Automate booking handling, payments, staffing coordination, and review requests. Elevate guest experience for restaurants, hotels, and event venues.",
  },
  alternates: {
    canonical: "https://www.integrate-tech.co.uk/industry-automation/hospitality-automation",
  },
};

export default function HospitalityEventsLayout({
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
              "name": "Hospitality Automation",
              "provider": {
                "@type": "Organization",
                "name": "Integrate",
              },
              "description": "Automated booking handling, payments, and staff coordination for hospitality businesses.",
              "areaServed": "UK",
              "audience": "Hospitality & Events",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does booking automation work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It captures reservations and enquiries 24/7, checking real-time availability and handling confirmations automatically."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it process payments?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it securely collects deposits, handles split billing, and automates invoicing for corporate events."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it manage staff shifts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it streamlines scheduling, collects availability, and manages shift swaps automatically with SMS confirmations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does it improve reviews?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It sends perfectly timed post-visit review requests, filtering for sentiment and directing happy guests to top review sites."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Automate Hospitality Operations",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Enquiry Received",
                  "text": "Guest makes a booking request."
                },
                {
                  "@type": "HowToStep",
                  "name": "AI Confirms",
                  "text": "Availability checked and booking confirmed instantly."
                },
                {
                  "@type": "HowToStep",
                  "name": "Payment Collected",
                  "text": "Deposits are secured automatically."
                },
                {
                  "@type": "HowToStep",
                  "name": "Review Requested",
                  "text": "Post-visit follow-up triggers feedback collection."
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
