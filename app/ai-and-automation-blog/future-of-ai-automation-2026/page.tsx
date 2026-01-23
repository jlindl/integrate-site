"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
                                Strategy
                            </span>
                            <span className="text-gray-300">•</span>
                            <time className="text-sm font-medium text-gray-500">Oct 24, 2025</time>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                            The Future of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-700 via-gray-400 to-gray-100 animate-shine bg-[length:200%_auto]">
                                AI Automation
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
                        src="/images/blog/future-of-ai-automation-2026.png"
                        alt="Abstract AI Automation"
                        className="w-full h-auto object-cover max-h-[600px] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
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
                        As we approach 2026, the convergence of generative AI and traditional workflow automation is creating a new paradigm: <span className="text-black font-semibold">Agentic Automation</span>. It’s no longer just about connecting APIs; it’s about intelligent decision-making at scale.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">1. From Chatbots to Agents</h2>
                    <p className="leading-relaxed">
                        The era of simple "if-this-then-that" logic is fading. The improved reasoning capabilities of models like Gemini and GPT-5 are enabling autonomous agents that can plan, execute, and verify complex tasks with minimal human oversight. Businesses are shifting from static workflows to dynamic, goal-oriented agent swarms.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">2. Hyper-Personalization at Scale</h2>
                    <p className="leading-relaxed">
                        Marketing automation is getting a brain transplant. Instead of segmenting users into broad buckets, AI analyses individual behavior in real-time to generate unique copy, images, and offers for every single interaction. This level of granularity was impossible—or at least prohibitively expensive—until now.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">3. The Rise of "Invisible" Interfaces</h2>
                    <p className="leading-relaxed">
                        As automation becomes more sophisticated, the need for complex dashboards decreases. We are moving towards "invisible" interfaces where users simply state their intent in natural language, and the system handles the nitty-gritty configuration in the background.
                    </p>

                    <hr className="my-16" />
                </motion.div>

                <BlogCTA />
            </article>
        </div>
    );
}
