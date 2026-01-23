"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import {
  HelpCircle,
  Layers,
  ArrowRight,
  BarChart3,
  Lightbulb,
  Plug,
  FileDown,
  Sparkles
} from "lucide-react";

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Resources" },
    { id: "guides", label: "FAQs" },
    { id: "integrations", label: "Integrations" },
  ];

  const resources = [
    {
      id: 2,
      category: "guides",
      title: "FAQs",
      description: "Get answers to the most common questions about AI automation, implementation, pricing, and best practices.",
      icon: HelpCircle,
      stats: "50+ Questions Answered",
      featured: false,
      link: "/resources/faqs",
      items: [
        "How does AI call handling work?",
        "What integrations are available?",
        "How long does setup take?"
      ]
    },
    {
      id: 5,
      category: "integrations",
      title: "Integration Library",
      description: "Browse our extensive library of integrations with CRMs, calendars, payment systems, and more.",
      icon: Layers,
      stats: "100+ Integrations",
      featured: false,
      link: "/resources/integration-library",
      items: [
        "Salesforce, HubSpot, Zoho CRM",
        "Google Calendar, Calendly, Cal.com",
        "Stripe, Square, PayPal"
      ]
    },
  ];

  const filteredResources = activeFilter === "all"
    ? resources
    : resources.filter(r => r.category === activeFilter);

  // Metallic silver gradient style
  const metallicStyle = {
    background: 'linear-gradient(135deg, #e8e8e8 0%, #f8f8f8 20%, #c0c0c0 40%, #e8e8e8 60%, #f5f5f5 80%, #d8d8d8 100%)',
    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.7)'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Elements - Silver/Gray theme */}
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

        {/* Animated shine lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '200%', opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            className="absolute top-1/4 left-0 w-1/3 h-px bg-linear-to-r from-transparent via-gray-400 to-transparent"
          />
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '200%', opacity: [0, 0.2, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, delay: 2 }}
            className="absolute top-1/3 left-0 w-1/2 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Metallic Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 cursor-default"
              style={metallicStyle}
            >
              {/* Shine sweep effect */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <motion.span
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-12"
                />
              </span>
              <Sparkles className="relative w-4 h-4 text-gray-600" />
              <span className="relative text-sm font-semibold text-gray-700 tracking-wide">Resource Library</span>
            </motion.div>

            {/* Title - Black & White */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-gray-900">
                Everything you need to
              </span>
              <br />
              <span className="relative">
                <span className="bg-linear-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
                  master AI automation
                </span>
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gray-400 to-transparent origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            >
              Explore case studies, guides, templates, and data-driven insights to help you
              transform your business with intelligent automation.
            </motion.p>

            {/* Stats Row - Metallic cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              {[
                { icon: BarChart3, label: "Case Studies", value: "12+" },
                { icon: Lightbulb, label: "Examples", value: "25+" },
                { icon: Plug, label: "Integrations", value: "100+" },
                { icon: FileDown, label: "Downloads", value: "20+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl cursor-default"
                  style={{
                    background: 'linear-gradient(145deg, #f5f5f5 0%, #e8e8e8 50%, #f0f0f0 100%)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.8)',
                    border: '1px solid rgba(255,255,255,0.5)'
                  }}
                >
                  <div
                    className="p-2 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, #e0e0e0 0%, #c8c8c8 100%)',
                      boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6), 0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  >
                    <stat.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs - Metallic style */}
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
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden ${activeFilter === filter.id
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
                    layoutId="activeFilter"
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

      {/* Resources Grid - Black & White theme */}
      <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500"
                    style={{
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
                      border: '1px solid rgba(0,0,0,0.08)'
                    }}
                  >
                    {/* Metallic Top Border */}
                    <div
                      className="h-1.5"
                      style={{
                        background: 'linear-gradient(90deg, #d0d0d0 0%, #f0f0f0 25%, #a0a0a0 50%, #e0e0e0 75%, #c0c0c0 100%)'
                      }}
                    />

                    <div className="p-6">
                      {/* Icon & Badge Row */}
                      <div className="flex items-start justify-between mb-5">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                          className="p-3 rounded-xl"
                          style={{
                            background: 'linear-gradient(145deg, #f5f5f5 0%, #e0e0e0 100%)',
                            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.8), 0 3px 8px rgba(0,0,0,0.1)'
                          }}
                        >
                          <Icon className="w-6 h-6 text-gray-700" />
                        </motion.div>
                        <span
                          className="text-xs font-semibold text-gray-600 px-3 py-1.5 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
                            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6)'
                          }}
                        >
                          {resource.stats}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {resource.description}
                      </p>

                      {/* Sample Items */}
                      <div className="space-y-2.5 mb-6">
                        {resource.items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div
                              className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                              style={{
                                background: 'linear-gradient(135deg, #a0a0a0 0%, #808080 100%)',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                              }}
                            />
                            <span className="text-sm text-gray-600">{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link href={resource.link}>
                        <motion.button
                          whileHover={{ x: 8 }}
                          className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-4 transition-all duration-300"
                        >
                          Explore {resource.title}
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>

                    {/* Hover Glow Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.03 }}
                      className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-300"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section - Metallic theme */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 50%, #e8e8e8 100%)'
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(180,180,180,0.4) 0%, transparent 60%)'
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Ready to see it in action?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 mb-10 max-w-xl mx-auto text-lg"
            >
              Get a personalized demo and see how AI automation can transform your business operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/#contact-form">
                <motion.button
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-4 rounded-full bg-black text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">Book a Free Demo</span>
                </motion.button>
              </Link>
              <Link href="/industry-automation">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-full font-semibold text-gray-800 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.8)',
                    border: '1px solid rgba(0,0,0,0.1)'
                  }}
                >
                  Browse Industries
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
