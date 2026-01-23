"use client";

import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";

export default function CustomSolutions() {
  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        
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
            <span>Built for your business, not a template</span>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] leading-[1.1] font-semibold tracking-tight text-gray-900"
          >
            Custom automation built exactly how you need it.
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Every business is different. We don&apos;t do cookie-cutter solutions. Our developers meet with you, 
            understand your workflow, and build custom automation that fits your exact needs.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center justify-center pt-4"
          >
            <motion.a 
              href="/#contact-form"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors duration-200 shadow-md hover:shadow-xl"
            >
              Book a discovery call
            </motion.a>
            <motion.a 
              href="/#contact-form"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full border border-gray-200 text-sm font-medium text-gray-800 hover:border-gray-300 hover:bg-gray-50 bg-white transition-all duration-200 shadow-sm hover:shadow-lg"
            >
              View case studies
            </motion.a>
          </motion.div>

        </motion.div>

      </main>

      {/* HOW WE WORK */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              How we build your custom solution
            </h2>
            <p className="text-base text-gray-600">
              A collaborative process from discovery to deployment.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            
            {[
              {
                num: "01",
                title: "Discovery Call",
                desc: "We meet with your team to understand your current workflow, pain points, and goals. No technical jargon—just honest conversation about what you need.",
                duration: "30-45 minutes",
                icon: "🗣️"
              },
              {
                num: "02",
                title: "Solution Design",
                desc: "Our developers map out a custom automation architecture. We show you exactly how data will flow, what tools we'll use, and what the end result looks like.",
                duration: "2-3 days",
                icon: "🎨"
              },
              {
                num: "03",
                title: "Development Sprint",
                desc: "We build your automation with regular check-ins. You see progress weekly and can request changes. No surprises, no locked-in decisions.",
                duration: "2-4 weeks",
                icon: "⚙️"
              },
              {
                num: "04",
                title: "Testing & Refinement",
                desc: "Your team tests the automation with real data. We fix bugs, tweak workflows, and optimize until it's perfect. This is where we fine-tune everything.",
                duration: "1 week",
                icon: "🔬"
              },
              {
                num: "05",
                title: "Deployment & Training",
                desc: "We deploy to production and train your team. You get full documentation, video walkthroughs, and ongoing support for any questions.",
                duration: "2-3 days",
                icon: "🚀"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex gap-6 items-start">
                  
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.num}
                    </div>
                    {idx < 4 && (
                      <div className="w-0.5 h-12 bg-gray-200 mt-4" />
                    )}
                  </div>

                  <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{step.icon}</span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              What we can build for you
            </h2>
            <p className="text-base text-gray-600">
              If it involves data, workflows, or repetitive tasks—we can automate it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              {
                icon: "📊",
                title: "Custom CRM Workflows",
                examples: ["Auto-update deal stages", "Lead scoring systems", "Pipeline reports"]
              },
              {
                icon: "🔗",
                title: "API Integrations",
                examples: ["Connect disparate systems", "Real-time data sync", "Custom webhooks"]
              },
              {
                icon: "📧",
                title: "Email Automation",
                examples: ["Triggered campaigns", "Dynamic segmentation", "Personalization at scale"]
              },
              {
                icon: "📞",
                title: "Voice & SMS Flows",
                examples: ["Custom call routing", "AI receptionist", "SMS follow-ups"]
              },
              {
                icon: "🗂️",
                title: "Data Enrichment",
                examples: ["Company lookup", "Contact verification", "Tech stack detection"]
              },
              {
                icon: "📈",
                title: "Analytics Dashboards",
                examples: ["Real-time metrics", "Custom reports", "KPI tracking"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-700 mb-4">
              <span>🛠️</span>
              <span>Our toolkit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              The tools we work with
            </h2>
            <p className="text-base text-gray-600">
              We pick the right tool for your specific use case—not just what we know.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            
            {[
              "n8n", "Vapi", "ElevenLabs", "Instantly", "2Chat",
              "Apollo.io", "Clearbit", "Harmonic", "Supabase", "Retool",
              "OpenAI", "GPT-4", "Apify", "Google Sheets", "Airtable",
              "Zapier", "Make", "Twilio", "SendGrid", "Calendly"
            ].map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 text-center"
              >
                <span className="text-sm font-medium text-gray-700">{tool}</span>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY CUSTOM */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Why custom beats off-the-shelf
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fits Your Workflow
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No forcing your team to adapt to rigid software. We build around how you already work.
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
                🔧
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fully Customizable
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Need changes? We adjust. Your business evolves, and your automation should too.
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
                💰
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Licensing Fees
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                You own the automation. No per-seat pricing or surprise costs as you scale.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <Testimonials title="What clients say" subtitle="Real results from teams using custom automation across voice, email and CRM." />

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
              Let&apos;s build something together.
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Book a call with our team. We&apos;ll discuss your workflow, show you what&apos;s possible, 
              and give you a clear timeline and price—no pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
                className="px-7 py-3.5 rounded-full border border-gray-600 text-sm font-medium text-white hover:border-gray-400 hover:bg-gray-900 transition-all shadow-sm hover:shadow-lg"
              >
                View our work
              </motion.a>
            </div>

            <p className="text-xs text-gray-400 pt-4">
              Free consultation • Clear pricing • No surprises
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
