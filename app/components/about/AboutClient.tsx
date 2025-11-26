"use client";

import { motion } from "framer-motion";
import { Bot, PhoneCall, Workflow, Database, Rocket, Globe, Boxes, Zap } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`w-full py-20 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-600/0 via-blue-500/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-blue-500/5 group-hover:to-blue-600/5 transition-colors" />
      <div className="relative z-10 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="relative z-10 mt-3 text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

export default function AboutClient() {
  return (
    <div className="relative">
      {/* Hero with electric blue background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute top-52 right-6 h-56 w-56 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      {/* Hero */}
      <Section className="pt-16 md:pt-24 pb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="text-center max-w-3xl mx-auto">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/50 px-3.5 py-1.5 text-xs font-medium text-blue-700 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Integrate — AI-Powered Automation Agency</span>
          </motion.div>
          <motion.h1 variants={item} className="mt-6 text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] leading-[1.1] font-semibold tracking-tight text-gray-900">
            We Build Automated Systems That Scale Your Business.
          </motion.h1>
          <motion.p variants={item} className="mt-5 text-base md:text-lg text-gray-600">
            We design, build, and operate intelligent automations that answer calls, qualify leads, and run your workflows—so your team can focus on revenue, not repetitive tasks.
          </motion.p>
        </motion.div>
      </Section>

      {/* Mission */}
      <Section className="py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div variants={item} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Build ultra-reliable AI systems that compress response times, reduce operational costs, and convert more of your pipeline—without adding headcount.
            </p>
          </motion.div>
          <motion.ul variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Efficiency", "Conversion rate increase", "Cost reduction", "Intelligent AI execution"].map((b) => (
              <li key={b} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                    <Zap size={16} />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{b}</span>
                </div>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      {/* Our Story */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 via-transparent to-blue-600/10" />
          <motion.h3 variants={item} className="relative z-10 text-2xl font-semibold text-gray-900">Our Story</motion.h3>
          <motion.p variants={item} className="relative z-10 mt-4 text-gray-700 leading-relaxed">
            We combine automation, AI, and systems engineering to replace repetitive manual work with reliable, scalable processes. Founded by specialists in AI, software engineering, and B2B operations, Integrate builds automation that feels like a natural extension of your team—always on, always consistent, always improving.
          </motion.p>
        </motion.div>
      </Section>

      {/* What We Build */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={container}>
          <motion.h3 variants={item} className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">What We Build</motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card icon={<PhoneCall size={18} />} title="AI Voice Agents" desc="AI receptionists that answer calls, qualify prospects, and route intelligently—24/7." />
            <Card icon={<Bot size={18} />} title="Automated Sales Pipelines" desc="Outbound sequences across voice, email and SMS with CRM-sync and rules." />
            <Card icon={<Globe size={18} />} title="Lead Generation Engines" desc="Data collection, enrichment, and outreach to keep your pipeline full." />
            <Card icon={<Database size={18} />} title="CRM Integrations" desc="Two-way CRM automations for clean, actionable data across your stack." />
            <Card icon={<Workflow size={18} />} title="Web Automation Scripts" desc="Scraping, monitoring and task automation with robust error handling." />
            <Card icon={<Boxes size={18} />} title="Custom Web Apps" desc="Purpose-built tools to orchestrate your automations and workflows." />
          </div>
        </motion.div>
      </Section>

      {/* Workflow Philosophy */}
      <Section>
        <div className="rounded-3xl border border-blue-200/60 bg-blue-50/50 p-6 md:p-8 overflow-hidden relative">
          <div className="pointer-events-none absolute -top-20 -left-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-semibold text-gray-900 mb-5">
            Workflow Philosophy
          </motion.h3>
          <div className="relative h-20 md:h-24 overflow-hidden rounded-xl border border-blue-200 bg-white">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, -300, 0] }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="absolute inset-0 flex items-center gap-3 md:gap-4 px-4 text-sm font-medium"
            >
              {[
                "Discovery",
                "→",
                "Strategy",
                "→",
                "Build",
                "→",
                "Test",
                "→",
                "Deploy",
                "→",
                "Optimise",
              ].map((s, i) => (
                <div
                  key={`${s}-${i}`}
                  className={`px-4 py-2 rounded-full border ${s === "→" ? "border-transparent" : "border-blue-200"} bg-white shadow-sm text-gray-800`}
                >
                  {s}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Why Companies Choose Us */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
          <motion.h3 variants={item} className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Why Companies Choose Us</motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {["Faster response times", "24/7 AI reliability", "Lower operational costs", "Consistent sales processes", "Full customisation", "Enterprise-grade data handling"].map((b) => (
              <motion.div
                key={b}
                variants={item}
                className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl ring-1 ring-blue-500/0 group-hover:ring-blue-500/20" />
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-blue-600/0" />
                <div className="relative z-10 flex items-center gap-3 text-gray-800">
                  <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                    <Rocket size={16} />
                  </div>
                  <span className="text-sm font-medium">{b}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Team */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
          <motion.h3 variants={item} className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Built by a small team obsessed with automation</motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div key={i} variants={item} className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 rounded-2xl bg-linear-to-br from-gray-200 to-gray-100 border border-gray-200 shadow-sm" />
                <div className="h-3 w-20 rounded-full bg-gray-200" />
                <div className="h-3 w-16 rounded-full bg-gray-200" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section className="pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center rounded-3xl border border-gray-200 bg-white p-10 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-blue-600/10" />
          <h3 className="relative z-10 text-2xl md:text-3xl font-semibold text-gray-900">Ready to automate key parts of your business?</h3>
          <p className="relative z-10 mt-3 text-gray-600">Book a free automation audit and we’ll map out ROI-driven use cases for your team.</p>
          <div className="relative z-10 mt-6">
            <a href="/#contact-form" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white text-sm font-medium shadow-md hover:shadow-xl hover:bg-gray-900 transition-all">
              Book a Free Automation Audit
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
