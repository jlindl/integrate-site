"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import { 
  Search, 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  Database, 
  ShoppingBag, 
  CreditCard, 
  Layout, 
  Globe, 
  Cpu,
  Headphones,
  Layers,
  Plus,
  Code2,
  BarChart
} from "lucide-react";

// Categories configuration
const categories = [
  { id: "all", label: "All Apps", icon: Layers },
  { id: "crm", label: "CRM & Sales", icon: Database },
  { id: "marketing", label: "Marketing", icon: Globe },
  { id: "communication", label: "Communication", icon: MessageSquare },
  { id: "pm", label: "Project Mgmt", icon: Layout },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingBag },
  { id: "finance", label: "Finance", icon: CreditCard },
  { id: "support", label: "Support", icon: Headphones },
  { id: "ai", label: "AI & Models", icon: Cpu },
  { id: "dev", label: "Developer", icon: Code2 },
  { id: "analytics", label: "Analytics", icon: BarChart },
];

// Extensive Integration List
const integrations = [
  // CRM & Sales
  { id: "salesforce", name: "Salesforce", category: "crm", description: "Enterprise CRM automation and data sync.", status: "live", popular: true, logo: "/logos/salesforce.svg", logoSize: "large" },
  { id: "hubspot", name: "HubSpot", category: "crm", description: "Inbound marketing, sales, and service software.", status: "live", popular: true, logo: "/logos/hubspot.svg" },
  { id: "apollo", name: "Apollo.io", category: "crm", description: "B2B contact & company data.", status: "live", logo: "/logos/apollo.svg" },

  // Marketing
  { id: "mailchimp", name: "Mailchimp", category: "marketing", description: "All-in-one marketing, automation & email platform.", status: "live", popular: true, logo: "/logos/mailchimp.svg" },
  { id: "google-ads", name: "Google Ads", category: "marketing", description: "Online advertising platform developed by Google.", status: "live", logo: "/logos/google.svg" },
  { id: "meta-ads", name: "Meta Ads", category: "marketing", description: "Advertising on Facebook, Instagram and more.", status: "live", logo: "/logos/meta.svg" },
  { id: "linkedin-ads", name: "LinkedIn Ads", category: "marketing", description: "B2B advertising platform.", status: "live", logo: "/logos/linkedin.svg", logoSize: "large" },
  { id: "tiktok-ads", name: "TikTok Ads", category: "marketing", description: "Video advertising platform.", status: "live", logo: "/logos/tiktok.svg" },
  { id: "instantly", name: "Instantly", category: "marketing", description: "Cold email sending & warmup.", status: "live", logo: "/logos/instantly.svg", logoSize: "large" },
  { id: "snovio", name: "Snovio", category: "marketing", description: "Lead enrichment & intelligence.", status: "live", logo: "/logos/snovio.svg", logoSize: "large" },

  // Communication
  { id: "slack", name: "Slack", category: "communication", description: "Team communication and collaboration hub.", status: "live", popular: true, logo: "/logos/slack.svg" },
  { id: "teams", name: "MS Teams", category: "communication", description: "Business communication platform by Microsoft.", status: "live", popular: true, logo: "/logos/MSFTteams.svg" },
  { id: "whatsapp", name: "WhatsApp", category: "communication", description: "Global messaging and calling app.", status: "live", logo: "/logos/whatsapp.svg", logoSize: "large" },
  { id: "discord", name: "Discord", category: "communication", description: "Voice, video and text communication service.", status: "live", logo: "/logos/discord.svg" },
  { id: "gmail", name: "Gmail", category: "communication", description: "Secure, smart, and easy-to-use email.", status: "live", logo: "/logos/gmail.svg" },
  { id: "outlook", name: "Outlook", category: "communication", description: "Personal information manager from Microsoft.", status: "live", logo: "/logos/outlook.svg" },
  { id: "telegram", name: "Telegram", category: "communication", description: "Cloud-based mobile and desktop messaging app.", status: "live", logo: "/logos/telegram.svg" },
  { id: "twilio", name: "Twilio", category: "communication", description: "Cloud communications platform for SMS, voice & video.", status: "live", logo: "/logos/twilio.svg" },
  { id: "2chat", name: "2Chat", category: "communication", description: "WhatsApp automation & inbox.", status: "live", logo: "/logos/2chat.svg", logoSize: "large" },

  // Project Management
  { id: "notion", name: "Notion", category: "pm", description: "All-in-one workspace for notes and tasks.", status: "live", popular: true, logo: "/logos/notion.svg" },
  { id: "trello", name: "Trello", category: "pm", description: "Visual tool for organizing your work.", status: "live", logo: "/logos/trello.svg", logoSize: "large" },
  { id: "jira", name: "Jira", category: "pm", description: "Issue tracking and project management tool.", status: "live", logo: "/logos/jira.svg" },

  // E-commerce
  { id: "shopify", name: "Shopify", category: "ecommerce", description: "E-commerce platform for online stores.", status: "live", popular: true, logo: "/logos/shopify.svg" },
  { id: "amazon", name: "Amazon Seller", category: "ecommerce", description: "Sell on Amazon's marketplace.", status: "live", logo: "/logos/amazon.svg", logoSize: "large" },

  // Finance
  { id: "stripe", name: "Stripe", category: "finance", description: "Financial infrastructure platform for the internet.", status: "live", popular: true, logo: "/logos/stripe.svg", logoSize: "large" },
  { id: "paypal", name: "PayPal", category: "finance", description: "Online payments system.", status: "live", logo: "/logos/paypal.svg" },
  { id: "xero", name: "Xero", category: "finance", description: "Cloud-based accounting software.", status: "live", logo: "/logos/xero.svg", logoSize: "large" },
  { id: "quickbooks", name: "QuickBooks", category: "finance", description: "Accounting software package.", status: "live", logo: "/logos/quickbooks.svg", logoSize: "large" },

  // Support
  { id: "intercom", name: "Intercom", category: "support", description: "Customer messaging platform.", status: "live", logo: "/logos/intercom.svg" },

  // AI & Models
  { id: "openai", name: "OpenAI", category: "ai", description: "AI research and deployment company.", status: "live", popular: true, logo: "/logos/openai.svg" },
  { id: "vapi", name: "Vapi", category: "ai", description: "AI voice agents & call handling.", status: "live", logo: "/logos/vapi.svg", logoSize: "large" },
  { id: "elevenlabs", name: "ElevenLabs", category: "ai", description: "Realistic AI voices for agents.", status: "live", logo: "/logos/elevenlabs.svg", logoSize: "large" },

  // Developer
  { id: "github", name: "GitHub", category: "dev", description: "Software development platform.", status: "live", popular: true, logo: "/logos/github.svg" },
  { id: "vercel", name: "Vercel", category: "dev", description: "Frontend cloud platform.", status: "live", logo: "/logos/vercel.svg", logoSize: "large" },
  { id: "aws", name: "AWS", category: "dev", description: "On-demand cloud computing platforms.", status: "live", logo: "/logos/aws.svg" },
  { id: "supabase", name: "Supabase", category: "dev", description: "Database, auth & storage.", status: "live", logo: "/logos/supabase.svg" },
  { id: "retool", name: "Retool", category: "dev", description: "Internal tooling & control panels.", status: "live", logo: "/logos/retool.svg", logoSize: "large" },
  { id: "google-cloud", name: "Google Cloud", category: "dev", description: "Sheets, APIs & workspace integration.", status: "live", logo: "/logos/google.svg" },
  { id: "n8n", name: "n8n", category: "dev", description: "Workflow orchestration & automation.", status: "live", logo: "/logos/n8n.svg", logoSize: "large" },
  { id: "apify", name: "Apify", category: "dev", description: "Web scraping & data extraction.", status: "live", logo: "/logos/apify.svg", logoSize: "large" },

  // Analytics
  { id: "ga4", name: "Google Analytics 4", category: "analytics", description: "Web analytics service offered by Google.", status: "live", logo: "/logos/google.svg" },
];

export default function IntegrationLibraryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter(item => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white selection:bg-gray-200">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-white">
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" 
            style={{ backgroundSize: '24px 24px' }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gray-100 rounded-full blur-[120px] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <Zap className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">100+ Integrations Available</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Connect Your
              <span className="block bg-linear-to-r from-gray-900 via-gray-500 to-gray-900 bg-clip-text text-transparent animate-gradient bg-300%">
                Entire Stack
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Seamlessly integrate our AI agents with the tools you already use. 
              Automate workflows across your entire ecosystem.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute inset-0 bg-gray-200 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative flex items-center bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-200 p-2">
                <Search className="w-6 h-6 text-gray-400 ml-4" />
                <input 
                  type="text"
                  placeholder="Search integrations (e.g. 'Salesforce', 'Slack')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 text-lg bg-transparent border-none focus:ring-0 placeholder:text-gray-400 text-gray-900"
                />
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-xs font-medium text-gray-500">⌘ K</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto py-4 gap-2 no-scrollbar mask-linear-fade">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                    ${isActive ? 'text-white' : 'text-gray-600 hover:bg-gray-50'}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-12 min-h-[600px] bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredIntegrations.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setHoveredId(item.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    {/* Logo Placeholder - Leave room for imported logos */}
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                      {item.logo ? (
                        <div className={`${item.logoSize === 'large' ? 'p-0' : 'p-3'} w-full h-full flex items-center justify-center bg-white`}>
                          <Image 
                            src={item.logo} 
                            alt={item.name} 
                            width={item.logoSize === 'large' ? 64 : 40} 
                            height={item.logoSize === 'large' ? 64 : 40} 
                            className="object-contain w-full h-full"
                          />
                        </div>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-gray-100" />
                          <span className="relative text-2xl font-bold text-gray-400 select-none">
                            {item.name.charAt(0)}
                          </span>
                        </>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      {item.popular && (
                        <span className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-600 border border-gray-200">
                          Popular
                        </span>
                      )}
                      {item.status === "beta" && (
                        <span className="px-2.5 py-1 rounded-full bg-blue-50 text-xs font-semibold text-blue-600 border border-blue-100">
                          Beta
                        </span>
                      )}
                      {item.status === "planned" && (
                        <span className="px-2.5 py-1 rounded-full bg-gray-50 text-xs font-semibold text-gray-400 border border-gray-100">
                          Planned
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {categories.find(c => c.id === item.category)?.label}
                    </span>
                    <motion.div
                      animate={{ x: hoveredId === item.id ? 5 : 0 }}
                      className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredIntegrations.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No integrations found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Request Integration CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-black rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Plus className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Missing a tool you use?
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                We&apos;re constantly adding new integrations. Let us know what you need, 
                and our team will prioritize it for your deployment.
              </p>
              
              <Link href="/#contact-form">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                  Request Integration
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}