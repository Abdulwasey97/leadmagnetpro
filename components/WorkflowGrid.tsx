"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WorkflowGrid() {
  const leads = [
    { name: "Mark Thompson", loc: "SF", industry: "Tech", conn: "500+", avatar: "MT" },
    { name: "Emily Davis", loc: "NY", industry: "Marketing", conn: "450", avatar: "ED" },
    { name: "David Lee", loc: "Austin", industry: "Software", conn: "300+", avatar: "DL" },
    { name: "Sarah Adams", loc: "Chicago", industry: "Finance", conn: "200", avatar: "SA" },
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
    <section id="workflow" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="w-full px-6 md:px-12 lg:px-16">
        
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
            Experience High-Speed Lead Operations
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          
          {/* Column 1: Discover Leads (Tall Card) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.03)" }}
            className="rounded-2xl border border-slate-100 bg-white p-8 flex flex-col justify-between shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] overflow-hidden lg:h-[640px] transition-all duration-300"
          >
            <div>
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-3">
                Prospecting
              </span>
              <h3 className="text-2xl font-bold text-brand-dark tracking-tight mb-4">
                Discover Leads
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Find high-intent prospects across Google, Facebook, and LinkedIn without leaving your CRM.
              </p>
            </div>

            {/* Custom Interactive CSS Mini-Mockup */}
            <div className="relative w-full border border-slate-100/80 rounded-xl bg-slate-50/50 p-4 shadow-inner select-none overflow-hidden text-[10px] flex-1 flex flex-col justify-between mt-2">
              <div>
                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                    <span className="font-bold text-brand-dark">Lead Search</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-brand-light-blue text-brand-blue font-bold scale-90">
                    Active Filter
                  </div>
                </div>

                {/* Search Result List */}
                <div className="flex flex-col gap-2">
                  {leads.map((lead, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 hover:border-brand-blue/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-brand-light-blue text-brand-blue flex items-center justify-center font-bold text-[9px]">
                          {lead.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-brand-dark leading-tight text-[9.5px]">{lead.name}</div>
                          <div className="text-[8px] text-brand-muted">{lead.industry} &bull; {lead.loc}</div>
                        </div>
                      </div>
                      <button className="px-2 py-1 rounded bg-brand-light-blue text-brand-blue font-bold scale-90 hover:bg-brand-blue hover:text-white transition-colors duration-200">
                        View Profile
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Enrich Contacts & Subgrid */}
          <div className="flex flex-col gap-6 lg:h-[640px]">
            
            {/* Enrich Contacts Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.03)" }}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] transition-all duration-300 relative overflow-hidden lg:h-[220px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-2">
                    Data Quality
                  </span>
                  <h3 className="text-2xl font-bold text-brand-dark tracking-tight mb-2">
                    Enrich Contacts
                  </h3>
                </div>
                {/* Magic Wand Icon */}
                <div className="w-10 h-10 rounded-xl bg-brand-light-blue flex items-center justify-center text-brand-blue shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-1.904-5.813L2 14l5.813-1.904L9 7l1.904 5.813L16 14l-6.187 1.904zM19.006 5.005L18.5 7l-.505-1.995L16 18.5l1.995-.505L18.5 20l.505-1.995L21 18.5l-1.994-.505z" />
                  </svg>
                </div>
              </div>
              <p className="text-brand-muted text-sm leading-relaxed mb-2">
                Instantly enrich lead data with emails, phone numbers, company info, and social profiles with one click.
              </p>
              
              <div className="flex items-center gap-2 text-[11px] bg-slate-50 border border-slate-100 rounded-lg p-2.5 w-fit">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-[9px]">
                  ★
                </div>
                <span className="font-semibold text-slate-600 text-[10px]">alex.rivera@salesvp.com</span>
                <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded ml-2">Enriched</span>
              </div>
            </motion.div>

            {/* Subgrid: Smart Filtering & Bulk Export */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              
              {/* Smart Filtering Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.03)" }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300 lg:h-[396px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-light-blue flex items-center justify-center text-brand-blue shadow-sm mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-brand-dark tracking-tight mb-2">
                    Smart Filtering
                  </h4>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    Filter leads by platform, location, keywords, and engagement signals to target the right audience.
                  </p>
                </div>

                {/* Micro-illustration: Filter Tags */}
                <div className="border border-slate-100 rounded-xl bg-slate-50/50 p-3 flex flex-col gap-2 mt-4">
                  <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider">Active Search Rules</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    <div className="px-1.5 py-0.5 rounded bg-white border border-brand-blue/20 text-brand-blue font-bold text-[8px] flex items-center gap-1 shadow-sm">
                      <span className="w-1 h-1 rounded-full bg-brand-blue" />
                      Platform: LinkedIn
                    </div>
                    <div className="px-1.5 py-0.5 rounded bg-white border border-emerald-200 text-emerald-600 font-bold text-[8px] flex items-center gap-1 shadow-sm">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      Role: VP/Director
                    </div>
                    <div className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-500 text-[8px] flex items-center gap-1">
                      SF Bay Area
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bulk Export Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.03)" }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300 lg:h-[396px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-light-blue flex items-center justify-center text-brand-blue shadow-sm mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-brand-dark tracking-tight mb-2">
                    Bulk Export
                  </h4>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    Export multiple leads at once to your CRM or CSV for offline analysis and reporting.
                  </p>
                </div>

                {/* Micro-illustration: Export Progress */}
                <div className="border border-slate-100 rounded-xl bg-slate-50/50 p-3 flex flex-col gap-2.5 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-[9px]">
                        CSV
                      </div>
                      <div>
                        <div className="font-bold text-[9px] text-brand-dark leading-none">leads_export.csv</div>
                        <div className="text-[7.5px] text-slate-400 mt-1">1,248 contacts</div>
                      </div>
                    </div>
                    <svg className="w-3.5 h-3.5 text-emerald-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  
                  <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[85%]" />
                  </div>
                  <div className="flex justify-between items-center text-[7.5px] text-slate-400 font-semibold leading-none">
                    <span>Exporting...</span>
                    <span>85% Completed</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Column 3: Push to CRM & Dedupe */}
          <div className="flex flex-col gap-6 lg:h-[640px]">
            
            {/* Push to CRM (Solid Electric Blue Card) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, shadow: "0 20px 25px -5px rgba(0, 86, 214, 0.15)" }}
              className="rounded-2xl bg-brand-blue p-8 text-white flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,86,214,0.3)] transition-all duration-300 lg:h-[220px]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest block mb-2">
                    Integration
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">
                    Push to CRM
                  </h3>
                </div>
                {/* Cloud Sync Icon */}
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                  </svg>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Send enriched leads directly to your Zoho CRM in seconds — no manual data entry.
              </p>
            </motion.div>

            {/* Dedupe & Track Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.03)" }}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300 lg:h-[396px]"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light-blue flex items-center justify-center text-brand-blue shadow-sm mb-4">
                  {/* Copy/Duplicate Icon */}
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="3" width="10" height="13" rx="2" />
                    <path d="M5 9v9a2 2 0 0 0 2 2h9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark tracking-tight mb-3">
                  Dedupe & Track
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Avoid duplicate entries with activity tracking &mdash; know which leads are viewed, enriched, or pushed.
                </p>
              </div>

              {/* Micro-illustration: Deduplication log */}
              <div className="border border-slate-100 rounded-xl bg-slate-50/50 p-3 flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between text-[8px] font-semibold text-slate-400">
                  <span>Smart Deduplication Log</span>
                  <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">0 Duplicates</span>
                </div>
                
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="flex items-center justify-between text-[8px] bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
                    <span className="font-bold text-slate-700">John Doe (LinkedIn)</span>
                    <span className="text-[7.5px] text-slate-400">&harr; Merged &harr;</span>
                    <span className="font-bold text-slate-700">John Doe (CRM)</span>
                  </div>
                  <div className="flex items-center justify-between text-[8px] bg-white p-2 rounded-lg border border-slate-100 shadow-sm opacity-70">
                    <span className="font-bold text-slate-700">Sarah A. (G-Maps)</span>
                    <span className="text-[7.5px] text-slate-400">&harr; Verified &harr;</span>
                    <span className="font-bold text-slate-700">New Contact</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
