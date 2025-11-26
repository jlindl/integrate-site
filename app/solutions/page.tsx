"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
/* Link removed after section reposition */
import VoiceAgents from "../voiceagents";
import LeadGen from "./leadgen";
import EmailWhatsApp from "./eml.whatsapp";
import CustomSolutions from "./custom";

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("voice");

  const tabs = [
    { id: "voice", label: "Voice Agents" },
    { id: "leads", label: "Lead Generation" },
    { id: "automation", label: "Email/WhatsApp Automation" },
    { id: "custom", label: "Custom Solutions" },
  ];

  return (
    <div className="w-full bg-white">
      
      <Header />

      

      {/* TABS SECTION */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
          
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

        </div>
      </section>

      {/* (Removed) two-column section now lives inside voiceagents.tsx */}

      {/* CONTENT */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "voice" && <VoiceAgents />}
        
        {activeTab === "leads" && <LeadGen />}
        
        {activeTab === "automation" && <EmailWhatsApp />}
        
        {activeTab === "custom" && <CustomSolutions />}
      </motion.div>

    </div>
  );
}
