"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on homepage, navigate there first
      window.location.href = '/#contact-form';
    }
  };

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
          <a href="/solutions" className="hover:text-black transition-colors duration-200">Solutions</a>
          <a href="/how-it-works" className="hover:text-black transition-colors duration-200">How it works</a>
          <a href="/industries" className="hover:text-black transition-colors duration-200">Industries</a>
          <a href="/pricing" className="hover:text-black transition-colors duration-200">Pricing</a>
          <a href="/about" className="hover:text-black transition-colors duration-200">About</a>
        </nav>

        <button
          onClick={scrollToContact}
          className="group relative inline-flex px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium transition-all duration-500 ease-out shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white overflow-hidden
                     hover:text-gray-800 hover:shadow-xl"
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
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12" />
          </span>
          {/* Secondary shimmer */}
          <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </span>
          <span className="relative z-10">Book a call</span>
        </button>
      </div>
    </header>
  );
}
