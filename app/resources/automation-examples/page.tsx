"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import { 
  Workflow, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Mail, 
  Database, 
  ArrowRight, 
  Zap, 
  GitGraph, 
  Share2, 
  Download,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function AutomationExamplesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Workflows" },
    { id: "inbound", label: "Inbound Calls" },
    { id: "outbound", label: "Outbound Sales" },
    { id: "operations", label: "Operations" },
    { id: "support", label: "Customer Support" },
  ];

  const examples = [
    {
      id: 1,
      category: "inbound",
      title: "Inbound Lead Qualification & Booking",
      description: "Automatically answer inbound calls, qualify leads against your criteria, and book appointments directly into your calendar.",
      stats: [
        { label: "Avg. Duration", value: "2 min" },
        { label: "Conversion", value: "35%" },
        { label: "Tools", value: "Vapi, Cal.com" }
      ],
      benefits: [
        "Zero missed calls 24/7",
        "Instant CRM sync",
        "Automatic SMS follow-up"
      ]
    },
    {
      id: 2,
      category: "outbound",
      title: "Cold Lead Reactivation Campaign",
      description: "Re-engage old leads with a personalised outbound call campaign. The AI introduces itself, references past interactions, and books a new meeting.",
      stats: [
        { label: "Connect Rate", value: "45%" },
        { label: "Booking Rate", value: "12%" },
        { label: "Tools", value: "Vapi, HubSpot" }
      ],
      benefits: [
        "Scalable outreach",
        "Natural conversation flow",
        "Automatic disposition tagging"
      ]
    },
    {
      id: 3,
      category: "operations",
      title: "Appointment Reminder & Confirmation",
      description: "Reduce no-shows by calling clients 24 hours before their appointment to confirm attendance or reschedule if necessary.",
      stats: [
        { label: "No-show Reduction", value: "80%" },
        { label: "Reschedule Rate", value: "15%" },
        { label: "Tools", value: "Make, Google Cal" }
      ],
      benefits: [
        "Proactive schedule management",
        "Reduced revenue loss",
        "Improved client experience"
      ]
    },
    {
      id: 4,
      category: "support",
      title: "Tier 1 Support & Triage",
      description: "Handle common support queries instantly. Complex issues are summarised and escalated to the correct human department with full context.",
      stats: [
        { label: "Resolution Rate", value: "65%" },
        { label: "Triage Accuracy", value: "99%" },
        { label: "Tools", value: "Zendesk, OpenAI" }
      ],
      benefits: [
        "Instant response time",
        "Reduced support costs",
        "24/7 availability"
      ]
    },
    {
      id: 5,
      category: "inbound",
      title: "Real Estate Property Enquiry",
      description: "Handle property enquiries, answer specific questions about listings from a knowledge base, and book viewings.",
      stats: [
        { label: "Viewings Booked", value: "+40%" },
        { label: "Info Accuracy", value: "100%" },
        { label: "Tools", value: "Reapit, Vapi" }
      ],
      benefits: [
        "Instant property details",
        "Qualification of buyers",
        "After-hours lead capture"
      ]
    },
    {
      id: 6,
      category: "operations",
      title: "Post-Service Feedback Collection",
      description: "Call customers after a service is completed to collect feedback, ratings, and testimonials automatically.",
      stats: [
        { label: "Response Rate", value: "28%" },
        { label: "Avg. Rating", value: "4.8/5" },
        { label: "Tools", value: "Airtable, Vapi" }
      ],
      benefits: [
        "Immediate quality control",
        "Automated review requests",
        "Churn prevention alerts"
      ]
    }
  ];

  const filteredExamples = activeFilter === "all" 
    ? examples 
    : examples.filter(e => e.category === activeFilter);

  // Metallic style
  const metallicStyle = {
    background: 'linear-gradient(135deg, #e8e8e8 0%, #f8f8f8 20%, #c0c0c0 40%, #e8e8e8 60%, #f5f5f5 80%, #d8d8d8 100%)',
    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.2)',
    border: '1px solid rgba(255,255,255,0.7)'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-b from-gray-100 via-gray-50 to-white" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(200,200,200,0.5) 0%, rgba(240,240,240,0.3) 50%, transparent 70%)'
          }}
        />
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Metallic Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 cursor-default"
              style={metallicStyle}
            >
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <motion.span 
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-12"
                />
              </span>
              <GitGraph className="relative w-4 h-4 text-gray-600" />
              <span className="relative text-sm font-semibold text-gray-700 tracking-wide">Workflow Library</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
              Automation
              <span className="relative ml-3">
                <span className="bg-linear-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
                  Examples
                </span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gray-400 to-transparent origin-left"
                />
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Explore our library of pre-built automation workflows. See exactly how we connect 
              AI voice agents with your favourite tools to drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[73px] z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden ${
                  activeFilter === filter.id
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                style={activeFilter !== filter.id ? {
                  background: 'linear-gradient(145deg, #f8f8f8 0%, #e8e8e8 100%)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08), inset 0 1px 2px rgba(255,255,255,0.8)',
                  border: '1px solid rgba(200,200,200,0.5)'
                } : {}}
              >
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeExampleFilter"
                    className="absolute inset-0 bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredExamples.map((example, index) => (
                <motion.div
                  key={example.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(example.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 flex flex-col"
                  style={{
                    boxShadow: hoveredCard === example.id 
                      ? '0 25px 50px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)'
                      : '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.06)'
                  }}
                >
                  {/* n8n Workflow Screenshot Placeholder */}
                  <div className="relative h-64 bg-gray-100 overflow-hidden border-b border-gray-200">
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
                        backgroundImage: 'radial-gradient(#cfcfcf 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                    />
                    
                    {/* Placeholder Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                      <motion.div
                        animate={{ 
                          y: hoveredCard === example.id ? -5 : 0,
                          scale: hoveredCard === example.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.4 }}
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3"
                        style={{
                          background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.8)'
                        }}
                      >
                        <Workflow className="w-10 h-10 text-gray-300" />
                      </motion.div>
                      <p className="text-sm font-medium uppercase tracking-wider opacity-60">n8n Workflow Screenshot</p>
                    </div>

                    {/* Overlay Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-xs border border-gray-200">
                        {example.category.charAt(0).toUpperCase() + example.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex-1 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                        {example.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {example.description}
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {example.stats.map((stat, i) => (
                        <div 
                          key={i}
                          className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center"
                        >
                          <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-2 mb-8 flex-1">
                      {example.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-auto">
                      <Link href="/#contact-form" className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded-xl bg-black text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Book a Call
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        title="Share"
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 50%, #e8e8e8 100%)'
          }}
        />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 mb-6">
              <Zap className="w-8 h-8 text-gray-700" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to build this for your business?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              We can deploy these exact workflows for you in under 48 hours, customised to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact-form">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Implementation Call
                </motion.button>
              </Link>
              <Link href="/resources">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Back to Resources
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
