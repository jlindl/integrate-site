import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Estate & Letting Agents | Integrate",
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
    canonical: "https://apexautomations.co.uk/industry-automation/real-estate-automation",
  },
};

export default function EstateAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
