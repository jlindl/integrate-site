"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  CreditCard,
  FileText,
  ShieldCheck,
  FormInput,
  Mail,
  AlertCircle,
  CheckCircle2,
  Clock,
  TrendingUp,
  Zap,
  ArrowRight,
  Banknote,
  Scale,
  Lock,
  PieChart,
} from "lucide-react";
import Header from "@/app/components/Header";
import SmartBreadcrumb from "@/app/components/SmartBreadcrumb";
import RelatedIndustries from "@/app/components/RelatedIndustries";

/* ---------- animation variants ---------- */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ---------- data ---------- */
const solutions = [
  {
    icon: FormInput,
    title: "Application Intake Automation",
    description: "Capture loan and credit applications 24/7 through intelligent forms. Automatically validate data, check for completeness, and route applications to the right team.",
    features: [
      "Smart application forms",
      "Real-time data validation",
      "Incomplete application follow-ups",
      "Multi-product application routing"
    ]
  },
  {
    icon: FileText,
    title: "Document Collation",
    description: "Automatically request, collect, and organise supporting documents. Bank statements, payslips, ID verification—all gathered without manual chasing.",
    features: [
      "Automated document requests",
      "Secure upload portal",
      "Document type recognition",
      "Completeness tracking"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Risk Pre-Screening",
    description: "Run initial affordability and eligibility checks before human review. Filter out unsuitable applications early and prioritise promising leads.",
    features: [
      "Automated credit checks",
      "Income verification",
      "Affordability calculations",
      "Red flag detection"
    ]
  },
  {
    icon: Banknote,
    title: "Lead Capture & Nurturing",
    description: "Capture interest from comparison sites, ads, and organic traffic. Nurture leads with personalised rate information until they're ready to apply.",
    features: [
      "High-converting landing pages",
      "Rate comparison widgets",
      "Lead scoring & segmentation",
      "Drip campaign automation"
    ]
  },
  {
    icon: Mail,
    title: "Daily Interest Rate Outreach",
    description: "Automatically send personalised rate updates to prospects and existing customers. Keep your offers top-of-mind when rates move in their favour.",
    features: [
      "Automated rate alerts",
      "Personalised offers",
      "Re-engagement campaigns",
      "Best-rate notifications"
    ]
  },
  {
    icon: AlertCircle,
    title: "Missed Payment Follow-Ups",
    description: "Automate sensitive arrears communication with compliant, empathetic messaging. Escalate appropriately while maintaining customer relationships.",
    features: [
      "FCA-compliant messaging",
      "Multi-channel reminders",
      "Payment plan options",
      "Escalation workflows"
    ]
  },
];

const benefits = [
  {
    icon: Clock,
    title: "70% Faster Processing",
    description: "Automate intake and pre-screening to approve loans in hours, not days."
  },
  {
    icon: TrendingUp,
    title: "2x Application Volume",
    description: "Handle more applications without adding headcount."
  },
  {
    icon: Scale,
    title: "100% FCA Compliant",
    description: "Every automation built with UK regulatory requirements in mind."
  },
  {
    icon: Zap,
    title: "Go Live in Weeks",
    description: "Quick integration with your existing loan management systems."
  }
];

const workflows = [
  {
    step: "01",
    title: "Capture & Validate",
    description: "Application submitted and data validated automatically."
  },
  {
    step: "02",
    title: "Collect Documents",
    description: "Supporting documents requested and gathered securely."
  },
  {
    step: "03",
    title: "Pre-Screen Risk",
    description: "Automated affordability and eligibility checks run."
  },
  {
    step: "04",
    title: "Decision & Disburse",
    description: "Approved applications fast-tracked to completion."
  }
];

/* ---------- component ---------- */
export default function CreditLendingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-1/4 w-96 h-96 bg-gray-200/40 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-1/4 w-80 h-80 bg-gray-300/30 rounded-full blur-[100px]"
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-32 right-20 w-16 h-16 border-2 border-gray-200 rounded-lg hidden md:block"
            animate={{ rotate: 360, y: [0, -20, 0] }}
            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity } }}
          />
          <motion.div
            className="absolute bottom-20 right-1/3 w-8 h-8 bg-gray-200/50 rounded-full hidden md:block"
            animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-16 w-12 h-12 border border-gray-300 hidden md:block"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
          />
          <motion.div
            className="absolute top-40 left-20 w-3 h-3 bg-gray-400 rounded-full hidden md:block"
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-32 w-20 h-20 border border-gray-200 rounded-full hidden md:block"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full hidden md:block" preserveAspectRatio="none">
            <motion.line
              x1="80%" y1="10%" x2="90%" y2="40%"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="85%" y1="60%" x2="95%" y2="80%"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <SmartBreadcrumb
              parent={{ label: "Industries", href: "/industry-automation" }}
              current="Credit & Lending"
            />

            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 mb-6 cursor-default"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <CreditCard className="w-4 h-4" />
              </motion.div>
              <span className="text-sm font-medium">AI for Credit & Lending</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]"
            >
              Process More Loans with{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-gray-600 via-gray-400 to-gray-600">
                Compliant Automation
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              From application to disbursement, automate your lending workflows while staying
              fully FCA compliant. Faster decisions, better customer experience, reduced risk.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/#contact-form"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-8 py-4 text-sm font-semibold hover:bg-gray-800 transition-all duration-300 relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                  <span className="relative">Book a Demo</span>
                  <motion.span
                    className="relative"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  See How It Works
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-500">
              {[
                { label: "FCA Authorised" },
                { label: "GDPR Compliant" },
                { label: "UK Based Support" }
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.15 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-gray-900"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <span>{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Solutions Built for Lenders
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Every automation designed for the strict workflows of financial services
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-gray-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />

                <div className="relative flex flex-col md:flex-row gap-8">
                  {/* Icon with pulse animation */}
                  <div className="shrink-0">
                    <motion.div
                      className="relative w-14 h-14 rounded-2xl bg-black flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <solution.icon className="w-7 h-7 text-white" />
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-black"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features grid with staggered animation */}
                    <motion.div
                      className="grid sm:grid-cols-2 gap-3"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                    >
                      {solution.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-700"
                          variants={fadeInUp}
                          custom={featureIndex}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.1, type: "spring" }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0" />
                          </motion.div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              From Application to Approval, Automated
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              See how a typical loan application flows through your automated pipeline
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {workflows.map((workflow, index) => (
              <motion.div
                key={workflow.step}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {/* Animated connector line */}
                {index < workflows.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-full w-full h-px z-0 -translate-x-1/2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    style={{ originX: 0 }}
                  >
                    <div className="h-px bg-linear-to-r from-gray-400 to-gray-200" />
                    {/* Animated dot on line */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-900"
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>
                )}

                <div className="relative bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 group-hover:border-gray-300 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-gray-100/0 via-gray-200/0 to-gray-100/0 group-hover:from-gray-100/50 group-hover:via-transparent group-hover:to-gray-200/50 transition-all duration-500"
                  />

                  <motion.div
                    className="relative text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gray-300 to-gray-400 mb-4"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {workflow.step}
                  </motion.div>
                  <h3 className="relative text-lg font-semibold text-gray-900 mb-2">
                    {workflow.title}
                  </h3>
                  <p className="relative text-sm text-gray-600">
                    {workflow.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-black text-white overflow-hidden relative">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
                left: `${(i * 20) % 100}%`,
                top: `${(i * 15) % 100}%`,
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Lenders Choose Us
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Real results from real lending businesses across the UK
            </motion.p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
                  }}
                />

                {/* Icon with animation */}
                <motion.div
                  className="relative w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-6 h-6 text-gray-300" />
                </motion.div>

                <h3 className="relative text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="relative text-sm text-gray-400">{benefit.description}</p>

                {/* Number badge */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-500"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance Section - Unique to Financial Services */}
      <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Strict Workflows = Perfect for Structured Agents
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Financial services have some of the most regulated, process-driven workflows
                in any industry. That&apos;s actually good news—structured processes are exactly
                what AI agents excel at automating.
              </p>
              <div className="space-y-4">
                {[
                  "Every step documented for audit trails",
                  "Consistent compliance across all applications",
                  "No human error in regulatory requirements",
                  "Real-time reporting for FCA obligations"
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-600 to-gray-900"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    100%
                  </motion.div>
                  <p className="text-gray-600 mt-2">Audit Trail Coverage</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">FCA</div>
                    <p className="text-sm text-gray-500">Compliant workflows</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">GDPR</div>
                    <p className="text-sm text-gray-500">Data protection built-in</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border border-gray-200 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-100 rounded-lg"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Enterprise-Grade Security & Compliance
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Lock, name: "256-bit Encryption" },
              { icon: ShieldCheck, name: "FCA Compliant" },
              { icon: FileText, name: "Full Audit Trails" },
              { icon: PieChart, name: "Real-time Reporting" },
              { icon: Scale, name: "Consumer Duty Ready" },
            ].map((feature) => (
              <motion.div
                key={feature.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors cursor-default"
              >
                <feature.icon className="w-8 h-8" />
                <span className="text-xs font-medium">{feature.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white overflow-hidden relative">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border border-gray-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 border border-gray-100 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-gray-300 rounded-full"
          animate={{ y: [-20, 20, -20], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-gray-200 rounded-full"
          animate={{ y: [20, -20, 20], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Ready to Automate Your Lending Operations?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Join forward-thinking lenders who are processing more applications
              with less risk. Book a free compliance-focused strategy call today.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/#contact-form"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-8 py-4 text-sm font-semibold hover:bg-gray-800 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Shine effect on button */}
                  <motion.span
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                  <span className="relative">Book Your Free Demo</span>
                  <motion.span
                    className="relative"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  View All Industries
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <RelatedIndustries currentPath="/industry-automation/lending-automation" />
    </div>
  );
}
