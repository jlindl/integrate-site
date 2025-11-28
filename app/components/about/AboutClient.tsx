"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Rocket,
  BarChart3,
  ShieldCheck,
  Workflow,
  Star,
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Removed unused fadeIn variant to satisfy linting

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const subtleFloat: Variants = {
  initial: { y: 0 },
  hover: {
    y: -6,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Vision statement with gradient focal */}
      <section className="relative pt-32 pb-28 md:pt-40 md:pb-36 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50 to-white" />
          <motion.div
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.28, 0.18, 0.28],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-[900px] h-[900px] bg-linear-to-br from-black/5 to-transparent rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.18, 0.28, 0.18],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="absolute -bottom-24 -left-24 w-[700px] h-[700px] bg-linear-to-tr from-black/5 to-transparent rounded-full blur-[100px]"
          />
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={false}
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span className="text-sm font-medium text-gray-900">About Integrate</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
            >
              <span className="bg-clip-text text-transparent bg-linear-to-r from-black via-gray-700 to-black">
                Automation, Amplified.
              </span>
              <br />
              <span className="text-gray-400">Designed for Compounding Growth</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              Integrate engineers orchestration layers that unify voice, data, human context and AI reasoning—so your operations accelerate while complexity recedes.
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* Marquee - scrolling partner logos */}
      <section className="py-10 border-y border-gray-200 bg-gray-50/50">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-gray-50 via-transparent to-gray-50" />
          {/* Logo marquee */}
          <div className="flex gap-14 w-max animate-[logoMarquee_28s_linear_infinite] px-8">
            {[
              { src: "/logos/instantly.svg", alt: "Instantly" },
              { src: "/logos/openai.svg", alt: "OpenAI" },
              { src: "/logos/vapi.svg", alt: "Vapi" },
              { src: "/logos/elevenlabs.svg", alt: "ElevenLabs" },
              { src: "/logos/2chat.svg", alt: "2Chat" },
              { src: "/logos/apollo.svg", alt: "Apollo" },
              { src: "/logos/snovio.svg", alt: "Snovio" },
              { src: "/logos/retool.svg", alt: "Retool" },
              { src: "/logos/supabase.svg", alt: "Supabase" },
              { src: "/logos/n8n.svg", alt: "n8n" },
              { src: "/logos/google.svg", alt: "Google" },
              { src: "/logos/apify.svg", alt: "Apify" },
              // Duplicate sequence for seamless loop
              { src: "/logos/instantly.svg", alt: "Instantly" },
              { src: "/logos/openai.svg", alt: "OpenAI" },
              { src: "/logos/vapi.svg", alt: "Vapi" },
              { src: "/logos/elevenlabs.svg", alt: "ElevenLabs" },
              { src: "/logos/2chat.svg", alt: "2Chat" },
              { src: "/logos/apollo.svg", alt: "Apollo" },
              { src: "/logos/snovio.svg", alt: "Snovio" },
              { src: "/logos/retool.svg", alt: "Retool" },
              { src: "/logos/supabase.svg", alt: "Supabase" },
              { src: "/logos/n8n.svg", alt: "n8n" },
              { src: "/logos/google.svg", alt: "Google" },
              { src: "/logos/apify.svg", alt: "Apify" },
            ].map((l, i) => {
              const sizeClass =
                l.alt === "Instantly"
                  ? "h-16 max-w-[240px]"
                  : ["Google", "Vapi", "ElevenLabs"].includes(l.alt)
                  ? "h-14 max-w-[200px]"
                  : "h-10 max-w-[150px]";
              return (
                <div
                  key={l.alt + i}
                  className="flex items-center justify-center h-20 min-w-[120px] opacity-75 hover:opacity-100 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={l.alt}
                    className={`w-auto object-contain select-none ${sizeClass}`}
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars - value propositions */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Layers className="w-7 h-7" />, title: "Unified Orchestration", desc: "A single control surface spanning voice, messaging, data ops and AI agents." },
              { icon: <Cpu className="w-7 h-7" />, title: "Adaptive Intelligence", desc: "Context-aware flows that refine themselves from outcomes and signals." },
              { icon: <ShieldCheck className="w-7 h-7" />, title: "Enterprise Guardrails", desc: "Observability, audit trails & compliance baked directly into automation." },
            ].map((p) => (
              <motion.div
                key={p.title}
                variants={scaleIn}
                whileHover="hover"
                initial="initial"
                className="group relative rounded-3xl border border-gray-200 bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gray-900/0 to-gray-900/0 group-hover:from-gray-900/5 group-hover:to-gray-900/0 transition-all duration-500" />
                <motion.div variants={subtleFloat} className="relative z-10 flex flex-col gap-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-black text-white group-hover:shadow-xl transition-all duration-500">
                    {p.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{p.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Architecture - system layers */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Platform Architecture</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Layered design enabling ingest, reasoning, execution and feedback refinement.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Ingest", items: ["Voice","Webhooks","Web","CRM"] },
              { label: "Normalize", items: ["Parsing","Enrichment","Profiles"] },
              { label: "Reason", items: ["LLM","Rules","Scoring"] },
              { label: "Act", items: ["Dial","Email","Data","Notify"] },
            ].map((layer) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="text-sm font-semibold tracking-wide text-gray-700 mb-4 uppercase">{layer.label}</h3>
                <ul className="space-y-2">
                  {layer.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-300" /> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Black glass card (repurposed as Purpose) */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900 rounded-3xl blur-2xl opacity-20 scale-105" />
            <div className="relative bg-black/95 rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden border border-white/10">
              {/* Animated shine effect */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
              />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8 shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Purpose & Promise
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  We compound operational leverage by fusing deterministic processes with adaptive intelligence—yielding fewer manual pivots, higher conversion surface area, and resilient execution.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                  {[
                    "Resilient reliability",
                    "Accelerated deployment",
                    "Seamless alignment",
                    "Ongoing refinement",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-center gap-3 text-left"
                    >
                      <Star className="w-5 h-5 text-white shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities - replaced generic build grid */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modular building blocks combining structured workflow engines with AI action layers.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <Workflow className="w-7 h-7" />, title: "Dynamic Flows", desc: "Adaptive branching logic blending metrics, events and semantic signals." },
              { icon: <Cpu className="w-7 h-7" />, title: "AI Agents", desc: "Task-specialized autonomous units orchestrated with guardrail supervision." },
              { icon: <Rocket className="w-7 h-7" />, title: "Outbound Engines", desc: "Sequenced multi-channel campaigns with predictive escalation." },
              { icon: <BarChart3 className="w-7 h-7" />, title: "Insight Fabric", desc: "Continuous telemetry streaming into unified performance schemas." },
              { icon: <Layers className="w-7 h-7" />, title: "Data Unification", desc: "Profile stitching and real-time enrichment across sources." },
              { icon: <ShieldCheck className="w-7 h-7" />, title: "Reliability Mesh", desc: "Self-healing monitors, circuit breakers & graceful degradation." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-gray-900/0 to-gray-900/0 group-hover:from-gray-900/5 group-hover:to-gray-900/0 transition-all duration-300" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-black text-white mb-6 group-hover:shadow-xl transition-shadow duration-300"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study - sample impact */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Impact Snapshot</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Recent deployment metrics from a mid-market SaaS revenue operations team.</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Lead Qualification Time", value: "-78%" },
              { label: "Pipeline Velocity", value: "+3.4x" },
              { label: "Manual Touchpoints", value: "-62%" },
            ].map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{m.value}</div>
                <div className="text-sm text-gray-600 tracking-wide uppercase">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - sleek timeline */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Delivery Framework</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Structured phases engineered for speed, clarity and iterative refinement.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Deep-dive analysis of your workflows, pain points, and automation opportunities.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Comprehensive system architecture with clear ROI projections and success metrics.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Agile development cycles with continuous testing and stakeholder feedback loops.",
              },
              {
                step: "04",
                title: "Integration",
                desc: "Seamless deployment into your existing infrastructure with zero disruption.",
              },
              {
                step: "05",
                title: "Optimization",
                desc: "Continuous monitoring, refinement, and performance enhancement post-launch.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="flex items-start gap-6 md:gap-8 p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-16 h-16 rounded-xl bg-black text-white flex items-center justify-center text-xl font-bold group-hover:shadow-xl transition-shadow duration-300"
                  >
                    {item.step}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="hidden md:block"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials - concise slider (static) */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Operator Feedback</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Signals from teams scaling with our orchestration layer.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "We retired three legacy tools in month one.", role: "RevOps Director" },
              { quote: "Daily standups shifted from status to strategy.", role: "COO" },
              { quote: "Zero-downtime rollout across seven regions.", role: "Infrastructure Lead" },
            ].map((t) => (
              <motion.div
                key={t.quote}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <p className="text-gray-700 leading-relaxed mb-4">“{t.quote}”</p>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium black */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        
        {/* Animated background patterns */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_50%)]"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"
        />

        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Scale?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            >
              Book a complimentary automation audit and discover how AI can transform your operations.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href="/#contact-form"
                className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
              >
                Schedule Your Audit
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
