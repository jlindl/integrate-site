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
                            <time className="text-sm font-medium text-gray-500">Jan 23, 2026</time>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                            AI Agents vs. <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-700 via-gray-400 to-gray-100 animate-shine bg-[length:200%_auto]">
                                Traditional Chatbots
                            </span>
                        </h1>

                        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-12">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200" />
                                <span className="font-medium text-gray-900">Integrate Team</span>
                            </div>
                            <span>•</span>
                            <span>6 min read</span>
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
                        src="/images/blog/ai-agents-vs-chatbots.png"
                        alt="AI Agents vs Chatbots"
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
                        The difference between a <span className="text-black font-semibold">Chatbot</span> and an <span className="text-black font-semibold">AI Agent</span> is the difference between a flowchart and an employee. One follows a script; the other pursues a goal.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">The Limitations of "If-This-Then-That"</h2>
                    <p className="leading-relaxed">
                        Traditional chatbots are rigid. They rely on decision trees. If a customer asks a question that isn't pre-programmed, the bot fails—often frustratingly. They can collect data, but they cannot act on it without human intervention.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">Enter Autonomous Agents</h2>
                    <p className="leading-relaxed">
                        AI Agents allow for non-linear workflows. They can access tools, query databases, browse the web, and reason through problems. Instead of needing a specific trigger to perform an action, they can be given an objective—"Book a meeting with this lead if they are qualified"—and figure out the steps to achieve it.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">Collaborative Intelligence</h2>
                    <p className="leading-relaxed">
                        The real power emerges when agents work together. A "Researcher" agent can find prospects, a "Copywriter" agent can draft emails, and a "Manager" agent can review the output before sending. This swarm intelligence creates a workforce that runs 24/7 without burnout.
                    </p>

                    <hr className="my-16" />
                </motion.div>

                <BlogCTA />
            </article>
        </div>
    );
}
