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
          <a href="/pricing" className="hover:text-black transition-colors duration-200">Pricing</a>
          <a href="/about" className="hover:text-black transition-colors duration-200">About</a>
        </nav>

        <button
          onClick={scrollToContact}
          className="relative inline-flex px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium transition-all duration-300 ease-out shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                     before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:bg-gradient-to-r before:from-white/10 before:via-white/0 before:to-white/10
                     after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-1/3 after:-translate-x-full after:rounded-full after:bg-gradient-to-r after:from-white/0 after:via-white/30 after:to-white/0 after:transition-transform after:duration-700 hover:after:translate-x-[180%]"
        >
          Book a call
        </button>
      </div>
    </header>
  );
}
