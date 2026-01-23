import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lead Qualification for Estate Agents (Book More Viewings) | Integrate",
  description:
    "Automate viewing bookings, vendor enquiries, WhatsApp follow-ups, and contract collection for your estate agency. Respond to leads in under 2 minutes. UK-based support.",
  keywords: [
    "AI automation for estate agents",
    "letting agent automation",
    "automated viewing bookings",
    "estate agent software UK",
    "property lead automation",
    "WhatsApp automation estate agents",
    "vendor enquiry automation",
    "letting agent software",
    "property CRM automation",
    "estate agency automation",
    "automated property viewings",
    "Rightmove lead automation",
    "Zoopla integration",
    "contract collection automation",
    "property sales progression",
  ],
  openGraph: {
    title: "AI Automation for Estate & Letting Agents | Integrate",
    description:
      "Automate viewing bookings, vendor enquiries, WhatsApp follow-ups, and contract collection. Respond to property leads in under 2 minutes.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Estate & Letting Agents | Integrate",
    description:
      "Automate viewing bookings, vendor enquiries, WhatsApp follow-ups, and contract collection. Respond to property leads in under 2 minutes.",
  },
  alternates: {
    canonical: "https://integrate.co.uk/industry-automation/real-estate-automation",
  },
};

export default function EstateAgentsLayout({
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
              "name": "Real Estate Automation",
              "provider": {
                "@type": "Organization",
                "name": "Integrate",
              },
              "description": "Automated viewing bookings, vendor enquiries, WhatsApp follow-ups, and contract collection.",
              "areaServed": "UK",
              "audience": "Estate & Letting Agents",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does automated viewing booking work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Buyers and tenants can book viewings 24/7 through a self-service portal. The system automatically syncs with agent calendars, optimizes for travel time between appointments, and sends reminders and confirmations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it handle vendor enquiries?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it captures and qualifies vendor instructions and landlord enquiries instantly, including automated valuation bookings and follow-up sequences."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it integrate with Rightmove and Zoopla?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it integrates with major portals to convert portal leads into registered applicants automatically."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast is the response time?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The automated system responds to every enquiry in under 2 minutes, 24/7, ensuring no lead is lost due to delays."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Automate Estate Agency Workflows",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Enquiry Captured",
                  "text": "Lead arrives from Rightmove, Zoopla, website, or phone."
                },
                {
                  "@type": "HowToStep",
                  "name": "Instant Response",
                  "text": "Automated reply is sent within seconds containing property details and a booking link."
                },
                {
                  "@type": "HowToStep",
                  "name": "Viewing Booked",
                  "text": "Applicant self-books a viewing slot that suits everyone, synced with agent availability."
                },
                {
                  "@type": "HowToStep",
                  "name": "Follow-Up & Convert",
                  "text": "Post-viewing feedback is automatically collected and the offer process is initiated."
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
