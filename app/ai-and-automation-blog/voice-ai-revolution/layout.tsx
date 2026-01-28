import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Voice Revolution: AI Receptionists for 24/7 Service",
    description: "The shift from call centers to intelligent voice agents. Handle bookings, support, and triage 24/7 with human-like AI voice assistants.",
    keywords: [
        "AI voice agents",
        "voice automation",
        "AI receptionist",
        "call center automation",
        "voice AI",
        "24/7 customer support",
    ],
    alternates: {
        canonical: "https://www.integrate-tech.co.uk/ai-and-automation-blog/voice-ai-revolution",
    },
    openGraph: {
        title: "The Voice Revolution: AI Receptionists for 24/7 Service | Integrate",
        description: "Your customers expect instant answers 24/7. Discover how AI voice agents are replacing traditional call centers.",
        url: "https://www.integrate-tech.co.uk/ai-and-automation-blog/voice-ai-revolution",
        siteName: "Integrate",
        locale: "en_GB",
        type: "article",
        publishedTime: "2026-01-28T00:00:00.000Z",
        authors: ["Integrate Team"],
        images: [
            {
                url: "https://www.integrate-tech.co.uk/images/blog/voice-ai-revolution.png",
                width: 1200,
                height: 630,
                alt: "Abstract Voice AI Visualization",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "The Voice Revolution: AI Receptionists for 24/7 Service",
        description: "Your customers expect instant answers 24/7. Discover how AI voice agents are replacing traditional call centers.",
        images: ["https://www.integrate-tech.co.uk/images/blog/voice-ai-revolution.png"],
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
                        "headline": "The Voice Revolution: AI Receptionists for 24/7 Service",
                        "description": "The shift from call centers to intelligent voice agents. Handle bookings, support, and triage 24/7.",
                        "image": "https://www.integrate-tech.co.uk/images/blog/voice-ai-revolution.png",
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
                            "@id": "https://www.integrate-tech.co.uk/ai-and-automation-blog/voice-ai-revolution",
                        },
                        "keywords": ["AI voice agents", "AI receptionist", "call center automation"],
                        "inLanguage": "en-GB",
                    }),
                }}
            />
        </>
    );
}
