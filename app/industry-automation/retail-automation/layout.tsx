import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce AI Customer Service & Support Automation | Integrate",
  description:
    "Automate AI live chat, support deflection, abandoned cart recovery, and upsell flows for your online store. Reduce support costs by 70%. UK-based support.",
  keywords: [
    "AI automation for ecommerce",
    "ecommerce chatbot",
    "abandoned cart recovery",
    "AI live chat ecommerce",
    "support ticket automation",
    "Shopify automation",
    "WooCommerce automation",
    "ecommerce customer support AI",
    "order status automation",
    "upsell automation ecommerce",
    "retail AI assistant",
    "ecommerce email automation",
    "cart abandonment software",
    "AI receptionist online store",
    "ecommerce support deflection",
  ],
  openGraph: {
    title: "AI Automation for Ecommerce & Retail | Integrate",
    description:
      "Automate AI live chat, support deflection, abandoned cart recovery, and upsell flows. Reduce support costs by 70% with your AI receptionist.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Ecommerce & Retail | Integrate",
    description:
      "Automate AI live chat, support deflection, abandoned cart recovery, and upsell flows. Reduce support costs by 70% with your AI receptionist.",
  },
  alternates: {
    canonical: "https://www.integrate-tech.co.uk/industry-automation/retail-automation",
  },
};

export default function EcommerceRetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
