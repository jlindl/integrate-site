"use client";

import { motion } from "framer-motion";

export default function EmailWhatsApp() {
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
            <span>5,000+ emails & 1,200+ messages per day on autopilot</span>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] leading-[1.1] font-semibold tracking-tight text-gray-900"
          >
            Multi-channel outreach that actually converts.
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Automated email campaigns through Instantly with perfect deliverability. WhatsApp follow-ups 
            through 2Chat for leads who don&apos;t respond. All orchestrated by n8n.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center justify-center pt-4"
          >
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors duration-200 shadow-md hover:shadow-xl"
            >
              Launch your first campaign
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full border border-gray-200 text-sm font-medium text-gray-800 hover:border-gray-300 hover:bg-gray-50 bg-white transition-all duration-200 shadow-sm hover:shadow-lg"
            >
              See example campaigns
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
            }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-gray-200"
          >
            <div>
              <div className="text-3xl md:text-4xl font-semibold mb-1 text-gray-900">97.3%</div>
              <div className="text-sm text-gray-500">Deliverability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-semibold mb-1 text-gray-900">31.5%</div>
              <div className="text-sm text-gray-500">WhatsApp Response</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-semibold mb-1 text-gray-900">24/7</div>
              <div className="text-sm text-gray-500">Automated</div>
            </div>
          </motion.div>

        </motion.div>

      </main>

      {/* EMAIL CAMPAIGNS */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Email campaigns that land in inbox
            </h2>
            <p className="text-base text-gray-600">
              Powered by Instantly with automatic warm-up and deliverability optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Instantly Integration
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Send 5,000+ emails per day with rotating domains, automatic warm-up, 
                and AI-powered subject line optimization for maximum open rates.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Instantly</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">n8n</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personalization at Scale
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                GPT-4 generates unique, personalized email copy for each prospect based on 
                company data, recent news, and pain points.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">GPT-4</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">n8n</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Automated Follow-up Sequences
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Multi-touch campaigns with 3-7 follow-ups based on engagement. 
                Opens, clicks, and replies trigger different sequences automatically.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Instantly</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Supabase</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-time Analytics
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Track opens, clicks, replies, and conversions in real-time. 
                Retool dashboards show campaign performance and ROI instantly.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Retool</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Supabase</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* WHATSAPP FOLLOW-UPS */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-700 mb-4">
              <span>💬</span>
              <span>31.5% response rate</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              WhatsApp follow-ups for non-responders
            </h2>
            <p className="text-base text-gray-600">
              Leads who ignore email often reply on WhatsApp. Automatic follow-up through 2Chat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            
            {[
              { 
                icon: "🚀", 
                title: "Automatic Triggers", 
                desc: "If no email response after 3 days, automatically send WhatsApp message",
                tools: ["n8n", "2Chat"]
              },
              { 
                icon: "💬", 
                title: "Conversational Flow", 
                desc: "Natural WhatsApp conversations with AI responses for common questions",
                tools: ["2Chat", "GPT-4"]
              },
              { 
                icon: "📅", 
                title: "Meeting Booking", 
                desc: "Prospects can book meetings directly through WhatsApp with calendar integration",
                tools: ["2Chat", "Google Calendar"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tools.map((tool, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CAMPAIGN WORKFLOW */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Complete campaign workflow
            </h2>
            <p className="text-base text-gray-600">
              From lead generation to meeting booked, all on autopilot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {[
              { num: "1", title: "Generate Leads", desc: "Scrape and enrich leads from your target ICP" },
              { num: "2", title: "Email Campaign", desc: "Launch personalized email sequence through Instantly" },
              { num: "3", title: "Track Engagement", desc: "Monitor opens, clicks, and replies in real-time" },
              { num: "4", title: "WhatsApp Follow-up", desc: "Auto-message non-responders via 2Chat after 3 days" },
              { num: "5", title: "Book Meeting", desc: "Interested leads book directly through calendar link" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full">
                  <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-base font-bold mb-3">
                    {step.num}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300" />
                )}
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* EXAMPLE CAMPAIGN */}
      <section className="w-full bg-white py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Example campaign
            </h2>
            <p className="text-base text-gray-600">
              See how a typical multi-touch campaign flows.
            </p>
          </div>

          <div className="space-y-6">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  Day 1
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Initial Email</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    &quot;Hi [Name], I noticed [Company] recently [trigger event]. Companies like yours typically 
                    struggle with [pain point]. We&apos;ve helped similar businesses [result]. Worth a quick chat?&quot;
                  </p>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">Instantly</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  Day 3
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Email Follow-up #1</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    &quot;Following up on my previous email. I&apos;d love to share a quick case study of how we helped 
                    [similar company] achieve [specific result]. 5 minutes of your time?&quot;
                  </p>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">Instantly</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  Day 6
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">WhatsApp Follow-up</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    &quot;Hi [Name]! Sent you a couple emails about [solution]. Would this be helpful for 
                    [Company]? Happy to share a quick video demo 👀&quot;
                  </p>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">2Chat</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  Day 9
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Email Follow-up #2</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    &quot;Last email from me! Just wanted to share this [resource/case study]. If timing isn&apos;t right 
                    now, totally understand. Here&apos;s my calendar if you want to chat later: [link]&quot;
                  </p>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">Instantly</span>
                </div>
              </div>
            </motion.div>

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
              Ready to automate your outreach?
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Launch email campaigns through Instantly and WhatsApp follow-ups through 2Chat. All orchestrated automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-xl"
              >
                Launch your first campaign
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 rounded-full border border-gray-600 text-sm font-medium text-white hover:border-gray-400 hover:bg-gray-900 transition-all shadow-sm hover:shadow-lg"
              >
                See campaign examples
              </motion.button>
            </div>

            <p className="text-xs text-gray-400 pt-4">
              Free campaign setup • Unlimited sending • Cancel anytime
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
