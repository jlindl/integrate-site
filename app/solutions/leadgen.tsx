"use client";

import { motion } from "framer-motion";

export default function LeadGen() {
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
            <span>10x cheaper than traditional lead databases</span>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] leading-[1.1] font-semibold tracking-tight text-gray-900"
          >
            Unlimited leads at a fraction of the cost.
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Stop paying per lead. We scrape Google Maps, Apollo, and public databases to build custom lead lists 
            for pennies. Then qualify them with Companies House and reach out through voice, email, and WhatsApp.
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
              Get your first 1,000 leads free
            </motion.a>
            <motion.a 
              href="/#contact-form"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-full border border-gray-200 text-sm font-medium text-gray-800 hover:border-gray-300 hover:bg-gray-50 bg-white transition-all duration-200 shadow-sm hover:shadow-lg"
            >
              See sample data
            </motion.a>
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
              <div className="text-3xl md:text-4xl font-semibold mb-1 text-gray-900">$0.01</div>
              <div className="text-sm text-gray-500">Per Lead</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-semibold mb-1 text-gray-900">100K+</div>
              <div className="text-sm text-gray-500">Leads/Week</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-semibold mb-1 text-gray-900">95%</div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
          </motion.div>

        </motion.div>

      </main>

      {/* LEAD SOURCES */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Where we find your leads
            </h2>
            <p className="text-base text-gray-600">
              Multiple data sources = better coverage, lower cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Google Maps Scraping
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Extract business listings by location, category, and keywords. Get phone numbers, 
                addresses, websites, and reviews automatically.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Apify</span>
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
                Apollo.io Database
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Access 275M+ contacts and 73M+ companies with detailed firmographics, 
                technographics, and intent data.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Apollo.io</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">API</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Companies House Verification
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Qualify UK businesses with official company data. Check revenue, employees, 
                directors, and filing status automatically.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Companies House API</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">GPT-4</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enrichment & Validation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Enhance raw data with Clearbit and Harmonic. Verify emails, find decision makers, 
                and add technographic data.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Clearbit</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">Harmonic</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* OUTREACH CHANNELS */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-700 mb-4">
              <span>📢</span>
              <span>Multi-channel reach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Reach them everywhere
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            
            {[
              { 
                icon: "📞", 
                title: "Voice Outreach", 
                desc: "AI voice agents call through your lead list automatically with natural conversations",
                tools: ["Vapi", "ElevenLabs"]
              },
              { 
                icon: "✉️", 
                title: "Email Campaigns", 
                desc: "Personalized email sequences with deliverability optimization and warm-up",
                tools: ["Instantly", "n8n"]
              },
              { 
                icon: "💬", 
                title: "WhatsApp Messages", 
                desc: "Direct WhatsApp outreach for higher engagement and response rates",
                tools: ["2Chat", "Twilio"]
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

      {/* HOW IT WORKS */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              How it works
            </h2>
            <p className="text-base text-gray-600">
              From raw data to qualified leads in 4 steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              { num: "1", title: "Scrape & Extract", desc: "Pull business data from Google Maps, Apollo, and public databases based on your ICP" },
              { num: "2", title: "Qualify & Enrich", desc: "Verify with Companies House, enrich with Clearbit, score with GPT-4" },
              { num: "3", title: "Personalize", desc: "Generate custom messaging for each lead based on their company data and pain points" },
              { num: "4", title: "Outreach", desc: "Deploy multi-channel campaigns through voice, email, and WhatsApp automatically" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
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
              Stop paying $2-5 per lead.
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Build unlimited custom lead lists for a fraction of the cost. Then reach out through voice, email, and WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                href="/#contact-form"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-xl"
              >
                Start building your list
              </motion.a>
              <motion.a
                href="/#contact-form"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 rounded-full border border-gray-600 text-sm font-medium text-white hover:border-gray-400 hover:bg-gray-900 transition-all shadow-sm hover:shadow-lg"
              >
                Talk to an expert
              </motion.a>
            </div>

            <p className="text-xs text-gray-400 pt-4">
              First 1,000 leads free • No credit card required • Cancel anytime
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
