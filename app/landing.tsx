"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CallFlow from "./callflow";
import OutboundFlow from "./outboundflow";
import MultiChannel from "./multichannel";

export default function Landing() {
  const [activeTab, setActiveTab] = useState("inbound");

  const tabs = [
    { id: "inbound", label: "Inbound Call Flow" },
    { id: "outbound", label: "Outbound Dialler" },
    { id: "multichannel", label: "Multi-Channel Routing" },
  ];

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
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span>AI reception & sales automation for B2B companies</span>
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
            Integrate answers calls, qualifies prospects, and handles outreach automatically —
            so your team can focus on closing deals, not chasing them.
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
            <motion.button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full border border-gray-200 text-sm font-medium text-gray-800 hover:border-gray-300 hover:bg-gray-50 bg-white transition-all duration-200 shadow-sm hover:shadow-lg"
            >
              Watch a 2-minute demo
            </motion.button>
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
                Construction Firms
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                Cleaning Contractors
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                IT Providers
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                Accountancy firms
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, color: "#111827" }}
                className="opacity-80 cursor-default"
              >
                Estate Agents
              </motion.span>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE — Animations + Toggle */}
<motion.div 
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
  className="relative flex flex-col w-full"
>

  {/* Toggle Bar */}
  <div className="flex gap-2 mb-8 p-2 bg-white backdrop-blur-2xl rounded-2xl border border-gray-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
    {tabs.map((tab, index) => (
      <motion.button
        key={tab.id}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
        onClick={() => setActiveTab(tab.id)}
        whileHover={{ scale: activeTab === tab.id ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`flex-1 text-center py-3 px-3 text-sm font-medium transition-all duration-300 relative rounded-xl
          ${activeTab === tab.id 
            ? "text-gray-900 shadow-lg" 
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
          }`}
      >
        {/* Active background */}
        {activeTab === tab.id && (
          <motion.div 
            layoutId="activeTabBg"
            className="absolute inset-0 bg-white backdrop-blur-lg rounded-xl border border-gray-300/50 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        
        <span className="relative z-10">{tab.label}</span>
      </motion.button>
    ))}
  </div>

  {/* Fixed-height container so the page does not shift */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.6 }}
    className="relative h-[520px] rounded-2xl bg-white border-2 border-gray-200 shadow-lg overflow-hidden"
  >
    <motion.div 
      key={activeTab}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400 p-6"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#D1D5DB #F3F4F6'
      }}
    >
      {activeTab === "inbound" && <CallFlow />}
      {activeTab === "outbound" && <OutboundFlow />}
      {activeTab === "multichannel" && <MultiChannel />}
    </motion.div>
    
    {/* Subtle gradient fade at bottom to indicate more content */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white via-white/90 to-transparent pointer-events-none" />
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
