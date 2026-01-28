import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Future of AI Automation: Key Trends for 2026",
    description: "Discover how autonomous agents, generative models, and hyper-automation are reshaping industries in the coming year.",
    keywords: [
        "AI automation 2026",
        "autonomous agents",
        "generative AI",
        "hyper-automation",
        "AI trends",
        "business automation",
    ],
    alternates: {
        canonical: "https://www.integrate-tech.co.uk/ai-and-automation-blog/future-of-ai-automation-2026",
    },
    openGraph: {
        title: "The Future of AI Automation: Key Trends for 2026 | Integrate",
        description: "Discover how autonomous agents, generative models, and hyper-automation are reshaping industries in the coming year.",
        url: "https://www.integrate-tech.co.uk/ai-and-automation-blog/future-of-ai-automation-2026",
        siteName: "Integrate",
        locale: "en_GB",
        type: "article",
        publishedTime: "2025-10-24T00:00:00.000Z",
        authors: ["Integrate Team"],
        images: [
            {
                url: "https://www.integrate-tech.co.uk/images/blog/future-of-ai-automation-2026.png",
                width: 1200,
                height: 630,
                alt: "The Future of AI Automation",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "The Future of AI Automation: Key Trends for 2026",
        description: "Discover how autonomous agents, generative models, and hyper-automation are reshaping industries in the coming year.",
        images: ["https://www.integrate-tech.co.uk/images/blog/future-of-ai-automation-2026.png"],
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
                        "headline": "The Future of AI Automation: Key Trends for 2026",
                        "description": "Discover how autonomous agents, generative models, and hyper-automation are reshaping industries in the coming year.",
                        "image": "https://www.integrate-tech.co.uk/images/blog/future-of-ai-automation-2026.png",
                        "datePublished": "2025-10-24T00:00:00.000Z",
                        "dateModified": "2025-10-24T00:00:00.000Z",
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
                            "@id": "https://www.integrate-tech.co.uk/ai-and-automation-blog/future-of-ai-automation-2026",
                        },
                        "keywords": ["AI automation 2026", "autonomous agents", "generative AI", "hyper-automation"],
                        "articleBody": "As we approach 2026, the convergence of generative AI and traditional workflow automation is creating a new paradigm: Agentic Automation. It's no longer just about connecting APIs; it's about intelligent decision-making at scale.",
                        "inLanguage": "en-GB",
                    }),
                }}
            />
        </>
    );
}
