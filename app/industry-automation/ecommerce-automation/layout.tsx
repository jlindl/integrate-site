import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ecommerce Inventory Automation & AI Customer Support Software | Integrate",
    description: "Scale your ecommerce brand with AI. Automate inventory alerts, customer support tickets, and order tracking notifications.",
    keywords: [
        "ecommerce automation",
        "inventory management automation",
        "ecommerce AI support",
        "order tracking automation",
        "Shopify automation",
        "WooCommerce automation"
    ],
    openGraph: {
        title: "Ecommerce Automation Solutions | Integrate",
        description: "Scale your ecommerce brand with AI. Automate inventory alerts, customer support tickets, and order tracking notifications.",
        type: "website",
    },
};

export default function EcommerceAutomationLayout({
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
                            "name": "Ecommerce Automation",
                            "provider": {
                                "@type": "Organization",
                                "name": "Integrate",
                            },
                            "description": "Automated inventory management, customer support, and order tracking for ecommerce brands.",
                            "areaServed": "UK",
                            "audience": "Ecommerce Brands",
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How does inventory automation work?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "The system monitors stock levels in real-time and sends low-stock alerts or automatically reorders best-sellers to prevent stockouts."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can AI handle customer support tickets?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, our AI agents can resolve up to 60% of common tickets automatically, handling returns, status checks, and FAQs without human intervention."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Does it improve order tracking?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "It keeps customers informed with proactive notifications about shipping delays and updates, significantly reducing anxiety and support queries."
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
