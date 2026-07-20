"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Multi-Platform Lead Discovery",
      description: "Find prospects across Google, Facebook, and LinkedIn without jumping between tabs.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <circle cx="6" cy="18" r="2" />
          <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" />
          <line x1="16.5" y1="7.5" x2="13.5" y2="10.5" />
          <line x1="16.5" y1="16.5" x2="13.5" y2="13.5" />
          <line x1="7.5" y1="16.5" x2="10.5" y2="13.5" />
        </svg>
      ),
    },
    {
      title: "One-Click Enrichment",
      description: "Instantly enrich lead data with emails, phone numbers, company info, and social profiles.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <path d="M12 6v6" />
          <path d="M12 15h.01" />
        </svg>
      ),
    },
    {
      title: "Direct CRM Push",
      description: "Push enriched leads straight to your Zoho CRM with a single click.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 11-.57-8.38l.73-.73" />
        </svg>
      ),
    },
    {
      title: "Smart Filtering",
      description: "Filter leads by platform, location, keywords, and engagement signals to focus on what matters.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      ),
    },
    {
      title: "Bulk Export",
      description: "Export multiple leads at once to your CRM or CSV for offline analysis.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
    },
    {
      title: "Activity Tracking",
      description: "Track which leads have been viewed, enriched, or pushed to avoid duplicates.",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#fafcff] border-t border-slate-100">
      <div className="w-full px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-brand-dark leading-tight">
            Finding, Enriching, and Pushing Leads Made Effortless With LeadMagnet Pro
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-brand-muted leading-relaxed max-w-2xl mx-auto">
            LeadMagnet Pro seamlessly integrates with your Zoho CRM and pulls high-intent leads from Google, Facebook, and LinkedIn into one unified dashboard.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)" }}
              className="p-8 md:p-10 rounded-2xl border border-slate-100 bg-white shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-brand-light-blue flex items-center justify-center mb-6 shadow-[inset_0_1px_2px_rgba(0,86,214,0.05)]">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-brand-dark tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-muted text-[14px] leading-relaxed font-normal">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
