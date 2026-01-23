import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* top subtle gradient line */}
      <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold text-gray-900">Integrate</div>
            <p className="mt-3 text-sm text-gray-600">
              UK&apos;s leading AI Automation Agency. Automating voice, email and CRM so your team focuses on growth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Navigation</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/automation-services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/#contact-form" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Resources</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/integration-library" className="text-gray-600 hover:text-gray-900 transition-colors">Integration Library</Link>
              </li>
              <li>
                <Link href="/resources/faqs" className="text-gray-600 hover:text-gray-900 transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Connect</div>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/integrate-tech" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.94 8.5H3.75V20.25H6.94V8.5Z" fill="#111827" />
                  <path d="M5.34 3.75C4.32 3.75 3.5 4.57 3.5 5.59C3.5 6.61 4.32 7.43 5.34 7.43C6.36 7.43 7.18 6.61 7.18 5.59C7.18 4.57 6.36 3.75 5.34 3.75Z" fill="#111827" />
                  <path d="M20.25 20.25H17.06V14C17.06 12.62 17.03 10.86 15.15 10.86C13.25 10.86 12.96 12.35 12.96 13.91V20.25H9.77V8.5H12.83V9.99H12.87C13.29 9.2 14.31 8.37 15.88 8.37C19.17 8.37 20.25 10.53 20.25 13.42V20.25Z" fill="#111827" />
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="X (Twitter)" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 3.75H21L14.68 10.98L22 20.25H16.52L12.055 14.54L6.96 20.25H3.2L9.92 12.59L3 3.75H8.64L12.645 8.94L18.244 3.75ZM17.292 18.6H18.8L7.8 5.31H6.18L17.292 18.6Z" fill="#111827" />
                </svg>
              </a>
              <a href="mailto:hello@integrate.co.uk" aria-label="Email" className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6.75H20C20.69 6.75 21.25 7.31 21.25 8V16C21.25 16.69 20.69 17.25 20 17.25H4C3.31 17.25 2.75 16.69 2.75 16V8C2.75 7.31 3.31 6.75 4 6.75ZM20 8L12 12.75L4 8V8" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-600">hello@integrate.co.uk</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {year} Integrate. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/" className="hover:text-gray-800 transition-colors">Privacy</Link>
            <span className="text-gray-300">•</span>
            <Link href="/" className="hover:text-gray-800 transition-colors">Terms</Link>
            <span className="text-gray-300">•</span>
            <Link href="/" className="hover:text-gray-800 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
