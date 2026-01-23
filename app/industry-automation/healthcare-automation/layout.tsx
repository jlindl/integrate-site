import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Clinics & Private Healthcare | Integrate",
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
  return children;
}
