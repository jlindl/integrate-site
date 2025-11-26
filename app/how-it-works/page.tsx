"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      <Header />

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        
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
          className="text-center space-y-8 max-w-4xl mx-auto"
        >

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span>Simple, transparent process</span>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] leading-[1.1] font-semibold tracking-tight text-gray-900"
          >
            How Integrate works.
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            From first call to deployed automation in 2-4 weeks. No lengthy contracts, no hidden fees, 
            just clear steps and honest communication.
          </motion.p>

        </motion.div>

      </section>

      {/* MAIN PROCESS STEPS */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="space-y-16">
            
            {[
              {
                num: "01",
                title: "Book a Discovery Call",
                duration: "30 minutes",
                desc: "We start with a conversation. Tell us about your business, your current workflow, and what's slowing you down. No sales pitch—just listening.",
                details: [
                  "Walk through your current process",
                  "Identify automation opportunities",
                  "Discuss your goals and timeline",
                  "Get honest feedback on feasibility"
                ],
                icon: "📞"
              },
              {
                num: "02",
                title: "Get a Custom Proposal",
                duration: "2-3 days",
                desc: "We map out exactly what we'll build, which tools we'll use, and how much it costs. Clear timeline, fixed price, no surprises.",
                details: [
                  "Detailed automation architecture",
                  "Tools and integrations needed",
                  "Timeline breakdown by phase",
                  "Transparent pricing with no hidden fees"
                ],
                icon: "📋"
              },
              {
                num: "03",
                title: "Development & Testing",
                duration: "2-4 weeks",
                desc: "Our developers build your automation with weekly check-ins. You see progress, test features, and request changes as we go.",
                details: [
                  "Weekly progress updates with demos",
                  "Test with real data in staging",
                  "Unlimited revisions during development",
                  "Direct access to your developer"
                ],
                icon: "⚙️"
              },
              {
                num: "04",
                title: "Go Live & Training",
                duration: "2-3 days",
                desc: "We deploy to production, train your team, and provide full documentation. Then we stick around to make sure everything runs smoothly.",
                details: [
                  "Smooth deployment with zero downtime",
                  "Live training sessions for your team",
                  "Complete documentation and video guides",
                  "30 days of free support included"
                ],
                icon: "🚀"
              },
              {
                num: "05",
                title: "Ongoing Support (Optional)",
                duration: "Monthly",
                desc: "Need changes? Want to add features? We're here. Pay monthly or as-needed—no long-term contracts required.",
                details: [
                  "Priority support when you need it",
                  "Add new features and integrations",
                  "Optimize performance and fix issues",
                  "Cancel anytime, no penalties"
                ],
                icon: "🛠️"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                
                {/* Left: Number & Title */}
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold shrink-0">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{step.icon}</span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">What happens in this phase:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs font-semibold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY THIS APPROACH */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Why we work this way
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Transparency and collaboration aren&apos;t buzzwords. They&apos;re how we actually operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl mx-auto mb-4">
                💬
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Black Box
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                You see exactly what we&apos;re building every week. No surprises at the end—just steady progress you can track.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl mx-auto mb-4">
                💰
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fixed Pricing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We quote a fixed price upfront. No hourly billing, no scope creep, no surprise invoices. You know exactly what you&apos;re paying.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                You Own Everything
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No vendor lock-in. You own the automation, the code, the data. Cancel anytime with no penalties or hostage situations.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* TIMELINE VISUAL */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Typical timeline
            </h2>
            <p className="text-base text-gray-600">
              Most projects go live in 2-4 weeks. Here&apos;s what that looks like:
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            
            <div className="space-y-8">
              {[
                { week: "Week 0", title: "Discovery & Proposal", status: "30 min call → Proposal in 2-3 days" },
                { week: "Week 1-2", title: "Core Development", status: "Building main features → Weekly demos" },
                { week: "Week 3", title: "Testing & Refinement", status: "Your team tests → We fix and optimize" },
                { week: "Week 4", title: "Go Live", status: "Deploy → Train team → Monitor" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-lg z-10">
                    {item.week}
                  </div>
                  <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.status}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Ready to get started?
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Book a free discovery call. We&apos;ll discuss your needs, show you what&apos;s possible, and give you a clear timeline and price.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                href="/#contact-form"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-xl inline-flex items-center justify-center"
              >
                Book your discovery call
              </motion.a>
              <motion.a
                href="/#contact-form"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 rounded-full border border-gray-600 text-sm font-medium text-white hover:border-gray-400 hover:bg-gray-900 transition-all shadow-sm hover:shadow-lg inline-flex items-center justify-center"
              >
                View our solutions
              </motion.a>
            </div>

            <p className="text-xs text-gray-400 pt-4">
              No commitment required • Honest advice • Clear pricing
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
