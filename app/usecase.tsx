"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, MouseEvent } from "react";

const workflows = [
  {
    id: 1,
    title: "Voice Agent Outbound",
    subtitle: "AI-powered cold calling",
    icon: "📞",
    iconBg: "bg-linear-to-br from-blue-600 to-blue-700",
    channels: [
      { name: "Data Scraping", detail: "Apollo.io + n8n", priority: undefined },
      { name: "AI Voice", detail: "Vapi + ElevenLabs", priority: undefined },
      { name: "Custom Scripts", detail: "GPT-4 personalization", priority: undefined }
    ]
  },
  {
    id: 2,
    title: "Email Campaigns",
    subtitle: "Automated cold outreach",
    icon: "✉️",
    iconBg: "bg-linear-to-br from-purple-600 to-purple-700",
    channels: [
      { name: "Apollo.io", priority: 1, detail: undefined },
      { name: "Clearbit", priority: 2, detail: undefined },
      { name: "Instantly", priority: 3, detail: undefined }
    ]
  },
  {
    id: 3,
    title: "WhatsApp Automation",
    subtitle: "Multi-touch messaging",
    icon: "💬",
    iconBg: "bg-linear-to-br from-green-600 to-green-700",
    channels: [
      { name: "Lead Scraping", detail: "n8n workflows", priority: undefined },
      { name: "Data Enrichment", detail: "Apollo + Harmonic", priority: undefined },
      { name: "2Chat Routing", detail: "Smart sequences", priority: undefined }
    ]
  },
  {
    id: 4,
    title: "CRM Management",
    subtitle: "Automated pipeline tracking",
    icon: "📊",
    iconBg: "bg-linear-to-br from-orange-600 to-orange-700",
    channels: [
      { name: "Lead Qualification", detail: "GPT-4 scoring", priority: undefined },
      { name: "Supabase Sync", detail: "Real-time updates", priority: undefined },
      { name: "Retool Dashboard", detail: "Performance review", priority: undefined }
    ]
  }
];

const channelDetails: Record<number, {
  title: string;
  user: string;
  description: string;
  platform: string;
  icon: string;
  stats: Array<{ label: string; value: string }>;
}> = {
  0: {
    title: "AI Voice Agent Campaign",
    user: "Outbound Automation",
    description: "Data scraped from Apollo, enriched through waterfall, and called automatically with natural AI voices. Custom scripts adapt to each prospect in real-time.",
    platform: "Vapi + ElevenLabs + Apollo.io",
    icon: "🎙️",
    stats: [
      { label: "Daily Calls", value: "250-500" },
      { label: "Connect Rate", value: "38.4%" },
      { label: "Voice Model", value: "ElevenLabs Turbo" },
      { label: "Avg Duration", value: "2.8 mins" }
    ]
  },
  1: {
    title: "Cold Email Sequences",
    user: "Email Automation System",
    description: "Leads scraped from multiple sources, enriched with company & contact data, then sent through personalized 7-touch sequences via Instantly.ai",
    platform: "Apollo → Clearbit → Instantly",
    icon: "📨",
    stats: [
      { label: "Daily Volume", value: "5,000+ emails" },
      { label: "Deliverability", value: "97.3%" },
      { label: "Open Rate", value: "43.2%" },
      { label: "Reply Rate", value: "8.7%" }
    ]
  },
  2: {
    title: "WhatsApp Outreach Pipeline",
    user: "Messaging Automation",
    description: "Prospects scraped via n8n, qualified through AI scoring, enriched with firmographic data, then engaged through 2Chat sequences with smart reply detection.",
    platform: "n8n + Apollo + 2Chat",
    icon: "📱",
    stats: [
      { label: "Messages/Day", value: "1,200+" },
      { label: "Response Rate", value: "31.5%" },
      { label: "Avg Response", value: "< 4 hours" },
      { label: "Conversion", value: "12.3%" }
    ]
  },
  3: {
    title: "Automated CRM Pipeline",
    user: "Lead Management System",
    description: "All inbound and outbound leads automatically qualified via GPT-4, scored on 15+ criteria, synced to Supabase, and reviewed through custom Retool dashboards.",
    platform: "GPT-4 + Supabase + Retool",
    icon: "🎯",
    stats: [
      { label: "Leads/Month", value: "2,847" },
      { label: "Auto-Qualified", value: "94.3%" },
      { label: "Hot Leads", value: "23.1%" },
      { label: "Pipeline Value", value: "$487K" }
    ]
  }
};

export default function UseCase() {
  const [activeWorkflow, setActiveWorkflow] = useState(1);

  // 3D Tilt effect hook
  const useTilt = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
  };

  const detailTilt = useTilt();

  return (
    <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-24 md:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 mb-6 shadow-lg backdrop-blur-sm"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex h-2 w-2 rounded-full bg-blue-500"
            />
            <span>Complete automation workflow</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-gray-800 to-gray-900">
              Complete automation workflows
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "140px", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-linear-to-r from-transparent via-black to-transparent rounded-full mx-auto mb-6"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            From data scraping to qualification — automated outreach across voice, email, 
            and WhatsApp with full CRM integration
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Side - Workflow Steps */}
          <div className="relative space-y-5">
            {/* Animated vertical connector line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 112px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-[26px] top-14 w-0.5 bg-linear-to-b from-blue-200 via-purple-300 to-blue-200 z-0"
            >
              <motion.div
                animate={{ y: [0, 200, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="w-1.5 h-8 bg-linear-to-b from-transparent via-blue-500 to-transparent rounded-full absolute -left-0.5 top-0"
              />
            </motion.div>
            
            {workflows.map((workflow, index) => (
              <motion.button
                key={workflow.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  scale: 1.03,
                  x: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveWorkflow(index)}
                className="relative z-10 w-full"
              >
                <motion.div 
                  animate={activeWorkflow === index ? {
                    boxShadow: [
                      "0 8px 30px rgba(0,0,0,0.12)",
                      "0 12px 40px rgba(0,0,0,0.15)",
                      "0 8px 30px rgba(0,0,0,0.12)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`bg-white rounded-2xl border-2 p-6 transition-all duration-300 text-left overflow-hidden relative ${
                    activeWorkflow === index
                      ? 'border-black shadow-[0_8px_30px_rgba(0,0,0,0.12)] scale-[1.02]'
                      : 'border-gray-200 hover:border-gray-400 hover:shadow-lg'
                  }`}
                >
                  {/* Animated gradient overlay for active card */}
                  {activeWorkflow === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-purple-50/50 pointer-events-none"
                    />
                  )}
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`${workflow.iconBg} w-[52px] h-[52px] rounded-xl flex items-center justify-center text-white text-2xl shrink-0 shadow-lg`}>
                      {workflow.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold text-gray-900 mb-1">
                        {workflow.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                          {workflow.subtitle}
                        </span>
                      </div>

                      {/* Channels/Details */}
                      <div className="space-y-1.5">
                        {workflow.channels.map((channel, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-600">
                            <span className="font-medium text-gray-400">{channel.priority || idx + 1}</span>
                            {channel.priority && <span className="text-lg leading-none">
                              {channel.priority === 1 ? '⚠️' : channel.priority === 2 ? 'ℹ️' : '▶️'}
                            </span>}
                            <span className="font-medium text-gray-900">{channel.name}</span>
                            {channel.detail && <span className="text-gray-500">• {channel.detail}</span>}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Three dots menu (non-button to avoid nested button) */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-gray-600 p-1 transition-colors relative z-10"
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <circle cx="8" cy="3" r="1.5"/>
                        <circle cx="8" cy="8" r="1.5"/>
                        <circle cx="8" cy="13" r="1.5"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.button>
            ))}
          </div>

          {/* Right Side - Detail Panel */}
          <motion.div
            key={activeWorkflow}
            initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{
              transformStyle: "preserve-3d",
              rotateX: detailTilt.rotateX,
              rotateY: detailTilt.rotateY,
            }}
            onMouseMove={detailTilt.handleMouseMove}
            onMouseLeave={detailTilt.handleMouseLeave}
            className="bg-linear-to-br from-white via-gray-50 to-white rounded-3xl border-2 border-black shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-shadow duration-500"
          >
            {/* Header */}
            <div className="p-8 border-b border-gray-200 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
              {/* Animated background pattern */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-2xl bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center text-3xl shadow-lg border border-gray-300"
                >
                  {channelDetails[activeWorkflow].icon}
                </motion.div>
                <div className="flex-1">
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-gray-600 mb-1 font-medium"
                  >
                    {channelDetails[activeWorkflow].user}
                  </motion.p>
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-2xl font-bold text-gray-900 mb-2"
                  >
                    {channelDetails[activeWorkflow].title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    {channelDetails[activeWorkflow].description}
                  </motion.p>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex items-center gap-2 text-sm relative z-10"
              >
                <span className="text-gray-500 font-medium">Platform:</span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold text-xs border border-blue-200 shadow-sm"
                >
                  {channelDetails[activeWorkflow].platform}
                </motion.span>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="p-8">
              <div className="grid grid-cols-2 gap-6">
                {channelDetails[activeWorkflow].stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: idx * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-linear-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 p-6 hover:border-gray-400 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  >
                    {/* Shine effect on hover */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                    />
                    
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold group-hover:text-gray-700 transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-black transition-colors">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Channel badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-semibold">
                  Active Channels
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: "📞", label: "Voice", color: "blue" },
                    { icon: "📧", label: "Email", color: "purple" },
                    { icon: "💬", label: "WhatsApp", color: "green" }
                  ].map((channel, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + idx * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${channel.color}-50 border-2 border-${channel.color}-200 text-sm font-semibold text-${channel.color}-700 cursor-pointer hover:bg-${channel.color}-100 transition-colors shadow-sm`}
                    >
                      <span className="text-lg">{channel.icon}</span>
                      {channel.label}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ scale: 1.02 }}
                className="mt-6 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg"
              >
                <motion.span 
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-flex h-3 w-3 rounded-full bg-green-500"
                />
                <span className="text-sm font-bold text-green-700">
                  Automation Active
                </span>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="px-8 py-5 bg-linear-to-r from-gray-50 to-white border-t border-gray-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Powered by</span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="font-bold text-gray-900 cursor-pointer"
                >
                  Integrate
                </motion.span>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group"
              >
                View Details 
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-24"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-6 font-medium"
          >
            Ready to see this workflow in your business?
          </motion.p>
          <motion.a
            href="/#contact-form"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-base font-semibold hover:bg-gray-900 transition-colors duration-200 shadow-xl"
          >
            Schedule your automation demo
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
