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
                                Voice AI
                            </span>
                            <span className="text-gray-300">•</span>
                            <time className="text-sm font-medium text-gray-500">Jan 28, 2026</time>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                            The Voice Revolution: <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-400 to-yellow-500 animate-shine bg-[length:200%_auto]">
                                AI Receptionists
                            </span>
                        </h1>

                        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-12">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200" />
                                <span className="font-medium text-gray-900">Integrate Team</span>
                            </div>
                            <span>•</span>
                            <span>4 min read</span>
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
                        src="/images/blog/voice-ai-revolution.png"
                        alt="Abstract Voice AI Visualization"
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
                        We've all been there: waiting on hold for 20 minutes just to ask a simple question. It's frustrating for customers and expensive for businesses. But the <span className="text-black font-semibold">Voice AI Revolution</span> is changing everything.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">Beyond "Press 1 for Sales"</h2>
                    <p className="leading-relaxed">
                        Old IVR systems were clunky mazes. Modern AI voice agents are conversational. They understand natural language, interruptions, and context. You can talk to them just like a human. They can check your calendar, book appointments, answer complex FAQs, and even qualify leads—all in real-time, 24/7.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">Zero Missed Calls</h2>
                    <p className="leading-relaxed">
                        For service businesses like clinics, law firms, and real estate agencies, a missed call is a missed opportunity. AI receptionists ensure 100% of calls are answered instantly, even at 3 AM. They can handle infinite concurrent calls, scaling up instantly during peak times without hiring a single extra staff member.
                    </p>

                    <h2 className="text-3xl text-gray-900 mt-16 mb-6">Integration is Key</h2>
                    <p className="leading-relaxed">
                        The magic happens when the voice agent connects to your CRM. It doesn't just take a message; it updates the client record, triggers a follow-up email, and notifies your team via Slack. It turns a phone call into a fully automated workflow.
                    </p>

                    <hr className="my-16" />
                </motion.div>

                <BlogCTA />
            </article>
        </div>
    );
}
