"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Incoming call",
    desc: "A customer contacts your business.",
  },
  {
    title: "AI receptionist answers",
    desc: "Instant 24/7 call handling with your script + tone.",
  },
  {
    title: "Qualification",
    desc: "AI collects job details, location, urgency and intent.",
  },
  {
    title: "Lead delivered",
    desc: "Automatically sent to your phone, email or CRM.",
  },
];

export default function CallFlow() {
  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-6 md:p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            Inbound AI call workflow
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            The 4-step process Integrate uses to convert calls into qualified leads.
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
            {/* Step number */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700 bg-white">
                {index + 1}
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
