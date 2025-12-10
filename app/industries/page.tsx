"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles,
  Home,
  Sparkle,
  Users,
  CreditCard,
  Building2,
  ShoppingCart,
  Scale,
  HardHat,
  TrendingUp,
  Stethoscope,
  CalendarDays,
  type LucideIcon
} from "lucide-react";
import Header from "../components/Header";

/* ---------- animation variants ---------- */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------- data ---------- */
type Industry = {
  title: string;
  slug: string;
  summary: string;
  bullets: string[];
  icon: LucideIcon;
  gradient: string;
};

const industries: Industry[] = [
  {
    title: "Mortgage Brokers",
    slug: "mortgage-brokers",
    summary: "Automate lead qualification, document collection, and follow-ups across channels.",
    bullets: ["Lead intake & scoring", "Document reminders", "Rate updates & nurturing"],
    icon: Home,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Cleaning Companies",
    slug: "cleaning-companies",
    summary: "Streamline bookings, quotes, and customer communications automatically.",
    bullets: ["Quote generation", "Schedule coordination", "Review requests"],
    icon: Sparkle,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Recruitment Agencies",
    slug: "recruitment-agencies",
    summary: "Automate sourcing, screening, and interview coordination.",
    bullets: ["Candidate parsing", "Outreach sequencing", "Calendar sync"],
    icon: Users,
    gradient: "from-violet-500 to-purple-400",
  },
  {
    title: "Credit & Lending Firms",
    slug: "credit-lending",
    summary: "Speed up applications with data checks and proactive updates.",
    bullets: ["Pre-qualification checks", "KYC reminders", "Status notifications"],
    icon: CreditCard,
    gradient: "from-amber-500 to-orange-400",
  },
  {
    title: "Estate & Letting Agents",
    slug: "estate-agents",
    summary: "Qualify leads and automate viewings, offers, and tenant communications.",
    bullets: ["Property alerts", "Viewing scheduling", "Offer tracking"],
    icon: Building2,
    gradient: "from-rose-500 to-pink-400",
  },
  {
    title: "Ecommerce & Retail",
    slug: "ecommerce-retail",
    summary: "Boost conversion with personalized journeys and operational alerts.",
    bullets: ["Abandoned cart recovery", "Recommendations", "Inventory notifications"],
    icon: ShoppingCart,
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    title: "Law Firms & Solicitors",
    slug: "law-firms",
    summary: "Automate intake, case updates, and client communications securely.",
    bullets: ["Intake triage", "Document reminders", "Case status updates"],
    icon: Scale,
    gradient: "from-slate-600 to-gray-500",
  },
  {
    title: "Construction & Trades",
    slug: "construction-trades",
    summary: "Automate quotes, scheduling, and job updates.",
    bullets: ["Quote workflows", "Crew scheduling", "Progress notifications"],
    icon: HardHat,
    gradient: "from-yellow-500 to-amber-400",
  },
  {
    title: "Financial Advisors & Wealth Managers",
    slug: "financial-advisors",
    summary: "Automate reviews, portfolio alerts, and client communications.",
    bullets: ["Review reminders", "Risk alerts", "Meeting coordination"],
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "Clinics & Private Healthcare",
    slug: "healthcare",
    summary: "Streamline patient intake, reminders, and follow-ups.",
    bullets: ["Pre-visit forms", "Appointment reminders", "Post-care follow-up"],
    icon: Stethoscope,
    gradient: "from-red-500 to-rose-400",
  },
  {
    title: "Hospitality & Events",
    slug: "hospitality-events",
    summary: "Automate inquiries, bookings, and guest communications.",
    bullets: ["Inquiry routing", "Booking confirmations", "Upsell prompts"],
    icon: CalendarDays,
    gradient: "from-fuchsia-500 to-pink-400",
  },
];

/* ---------- component ---------- */
export default function IndustriesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-white">
        {/* Animated background effects */}
        <div className="absolute inset-0">
          {/* Subtle gradient orbs */}
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)" }}
          />
          <motion.div
            animate={{ 
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)" }}
          />
          
          {/* Floating geometric shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-[15%] w-32 h-32 border border-gray-200/50 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-[20%] w-20 h-20 border border-gray-200/30 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-[10%] w-16 h-16 border border-gray-300/40"
            style={{ transform: "rotate(45deg)" }}
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-[8%] w-3 h-3 bg-gray-300/60 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-[12%] w-2 h-2 bg-gray-400/50 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-[25%] w-4 h-4 bg-gray-200 rounded-full"
          />
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.line
              x1="10%" y1="20%" x2="30%" y2="80%"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 8, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
            />
            <motion.line
              x1="90%" y1="30%" x2="70%" y2="90%"
              stroke="rgba(0,0,0,0.04)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 10, repeat: Infinity, times: [0, 0.4, 0.6, 1], delay: 3 }}
            />
            <motion.path
              d="M 50 100 Q 200 50 350 100"
              stroke="rgba(0,0,0,0.03)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 12, repeat: Infinity, times: [0, 0.3, 0.7, 1], delay: 1 }}
            />
          </svg>
          
          {/* Dot grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          
          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-24 h-24">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-gray-300 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-px bg-linear-to-b from-gray-300 to-transparent" />
          </div>
          <div className="absolute top-8 right-8 w-24 h-24">
            <div className="absolute top-0 right-0 w-full h-px bg-linear-to-l from-gray-300 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-px bg-linear-to-b from-gray-300 to-transparent" />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white shadow-sm mb-10"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-gray-600" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 tracking-wide">Industry Solutions</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="text-gray-900">Industries We</span>
              <br className="md:hidden" />
              <span className="relative inline-block mx-3">
                <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-gray-600 via-gray-400 to-gray-600">
                  Accelerate
                </span>
                {/* Animated underline */}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gray-200/60 z-0 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
                {/* Shimmer effect */}
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                />
              </span>
              <br className="md:hidden" />
              <span className="text-gray-900">with AI</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-lg md:text-xl lg:text-2xl mt-8 max-w-2xl mx-auto leading-relaxed"
            >
              Purpose-built automations and orchestration layers tailored to your domain.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact-form"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 text-white px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Button shine effect */}
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                />
                <span className="relative">Book a Strategy Call</span>
                <motion.span 
                  className="relative"
                  animate={{ x: [0, 4, 0] }} 
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              variants={fadeInUp}
              className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>11 Industries</span>
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Custom Solutions</span>
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Enterprise Ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Industry
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Select your sector to see how we can transform your operations
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ perspective: "1000px" }}
          >
            {industries.map((card, index) => (
              <motion.div
                key={card.title}
                variants={cardVariant}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                className="group relative rounded-3xl border border-gray-200/80 bg-white shadow-lg hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Shine sweep on hover */}
                <motion.div 
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none z-20"
                />
                
                {/* Border highlight on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/40 transition-all duration-500 pointer-events-none" />

                {/* Card visual header */}
                <div className="relative aspect-16/10 bg-gray-950 overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div 
                    className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-15`}
                    animate={{ 
                      opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  />
                  
                  {/* Radial glow behind icon */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-linear-to-br ${card.gradient} opacity-20 blur-[60px] transition-all duration-700`} />
                  
                  {/* Perspective grid */}
                  <div 
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: "24px 24px",
                      transform: "perspective(500px) rotateX(30deg)",
                      transformOrigin: "center top",
                    }}
                  />
                  
                  {/* Floating elements container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Animated circuit paths */}
                      <svg className="absolute w-48 h-32" style={{ left: "-72px", top: "-40px" }} viewBox="0 0 200 130">
                        {/* Left branch */}
                        <motion.path
                          d="M 40 65 L 70 65 L 85 45"
                          stroke="url(#gradient1)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        />
                        {/* Right branch */}
                        <motion.path
                          d="M 115 45 L 130 65 L 160 65"
                          stroke="url(#gradient1)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        />
                        {/* Bottom left */}
                        <motion.path
                          d="M 40 75 L 70 75 L 85 95"
                          stroke="url(#gradient2)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.5 }}
                          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                        />
                        {/* Bottom right */}
                        <motion.path
                          d="M 115 95 L 130 75 L 160 75"
                          stroke="url(#gradient2)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.5 }}
                          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                        />
                        {/* Gradients */}
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="white" stopOpacity="0.8" />
                          </linearGradient>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0.6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Animated pulse rings */}
                      <motion.div
                        className={`absolute -inset-6 rounded-full border-2 border-white/10`}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.div
                        className={`absolute -inset-4 rounded-full border border-white/20`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                      />
                      
                      {/* Main icon container with glow */}
                      <motion.div 
                        className="relative z-10"
                        whileHover={{ scale: 1.15, rotate: 8 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {/* Icon glow */}
                        <div className={`absolute inset-0 bg-linear-to-br ${card.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity`} />
                        
                        {/* Icon box */}
                        <div className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${card.gradient} flex items-center justify-center shadow-2xl border border-white/20`}>
                          <card.icon className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                      </motion.div>
                      
                      {/* Floating data nodes */}
                      <motion.div
                        className="absolute -right-12 -top-4 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                        animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-2 h-2 rounded-full bg-white/60" />
                      </motion.div>
                      <motion.div
                        className="absolute -right-16 top-8 w-6 h-6 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center"
                        animate={{ y: [0, 6, 0], x: [0, 4, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      </motion.div>
                      <motion.div
                        className="absolute -left-10 -top-2 w-7 h-7 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                        animate={{ x: [0, -6, 0], rotate: [0, -8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      </motion.div>
                      <motion.div
                        className="absolute -left-8 top-10 w-5 h-5 rounded-md bg-white/10 backdrop-blur-sm border border-white/15"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                      />
                      
                      {/* Sparkle particles */}
                      <motion.div
                        className="absolute -right-6 top-0 w-1 h-1 rounded-full bg-white"
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="absolute right-4 -top-8 w-1.5 h-1.5 rounded-full bg-white"
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.7 }}
                      />
                      <motion.div
                        className="absolute -left-4 top-12 w-1 h-1 rounded-full bg-white"
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: 1.4 }}
                      />
                    </div>
                  </div>
                  
                  {/* Animated scan line */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent"
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-lg" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-white/20 rounded-bl-lg" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-black transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-2">
                    <Link
                      href={`/industries/${card.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-black text-white px-4 py-2 text-xs font-medium hover:bg-gray-800 transition-colors"
                    >
                      See Details
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link
                      href="/#contact-form"
                      className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-xs font-medium hover:border-gray-400 transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <motion.div
          animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_50%)]"
        />
        <motion.div
          animate={{ opacity: [0.08, 0.14, 0.08], scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"
        />

        <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            >
              Ready to Transform Your Industry?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-10">
              Book a complimentary strategy call and discover how AI automation can accelerate your operations.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href="/#contact-form"
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
              >
                Schedule Your Call
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
