"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      quote: '"The enrichment feature alone saved our SDR team 15 hours a week. It\'s the best Zoho extension we\'ve ever used."',
      avatarText: "JS",
      avatarBg: "bg-brand-blue text-white",
      name: "James Smith",
      title: "Sales Director, TechCorp",
    },
    {
      stars: 5,
      quote: '"Lead discovery on LinkedIn is now seamless. We don\'t have to leave the CRM to find and push new leads."',
      avatarText: "AM",
      avatarBg: "bg-[#0d9488] text-white", // Teal
      name: "Anna Miller",
      title: "Growth Lead, ScaleUp",
    },
    {
      stars: 5,
      quote: '"The deduping feature is a lifesaver. No more angry prospects getting double-emailed by different reps."',
      avatarText: "RK",
      avatarBg: "bg-[#e0e7ff] text-[#4f46e5]", // Light Indigo
      name: "Robert King",
      title: "CRM Administrator, Innovate Inc",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#fafcff] border-t border-slate-100">
      <div className="w-full px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
            What Users Are Saying
          </h2>
          <p className="mt-4 text-[15px] md:text-base text-brand-muted leading-relaxed">
            Have a look at what our customer's have to say about our LeadMagnet extension
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.02)" }}
              className="p-8 md:p-10 rounded-2xl border border-slate-100 bg-white shadow-[0_2px_8px_-3px_rgba(0,0,0,0.01)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Section */}
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, sIdx) => (
                    <svg
                      key={sIdx}
                      className="w-4.5 h-4.5 text-[#0f766e] fill-[#0f766e]" // Deep teal star
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-brand-dark font-medium italic text-[15px] leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Profile details */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-50">
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-sm select-none ${t.avatarBg}`}>
                  {t.avatarText}
                </div>
                
                {/* Info */}
                <div>
                  <h4 className="font-bold text-brand-dark text-[14px] leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-brand-muted font-mono mt-1">
                    {t.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
