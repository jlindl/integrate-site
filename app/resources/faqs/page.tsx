"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import { 
  Search,
  Plus,
  Minus,
  MessageCircle,
  Settings,
  CreditCard,
  Shield,
  Zap,
  ArrowRight,
  HelpCircle,
  Mail
} from "lucide-react";

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "features", label: "Features & Tech" },
    { id: "pricing", label: "Pricing & Plans" },
    { id: "implementation", label: "Setup & Onboarding" },
  ];

  const faqs = [
    {
      id: 1,
      category: "general",
      question: "What exactly does Integrate do?",
      answer: "Integrate is an AI-powered automation platform that handles your inbound and outbound communications. It answers calls, qualifies leads, books appointments, and manages customer enquiries 24/7, acting as a super-efficient digital employee that never sleeps."
    },
    {
      id: 2,
      category: "general",
      question: "How is this different from a standard answering service?",
      answer: "Unlike traditional answering services that just take messages, Integrate actually performs tasks. Our AI can access your calendar to book appointments, check your CRM to update records, and answer specific questions about your business using your own knowledge base. It's intelligent conversation, not just message taking."
    },
    {
      id: 3,
      category: "features",
      question: "Can the AI handle complex accents and noisy backgrounds?",
      answer: "Yes. We use advanced speech recognition technology that is trained on diverse datasets. It filters out background noise and is highly effective at understanding various UK accents and dialects, ensuring smooth communication with your customers."
    },
    {
      id: 4,
      category: "implementation",
      question: "How long does it take to get set up?",
      answer: "Most businesses are up and running within 24-48 hours. We start with a discovery call to understand your workflows, then our team configures your AI agent. You'll have a chance to test and refine the responses before going live."
    },
    {
      id: 5,
      category: "pricing",
      question: "Is there a long-term contract?",
      answer: "No, we operate on a flexible monthly subscription model. You can upgrade, downgrade, or cancel your plan at any time with 30 days' notice. We believe the value we provide should be the reason you stay, not a contract."
    },
    {
      id: 6,
      category: "features",
      question: "Does it integrate with my existing software?",
      answer: "We integrate with over 50+ popular tools including Salesforce, HubSpot, Zoho, Google Calendar, Outlook, Slack, and many industry-specific CRMs. If you have a custom system, we also offer API access for bespoke integrations."
    },
    {
      id: 7,
      category: "pricing",
      question: "How much does it cost?",
      answer: "Our pricing is tiered based on usage (minutes of conversation) and features. Plans start from £299/month for small businesses. We recommend booking a demo so we can assess your volume and recommend the most cost-effective plan for your needs."
    },
    {
      id: 8,
      category: "implementation",
      question: "What happens if the AI doesn't know the answer?",
      answer: "You can configure 'fallback' protocols. If the AI encounters a query it can't handle, it can gracefully transfer the call to a human staff member, take a detailed message, or escalate the enquiry to your priority inbox for immediate attention."
    },
    {
      id: 9,
      category: "features",
      question: "Is the data secure?",
      answer: "Absolutely. We use enterprise-grade encryption for all data in transit and at rest. We are GDPR compliant and our servers are hosted in secure UK-based data centres. Your customer data is never shared with third parties."
    },
    {
      id: 10,
      category: "general",
      question: "Can I customize the voice and personality?",
      answer: "Yes! You can choose from a library of professional voices (British, American, Australian, etc.) and adjust the tone, pace, and personality traits to match your brand identity—whether that's professional and formal, or friendly and casual."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
          style={{
            background: 'radial-gradient(circle, rgba(200,200,200,0.5) 0%, rgba(240,240,240,0.3) 50%, transparent 70%)'
          }}
        />
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
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
              <HelpCircle className="relative w-4 h-4 text-gray-600" />
              <span className="relative text-sm font-semibold text-gray-700 tracking-wide">Support & Answers</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Everything you need to know about Integrate&apos;s AI automation platform. 
              Can&apos;t find what you&apos;re looking for? Chat with our team.
            </p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-xl mx-auto"
            >
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-hidden shadow-lg shadow-gray-100/50 text-gray-900 placeholder-gray-400 transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories & Questions */}
      <section className="py-12 md:py-20 bg-white min-h-[600px]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <button
                      onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                      className="w-full text-left p-6 rounded-2xl transition-all duration-300"
                      style={{
                        background: openQuestion === faq.id 
                          ? 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)'
                          : 'white',
                        boxShadow: openQuestion === faq.id
                          ? '0 10px 30px rgba(0,0,0,0.05), inset 0 1px 2px rgba(255,255,255,0.8)'
                          : '0 2px 10px rgba(0,0,0,0.02)',
                        border: openQuestion === faq.id
                          ? '1px solid rgba(0,0,0,0.08)'
                          : '1px solid rgba(0,0,0,0.04)'
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className={`w-2 h-2 rounded-full mt-1.5 shrink-0 transition-colors duration-300 ${
                              openQuestion === faq.id ? 'bg-black' : 'bg-gray-300'
                            }`}
                          />
                          <span className={`text-lg font-semibold transition-colors duration-300 ${
                            openQuestion === faq.id ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                          }`}>
                            {faq.question}
                          </span>
                        </div>
                        <div className={`shrink-0 transition-transform duration-300 ${
                          openQuestion === faq.id ? 'rotate-180' : ''
                        }`}>
                          {openQuestion === faq.id ? (
                            <Minus className="w-5 h-5 text-gray-900" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                          )}
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {openQuestion === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="pt-4 pl-5 text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500">No questions found matching your search.</p>
                  <button 
                    onClick={() => {setSearchQuery(""); setActiveCategory("all");}}
                    className="mt-4 text-sm font-semibold text-black hover:underline"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
              <MessageCircle className="w-8 h-8 text-gray-700" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help you understand how Integrate can work for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact-form">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
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
