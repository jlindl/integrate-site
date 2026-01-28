import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Design Agency Project Management & Client Onboarding Automation | Integrate",
    description: "Automate client asset collection, onboarding, and feedback loops. Streamline your web design agency operations.",
    keywords: [
        "web design automation",
        "agency automation",
        "client onboarding automation",
        "design feedback tool",
        "automated asset collection",
        "web design agency software"
    ],
    openGraph: {
        title: "Web Design Agency Automation | Integrate",
        description: "Automate client asset collection, onboarding, and feedback loops. Streamline your web design agency operations.",
        type: "website",
    },
    alternates: {
        canonical: "https://www.integrate-tech.co.uk/industry-automation/web-design-automation",
    },
};

export default function WebDesignAutomationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Web Design Hub Automation",
                            "provider": {
                                "@type": "Organization",
                                "name": "Integrate",
                            },
                            "description": "Automated asset collection, client onboarding, and centralized feedback loops for web design agencies.",
                            "areaServed": "UK",
                            "audience": "Web Design Agencies",
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How does asset collection automation work?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "It automatically chases clients for required assets like logos, copy, and images using gentle, escalating reminders until everything is received."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can it automate client onboarding?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, once a proposal is accepted, the system instantly sends contracts, invoices, and welcome packets to start the project smoothly."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How does it handle design feedback?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "It centralizes all design feedback into one channel and only alerts your design team when actionable input has been provided."
                                    }
                                }
                            ]
                        }
                    ]),
                }}
            />
            {children}
        </>
    );
}
