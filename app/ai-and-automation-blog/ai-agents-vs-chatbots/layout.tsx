import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Agents vs. Traditional Chatbots: What's the Difference?",
    description: "Why goal-oriented agents are replacing script-based bots in modern enterprise workflows.",
    keywords: [
        "AI agents",
        "chatbots",
        "conversational AI",
        "enterprise automation",
        "AI vs chatbots",
        "intelligent agents",
    ],
    alternates: {
        canonical: "https://www.integrate-tech.co.uk/ai-and-automation-blog/ai-agents-vs-chatbots",
    },
    openGraph: {
        title: "AI Agents vs. Traditional Chatbots: What's the Difference? | Integrate",
        description: "Why goal-oriented agents are replacing script-based bots in modern enterprise workflows.",
        url: "https://www.integrate-tech.co.uk/ai-and-automation-blog/ai-agents-vs-chatbots",
        siteName: "Integrate",
        locale: "en_GB",
        type: "article",
        publishedTime: "2026-01-23T00:00:00.000Z",
        authors: ["Integrate Team"],
        images: [
            {
                url: "https://www.integrate-tech.co.uk/images/blog/ai-agents-vs-chatbots.png",
                width: 1200,
                height: 630,
                alt: "AI Agents vs Traditional Chatbots",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Agents vs. Traditional Chatbots: What's the Difference?",
        description: "Why goal-oriented agents are replacing script-based bots in modern enterprise workflows.",
        images: ["https://www.integrate-tech.co.uk/images/blog/ai-agents-vs-chatbots.png"],
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
                        "headline": "AI Agents vs. Traditional Chatbots: What's the Difference?",
                        "description": "Why goal-oriented agents are replacing script-based bots in modern enterprise workflows.",
                        "image": "https://www.integrate-tech.co.uk/images/blog/ai-agents-vs-chatbots.png",
                        "datePublished": "2026-01-23T00:00:00.000Z",
                        "dateModified": "2026-01-23T00:00:00.000Z",
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
                            "@id": "https://www.integrate-tech.co.uk/ai-and-automation-blog/ai-agents-vs-chatbots",
                        },
                        "keywords": ["AI agents", "chatbots", "conversational AI", "enterprise automation"],
                        "inLanguage": "en-GB",
                    }),
                }}
            />
        </>
    );
}
