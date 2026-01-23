"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";

export default function BlogListing() {
  const posts = [
    {
      slug: "future-of-ai-automation-2026",
      title: "The Future of AI Automation: Key Trends for 2026",
      excerpt: "Discover how autonomous agents, generative models, and hyper-automation are reshaping industries in the coming year.",
      date: "October 24, 2025",
      readTime: "5 min read",
      category: "Strategy",
      image: "/images/blog/future-of-ai-automation-2026.png",
    },
    {
      slug: "ai-agents-vs-chatbots",
      title: "AI Agents vs. Traditional Chatbots: What's the Difference?",
      excerpt: "Why goal-oriented agents are replacing script-based bots in modern enterprise workflows.",
      date: "January 23, 2026",
      readTime: "6 min read",
      category: "Strategy",
      image: "/images/blog/ai-agents-vs-chatbots.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-3xl mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-semibold tracking-wide mb-6 border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                INSIGHTS
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Thinking on <span className="text-gray-400">AI</span> & <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-500 to-gray-300">
                  Future Workflows.
                </span>
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                Deep dives into autonomous agents, process orchestration, and the technology shaping the next decade of business.
              </p>
            </motion.div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500"
              >
                <Link href={`/ai-and-automation-blog/${post.slug}`} className="block relative aspect-video overflow-hidden bg-gray-100">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <span className="text-sm">No Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </Link>

                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-gray-900 mb-4 uppercase">
                    {post.category}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-black transition-colors">
                    <Link href={`/ai-and-automation-blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3 text-sm grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/ai-and-automation-blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:translate-x-1 transition-transform"
                    >
                      Read Now <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
