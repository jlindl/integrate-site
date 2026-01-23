import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Credit & Lending Firms | Integrate",
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
  return children;
}
