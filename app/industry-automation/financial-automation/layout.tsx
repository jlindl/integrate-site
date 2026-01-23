import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Financial Advisors & Wealth Managers | Integrate",
  description:
    "Automate lead capture, KYC workflows, fact finders, and appointment setting for IFAs and wealth managers. FCA compliant, GDPR secure. UK-based support.",
  keywords: [
    "AI automation for financial advisors",
    "IFA lead capture",
    "wealth manager automation",
    "KYC automation",
    "digital fact finder",
    "financial advisor appointment booking",
    "FCA compliant software",
    "IFA client onboarding",
    "wealth management automation UK",
    "financial services automation",
    "investment advisor lead generation",
    "AML automation",
    "pension advisor software",
    "financial planner CRM",
    "advisor practice management",
  ],
  openGraph: {
    title: "AI Automation for Financial Advisors & Wealth Managers | Integrate",
    description:
      "Automate lead capture, KYC workflows, fact finders, and appointment setting. FCA compliant automation for IFAs and wealth managers.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Financial Advisors & Wealth Managers | Integrate",
    description:
      "Automate lead capture, KYC workflows, fact finders, and appointment setting. FCA compliant automation for IFAs and wealth managers.",
  },
  alternates: {
    canonical: "https://integrate.co.uk/industry-automation/financial-automation",
  },
};

export default function FinancialAdvisorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
