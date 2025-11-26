"use client";

import { motion } from "framer-motion";

type Testimonial = {
  company: string;
  quote: string;
  name?: string;
  title?: string;
};

interface Props {
  items?: Testimonial[];
  title?: string;
  subtitle?: string;
}

const defaultItems: Testimonial[] = [
  {
    company: "TRAIDINGLAB",
    quote:
      "Apex automated our inbound and follow-ups in under two weeks. We now capture and convert leads 24/7.",
  },
  {
    company: "Allied Insurance",
    quote:
      "Response times dropped from hours to minutes. Their voice agents qualify perfectly before routing to our team.",
  },
  {
    company: "Poundmart",
    quote:
      "We scaled outreach without hiring. The analytics dashboard shows exactly what’s working.",
  },
  {
    company: "Cloudkickz",
    quote:
      "Seamless multi-channel flows. Email + WhatsApp + CRM sync just runs in the background.",
  },
  {
    company: "M&H Joinery",
    quote:
      "Site enquiries route straight to bookings. No more missed calls or manual chasing.",
  },
  {
    company: "Ramsay Timber",
    quote:
      "Accurate qualification and zero data entry. Our sales team only speaks to ready-to-buy leads.",
  },
  {
    company: "Channel16 Events",
    quote:
      "From discovery to go-live, the process was smooth. The ROI was clear within the first month.",
  },
];

export default function Testimonials({ items = defaultItems, title, subtitle }: Props) {
  // Duplicate arrays for seamless looping
  const rowA = [...items, ...items];
  const rowB = [...items.slice().reverse(), ...items.slice().reverse()];

  return (
    <section className="w-full bg-white py-20 md:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            {title || "What clients say"}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {subtitle || "Real results from teams using Apex to automate voice, email and CRM."}
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-linear-to-l from-white to-transparent z-10" />

          {/* Row A */}
          <div className="overflow-hidden mb-6">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" }}
              className="flex gap-4 md:gap-6"
            >
              {rowA.map((t, i) => (
                <Card key={`a-${i}`} t={t} />
              ))}
            </motion.div>
          </div>

          {/* Row B (reverse direction) */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" }}
              className="flex gap-4 md:gap-6"
            >
              {rowB.map((t, i) => (
                <Card key={`b-${i}`} t={t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="group relative w-[300px] md:w-[360px] shrink-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden">
      {/* sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-50/30 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex flex-col gap-4">
        <div className="text-[15px] leading-relaxed text-gray-800">“{t.quote}”</div>
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-900">{t.company}</div>
          <div className="flex items-center gap-1 text-amber-500" aria-hidden>
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
      </div>
    </div>
  );
}
