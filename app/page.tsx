"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Landing from "./landing";
import TechStack from "./techstack";
import UseCase from "./usecase";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";

export default function Page() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setError(null);
    setFieldErrors({});

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const payload = Object.fromEntries(fd.entries());

      // Normalize consent to boolean
      const consent = fd.get("consent") === "on";

      // Basic client-side validation
      const errs: Record<string, string> = {};
      const email = String(payload.email || "").trim();
      const phone = String(payload.phone || "").trim();
      const name = String(payload.name || "").trim();
      const company = String(payload.company || "").trim();
      const message = String(payload.message || "").trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Accepts international, spaces, dashes, parentheses. Requires at least 7 digits.
      const phoneDigits = (phone.match(/\d/g) || []).length;

      if (!name) errs.name = "Full name is required";
      if (!email || !emailRegex.test(email)) errs.email = "Enter a valid email";
      if (!company) errs.company = "Company name is required";
      if (!message) errs.message = "Please tell us about your needs";
      if (phone && phoneDigits < 7) errs.phone = "Enter a valid phone number";
      if (!consent) errs.consent = "You must agree before submitting";

      if (Object.keys(errs).length > 0) {
        setFieldErrors(errs);
        setStatus("error");
        return;
      }

      setStatus("loading");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          company: payload.company,
          phone: payload.phone,
          message: payload.message,
          consent,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    }
  };
  return (
    <>
      <Header />
      <Landing />
      <TechStack />
      <UseCase />
      <Testimonials />
      
      {/* CONTACT FORM SECTION */}
      <section id="contact-form" className="w-full bg-linear-to-b from-white via-gray-50 to-white py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Let&apos;s talk automation.
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us about your business and we&apos;ll show you what&apos;s possible. No pressure, just honest advice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors text-sm"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors text-sm"
                    placeholder="john@company.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-2 text-xs text-red-600">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors text-sm"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors text-sm"
                    placeholder="+44 7700 900000"
                  />
                  {fieldErrors.phone && (
                    <p className="mt-2 text-xs text-red-600">{fieldErrors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your needs *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors text-sm resize-none"
                  placeholder="What automation challenges are you facing? What would you like to achieve?"
                />
                {fieldErrors.message && (
                  <p className="mt-2 text-xs text-red-600">{fieldErrors.message}</p>
                )}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
                  I agree to be contacted by Integrate regarding my inquiry. We&apos;ll never share your information with third parties.
                </label>
                {fieldErrors.consent && (
                  <p className="mt-2 text-xs text-red-600">{fieldErrors.consent}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "loading"}
                className="w-full px-8 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors shadow-md hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : status === "success" ? "Sent!" : "Send Message"}
              </motion.button>

              {status === "error" && (
                <p className="text-xs text-center text-red-600">{error}</p>
              )}
              {status !== "error" && (
                <p className="text-xs text-center text-gray-500">
                  Typically respond within 2 hours • Free consultation • No commitments
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
}
