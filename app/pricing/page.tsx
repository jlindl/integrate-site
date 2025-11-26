"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";

export default function Pricing() {
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
            <span>Transparent, custom pricing for your needs</span>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] leading-[1.1] font-semibold tracking-tight text-gray-900"
          >
            Pricing tailored to your automation.
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Every business is different. We don&apos;t believe in one-size-fits-all pricing. 
            We learn your needs, design the perfect solution, then give you a fixed quote with no surprises.
          </motion.p>

        </motion.div>

      </section>

      {/* HOW PRICING WORKS */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              How we determine pricing
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              It&apos;s not about hours or arbitrary packages. It&apos;s about the value we deliver to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {[
              {
                icon: "📊",
                title: "Scope & Complexity",
                desc: "How many tools need to integrate? How complex are the workflows? Simple email automation costs less than a multi-channel CRM with AI voice agents.",
                factors: ["Number of integrations", "Data volume & processing", "Custom logic required", "API complexity"]
              },
              {
                icon: "⏱️",
                title: "Timeline & Resources",
                desc: "How quickly do you need it? What level of customization? Rush jobs cost more. Highly tailored solutions require more dev time.",
                factors: ["Project urgency", "Custom vs template work", "Testing requirements", "Team size needed"]
              },
              {
                icon: "🎯",
                title: "Business Impact",
                desc: "What ROI will this deliver? We price based on the value you get. Automating 5,000 emails/day saves more than 50/day.",
                factors: ["Scale of automation", "Time saved per month", "Revenue impact potential", "Team efficiency gains"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">Key factors:</div>
                  {item.factors.map((factor, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white rounded-2xl p-8 md:p-10 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              The bottom line
            </h3>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              Most projects range from <strong className="text-white">£2,000 to £15,000</strong> for initial build. 
              Simple automations (email sequences, basic integrations) start lower. Complex multi-channel systems 
              with AI and custom logic sit higher. We&apos;ll give you an exact quote after understanding your needs.
            </p>
          </motion.div>

        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              What&apos;s always included
            </h2>
            <p className="text-base text-gray-600">
              No matter the project size, you get the full package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {[
              { icon: "✅", title: "Discovery & Planning", desc: "Deep dive into your workflow and pain points" },
              { icon: "✅", title: "Custom Development", desc: "Tailored automation built for your business" },
              { icon: "✅", title: "Weekly Progress Updates", desc: "Never in the dark—see what we're building" },
              { icon: "✅", title: "Unlimited Revisions", desc: "Changes during development at no extra cost" },
              { icon: "✅", title: "Full Documentation", desc: "Written guides and video walkthroughs" },
              { icon: "✅", title: "Team Training", desc: "Live sessions to get your team up to speed" },
              { icon: "✅", title: "30 Days Free Support", desc: "Post-launch help included in every project" },
              { icon: "✅", title: "You Own Everything", desc: "No licensing fees, no vendor lock-in" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* EXAMPLE PROJECTS */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Example project pricing
            </h2>
            <p className="text-base text-gray-600">
              Real examples to give you a ballpark. Your quote will be custom.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            
            {[
              {
                title: "Email Automation Starter",
                scope: "Instantly integration with lead scraping, automated sequences, basic analytics",
                timeline: "1-2 weeks",
                price: "£2,500 - £4,000",
                includes: ["Apollo.io integration", "3-5 email sequences", "Supabase tracking", "Basic Retool dashboard"]
              },
              {
                title: "Voice Agent System",
                scope: "AI voice agents with Vapi, call routing, transcription, CRM integration",
                timeline: "3-4 weeks",
                price: "£6,000 - £10,000",
                includes: ["Vapi + ElevenLabs setup", "Custom call scripts", "CRM sync (Supabase)", "Analytics dashboard"]
              },
              {
                title: "Multi-Channel Outreach Platform",
                scope: "Voice + Email + WhatsApp automation with lead gen, enrichment, full analytics",
                timeline: "4-6 weeks",
                price: "£10,000 - £15,000+",
                includes: ["Full stack integration", "Google Maps scraping", "Companies House qualification", "Custom Retool dashboard", "n8n orchestration"]
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl border-2 border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {project.scope}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                        ⏱️ {project.timeline}
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-bold text-gray-900">
                      {project.price}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Fixed quote</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">Includes:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-600 shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* HOW TO GET YOUR QUOTE */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              How to get your custom quote
            </h2>
          </div>

          <div className="space-y-8">
            
            {[
              {
                step: "1",
                title: "Book a Discovery Call",
                desc: "We'll discuss your business, current workflow, pain points, and what you want to automate. This usually takes 30-45 minutes.",
                action: "Free consultation"
              },
              {
                step: "2",
                title: "We Analyze & Design",
                desc: "Our team maps out the perfect solution for your needs. We identify which tools to use, how data will flow, and what the timeline looks like.",
                action: "2-3 days turnaround"
              },
              {
                step: "3",
                title: "Get Your Fixed Quote",
                desc: "We send a detailed proposal with scope, timeline, and a fixed price. No hourly billing, no surprises. You know exactly what you're paying upfront.",
                action: "Clear, transparent pricing"
              },
              {
                step: "4",
                title: "Approve & Start",
                desc: "Like what you see? We kick off development immediately. Don't like it? No hard feelings, no fees. Simple as that.",
                action: "Zero pressure"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700 font-medium whitespace-nowrap">
                      {item.action}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Common questions
            </h2>
          </div>

          <div className="space-y-6">
            
            {[
              {
                q: "Do you charge hourly or fixed price?",
                a: "Fixed price. We quote a total amount upfront based on scope. No hourly billing, no surprise invoices."
              },
              {
                q: "What if I need changes during development?",
                a: "Unlimited revisions are included during development. We build iteratively so you can request changes as we go."
              },
              {
                q: "Are there any ongoing costs?",
                a: "Only if you want ongoing support or new features. After launch, you own everything. Optional monthly support is available but not required."
              },
              {
                q: "What if the project goes over budget?",
                a: "It won't. Our fixed quote covers the agreed scope. If you request major new features mid-project, we'll discuss pricing for those separately."
              },
              {
                q: "Do you require a deposit?",
                a: "Yes, typically 50% upfront to begin work, 50% upon completion. We're flexible for larger projects."
              },
              {
                q: "Can I get a refund if I'm not happy?",
                a: "We offer a satisfaction guarantee. If we can't deliver what we promised, you don't pay the final 50%. Simple as that."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}

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
              Ready for your custom quote?
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Book a call. We&apos;ll discuss your needs and send you a detailed proposal with transparent pricing in 2-3 days.
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
                href="/how-it-works"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 rounded-full border border-gray-600 text-sm font-medium text-white hover:border-gray-400 hover:bg-gray-900 transition-all shadow-sm hover:shadow-lg inline-flex items-center justify-center"
              >
                Learn how we work
              </motion.a>
            </div>

            <p className="text-xs text-gray-400 pt-4">
              No obligation • Free consultation • Fixed price quotes
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
