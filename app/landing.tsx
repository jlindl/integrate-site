"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const [activeTab, setActiveTab] = useState("leads");

  const tabs = [
    { id: "leads", label: "Leadgeneration" },
    { id: "automation", label: "Process automation" },
    { id: "voice", label: "Voice agents" },
  ];

  const content = {
    leads: {
      title: "Lead Generation",
      description: "Stop chasing. Start closing. We build systems that scrape, enrich, and contact 10,000+ prospects monthly - filling your calendar while you sleep.",
      features: ["Data Scraping & Enrichment", "AI Personalization", "Automated Follow-ups"],
      image: "/assets/lead_gen_hero.png"
    },
    automation: {
      title: "Process Automation",
      description: "Eliminate busywork forever. From invoicing to CRM updates, we replace manual admin with intelligent, error-free workflows that scale infinitely.",
      features: ["CRM Syncing", "Document Processing", "Financial Reporting"],
      image: "/assets/process_auto_hero.png"
    },
    voice: {
      title: "Voice Agents",
      description: "A 24/7 receptionist that never sleeps. Our AI agents handle thousands of simultaneous calls, qualify leads, and book meetings in real-time.",
      features: ["Inbound & Outbound", "Natural Conversations", "Instant Scheduling"],
      image: "/assets/voice_agents_hero_v2.png"
    }
  };

  const partners = [
    "Lead Generation",
    "Sales Calls",
    "Customer Support",
    "Email Automation",
    "SMS Outreach",
    "Calendar Booking",
    "CRM Integration",
    "Data Enrichment",
    "Analytics & Reporting",
    "Follow-up Sequences",
    "Custom Workflows",
    "Whatsapp Outreach",
    "Feedback Gathering",
    "Appointment Reminders",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Header is now rendered in the homepage (app/page.tsx) */}

      {/* HERO SECTION */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-28 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
              }
            }
          }}
          className="space-y-8"
        >

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 25%, #d4d4d4 50%, #f0f0f0 75%, #e0e0e0 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.6)'
            }}
          >
            {/* Metallic shine overlay */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            <span className="relative text-gray-700">UK&apos;s #1 AI Automation Agency: Make.com & n8n Experts</span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] leading-[1.1] font-semibold tracking-tight text-gray-900"
          >
            Your business never <br className="hidden sm:block" /> misses a lead again.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed"
          >
            Integrate answers calls, qualifies prospects, and handles outreach automatically,
            so your team can focus on closing deals instead of chasing them.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <motion.button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors duration-200 shadow-md hover:shadow-xl"
            >
              Claim your free automation audit
            </motion.button>
            <motion.a
              href="/resources"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full border border-gray-200 text-sm font-medium text-gray-800 hover:border-gray-300 hover:bg-gray-50 bg-white transition-all duration-200 shadow-sm hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Resources
            </motion.a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="pt-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-4">
              Trusted by modern, lean B2B teams
            </p>

            <div className="grid grid-cols-3 gap-x-8 gap-y-3 text-xs sm:text-sm font-medium text-gray-600">
              <motion.span
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                Insurance Services
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                Recruitment
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                Web Designers
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                Ecommerce
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                Coaches
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                Consultants
              </motion.span>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE - Animations + Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative flex flex-col w-full"
        >

          {/* Toggle Bar */}
          <div className="flex gap-2 mb-8 p-1.5 bg-white/50 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-sm">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: activeTab === tab.id ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 text-center py-2.5 px-2 text-xs md:text-sm font-medium transition-all duration-300 relative rounded-xl
          ${activeTab === tab.id
                    ? "text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-800 hover:bg-white/50"
                  }`}
              >
                {/* Active background */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-white rounded-xl border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Fixed-height container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative h-[480px] rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden group"
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${content[activeTab as keyof typeof content].image})` }}
              />

              {/* Minimal gradient at the bottom for readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60" />

              {/* Glassmorphism Card Overlay */}
              <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6">
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-6 md:p-8"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight flex items-center gap-3">
                        {content[activeTab as keyof typeof content].title}
                      </h3>
                      <p className="text-gray-900 font-medium text-base md:text-lg leading-relaxed">
                        {content[activeTab as keyof typeof content].description}
                      </p>
                    </div>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {content[activeTab as keyof typeof content].features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/40 border border-white/30 text-xs font-semibold text-gray-900 backdrop-blur-sm shadow-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>


      </main>

      {/* SERVICES MARQUEE */}
      <section className="w-full bg-white border-y border-gray-100 py-12 md:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium text-center mb-8"
          >
            Services we automate
          </motion.p>

          {/* Infinite scroll container */}
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden">
              <motion.div
                animate={{
                  x: [0, -50 + "%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
                className="flex gap-12 shrink-0"
              >
                {/* First set */}
                {partners.map((service, idx) => (
                  <div
                    key={`first-${idx}`}
                    className="text-2xl md:text-3xl font-semibold text-gray-400 whitespace-nowrap"
                  >
                    {service}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partners.map((service, idx) => (
                  <div
                    key={`second-${idx}`}
                    className="text-2xl md:text-3xl font-semibold text-gray-400 whitespace-nowrap"
                  >
                    {service}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
