"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  {
    name: "Instantly",
    logo: "/logos/instantly.svg",
    role: "Cold email sending & warmup",
    scale: true,
    category: "Outreach",
  },
  {
    name: "Vapi",
    logo: "/logos/vapi.svg",
    role: "AI voice agents & call handling",
    scale: "xl",
    category: "Voice",
  },
  {
    name: "Supabase",
    logo: "/logos/supabase.svg",
    role: "Database, auth & storage",
    category: "Data",
  },
  {
    name: "Retool",
    logo: "/logos/retool.svg",
    role: "Internal tooling & control panels",
    scale: true,
    category: "Development",
  },
  {
    name: "Google Cloud",
    logo: "/logos/google.svg",
    role: "Sheets, APIs & workspace integration",
    category: "Data",
  },
  {
    name: "OpenAI",
    logo: "/logos/openai.svg",
    role: "Core LLMs for AI agents & logic",
    category: "AI",
  },
  {
    name: "2Chat",
    logo: "/logos/2chat.svg",
    role: "WhatsApp automation & inbox",
    scale: true,
    category: "Outreach",
  },
  {
    name: "n8n",
    logo: "/logos/n8n.svg",
    role: "Workflow orchestration & automation",
    scale: true,
    category: "Development",
  },
  {
    name: "ElevenLabs",
    logo: "/logos/elevenlabs.svg",
    role: "Realistic AI voices for agents",
    scale: true,
    category: "Voice",
  },
  {
    name: "Apollo.io",
    logo: "/logos/apollo.svg",
    role: "B2B contact & company data",
    category: "Data",
  },
  {
    name: "Apify",
    logo: "/logos/apify.svg",
    role: "Web scraping & data extraction",
    scale: true,
    category: "Data",
  },
  {
    name: "Snovio",
    logo: "/logos/snovio.svg",
    role: "Lead enrichment & intelligence",
    scale: "xl",
    category: "Data",
  },
];

const stats = [
  { value: "12+", label: "Integrations", subtext: "And growing" },
  { value: "99.9%", label: "Uptime", subtext: "Enterprise SLA" },
  { value: "<100ms", label: "Response time", subtext: "Lightning fast" },
  { value: "24/7", label: "Monitoring", subtext: "Always online" },
];

export default function TechStack() {
  return (
    <section className="w-full relative bg-linear-to-b from-gray-50 via-white to-gray-50 py-24 md:py-32 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex flex-col gap-6 mb-16 text-center max-w-3xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-medium text-gray-700 mx-auto shadow-sm"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Enterprise-grade technology stack</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-gray-900 tracking-tight leading-tight">
              Built with industry-leading <br className="hidden sm:block" /> automation platforms
            </h2>

            {/* Animated Line Under Header */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[3px] bg-black mt-5 rounded-full mx-auto"
            />

            <p className="text-base md:text-lg text-gray-600 mt-6 leading-relaxed">
              We don&apos;t just connect APIs. We are expert developers in Make.com, n8n, and Python.
              We build robust, enterprise-grade automations that scale with your business.
            </p>
          </motion.div>

          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mt-2">
            Certified Experts: Make.com · n8n · OpenAI · Vapi · Supabase
          </p>
        </div>

        {/* STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </motion.div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.04 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative rounded-2xl border-2 border-gray-200/80 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-gray-400 transition-all duration-300 px-6 py-5 flex items-center gap-4 cursor-default overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-50/40 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Logo */}
              <div className="relative w-16 h-16 shrink-0 rounded-xl border border-gray-200/50 bg-white overflow-hidden z-10 shadow-sm group-hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={64}
                  height={64}
                  className={`object-contain w-full h-full ${tool.scale === 'xl' ? 'p-0' : tool.scale ? 'p-0.5' : 'p-3'}`}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col z-10 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[15px] font-semibold text-gray-900 group-hover:text-black transition-colors">
                    {tool.name}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium uppercase tracking-wider group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    {tool.category}
                  </span>
                </div>
                <span className="text-[13px] text-gray-600 leading-snug">
                  {tool.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm md:text-base text-gray-600 mb-5 max-w-2xl mx-auto">
            Want to see how these tools work together in your business?
            We&apos;ll show you a custom demo with your exact use case.
          </p>
          <motion.a
            href="/#contact-form"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex px-7 py-3.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors duration-200 shadow-md hover:shadow-xl"
          >
            Schedule a technical walkthrough
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
