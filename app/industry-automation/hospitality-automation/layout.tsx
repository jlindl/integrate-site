import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Hospitality & Events | Integrate",
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
    canonical: "https://apexautomations.co.uk/industry-automation/hospitality-automation",
  },
};

export default function HospitalityEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
