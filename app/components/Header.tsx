"use client";

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
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-black shadow-sm" />
          <span className="font-semibold tracking-tight text-lg text-gray-900">Integrate</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="/solutions" className="hover:text-black transition-colors duration-200">Solutions</a>
          <a href="/how-it-works" className="hover:text-black transition-colors duration-200">How it works</a>
          <a href="/pricing" className="hover:text-black transition-colors duration-200">Pricing</a>
          <a href="/about" className="hover:text-black transition-colors duration-200">About</a>
        </nav>

        <button onClick={scrollToContact} className="inline-flex px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition-all duration-200 shadow-sm hover:shadow-md">
          Book a call
        </button>
      </div>
    </header>
  );
}
