import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI & Automation Insights Blog",
    description: "Deep dives into autonomous agents, process orchestration, and the technology shaping the next decade of business.",
    keywords: [
        "AI automation blog",
        "automation insights",
        "AI agents",
        "workflow automation",
        "business automation trends",
        "AI technology",
    ],
    alternates: {
        canonical: "https://www.integrate-tech.co.uk/ai-and-automation-blog",
    },
    openGraph: {
        title: "AI & Automation Insights Blog | Integrate",
        description: "Deep dives into autonomous agents, process orchestration, and the technology shaping the next decade of business.",
        url: "https://www.integrate-tech.co.uk/ai-and-automation-blog",
        siteName: "Integrate",
        locale: "en_GB",
        type: "website",
        images: [
            {
                url: "https://www.integrate-tech.co.uk/images/blog/blog-og-image.png",
                width: 1200,
                height: 630,
                alt: "Integrate AI & Automation Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI & Automation Insights Blog | Integrate",
        description: "Deep dives into autonomous agents, process orchestration, and the technology shaping the next decade of business.",
        images: ["https://www.integrate-tech.co.uk/images/blog/blog-og-image.png"],
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

export default function BlogLayout({
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
                        "@type": "Blog",
                        "name": "Integrate AI & Automation Blog",
                        "description": "Deep dives into autonomous agents, process orchestration, and the technology shaping the next decade of business.",
                        "url": "https://www.integrate-tech.co.uk/ai-and-automation-blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Integrate",
                            "url": "https://www.integrate-tech.co.uk",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.integrate-tech.co.uk/icon.png",
                            },
                        },
                        "inLanguage": "en-GB",
                    }),
                }}
            />
        </>
    );
}
