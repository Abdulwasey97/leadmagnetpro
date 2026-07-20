"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkflowGrid from "@/components/WorkflowGrid";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I cancel my subscription?",
      answer: "In order to cancel your subcription simply go to settings tab and click cancel subscription.",
    },
    {
      question: "How do I contact the support team?",
      answer: "You can contact the support team via live chat as well as send us an email. A support agent will get back to you shortly.",
    },
    {
      question: "Are there any in-app purchases?",
      answer: "No, currently all of the features are included in one the time subscription.",
    },
    {
      question: "Can I upgrade my plan?",
      answer: "Yes you can upgrade the plan anytime by simply paying the difference amount.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* High-Fidelity Features Section */}
      <Features />

      {/* High-Speed Lead Operations (Bento Grid Workflow) */}
      <WorkflowGrid />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-[#fafcff] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-brand-dark hover:text-brand-blue transition-colors focus:outline-none"
                  >
                    <span className="text-[15px] md:text-base">{faq.question}</span>
                    <svg
                      className={`w-4 h-4 text-brand-muted transition-transform duration-350 ${
                        isOpen ? "rotate-180 text-brand-blue" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-brand-muted leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 pt-6 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-brand-blue text-white px-8 py-14 md:py-16 text-center shadow-xl shadow-brand-blue/15">
            {/* 4-point Sparkles/Stars Decoration exactly matching screenshot */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none hidden md:flex flex-col gap-6 items-end">
              {/* Star 1 - Large */}
              <svg className="w-14 h-14 text-white fill-current mr-4 animate-pulse" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
              </svg>
              <div className="flex gap-8 mr-12">
                {/* Star 2 - Medium */}
                <svg className="w-8 h-8 text-white fill-current animate-pulse" style={{ animationDelay: "0.5s" }} viewBox="0 0 24 24">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
                </svg>
                {/* Star 3 - Small */}
                <svg className="w-10 h-10 text-white fill-current mt-4 animate-pulse" style={{ animationDelay: "1s" }} viewBox="0 0 24 24">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
                </svg>
              </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight">
                Ready to Fill Your Pipeline?
              </h2>
              <p className="mt-4 text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                Join 5,000+ sales professionals using LeadMagnet Pro to automate their growth.
              </p>
              
              <button className="mt-8 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-brand-blue font-bold text-[15px] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100/80 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5">
            <Image src="/leadmagnet_pro_logo_trimmed.png" alt="LeadMagnet Pro Logo" width={113} height={28} />
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Privacy Policy", "Terms of Service", "Documentation"].map((link, idx) => {
              const isPage = link === "Privacy Policy" || link === "Terms of Service";
              const href = isPage
                ? `/${link.toLowerCase().replace(/ /g, "-")}`
                : `/#${link.toLowerCase().replace(/ /g, "-")}`;
              return (
                <a
                  key={idx}
                  href={href}
                  className="text-[11px] text-slate-500 hover:text-brand-blue underline transition-colors"
                >
                  {link}
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-slate-500 text-center md:text-right">
            &copy; 2024 LeadMagnet Pro. All rights reserved. Powered by Zoho CRM Integration.
          </p>
        </div>
      </footer>
    </div>
  );
}
