"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface RelatedIndustriesProps {
    currentPath: string;
}

const allIndustries = [
    { name: "Real Estate", href: "/industry-automation/real-estate-automation" },
    { name: "Recruitment", href: "/industry-automation/recruitment-automation" },
    { name: "Legal", href: "/industry-automation/legal-automation" },
    { name: "Construction", href: "/industry-automation/construction-automation" },
    { name: "Finance", href: "/industry-automation/financial-automation" },
    { name: "Healthcare", href: "/industry-automation/healthcare-automation" },
];

export default function RelatedIndustries({ currentPath }: RelatedIndustriesProps) {
    // Filter out the current page
    const related = allIndustries.filter(ind => !currentPath.includes(ind.href)).slice(0, 4);

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <h3 className="text-2xl font-bold text-gray-900">Explore Other Industries</h3>
                    <Link href="/industry-automation" className="text-sm font-medium text-gray-600 hover:text-black flex items-center gap-1 transition-colors">
                        View all sectors <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {related.map((industry, index) => (
                        <motion.div
                            key={industry.href}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={industry.href}
                                className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-black hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-gray-900 group-hover:text-black">{industry.name}</span>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
