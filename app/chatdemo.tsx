"use client";

import { useEffect, useState } from "react";

type ChatMessage = {
  id: number;
  from: "lead" | "agent";
  text: string;
  delay: number;
};

const chatScript: ChatMessage[] = [
  { id: 1, from: "lead", text: "Hi, we keep missing calls from new enquiries. Can you help?", delay: 1600 },
  { id: 2, from: "agent", text: "Absolutely — I can help with that. Can I check what your business does?", delay: 2200 },
  { id: 3, from: "lead", text: "We’re a commercial cleaning company.", delay: 1800 },
  { id: 4, from: "agent", text: "Got it. And how many calls do you get per day?", delay: 1800 },
  { id: 5, from: "lead", text: "Around 15–25.", delay: 1600 },
  { id: 6, from: "agent", text: "Perfect. We can deploy an AI receptionist that answers 24/7 and qualifies each enquiry.", delay: 2400 },
];

export default function ChatDemo() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= chatScript.length) return;
    const current = chatScript[visibleCount - 1];
    setTyping(true);

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
      setTyping(false);
    }, current.delay);

    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-4 md:p-6">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <p className="text-xs font-medium text-gray-700">Live qualification demo</p>
        </div>
        <p className="text-[11px] text-gray-400">AI Reception • Inbound lead</p>
      </div>

      {/* Chat Window */}
      <div className="relative h-72 rounded-2xl bg-gray-50/80 p-3 overflow-hidden flex flex-col gap-2 text-sm">
        <div className="flex flex-col gap-2">
          {chatScript.slice(0, visibleCount).map((msg) => (
            <div key={msg.id} className={`flex ${msg.from === "agent" ? "justify-end" : "justify-start"}`}>
              <div
                className={`px-3 py-2 rounded-2xl max-w-[80%] leading-relaxed ${
                  msg.from === "agent"
                    ? "bg-black text-white rounded-br-sm"
                    : "bg-white text-gray-900 border border-gray-200 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-end">
              <div className="bg-black text-white rounded-2xl rounded-br-sm px-3 py-2 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.2s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:0.2s]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
