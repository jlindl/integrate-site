import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lead Generation on Autopilot: Scaling Outreach with AI",
    description: "How AI agents scrape data, enrich leads, and send personalized outreach at scale. Transform your sales pipeline with autonomous automation.",
    keywords: [
        "AI lead generation",
        "automation outreach",
        "sales automation",
        "lead enrichment",
        "AI sales agents",
        "B2B lead gen",
    ],
    alternates: {
        canonical: "https://www.integrate-tech.co.uk/ai-and-automation-blog/lead-generation-autopilot",
    },
    openGraph: {
        title: "Lead Generation on Autopilot: Scaling Outreach with AI | Integrate",
        description: "Start treating your lead data like an asset. Discover how AI agents scrape, enrich, and convert prospects at scale.",
        url: "https://www.integrate-tech.co.uk/ai-and-automation-blog/lead-generation-autopilot",
        siteName: "Integrate",
        locale: "en_GB",
        type: "article",
        publishedTime: "2026-01-28T00:00:00.000Z",
        authors: ["Integrate Team"],
        images: [
            {
                url: "https://www.integrate-tech.co.uk/images/blog/lead-generation-autopilot.png",
                width: 1200,
                height: 630,
                alt: "AI Lead Generation Visualization",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lead Generation on Autopilot: Scaling Outreach with AI",
        description: "Start treating your lead data like an asset. Discover how AI agents scrape, enrich, and convert prospects at scale.",
        images: ["https://www.integrate-tech.co.uk/images/blog/lead-generation-autopilot.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "Lead Generation on Autopilot: Scaling Outreach with AI",
                        "description": "How AI agents scrape data, enrich leads, and send personalized outreach at scale.",
                        "image": "https://www.integrate-tech.co.uk/images/blog/lead-generation-autopilot.png",
                        "datePublished": "2026-01-28T00:00:00.000Z",
                        "dateModified": "2026-01-28T00:00:00.000Z",
                        "author": {
                            "@type": "Organization",
                            "name": "Integrate Team",
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Integrate",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.integrate-tech.co.uk/icon.png",
                            },
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.integrate-tech.co.uk/ai-and-automation-blog/lead-generation-autopilot",
                        },
                        "keywords": ["AI lead generation", "sales automation", "outreach automation"],
                        "inLanguage": "en-GB",
                    }),
                }}
            />
        </>
    );
}
