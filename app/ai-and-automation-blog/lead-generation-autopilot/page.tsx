"use client";

import { motion } from "framer-motion";
import Header from "../../components/Header";
import BlogCTA from "../../components/BlogCTA";

export default function BlogPost() {
    return (
        <div className="bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold tracking-wide uppercase border border-gray-200">
                                Automation
                            </span>
                            <span className="text-gray-300">•</span>
                            <time className="text-sm font-medium text-gray-500">Jan 28, 2026</time>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                            Lead Generation on <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-400 to-indigo-600 animate-shine bg-[length:200%_auto]">
                                Autopilot
                            </span>
                        </h1>

                        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-12">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200" />
                                <span className="font-medium text-gray-900">Integrate Team</span>
                            </div>
                            <span>•</span>
                            <span>5 min read</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                >
                    <img
                        src="/images/blog/lead-generation-autopilot.png"
                        alt="AI Lead Generation Visualization"
                        className="w-full h-auto object-cover max-h-[600px] hover:scale-105 transition-all duration-700"
                    />
                </motion.div>
            </div>

            <article className="max-w-3xl mx-auto px-6 pb-24">
                <motion.div
                    className="prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-black prose-a:underline prose-a:decoration-gray-400 hover:prose-a:decoration-black prose-img:rounded-2xl prose-hr:border-gray-200 text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="lead text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-12">
                        The days of manual LinkedIn scraping and copy-pasted cold emails are over. Modern sales teams are building <span className="text-black font-semibold">Autonomous Lead Engines</span> that run 24/7—scraping, enriching, and engaging prospects without human input.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">The Data Problem</h2>
                    <p className="leading-relaxed">
                        Most sales teams fail because their data is dirty. They spend 80% of their time researching who to contact and only 20% actually selling. AI reverses this equation. Clean data is the fuel for any successful campaign. By using agents to cross-reference Companies House, LinkedIn, and company websites, we can build a 360-degree view of a prospect before a human ever sees their name.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">Enrichment at Scale</h2>
                    <p className="leading-relaxed">
                        Imagine an agent that doesn't just find an email, but finds the prospect's recent podcast appearance, their company's latest funding round, and their hiring trends. It then synthesizes this into a personalized "hook" for your outreach. This isn't science fiction—it's what we're building for clients today.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">The "Invisible" Outreach</h2>
                    <p className="leading-relaxed">
                        The best automation feels human. By using LLMs to vary sentence structure, tone, and content based on the enriched data, we can send thousands of emails that look 1-to-1. No more "Dear [First Name]" templates. We're talking about hyper-personalized value props that actually convert.
                    </p>

                    <hr className="my-16" />
                </motion.div>

                <BlogCTA />
            </article>
        </div>
    );
}
