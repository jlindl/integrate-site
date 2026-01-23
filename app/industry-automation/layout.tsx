import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industry Specific AI Automation Solutions | Integrate",
    description:
        "Tailored AI automation workflows for Lending, Financial Services, Real Estate, Law, Recruitment, and more. See how we automate your specific sector.",
    openGraph: {
        title: "Industry Specific AI Automation Solutions | Integrate",
        description:
            "Tailored AI automation workflows for Lending, Financial Services, Real Estate, Law, Recruitment, and more.",
        type: "website",
        url: "https://integrate-tech.co.uk/industry-automation",
    },
};

export default function IndustryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Industry Specific Automation Solutions",
                        "description": "Collection of AI automation solutions tailored for specific industries including Lending, Finance, Real Estate, and more.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Integrate",
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}
