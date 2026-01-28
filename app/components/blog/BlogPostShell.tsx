"use client";

import { motion } from "framer-motion";
import Header from "../Header";
import BlogCTA from "../BlogCTA";
import Image from "next/image";
import { ReactNode } from "react";

interface BlogPostShellProps {
    category: string;
    date: string;
    readTime: string;
    title: ReactNode;
    image: string;
    imageAlt: string;
    children: ReactNode;
}

export default function BlogPostShell({
    category,
    date,
    readTime,
    title,
    image,
    imageAlt,
    children
}: BlogPostShellProps) {
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
                                {category}
                            </span>
                            <span className="text-gray-300">•</span>
                            <time className="text-sm font-medium text-gray-500">{date}</time>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                            {title}
                        </h1>

                        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-12">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200" />
                                <span className="font-medium text-gray-900">Integrate Team</span>
                            </div>
                            <span>•</span>
                            <span>{readTime}</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={1200}
                        height={600}
                        priority
                        className="w-full h-auto object-cover hover:scale-105 transition-all duration-700"
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
                    {children}
                </motion.div>

                <BlogCTA />
            </article>
        </div>
    );
}
