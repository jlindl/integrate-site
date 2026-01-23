"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCTA() {
    const scrollToContact = () => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = "/#contact-form";
        }
    };

    return (
        <section className="my-16 md:my-24">
            <div className="relative overflow-hidden rounded-3xl bg-black px-6 py-12 md:px-12 md:py-16 text-center shadow-2xl">
                {/* Abstract background elements */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-700/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Automate Your Workflow?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Stop letting manual tasks slow you down. Our AI solutions are custom-built to save you time and scale your operations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={scrollToContact}
                            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-4 text-sm font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <span>Book a Strategy Call</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <Link
                            href="/automation-services"
                            className="inline-flex items-center justify-center rounded-full border border-gray-700 bg-transparent px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
