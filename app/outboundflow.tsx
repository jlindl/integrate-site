"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "➕",
    title: "Lead identified",
    desc: "Found via Google Maps, directories or your uploaded lead lists.",
  },
  {
    icon: "📤",
    title: "AI sales agent dials automatically",
    desc: "Outbound calls placed with natural, human-like speech.",
  },
  {
    icon: "💬",
    title: "AI handles the conversation",
    desc: "Explains your offer, gathers details and handles objections.",
  },
  {
    icon: "📩",
    title: "Qualified lead sent to you",
    desc: "Delivered instantly via SMS, WhatsApp, email or your CRM.",
  },
];

export default function OutboundFlow() {
  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-6 md:p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            Outbound AI sales workflow
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            How Apex automates cold outreach and qualification.
          </p>
        </div>
        <span className="hidden md:inline-flex text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-600">
          Automated
        </span>
      </div>

      {/* Vertical stacked floating steps */}
      <div className="space-y-4 relative">

        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.12 }}
            whileHover={{ y: -3 }}
            className="
              rounded-2xl border border-gray-200 bg-white/90 
              shadow-[0_10px_30px_rgba(15,23,42,0.06)] 
              px-4 py-3 md:px-5 md:py-4
              flex items-start gap-4
            "
          >
            {/* Step icon */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[13px] font-semibold text-gray-700 bg-white">
                {step.icon}
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold text-gray-900">{step.title}</p>
              <p className="text-xs md:text-[13px] text-gray-600 mt-1 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Ambient gradient */}
        <div className="pointer-events-none absolute -right-10 bottom-0 w-40 h-40 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 blur-3xl opacity-70" />
      </div>
    </div>
  );
}
