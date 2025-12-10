"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import { 
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Phone,
  Building2,
  Quote,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Calendar,
  MessageSquare,
  Zap,
  Target,
  PoundSterling
} from "lucide-react";

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Industries" },
    { id: "finance", label: "Finance & Lending" },
    { id: "property", label: "Property" },
    { id: "services", label: "Professional Services" },
    { id: "trades", label: "Trades & Construction" },
  ];

  const caseStudies = [
    {
      id: 1,
      category: "finance",
      industry: "Mortgage Brokers",
      company: "Premier Mortgage Solutions",
      title: "340% increase in lead conversion with AI-powered call handling",
      description: "A leading UK mortgage broker transformed their lead response time from 4 hours to under 30 seconds, dramatically improving conversion rates and client satisfaction.",
      image: "/case-studies/mortgage.jpg",
      stats: [
        { label: "Lead Conversion", value: "+340%", icon: TrendingUp },
        { label: "Response Time", value: "30 sec", icon: Clock },
        { label: "Calls Handled", value: "2,400/mo", icon: Phone },
      ],
      results: [
        "Reduced response time from 4 hours to 30 seconds",
        "Automated qualification of 85% of inbound enquiries",
        "£180k additional revenue in first 6 months",
        "NPS score improved from 42 to 78"
      ],
      testimonial: {
        quote: "Integrate transformed how we handle leads. We&apos;re now capturing opportunities we used to miss completely. The ROI was evident within the first month.",
        author: "James Mitchell",
        role: "Managing Director"
      },
      featured: true,
      readTime: "5 min read"
    },
    {
      id: 2,
      category: "services",
      industry: "Cleaning Companies",
      company: "Sparkle Commercial Cleaning",
      title: "80% of bookings now fully automated with zero manual intervention",
      description: "This commercial cleaning company eliminated booking bottlenecks and reduced admin overhead by 60% while scaling their operations across three new regions.",
      image: "/case-studies/cleaning.jpg",
      stats: [
        { label: "Bookings Automated", value: "80%", icon: Calendar },
        { label: "Admin Time Saved", value: "60%", icon: Clock },
        { label: "New Regions", value: "3", icon: Building2 },
      ],
      results: [
        "80% of bookings completed without human intervention",
        "Scaled from 1 to 4 regions without adding admin staff",
        "24/7 booking availability increased enquiries by 45%",
        "Customer satisfaction rating improved to 4.9/5"
      ],
      testimonial: {
        quote: "We were drowning in admin before Integrate. Now our team focuses on service delivery while the AI handles everything from initial enquiry to booking confirmation.",
        author: "Sarah Thompson",
        role: "Operations Director"
      },
      featured: true,
      readTime: "4 min read"
    },
    {
      id: 3,
      category: "services",
      industry: "Recruitment Agencies",
      company: "TalentFirst Recruitment",
      title: "Response time reduced to 30 seconds, placing 40% more candidates",
      description: "A specialist IT recruitment agency revolutionised their candidate engagement, reducing time-to-placement and winning contracts from larger competitors.",
      image: "/case-studies/recruitment.jpg",
      stats: [
        { label: "Placements", value: "+40%", icon: Users },
        { label: "Response Time", value: "30 sec", icon: Clock },
        { label: "Time-to-Fill", value: "-35%", icon: Target },
      ],
      results: [
        "First response to candidates in under 30 seconds",
        "40% increase in successful placements year-on-year",
        "Won 3 enterprise contracts previously lost to larger agencies",
        "Consultant productivity increased by 55%"
      ],
      testimonial: {
        quote: "Speed wins in recruitment. Integrate gave us enterprise-level response capabilities that helped us compete with agencies 10x our size.",
        author: "Michael Chen",
        role: "Founder & CEO"
      },
      featured: false,
      readTime: "4 min read"
    },
    {
      id: 4,
      category: "finance",
      industry: "Credit & Lending",
      company: "QuickCredit Finance",
      title: "Loan application processing increased by 200% with AI qualification",
      description: "A consumer lending company automated their initial loan qualification process, dramatically increasing throughput while maintaining compliance standards.",
      image: "/case-studies/lending.jpg",
      stats: [
        { label: "Applications", value: "+200%", icon: BarChart3 },
        { label: "Qualification Time", value: "2 min", icon: Clock },
        { label: "Compliance Rate", value: "100%", icon: CheckCircle2 },
      ],
      results: [
        "Processing capacity increased from 50 to 150 applications daily",
        "Initial qualification reduced from 45 minutes to 2 minutes",
        "Zero compliance issues since implementation",
        "Cost per acquisition reduced by 45%"
      ],
      testimonial: {
        quote: "The AI handles complex qualification criteria flawlessly. We&apos;ve scaled our lending operation without scaling our compliance risk.",
        author: "David Williams",
        role: "Head of Operations"
      },
      featured: false,
      readTime: "5 min read"
    },
    {
      id: 5,
      category: "property",
      industry: "Estate Agents",
      company: "Metro Property Group",
      title: "Viewings increased 65% with instant response to property enquiries",
      description: "A multi-branch estate agency transformed their lead response, ensuring no enquiry goes unanswered even outside business hours.",
      image: "/case-studies/estate.jpg",
      stats: [
        { label: "Viewings", value: "+65%", icon: Building2 },
        { label: "After-Hours Leads", value: "+120%", icon: Clock },
        { label: "Branches", value: "8", icon: Target },
      ],
      results: [
        "65% increase in property viewings booked",
        "120% more leads captured outside business hours",
        "Rolled out across all 8 branches in 3 weeks",
        "Vendor satisfaction scores up 40%"
      ],
      testimonial: {
        quote: "Property moves fast. Missing a call used to mean losing a sale. Now we capture every opportunity, 24/7, across all our branches.",
        author: "Emma Roberts",
        role: "Regional Director"
      },
      featured: true,
      readTime: "4 min read"
    },
    {
      id: 6,
      category: "trades",
      industry: "Construction & Trades",
      company: "BuildRight Contractors",
      title: "Quote requests up 85% with AI-powered intake and scheduling",
      description: "A growing construction firm automated their quote request process, capturing more leads and reducing the time from enquiry to site visit.",
      image: "/case-studies/construction.jpg",
      stats: [
        { label: "Quote Requests", value: "+85%", icon: MessageSquare },
        { label: "Site Visit Booking", value: "Same Day", icon: Calendar },
        { label: "Revenue Growth", value: "+60%", icon: PoundSterling },
      ],
      results: [
        "85% increase in qualified quote requests",
        "Same-day site visit scheduling automated",
        "60% revenue growth in 12 months",
        "Admin workload reduced by 70%"
      ],
      testimonial: {
        quote: "We were missing calls on site all the time. Now every enquiry is handled professionally and we&apos;re booking jobs while we&apos;re still on the tools.",
        author: "Tom Bradley",
        role: "Owner"
      },
      featured: false,
      readTime: "4 min read"
    },
  ];

  const filteredStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(s => s.category === activeFilter);

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
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-b from-gray-100 via-gray-50 to-white" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(200,200,200,0.5) 0%, rgba(240,240,240,0.3) 50%, transparent 70%)'
          }}
        />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="absolute h-px bg-linear-to-r from-transparent via-gray-400 to-transparent"
              style={{ top: `${15 + i * 15}%`, width: '100%' }}
            />
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
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
              <BarChart3 className="relative w-4 h-4 text-gray-600" />
              <span className="relative text-sm font-semibold text-gray-700 tracking-wide">Real Results, Real Businesses</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-gray-900">Case Studies</span>
              <br />
              <span className="relative">
                <span className="bg-linear-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
                  that prove the ROI
                </span>
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
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            >
              Discover how businesses across the UK are using AI automation to capture more leads, 
              reduce costs, and scale operations without scaling headcount.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: "340%", label: "Avg. Lead Increase" },
                { value: "30s", label: "Response Time" },
                { value: "60%", label: "Cost Reduction" },
                { value: "4.9★", label: "Client Rating" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-2xl cursor-default"
                  style={{
                    background: 'linear-gradient(145deg, #f5f5f5 0%, #e8e8e8 100%)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08), inset 0 1px 2px rgba(255,255,255,0.8)',
                    border: '1px solid rgba(255,255,255,0.5)'
                  }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[73px] z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
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
                    layoutId="activeCaseFilter"
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

      {/* Case Studies Grid */}
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
              {filteredStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(study.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                    study.featured ? "lg:col-span-2" : ""
                  }`}
                  style={{
                    boxShadow: hoveredCard === study.id 
                      ? '0 25px 50px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)'
                      : '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.06)'
                  }}
                >
                  {/* Featured Badge */}
                  {study.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-5 left-5 z-20 flex items-center justify-center"
                      style={{
                        // fixed pill container — size must not change
                        width: '132px',
                        height: '36px',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.35)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 2px 4px rgba(255,255,255,0.8)',
                        border: '1.5px solid rgba(255,255,255,0.5)',
                        overflow: 'visible'
                      }}
                    >
                      {/* Keep container fixed; enlarge logo inside using maxHeight so the pill size doesn't change */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                        <Image
                          src="/logos/integrate.png"
                          alt="Integrate Featured"
                          width={260}
                          height={78}
                          style={{
                            // larger logo inside the fixed pill — constrained by maxHeight
                            height: '42px',
                            width: 'auto',
                            transform: 'translateY(1px)'
                          }}
                        />
                      </div>
                    </motion.div>
                  )}

                  <div className={`${study.featured ? "lg:grid lg:grid-cols-2" : ""}`}>
                    {/* Image Placeholder / Gradient */}
                    <div className={`relative ${study.featured ? "h-64 lg:h-full" : "h-48"} overflow-hidden`}>
                      <div 
                        className="absolute inset-0 bg-linear-to-br from-gray-200 via-gray-100 to-gray-200"
                        style={{
                          background: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 50%, #d0d0d0 100%)'
                        }}
                      />
                      {/* Decorative Elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            rotate: hoveredCard === study.id ? 180 : 0,
                            scale: hoveredCard === study.id ? 1.1 : 1
                          }}
                          transition={{ duration: 0.6 }}
                          className="w-24 h-24 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, #c8c8c8 0%, #e8e8e8 50%, #b8b8b8 100%)',
                            boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.5), 0 10px 30px rgba(0,0,0,0.1)'
                          }}
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <Building2 className="w-10 h-10 text-gray-500" />
                          </div>
                        </motion.div>
                      </div>
                      {/* Industry Tag */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                          {study.industry}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      {/* Company & Read Time */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-500">{study.company}</span>
                        <span className="text-xs text-gray-400">{study.readTime}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors leading-tight">
                        {study.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {study.description}
                      </p>

                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {study.stats.map((stat, i) => {
                          const StatIcon = stat.icon;
                          return (
                            <motion.div
                              key={i}
                              whileHover={{ y: -2 }}
                              className="text-center p-3 rounded-xl"
                              style={{
                                background: 'linear-gradient(145deg, #f8f8f8 0%, #f0f0f0 100%)',
                                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.8)'
                              }}
                            >
                              <StatIcon className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                              <p className="text-[10px] text-gray-500 font-medium">{stat.label}</p>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Results Preview */}
                      <div className="space-y-2 mb-6">
                        {study.results.slice(0, 2).map((result, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                            <span className="text-sm text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial Preview */}
                      <div className="relative p-4 rounded-xl mb-6" style={{ background: 'rgba(0,0,0,0.02)' }}>
                        <Quote className="absolute top-2 left-2 w-6 h-6 text-gray-200" />
                        <p className="text-sm text-gray-600 italic pl-6 line-clamp-2">
                          &ldquo;{study.testimonial.quote}&rdquo;
                        </p>
                        <p className="text-xs text-gray-500 mt-2 pl-6">
                          — {study.testimonial.author}, {study.testimonial.role}
                        </p>
                      </div>

                      {/* CTA */}
                      <motion.button
                        whileHover={{ x: 8 }}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-4 transition-all duration-300"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Border Glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === study.id ? 1 : 0 }}
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.1)'
                    }}
                  />
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Industries We&apos;ve Helped */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From finance to trades, our AI automation platform delivers results across diverse sectors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {[
              "Mortgage Brokers",
              "Estate Agents",
              "Recruitment",
              "Cleaning",
              "Construction",
              "Credit & Lending",
              "Insurance",
              "Accountancy",
              "Legal Services",
              "Healthcare",
              "Hospitality",
              "E-commerce"
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-xl text-center cursor-default"
                style={{
                  background: 'linear-gradient(145deg, #f8f8f8 0%, #f0f0f0 100%)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06), inset 0 1px 2px rgba(255,255,255,0.8)',
                  border: '1px solid rgba(255,255,255,0.5)'
                }}
              >
                <p className="text-sm font-medium text-gray-700">{industry}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={metallicStyle}
            >
              <Zap className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Start Your Success Story</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to see similar results?
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
              Join hundreds of UK businesses using AI automation to capture more leads and close more deals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact-form">
                <motion.button
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-4 rounded-full bg-black text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center gap-2">
                    Get Your Free Audit
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </Link>
              <Link href="/resources">
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
                  Browse All Resources
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
