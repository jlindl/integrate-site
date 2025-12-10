import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Integrate - AI Automation Library",
  description: "Explore case studies, FAQs, automation examples, benchmark data, integration guides, and free downloadable templates to master AI automation for your business.",
  keywords: "AI automation resources, case studies, automation examples, ROI calculator, integration library, automation templates, B2B automation guides",
  openGraph: {
    title: "Resources | Integrate - AI Automation Library",
    description: "Explore case studies, FAQs, automation examples, benchmark data, integration guides, and free downloadable templates to master AI automation.",
    type: "website",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
