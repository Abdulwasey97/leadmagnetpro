"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Monitor scroll to apply backdrop styles on scroll & clear active section at top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // If at the very top, clear active section
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to spy on active scroll sections
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = ["features", "workflow", "faq"];
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`/#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null, // relative to viewport
      rootMargin: "-45% 0px -45% 0px", // triggers when section hits middle of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Workflow", href: "/#workflow" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm shadow-slate-100/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[80%] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-3 group">
          <Image src="/leadmagnet_pro_logo_trimmed.png" alt="LeadMagnet Pro Logo" width={145} height={36} priority />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-brand-blue font-semibold"
                    : "text-brand-muted hover:text-brand-blue"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Call to Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#get-started"
            className="px-6 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-[15px] font-semibold shadow-sm hover:shadow-md hover:shadow-brand-blue/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-brand-dark transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium py-2 border-b border-slate-50 transition-colors ${
                      isActive
                        ? "text-brand-blue font-semibold"
                        : "text-brand-dark hover:text-brand-blue"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="#get-started"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 text-center font-semibold text-white bg-brand-blue rounded-xl hover:bg-brand-blue-hover transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
