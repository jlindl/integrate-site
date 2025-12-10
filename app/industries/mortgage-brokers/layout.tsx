import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Mortgage Brokers | Integrate",
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
};

export default function MortgageBrokersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
