"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface SmartBreadcrumbProps {
    parent: {
        label: string;
        href: string;
    };
    current: string;
}

export default function SmartBreadcrumb({ parent, current }: SmartBreadcrumbProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://integrate-tech.co.uk"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": parent.label,
                "item": `https://integrate-tech.co.uk${parent.href}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": current
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-sm text-gray-500 mb-6"
            >
                <Link href={parent.href} className="hover:text-gray-900 transition-colors">
                    {parent.label}
                </Link>
                <span className="opacity-50">/</span>
                <span className="text-gray-900 font-medium">{current}</span>
            </motion.div>
        </>
    );
}
