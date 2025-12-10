import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Integrate - AI Automation Success Stories",
  description: "Discover how UK businesses achieve 340% more leads, 30-second response times, and 60% cost reduction with AI automation. Real results from mortgage brokers, estate agents, recruitment agencies, and more.",
  keywords: "AI automation case studies, lead generation success stories, business automation ROI, UK business automation, mortgage broker automation, estate agent AI, recruitment automation, cleaning company automation",
  openGraph: {
    title: "Case Studies | Integrate - AI Automation Success Stories",
    description: "Real results from UK businesses using AI automation. 340% lead increase, 30-second response times, 60% cost reduction.",
    type: "website",
    images: [
      {
        url: "/og-case-studies.jpg",
        width: 1200,
        height: 630,
        alt: "Integrate AI Automation Case Studies"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Case Studies | Integrate",
    description: "See how UK businesses achieve 340% more leads with AI automation"
  },
  alternates: {
    canonical: "https://integrate.ai/resources/case-studies"
  }
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
