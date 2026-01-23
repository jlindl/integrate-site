"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import {
  Download,
  FileText,
  FileSpreadsheet,
  FileCheck,
  Presentation,
  BookOpen,
  Calculator,
  CheckCircle2,
  Search,
  Sparkles,
  Users,
  Star,
} from "lucide-react";

const downloadCategories = [
  { id: "all", label: "All Downloads" },
  { id: "templates", label: "Templates" },
  { id: "checklists", label: "Checklists" },
  { id: "guides", label: "Guides" },
  { id: "calculators", label: "Calculators" },
  { id: "presentations", label: "Presentations" },
];

const downloads = [
  {
    id: 1,
    category: "checklists",
    title: "Automation Readiness Checklist",
    description: "A comprehensive 50-point checklist to assess your business's readiness for AI automation. Covers infrastructure, processes, and team preparation.",
    icon: FileCheck,
    format: "PDF",
    pages: "8 pages",
    downloadCount: "2,340+",
    featured: true,
    items: [
      "Infrastructure assessment criteria",
      "Process documentation checklist",
      "Team readiness evaluation",
      "Integration requirements list",
    ],
  },
  {
    id: 2,
    category: "calculators",
    title: "ROI Projection Calculator",
    description: "Interactive spreadsheet to calculate your potential return on investment from implementing AI automation across different business functions.",
    icon: Calculator,
    format: "Excel",
    pages: "5 sheets",
    downloadCount: "1,890+",
    featured: true,
    items: [
      "Cost savings projections",
      "Revenue impact modeling",
      "Time savings calculator",
      "Break-even analysis",
    ],
  },
  {
    id: 3,
    category: "guides",
    title: "Implementation Planning Guide",
    description: "Step-by-step guide to planning and executing your AI automation implementation, from initial assessment to full deployment.",
    icon: BookOpen,
    format: "PDF",
    pages: "24 pages",
    downloadCount: "1,560+",
    featured: true,
    items: [
      "Phase-by-phase roadmap",
      "Stakeholder management tips",
      "Risk mitigation strategies",
      "Success metrics framework",
    ],
  },
  {
    id: 4,
    category: "templates",
    title: "Workflow Documentation Template",
    description: "Ready-to-use templates for documenting your existing workflows before automation. Essential for smooth implementation.",
    icon: FileText,
    format: "Word/PDF",
    pages: "12 pages",
    downloadCount: "980+",
    featured: false,
    items: [
      "Process flow templates",
      "Decision tree frameworks",
      "Input/output mapping",
      "Exception handling docs",
    ],
  },
  {
    id: 5,
    category: "templates",
    title: "AI Call Script Templates",
    description: "Professional call script templates for AI voice agents covering sales, support, appointment booking, and lead qualification scenarios.",
    icon: FileText,
    format: "Word/PDF",
    pages: "18 pages",
    downloadCount: "2,100+",
    featured: true,
    items: [
      "Inbound sales scripts",
      "Appointment booking flows",
      "Lead qualification questions",
      "Objection handling responses",
    ],
  },
  {
    id: 6,
    category: "checklists",
    title: "Integration Requirements Checklist",
    description: "Complete checklist for preparing your existing systems for integration with AI automation platforms.",
    icon: FileCheck,
    format: "PDF",
    pages: "6 pages",
    downloadCount: "720+",
    featured: false,
    items: [
      "CRM integration prep",
      "Calendar system requirements",
      "API documentation needs",
      "Security compliance checks",
    ],
  },
  {
    id: 7,
    category: "presentations",
    title: "Executive AI Automation Pitch Deck",
    description: "Professionally designed presentation to get stakeholder buy-in for your AI automation initiative.",
    icon: Presentation,
    format: "PowerPoint",
    pages: "20 slides",
    downloadCount: "1,340+",
    featured: true,
    items: [
      "Business case framework",
      "ROI visualization",
      "Implementation timeline",
      "Risk/benefit analysis",
    ],
  },
  {
    id: 8,
    category: "calculators",
    title: "Lead Cost Comparison Calculator",
    description: "Calculate and compare lead generation costs between traditional vendors and AI-powered extraction.",
    icon: FileSpreadsheet,
    format: "Excel",
    pages: "3 sheets",
    downloadCount: "890+",
    featured: false,
    items: [
      "Cost per lead breakdown",
      "Volume discount modeling",
      "Quality score adjustments",
      "Annual savings projection",
    ],
  },
  {
    id: 9,
    category: "guides",
    title: "Voice Agent Best Practices Guide",
    description: "Expert guide to optimizing your AI voice agents for maximum conversion rates and customer satisfaction.",
    icon: BookOpen,
    format: "PDF",
    pages: "16 pages",
    downloadCount: "1,120+",
    featured: false,
    items: [
      "Script optimization tips",
      "Voice selection guidance",
      "Fallback handling strategies",
      "Performance monitoring KPIs",
    ],
  },
  {
    id: 10,
    category: "checklists",
    title: "Go-Live Readiness Checklist",
    description: "Final checklist before launching your AI automation to ensure everything is properly configured and tested.",
    icon: FileCheck,
    format: "PDF",
    pages: "4 pages",
    downloadCount: "650+",
    featured: false,
    items: [
      "System configuration checks",
      "Integration testing verification",
      "Fallback procedures confirmed",
      "Team training completed",
    ],
  },
  {
    id: 11,
    category: "templates",
    title: "Performance Reporting Template",
    description: "Weekly and monthly reporting templates to track your AI automation performance and ROI.",
    icon: FileSpreadsheet,
    format: "Excel",
    pages: "4 sheets",
    downloadCount: "780+",
    featured: false,
    items: [
      "Weekly KPI dashboard",
      "Monthly trend analysis",
      "Conversion funnel tracking",
      "Cost savings summary",
    ],
  },
  {
    id: 12,
    category: "presentations",
    title: "Team Training Presentation",
    description: "Comprehensive training deck to onboard your team on working alongside AI automation systems.",
    icon: Presentation,
    format: "PowerPoint",
    pages: "35 slides",
    downloadCount: "920+",
    featured: false,
    items: [
      "System overview",
      "Daily workflow changes",
      "Escalation procedures",
      "Best practices & tips",
    ],
  },
];

export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDownloads = downloads.filter((download) => {
    const matchesCategory = activeCategory === "all" || download.category === activeCategory;
    const matchesSearch = download.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      download.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredDownloads = downloads.filter((d) => d.featured);

  const metallicStyle = {
    background: 'linear-gradient(135deg, #e8e8e8 0%, #f8f8f8 20%, #c0c0c0 40%, #e8e8e8 60%, #f5f5f5 80%, #d8d8d8 100%)',
    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.7)'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-100 via-zinc-50 to-white" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(161,161,170,0.3) 0%, rgba(240,240,240,0.2) 50%, transparent 70%)'
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-6"
            >
              <Link href="/resources" className="hover:text-black transition-colors">
                Resources
              </Link>
              <span>/</span>
              <span className="text-black font-medium">Downloads</span>
            </motion.div>

            {/* Badge */}
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
              <Download className="relative w-4 h-4 text-zinc-600" />
              <span className="relative text-sm font-semibold text-zinc-700 tracking-wide">Free Downloads</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-black">Templates, guides &</span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-600 via-zinc-400 to-zinc-600">
                free resources
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-zinc-600 max-w-2xl mx-auto mb-10"
            >
              Download free templates, checklists, calculators, and guides to help you plan
              and implement your AI automation strategy successfully.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10"
            >
              {[
                { icon: FileText, value: "20+", label: "Free Downloads" },
                { icon: Users, value: "15,000+", label: "Downloads" },
                { icon: Star, value: "4.9", label: "Avg Rating" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-xl"
                    style={{
                      background: 'linear-gradient(145deg, #f5f5f5 0%, #e0e0e0 100%)',
                      boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6), 0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  >
                    <stat.icon className="w-5 h-5 text-zinc-700" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-black">{stat.value}</p>
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full md:w-80"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search downloads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-zinc-400 transition-all"
              />
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto"
            >
              {downloadCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeCategory === category.id
                      ? "text-white"
                      : "text-zinc-600 hover:text-black"
                    }`}
                  style={activeCategory !== category.id ? {
                    background: 'linear-gradient(145deg, #f8f8f8 0%, #e8e8e8 100%)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(200,200,200,0.4)'
                  } : {}}
                >
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategoryDownloads"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-16 bg-linear-to-b from-white to-zinc-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="p-2 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #e0e0e0 0%, #c8c8c8 100%)',
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6), 0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <Sparkles className="w-5 h-5 text-zinc-700" />
              </div>
              <h2 className="text-2xl font-bold text-black">Most Popular Downloads</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDownloads.slice(0, 3).map((download, index) => {
                const Icon = download.icon;
                return (
                  <motion.div
                    key={download.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-white rounded-2xl overflow-hidden"
                    style={{
                      boxShadow: '0 4px 25px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)',
                      border: '1px solid rgba(0,0,0,0.06)'
                    }}
                  >
                    {/* Metallic Top Accent */}
                    <div
                      className="h-1.5"
                      style={{
                        background: 'linear-gradient(90deg, #b0b0b0 0%, #e0e0e0 25%, #909090 50%, #d0d0d0 75%, #a0a0a0 100%)'
                      }}
                    />

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.4 }}
                          className="p-3 rounded-xl"
                          style={{
                            background: 'linear-gradient(145deg, #f5f5f5 0%, #e0e0e0 100%)',
                            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.8), 0 3px 8px rgba(0,0,0,0.1)'
                          }}
                        >
                          <Icon className="w-6 h-6 text-zinc-700" />
                        </motion.div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
                            {download.format}
                          </span>
                          <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
                            {download.pages}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-zinc-700 transition-colors">
                        {download.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                        {download.description}
                      </p>

                      {/* Items Preview */}
                      <div className="space-y-2 mb-5">
                        {download.items.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                            <span className="text-xs text-zinc-600">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                          <Download className="w-3.5 h-3.5" />
                          <span>{download.downloadCount} downloads</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Downloads Grid */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {activeCategory === "all" && searchQuery === "" && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-black mb-8"
            >
              All Downloads
            </motion.h2>
          )}

          {filteredDownloads.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-zinc-400" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">No downloads found</h3>
              <p className="text-zinc-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {filteredDownloads.map((download, index) => {
                  const Icon = download.icon;
                  return (
                    <motion.div
                      key={download.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="group relative bg-white rounded-xl p-5 flex gap-4"
                      style={{
                        boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                        border: '1px solid rgba(0,0,0,0.06)'
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="shrink-0 p-3 rounded-xl h-fit"
                        style={{
                          background: 'linear-gradient(145deg, #f5f5f5 0%, #e8e8e8 100%)',
                          boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.8), 0 2px 6px rgba(0,0,0,0.08)'
                        }}
                      >
                        <Icon className="w-5 h-5 text-zinc-600" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-base font-semibold text-black group-hover:text-zinc-700 transition-colors">
                            {download.title}
                          </h3>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[10px] font-medium text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded">
                              {download.format}
                            </span>
                            <span className="text-[10px] font-medium text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded">
                              {download.pages}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-zinc-600 line-clamp-2 mb-3">
                          {download.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-zinc-400">
                            <Download className="w-3 h-3" />
                            <span>{download.downloadCount}</span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-lg hover:bg-zinc-800 transition-colors"
                          >
                            <Download className="w-3 h-3" />
                            Download
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Request Section */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Can&apos;t find what you need?
            </h2>
            <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
              We&apos;re constantly adding new resources. Let us know what templates or guides
              would help your business and we&apos;ll prioritize creating them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact-form">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-all shadow-lg"
                >
                  Request a Resource
                </motion.button>
              </Link>
              <Link href="/resources">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full font-medium text-black transition-all"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.08)'
                  }}
                >
                  Browse All Resources
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 mb-8"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-sm text-zinc-300">Ready to implement?</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Turn these resources into results
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
              Our team can help you implement AI automation using these templates and guides.
              Book a free consultation to get started.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact-form">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-100 transition-all shadow-lg"
                >
                  Book a Free Consultation
                </motion.button>
              </Link>
              <Link href="/automation-services">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full border border-zinc-600 text-white font-medium hover:border-zinc-400 hover:bg-zinc-900 transition-all"
                >
                  View Our Solutions
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
