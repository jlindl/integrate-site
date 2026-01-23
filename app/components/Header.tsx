"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNavId = useId();

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on homepage, navigate there first
      window.location.href = '/#contact-form';
    }
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="w-full border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-20 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center h-10 overflow-visible">
          <Image
            src="/logos/integrate.png"
            alt="Integrate"
            width={800}
            height={213}
            priority
            className="block h-10 w-auto select-none transform origin-left scale-[4] translate-y-1 md:translate-y-1"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="/automation-services" className="hover:text-black transition-colors duration-200">Services</a>
          <a href="/industry-automation" className="hover:text-black transition-colors duration-200">Industries</a>
          <a href="/how-it-works" className="hover:text-black transition-colors duration-200">How it works</a>
          <a href="/pricing" className="hover:text-black transition-colors duration-200">Pricing</a>
          <a href="/ai-and-automation-blog" className="hover:text-black transition-colors duration-200">Blog</a>
          <a href="/about" className="hover:text-black transition-colors duration-200">About</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <button
            onClick={scrollToContact}
            className="group relative inline-flex px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black text-white text-sm font-medium transition-all duration-500 ease-out shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white overflow-hidden hover:text-gray-800 hover:shadow-xl"
            style={{
              transition: 'all 0.5s ease-out'
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget;
              btn.style.background = 'linear-gradient(135deg, #e8e8e8 0%, #f8f8f8 20%, #c0c0c0 40%, #e8e8e8 60%, #f5f5f5 80%, #d8d8d8 100%)';
              btn.style.boxShadow = 'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.15), 0 4px 15px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.1)';
              btn.style.border = '1px solid rgba(255,255,255,0.7)';
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget;
              btn.style.background = 'black';
              btn.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
              btn.style.border = 'none';
            }}
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-12" />
            </span>
            {/* Secondary shimmer */}
            <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200 ease-out bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </span>
            <span className="relative z-10">Book a call</span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div id={mobileNavId} className={`md:hidden ${mobileOpen ? "block" : "hidden"}`}>
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-20 bg-black/30 backdrop-blur-sm"
        />

        {/* Sheet */}
        <div className="fixed left-0 right-0 top-[73px] z-30 border-b border-gray-200 bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <nav className="grid gap-1 text-sm">
              {[
                { href: "/automation-services", label: "Services" },
                { href: "/industry-automation", label: "Industries" },
                { href: "/how-it-works", label: "How it works" },
                { href: "/pricing", label: "Pricing" },
                { href: "/ai-and-automation-blog", label: "Blog" },
                { href: "/about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span>{item.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  scrollToContact();
                }}
                className="mt-2 w-full rounded-xl bg-black px-4 py-3 text-left text-white font-medium hover:bg-gray-900 transition-colors"
              >
                Contact / Book a call
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
