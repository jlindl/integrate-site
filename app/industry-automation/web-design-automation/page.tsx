"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "../../components/Header";
import BlogCTA from "../../components/BlogCTA";
import SmartBreadcrumb from "@/app/components/SmartBreadcrumb";
import RelatedIndustries from "@/app/components/RelatedIndustries";

export default function WebDesignAutomationPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6">
                            <SmartBreadcrumb
                                parent={{ label: "Industries", href: "/industry-automation" }}
                                current="Web Design Agencies"
                            />
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold tracking-wide uppercase border border-gray-200 mb-6">
                            Industry Solution
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                            Automate Your <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-500 to-gray-300 animate-shine bg-[length:200%_auto]">
                                Web Design Agency
                            </span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-lg">
                            Stop chasing clients for assets. Automate onboarding, feedback loops, and project handoffs so you can focus on design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/#contact-form"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-8 py-4 text-sm font-semibold hover:bg-gray-800 transition-all"
                            >
                                Book a Strategy Call
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                    >
                        <img
                            src="/images/industries/web-design-automation.png"
                            alt="Web Design Automation"
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Asset Collection",
                                desc: "Automatically chase clients for logos, copy, and images with gentle, escalating reminders.",
                            },
                            {
                                title: "Client Onboarding",
                                desc: "Send contracts, invoices, and welcome packets instantly when a proposal is accepted.",
                            },
                            {
                                title: "Feedback Loops",
                                desc: "Centralize design feedback and alert your team only when actionable input arrives.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <CheckCircle2 className="w-8 h-8 text-black mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6">
                <BlogCTA />
            </section>
            <RelatedIndustries currentPath="/industry-automation/web-design-automation" />
        </div>
    );
}
