"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const botCards = [
  {
    category: "Sales",
    title: "Outbound SDR Agent",
    description:
      "Automates cold calling and lead qualification with natural, objection-aware conversations that feel like a top SDR.",
    icon: "📞",
    tech: ["GPT-4", "ElevenLabs", "Make.com"],
    features: [
      "Dials through prospect lists automatically",
      "Handles objections and books meetings live",
      "Syncs outcomes and notes back to your CRM"
    ]
  },
  {
    category: "Sales",
    title: "Inbound Receptionist",
    description:
      "24/7 virtual receptionist that answers every inbound call, qualifies, and routes or books into calendars instantly.",
    icon: "📅",
    tech: ["Claude", "Retell AI", "Zapier"],
    features: [
      "Qualifies callers with tailored questions",
      "Instant routing, transfers, or bookings",
      "Captures notes and transcripts for every call"
    ]
  },
  {
    category: "Sales",
    title: "Follow-up Callback Agent",
    description:
      "Persistent follow-up agent that calls back warm leads, answers questions, and pushes them to the next step.",
    icon: "🔄",
    tech: ["GPT-4", "Vapi", "n8n"],
    features: [
      "Context-aware follow-up sequences",
      "Personalised outreach based on past interactions",
      "Automatic status updates and task creation"
    ]
  },
  {
    category: "Sales",
    title: "Qualification & Survey Agent",
    description:
      "Conversational qualification and survey agent that scores leads while collecting structured feedback at scale.",
    icon: "📋",
    tech: ["Claude", "ElevenLabs", "Make.com"],
    features: [
      "Dynamic questioning based on live answers",
      "Lead scoring and segmentation baked-in",
      "Exports clean, structured data into your stack"
    ]
  },
  {
    category: "Ops",
    title: "Appointment Setter",
    description:
      "Dedicated booking agent that coordinates calendars, sends reminders and reduces no-shows across your funnel.",
    icon: "🗓️",
    tech: ["GPT-4", "Calendly API", "Zapier"],
    features: [
      "Connects to Google and Outlook calendars",
      "Handles reschedules and cancellations",
      "Multi-step reminders by SMS, email, or voice"
    ]
  },
  {
    category: "Support",
    title: "Customer Support Agent",
    description:
      "Frontline support agent that resolves common issues, triages complex tickets and hands off to humans when needed.",
    icon: "💬",
    tech: ["Claude", "Vapi", "Zendesk API"],
    features: [
      "Answers FAQs and troubleshooting flows",
      "Creates and updates tickets automatically",
      "Escalates edge cases to your human team"
    ]
  },
  {
    category: "Ops",
    title: "Order Processing Agent",
    description:
      "Takes orders over the phone, processes payments securely, and confirms delivery details end-to-end.",
    icon: "🛒",
    tech: ["GPT-4", "Stripe API", "Make.com"],
    features: [
      "Secure payment capture and validation",
      "Real-time inventory and availability checks",
      "Instant order confirmation and tracking links"
    ]
  },
  {
    category: "Marketing",
    title: "Event Registration Agent",
    description:
      "High-converting registration agent for events, webinars and launches that captures every interested lead.",
    icon: "🎟️",
    tech: ["Claude", "Eventbrite API", "n8n"],
    features: [
      "Collects attendee details and preferences",
      "Handles ticket types, upgrades and discounts",
      "Sends confirmations and reminders automatically"
    ]
  }
];

const pipelineSteps = [
  {
    title: "Lead Sources",
    subtitle: "Where your traffic lives today",
    icon: "🌐",
    points: ["CRM & CSV lists", "Forms, ads & landing pages", "Inbound calls & webchat"]
  },
  {
    title: "AI Voice Agent",
    subtitle: "Your always-on caller",
    icon: "🎙️",
    points: ["Human-sounding conversations", "Objection handling & qualification", "Real-time transcription & tagging"]
  },
  {
    title: "Automation Layer",
    subtitle: "Workflow orchestration",
    icon: "⚙️",
    points: ["n8n / Make / Zapier", "Custom logic & branching", "Error handling & retries"]
  },
  {
    title: "Systems of Record",
    subtitle: "Where value is captured",
    icon: "📊",
    points: ["HubSpot, Salesforce, Pipedrive", "Calendars & ticketing", "Data warehouses & dashboards"]
  }
];

const personas = [
  {
    label: "Founders & Heads of Sales",
    description: "Replace manual dialing with a scalable outbound engine that never forgets to follow up."
  },
  {
    label: "RevOps & Growth Teams",
    description: "Orchestrate complex pipelines across tools without babysitting automations or agents."
  },
  {
    label: "Agencies & Service Businesses",
    description: "Offer white-labelled AI agents to clients and open new retainers without hiring."
  },
  {
    label: "Support & Success Leaders",
    description: "Deflect repetitive calls while keeping human-quality conversations for complex cases."
  }
];

const metrics = [
  { value: "38–45%", label: "Connect rate on outbound call campaigns" },
  { value: "70%", label: "Average reduction in no-show rates" },
  { value: "48 hrs", label: "Typical time from brief to live agent" }
];

const faqs = [
  {
    question: "How long does it take to launch an agent?",
    answer:
      "Most teams go from initial brief to a live, production-ready voice agent in under 48 hours. Complex, multi-branch flows typically take 3–5 days."
  },
  {
    question: "Will the voice sound robotic?",
    answer:
      "We use ElevenLabs and Vapi to generate highly natural voices with realistic timing, intonation and pace. You choose the voice profile that fits your brand."
  },
  {
    question: "How does this plug into our tools?",
    answer:
      "We connect into your existing stack—HubSpot, Salesforce, Pipedrive, Calendly, Stripe, Helpdesks and more—using n8n, Make.com or direct APIs."
  },
  {
    question: "Is this suitable for regulated industries?",
    answer:
      "Yes. We can configure call recording, consent flows and data handling to align with your compliance requirements. Ask us about your specific use case."
  }
];

export default function VoiceAgents() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex(prev => (prev === botCards.length - 1 ? 0 : prev + 1));
    }, 8000); // slower so people can actually read

    return () => clearInterval(interval);
  }, []);

  const currentCard = botCards[currentCardIndex];

  return (
    <div className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50">
      {/* HERO + CAROUSEL */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 backdrop-blur-xl shadow-[0_24px_80px_rgba(15,23,42,0.12)] px-5 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: intro copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>38–45% connect rates vs. 2–5% for email-only outreach</span>
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold tracking-tight text-gray-900 leading-tight md:leading-[1.1]">
                  AI voice agents that actually get through to your buyers
                </h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                  Integrate builds ultra-realistic outbound and inbound voice agents that talk like your best
                  reps, qualify like your RevOps playbook and pipe clean data straight into your tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <motion.a
                  href="/#contact-form"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors shadow-md hover:shadow-xl"
                >
                  Book a discovery call
                </motion.a>
                <motion.a
                  href="/#contact-form"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-800 hover:border-gray-300 hover:bg-gray-50 bg-white transition-all shadow-sm hover:shadow-lg"
                >
                  Talk to an expert
                </motion.a>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-gray-500">
                <span className="font-medium text-gray-700">Built for B2B teams:</span>
                <span className="rounded-full bg-gray-100 px-3 py-1">Outbound sales</span>
                <span className="rounded-full bg-gray-100 px-3 py-1">Inbound reception</span>
                <span className="rounded-full bg-gray-100 px-3 py-1">Customer support</span>
              </div>
            </motion.div>

            {/* Right: primary agent carousel */}
            <div className="relative min-h-[420px] md:min-h-[460px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCardIndex}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className="relative group h-full rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-lg p-7 md:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.10)] transition-all duration-300">
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-50/45 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-5">
                        <div>
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 text-[11px] font-medium text-gray-600 px-2.5 py-1 mb-2">
                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-400" />
                            <span>{currentCard.category} playbook</span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                            {currentCard.title}
                          </h2>
                        </div>
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-slate-100 to-slate-200 ring-1 ring-gray-200 flex items-center justify-center shadow-[0_4px_18px_rgba(15,23,42,0.12)] text-3xl md:text-4xl"
                        >
                          {currentCard.icon}
                        </motion.div>
                      </div>

                      <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-4">
                        {currentCard.description}
                      </p>

                      <div className="space-y-3 mb-4">
                        {currentCard.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-[#00b2ff]/15 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00b2ff]" />
                            </div>
                            <span className="text-xs md:text-sm text-gray-700 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap gap-2 pt-1">
                        {currentCard.tech.map((t, j) => (
                          <span
                            key={j}
                            className="text-[11px] md:text-xs px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-gray-200 text-gray-700 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel controls */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentCardIndex(prev => (prev === 0 ? botCards.length - 1 : prev - 1))
                  }
                  className="w-9 h-9 rounded-full bg-white/85 backdrop-blur border border-gray-200 hover:border-gray-300 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_4px_18px_rgba(15,23,42,0.18)]"
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {botCards.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentCardIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentCardIndex
                          ? "w-7 bg-gray-700"
                          : "w-2 bg-gray-300/80 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentCardIndex(prev => (prev === botCards.length - 1 ? 0 : prev + 1))
                  }
                  className="w-9 h-9 rounded-full bg-white/85 backdrop-blur border border-gray-200 hover:border-gray-300 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_4px_18px_rgba(15,23,42,0.18)]"
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* WHO THIS IS FOR */}
      <section className="w-full bg-white py-12 md:py-14 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                Built for modern B2B revenue teams
              </h2>
              <p className="text-sm md:text-[15px] text-gray-600 max-w-xl">
                Whether you run outbound, inbound, support or all three, our agents drop into your
                existing stack and start doing the work your team doesn&apos;t have time for.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {personas.map((persona, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-gray-50/60 px-4 py-4 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                  {persona.label}
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE / HOW IT WORKS */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-18 md:py-20 border-t border-gray-100/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                From raw leads to booked meetings on autopilot
              </h2>
              <p className="text-sm md:text-[15px] text-gray-600 max-w-xl">
                We wire your lead sources, AI voice agents and automation layer into a single,
                reliable pipeline that runs 24/7 without you chasing anyone.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
                <span>🎙️</span>
                <span>Vapi + ElevenLabs</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
                <span>⚙️</span>
                <span>n8n / Make / Zapier</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
                <span>📊</span>
                <span>HubSpot / Salesforce / Pipedrive</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
            {pipelineSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md px-4 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute -top-3 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 border border-gray-200 px-3 py-1 text-[11px] font-medium text-gray-600 shadow-sm">
                  <span>{step.icon}</span>
                  <span>Step 0{idx + 1}</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-[13px] text-gray-500 mb-3">{step.subtitle}</p>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {step.points.map(point => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#00b2ff]/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS + PRE-BUILT AGENTS GRID */}
      <section className="w-full bg-white py-18 md:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Pre-built agents tuned for your revenue workflows
              </h2>
              <p className="text-sm md:text-[15px] text-gray-600">
                Start from proven playbooks for outbound, inbound, follow-up and operations. We then
                tune the prompts, flows and integrations to match your product, messaging and stack.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {metrics.map(metric => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-gray-200 bg-gray-50/70 px-3 py-3 text-center"
                  >
                    <div className="text-base md:text-lg font-semibold text-gray-900">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-[11px] text-gray-500 leading-snug">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {botCards.map(card => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="group relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-[0_12px_40px_rgba(15,23,42,0.14)] hover:border-gray-300 transition-all duration-300 overflow-hidden"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-50/45 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-[11px] font-medium text-gray-500 mb-0.5">
                            {card.category}
                          </div>
                          <h3 className="text-sm md:text-[15px] font-semibold text-gray-900">
                            {card.title}
                          </h3>
                        </div>
                        <div className="shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                          {card.icon}
                        </div>
                      </div>
                      <p className="text-xs md:text-[13px] text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {card.tech.map(tech => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-1 rounded-full bg-white/80 border border-gray-200 text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VOICE */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-18 md:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Why voice still crushes every other channel
            </h2>
            <p className="text-sm md:text-[15px] text-gray-600 max-w-2xl mx-auto">
              Your buyers&apos; inboxes are saturated. Their phones are not. AI voice lets you scale
              real conversations without scaling headcount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "10x higher connect rates",
                desc: "38–45% of outbound calls connect vs. 2–5% email reply rates. Your pipeline is no longer at the mercy of inbox algorithms."
              },
              {
                icon: "🎙️",
                title: "Natural, human-sounding calls",
                desc: "Powered by ElevenLabs and Vapi. Agents sound like your team, not a bot, with realistic pacing, tone and pauses."
              },
              {
                icon: "📝",
                title: "Perfect memory and notes",
                desc: "Every conversation is transcribed and summarised, with key fields extracted into your CRM and dashboards."
              },
              {
                icon: "⚡",
                title: "Structured outputs at scale",
                desc: "For every call we capture intent, qualification, objections and next steps into clean, structured data you can action."
              }
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-[0_12px_40px_rgba(15,23,42,0.14)] hover:border-gray-300 transition-all duration-300 overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-blue-50/45 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="w-full bg-white py-18 md:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm mb-4">
              <span>🧩</span>
              <span>Plays nicely with your existing tools</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Concrete ways teams use our voice agents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: "Outbound cold calling",
                desc: "Continuously dial through targeted prospect lists with personalised, context-aware openers.",
                tools: ["Vapi", "Apollo.io", "n8n"]
              },
              {
                title: "Inbound reception",
                desc: "Every call is answered, qualified and routed with zero hold music or missed opportunities.",
                tools: ["Vapi", "Calendar", "Supabase"]
              },
              {
                title: "Follow-up sequences",
                desc: "Persistent callbacks for form fills, trial signups and demo no-shows until they convert or opt out.",
                tools: ["Vapi", "n8n", "Retool"]
              },
              {
                title: "Appointment confirmation",
                desc: "Friendly reminder calls and last-minute rescheduling to keep your calendar full and predictable.",
                tools: ["Vapi", "Calendly", "2Chat"]
              },
              {
                title: "Survey & feedback",
                desc: "Conversational NPS, CSAT and product feedback calls that capture nuance and sentiment, not just scores.",
                tools: ["Vapi", "Sheets", "OpenAI"]
              },
              {
                title: "Lead qualification",
                desc: "BANT-style qualification at scale so your human team only talks to decision-makers who are ready.",
                tools: ["Vapi", "GPT-4", "Supabase"]
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-[0_12px_40px_rgba(15,23,42,0.14)] hover:border-gray-300 transition-all duration-300 overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-blue-50/35 via-transparent to-purple-50/25 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map(tool => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="w-full bg-black text-white py-18 md:py-20 border-t border-gray-900/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Answers before you jump on a call
            </h2>
            <p className="text-sm md:text-[15px] text-gray-300 mb-6 max-w-lg">
              We&apos;ve built dozens of voice agents across sales, success and operations. Here&apos;s
              how it typically works and what most teams ask first.
            </p>
            <div className="space-y-4">
              {faqs.map(faq => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="text-sm font-medium text-white mb-1.5">
                    {faq.question}
                  </div>
                  <p className="text-xs md:text-[13px] text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live in under 48 hours for most teams</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                Ready to replace manual dialing with a voice pipeline?
              </h2>
              <p className="text-sm md:text-[15px] text-gray-300 max-w-xl">
                Share your current outbound or support workflow and we&apos;ll show you exactly
                where AI voice can drop in, what it would sound like and how fast we can launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <motion.a
                  href="/#contact-form"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-xl"
                >
                  Book your discovery call
                </motion.a>
                <motion.a
                  href="/#contact-form"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 rounded-full border border-gray-500 text-sm font-medium text-white hover:border-gray-300 hover:bg-white/5 transition-all shadow-sm hover:shadow-lg"
                >
                  Talk through a specific use case
                </motion.a>
              </div>
              <p className="text-[11px] text-gray-400 pt-3">
                No commitment on the first call • No engineering required to explore • We&apos;ll
                share concrete examples from teams like yours
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
