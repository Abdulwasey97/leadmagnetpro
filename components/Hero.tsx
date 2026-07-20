"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-32 bg-[#fafcff]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-blue/10 to-cyan-400/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-400/5 to-brand-blue/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            {/* CRM Workflow Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light-blue border border-brand-blue/10 shadow-sm shadow-brand-blue/5 mb-6"
            >
              {/* Lightning Icon */}
              <svg
                className="w-3.5 h-3.5 text-brand-blue fill-brand-blue"
                viewBox="0 0 24 24"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/80">
                Transform your CRM workflow
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.12]"
            >
              See Every Lead <br className="hidden md:inline" />
              Before They{" "}
              <span className="text-brand-blue italic relative inline-block">
                Slip Away
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base md:text-[17px] leading-relaxed text-brand-muted max-w-xl font-normal"
            >
              LeadMagnet Pro is an extension for Zoho CRM that helps users
              discover, enrich, and push leads from Google, Facebook, and
              LinkedIn directly into their CRM. It turns scattered online
              signals into a clear, actionable pipeline — all without leaving
              your workflow.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base md:text-[17px] leading-relaxed text-brand-muted max-w-xl font-normal"
            >
              LeadMagnet Pro empowers your sales team to stop searching and start
              connecting, giving you a radar view of every high-value prospect
              across the web. Where your audience lives, LeadMagnet Pro finds
              them — so your business never misses an opportunity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#get-started"
                className="px-8 py-4 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold text-center shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:shadow-brand-blue/25 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                Get Started Now
              </a>
              <button
                onClick={() => setShowDemo(true)}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-brand-blue/15 bg-brand-light-blue/50 hover:bg-brand-light-blue text-brand-blue font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                {/* Play Button Icon */}
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-brand-blue bg-white shadow-sm">
                  <svg
                    className="w-2.5 h-2.5 fill-brand-blue ml-0.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Mockup */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex justify-center relative w-full lg:self-end lg:-mb-8"
          >
            {/* Premium outer framing/shadow */}
            <div className="relative w-full max-w-[750px] aspect-square animate-float flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-blue/5 to-cyan-500/10 -z-10 blur-xl opacity-60" />
              
              {/* Main dashboard visual */}
              <div className="relative w-full h-full rounded-2xl border border-white/80 bg-white/40 backdrop-blur-sm p-3 shadow-2xl shadow-slate-200/50 overflow-hidden group">
                {/* Visual glare shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
                
                <Image
                  src="/hero_illustration.png"
                  alt="LeadMagnet Pro Integration Diagram"
                  width={750}
                  height={750}
                  className="w-full h-full object-cover rounded-xl select-none"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Demo Modal popup */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setShowDemo(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl bg-black border border-white/10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Demo video placeholder frame with sleek branding animation */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-dark to-[#020617] text-white p-12 text-center select-none">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue/20 border border-brand-blue/30 shadow-lg shadow-brand-blue/10 mb-6">
                  <svg
                    className="w-8 h-8 text-brand-blue fill-brand-blue animate-pulse"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">
                  LeadMagnet Pro Platform Demo
                </h3>
                <p className="text-slate-400 max-w-md text-sm mb-8">
                  Discover how Zoho CRM users automate lead capture from LinkedIn, Facebook, and Google maps with real-time enrichment.
                </p>
                
                {/* Mock dashboard player container */}
                <div className="w-full max-w-2xl bg-slate-900/60 border border-white/5 rounded-xl p-4 flex items-center justify-between text-xs text-slate-400 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>Real-time enrichment stream running...</span>
                  </div>
                  <div className="flex gap-4">
                    <span>Google Maps API: Connected</span>
                    <span>Zoho CRM: Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
