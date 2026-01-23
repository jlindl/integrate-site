"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leadSources = [
  { name: "LinkedIn Sales Navigator", icon: "💼", type: "Social" },
  { name: "Google Maps & Places", icon: "📍", type: "Local" },
  { name: "Industry Directories", icon: "📚", type: "B2B" },
  { name: "Company Websites", icon: "🌐", type: "Direct" },
  { name: "Job Boards", icon: "💼", type: "Intent" },
  { name: "Review Platforms", icon: "⭐", type: "Social Proof" },
  { name: "Government Registries", icon: "🏛️", type: "Official" },
  { name: "News & PR Wires", icon: "📰", type: "Signals" },
];

const pricingComparison = [
  {
    provider: "Traditional Lead Vendors",
    priceRange: "$2.00 – $8.00",
    perLead: true,
    issues: [
      "30-40% data decay within 90 days",
      "Shared with 5-10+ competitors",
      "Manual CSV exports only",
      "No real-time verification",
      "Outdated contact details",
      "Limited targeting options",
    ],
  },
  {
    provider: "Our AI Engine",
    priceRange: "$0.02 – $0.15",
    perLead: true,
    benefits: [
      "Real-time extraction & validation",
      "100% exclusive to your business",
      "Direct CRM/webhook delivery",
      "Triple-verified contact data",
      "Fresh data scraped on-demand",
      "Hyper-targeted by any criteria",
    ],
  },
];

const extractionProcess = [
  {
    step: "01",
    title: "Define Your ICP",
    description: "Tell us your ideal customer profile — industry, company size, job titles, location, tech stack, or any custom criteria.",
    icon: "🎯",
    details: ["Industry verticals", "Revenue ranges", "Employee count", "Geographic targeting", "Technology signals"],
  },
  {
    step: "02",
    title: "AI Crawls & Extracts",
    description: "Our autonomous agents scan multiple data sources simultaneously, extracting and cross-referencing prospect data in real-time.",
    icon: "🤖",
    details: ["Parallel source scanning", "NLP entity extraction", "Pattern recognition", "Duplicate detection", "Data enrichment"],
  },
  {
    step: "03",
    title: "Triple Verification",
    description: "Every lead passes through email verification, phone validation, and company confirmation before hitting your pipeline.",
    icon: "✅",
    details: ["SMTP verification", "Phone number validation", "Company existence check", "Role confirmation", "Freshness scoring"],
  },
  {
    step: "04",
    title: "Instant Delivery",
    description: "Clean, enriched leads flow directly into your CRM, outreach tools, or custom webhook — no manual imports ever.",
    icon: "🚀",
    details: ["HubSpot / Salesforce sync", "Webhook integration", "Real-time streaming", "Batch scheduling", "Custom field mapping"],
  },
];

const useCases = [
  {
    title: "Outbound Sales Teams",
    description: "Fill your SDRs' queues with fresh, verified prospects matching your exact ICP. No more stale lists or bounced emails.",
    metrics: "3x pipeline velocity",
    icon: "📞",
  },
  {
    title: "Agency Lead Gen",
    description: "White-label our engine to deliver leads for your clients. Charge premium prices, pay wholesale rates.",
    metrics: "80% margin opportunity",
    icon: "🏢",
  },
  {
    title: "Local Service Businesses",
    description: "Scrape every new business registration, permit filing, or commercial move-in in your territory before competitors know they exist.",
    metrics: "First-mover advantage",
    icon: "🏠",
  },
  {
    title: "Recruitment & Staffing",
    description: "Extract hiring signals, new job postings, and decision-maker changes across your target companies daily.",
    metrics: "2x placement rate",
    icon: "👥",
  },
  {
    title: "Event & Conference Targeting",
    description: "Build attendee lists, speaker databases, and sponsor contacts from any event, expo, or trade show.",
    metrics: "10x ROI on event spend",
    icon: "🎪",
  },
  {
    title: "Competitor Intelligence",
    description: "Monitor competitor customer lists, new hires, partnerships, and expansion moves in real-time.",
    metrics: "Strategic advantage",
    icon: "🔍",
  },
];

const stats = [
  { value: "$0.02", label: "Starting cost per lead", sublabel: "vs $2-8 industry average" },
  { value: "98.5%", label: "Email deliverability", sublabel: "Triple-verified contacts" },
  { value: "< 24h", label: "Time to first leads", sublabel: "From brief to pipeline" },
  { value: "15+", label: "Data sources", sublabel: "Crawled simultaneously" },
];

const faqs = [
  {
    question: "How do you get leads so cheap?",
    answer: "Traditional vendors buy data wholesale and resell it thousands of times, building in massive margins. We extract data on-demand using AI, paying only for compute. You get fresher data at a fraction of the cost because we're not maintaining stale databases or sharing with competitors.",
  },
  {
    question: "Is this legal?",
    answer: "Yes. We only extract publicly available business information — the same data anyone could find by manually searching. We follow robots.txt, respect rate limits, and never access password-protected content. For GDPR/CCPA, we provide full compliance documentation.",
  },
  {
    question: "How fresh is the data?",
    answer: "Your data is extracted in real-time or near real-time, depending on the source. Unlike traditional databases that decay 30-40% every 90 days, our data is scraped on-demand when you need it.",
  },
  {
    question: "What if a lead bounces or is invalid?",
    answer: "Our triple-verification catches 98%+ of bad data before it reaches you. For the rare invalid lead that slips through, we provide credits or replacements — no questions asked.",
  },
  {
    question: "Can you target very specific niches?",
    answer: "Absolutely. Our AI can filter by any combination of industry, company size, tech stack, job title, location, growth signals, hiring patterns, funding status, and dozens of custom criteria. If it's publicly available data, we can target by it.",
  },
];

export default function LeadGen() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === extractionProcess.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-linear-to-b from-zinc-100 via-white to-zinc-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(161,161,170,0.2),rgba(255,255,255,0))]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-300/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/90 backdrop-blur px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm mb-8"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900 animate-pulse" />
              <span>Leads at 1/100th the cost of traditional providers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-[1.1] mb-6"
            >
              AI-powered lead generation
              <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-zinc-600 via-zinc-400 to-zinc-600">
                at wholesale prices
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Our autonomous AI agents scrape, verify, and deliver hyper-targeted leads directly to your CRM — fresher and cheaper than any traditional data vendor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.a
                href="/#contact-form"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl"
              >
                Get a custom lead quote
              </motion.a>
              <motion.a
                href="/#contact-form"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full border border-zinc-400 text-sm font-medium text-black hover:border-zinc-600 hover:bg-zinc-50 bg-white/90 backdrop-blur transition-all shadow-sm hover:shadow-lg"
              >
                See sample leads for your ICP
              </motion.a>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-linear-to-br from-white via-zinc-50 to-zinc-100 backdrop-blur-xl border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-black mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-zinc-700 mb-0.5">{stat.label}</div>
                  <div className="text-xs text-zinc-500">{stat.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* DATA SOURCES MARQUEE */}
      <section className="py-12 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 mb-8">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
              We extract from 15+ data sources simultaneously
            </h2>
            <p className="text-sm text-zinc-400">
              Real-time scraping, cross-referencing, and enrichment across the web
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
          >
            {[...leadSources, ...leadSources, ...leadSources].map((source, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900/50 backdrop-blur border border-zinc-700/50"
              >
                <span className="text-2xl">{source.icon}</span>
                <div>
                  <div className="text-sm font-medium text-white whitespace-nowrap">{source.name}</div>
                  <div className="text-xs text-zinc-500">{source.type}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS - PROCESS */}
      <section className="py-20 md:py-28 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 mb-6"
            >
              <span>⚙️</span>
              <span>Fully automated pipeline</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-black mb-4"
            >
              How we generate leads at scale
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-600 max-w-2xl mx-auto"
            >
              Our AI agents work 24/7, extracting and validating prospects while you focus on closing deals
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps List */}
            <div className="space-y-4">
              {extractionProcess.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveStep(i)}
                  className={`relative cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                    activeStep === i
                      ? "bg-black text-white border-black shadow-xl"
                      : "bg-white border-zinc-200 hover:border-zinc-400 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      activeStep === i ? "bg-white/10" : "bg-zinc-100"
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold ${activeStep === i ? "text-zinc-400" : "text-zinc-400"}`}>
                          STEP {step.step}
                        </span>
                      </div>
                      <h3 className={`text-lg font-semibold mb-1 ${activeStep === i ? "text-white" : "text-black"}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${activeStep === i ? "text-zinc-300" : "text-zinc-600"}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl bg-linear-to-br from-black via-zinc-900 to-black p-8 md:p-10 shadow-2xl overflow-hidden"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-400/10 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-4xl">
                        {extractionProcess[activeStep].icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-500 mb-1">
                          STEP {extractionProcess[activeStep].step}
                        </div>
                        <h3 className="text-2xl font-semibold text-white">
                          {extractionProcess[activeStep].title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-zinc-300 mb-8 leading-relaxed">
                      {extractionProcess[activeStep].description}
                    </p>

                    <div className="space-y-3">
                      <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">
                        What happens in this step
                      </div>
                      {extractionProcess[activeStep].details.map((detail, i) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white" />
                          </div>
                          <span className="text-sm text-zinc-300">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {extractionProcess.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeStep ? "w-8 bg-black" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING COMPARISON */}
      <section className="py-20 md:py-28 bg-linear-to-b from-zinc-100 to-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 mb-6"
            >
              <span>💰</span>
              <span>Cost comparison</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-black mb-4"
            >
              Why pay 100x more for stale data?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-600 max-w-2xl mx-auto"
            >
              Traditional lead vendors charge premium prices for shared, decaying databases. Our AI extraction delivers fresher data at a fraction of the cost.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border-2 border-zinc-300 bg-white p-8 shadow-sm"
            >
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-xs font-medium text-zinc-600">
                ❌ The Old Way
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-black mb-2">Traditional Lead Vendors</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-black">$2 – $8</span>
                  <span className="text-zinc-500">per lead</span>
                </div>
                
                <div className="space-y-3">
                  {pricingComparison[0].issues?.map((issue, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-sm text-zinc-600">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Our Way */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border-2 border-zinc-400 bg-linear-to-br from-black via-zinc-900 to-black p-8 shadow-xl"
            >
              <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-white text-xs font-medium text-black">
                ✓ Our AI Engine
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Extraction</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-white">$0.02 – $0.15</span>
                  <span className="text-zinc-400">per lead</span>
                </div>
                
                <div className="space-y-3">
                  {pricingComparison[1].benefits?.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-zinc-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Savings Badge */}
              <div className="absolute -bottom-4 right-6 px-4 py-2 rounded-full bg-white text-sm font-bold text-black shadow-lg">
                Save up to 99%
              </div>
            </motion.div>
          </div>

          {/* Cost Calculator Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="rounded-2xl bg-white border border-zinc-200 p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-6 text-center">
                Quick cost comparison for 10,000 leads
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-zinc-50">
                  <div className="text-sm text-zinc-500 mb-1">Traditional Vendors</div>
                  <div className="text-2xl font-bold text-black">$20,000 – $80,000</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-zinc-50">
                  <div className="text-sm text-zinc-500 mb-1">Our AI Engine</div>
                  <div className="text-2xl font-bold text-black">$200 – $1,500</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-zinc-900 border border-zinc-700">
                  <div className="text-sm text-zinc-300 mb-1">Your Savings</div>
                  <div className="text-2xl font-bold text-white">$19,800+</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 md:py-28 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 mb-6"
            >
              <span>🎯</span>
              <span>Built for growth teams</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-black mb-4"
            >
              How teams use our lead engine
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-600 max-w-2xl mx-auto"
            >
              From outbound sales to competitive intelligence — any team that needs prospect data can benefit
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-zinc-400 transition-all duration-300 overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-zinc-100/50 via-transparent to-zinc-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 group-hover:bg-black flex items-center justify-center text-2xl transition-colors duration-300">
                      <span className="group-hover:scale-110 transition-transform duration-300">{useCase.icon}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-700 border border-zinc-200">
                      {useCase.metrics}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{useCase.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-linear-to-b from-zinc-100 to-white border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-black mb-4"
            >
              Common questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-600"
            >
              Everything you need to know about our lead generation service
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-50 transition-colors"
                >
                  <span className="font-medium text-black pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 mb-8"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-white animate-pulse" />
            <span>Start generating leads in under 24 hours</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold mb-6"
          >
            Ready to slash your lead costs by 99%?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            Tell us your ideal customer profile and we&apos;ll show you exactly what data we can extract, how much it costs, and deliver a sample batch within 24 hours.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/#contact-form"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl"
            >
              Get your custom lead quote
            </motion.a>
            <motion.a
              href="/#contact-form"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full border border-zinc-600 text-sm font-medium text-white hover:border-zinc-400 hover:bg-zinc-900 transition-all"
            >
              Request a sample batch
            </motion.a>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-zinc-500 mt-8"
          >
            No commitment required • Custom pricing for your volume • Sample leads delivered free
          </motion.p>
        </div>
      </section>
    </div>
  );
}

