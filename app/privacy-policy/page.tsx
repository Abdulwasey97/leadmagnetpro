"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", name: "1. Introduction" },
    { id: "data-collection", name: "2. Data We Collect" },
    { id: "how-we-use", name: "3. How We Use Data" },
    { id: "protection", name: "4. Data Security" },
    { id: "third-party", name: "5. Third-Party Access" },
    { id: "rights", name: "6. Your Rights" },
    { id: "contact", name: "7. Contact Us" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fafcff]">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-grow py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-3.5 border-l border-slate-100 pl-4 py-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Table of Contents</p>
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors duration-200"
                  >
                    {sec.name}
                  </a>
                ))}
              </div>
            </aside>

            {/* Privacy Document Body */}
            <article className="lg:col-span-3 max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark mb-4">
                Privacy Policy
              </h1>
              <p className="text-slate-500 text-sm mb-12">Last Updated: July 20, 2026</p>

              <div className="space-y-12 text-slate-600 text-[15px] leading-relaxed">
                
                <section id="introduction" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    At LeadMagnet Pro, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explain how we collect, process, transfer, and store your data when you use the LeadMagnet Pro browser extension and application.
                  </p>
                  <p>
                    By installing and activating the LeadMagnet Pro extension, you agree to the collection and use of information in accordance with this policy. If you do not agree with any terms, please do not use the extension.
                  </p>
                </section>

                <section id="data-collection" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Data We Collect</h2>
                  <p className="mb-4">
                    LeadMagnet Pro acts as a pipeline between your web browser and your Zoho CRM instance. We collect minimal data necessary to facilitate contact discovery and CRM synchronization:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Account Information:</strong> Name, email address, subscription status, and authorization tokens.</li>
                    <li><strong>Lead Metadata:</strong> Name, company, job title, email, phone number, and social profile links (Google, Facebook, LinkedIn) that you explicitly select to enrich.</li>
                    <li><strong>Integration Data:</strong> Zoho CRM connection logs and API request status tags.</li>
                  </ul>
                  <p>
                    We do not read, scrape, or store any passwords, credit card numbers, or web history unrelated to lead prospecting operations.
                  </p>
                </section>

                <section id="how-we-use" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">3. How We Use Data</h2>
                  <p className="mb-4">
                    We use the data collected strictly for the following purposes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To sync lead profiles, contact parameters, and company parameters directly into your Zoho CRM account.</li>
                    <li>To check for duplicate leads in your CRM to avoid double entry (our Deduplication Log checks names and profile URIs).</li>
                    <li>To provide real-time lead enrichment via verified APIs when you request contact enrichment.</li>
                    <li>To manage billing transactions, license verification, and provide customer support.</li>
                  </ul>
                </section>

                <section id="protection" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Data Security</h2>
                  <p className="mb-4">
                    Your connection credentials are encrypted using industry-standard AES-256 algorithms. All data in transit is encrypted using TLS 1.3 tunnels.
                  </p>
                  <p>
                    LeadMagnet Pro operates as a zero-custody framework for your leads. We transfer the lead data directly to your Zoho CRM instance. Your prospect profiles are not cached on our servers longer than necessary to verify transfer validation logs.
                  </p>
                </section>

                <section id="third-party" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Third-Party Access</h2>
                  <p className="mb-4">
                    We do not sell, rent, or lease your data or your prospects' data to any database brokers or advertising systems.
                  </p>
                  <p>
                    Data is shared only with authorized third-party platforms that you explicitly hook up:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Zoho CRM:</strong> The target repository for your synchronized leads.</li>
                    <li><strong>Enrichment Engines:</strong> Verification platforms used to lookup professional email addresses and phone numbers.</li>
                  </ul>
                </section>

                <section id="rights" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Your Rights</h2>
                  <p className="mb-4">
                    Depending on your location (such as under GDPR or CCPA frameworks), you have rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The right to request deletion of your LeadMagnet Pro account and connection tokens.</li>
                    <li>The right to export any account details or connection logs we hold.</li>
                    <li>The right to request a stop to any data enrichment queries initiated by your account.</li>
                  </ul>
                </section>

                <section id="contact" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, your rights, or data security practices, please contact us at:
                  </p>
                  <p className="mt-4 font-semibold text-brand-dark">
                    Email: privacy@leadmagnetpro.com
                  </p>
                </section>

              </div>
            </article>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100/80 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-2.5">
            <Image src="/leadmagnet_pro_logo_trimmed.png" alt="LeadMagnet Pro Logo" width={113} height={28} />
          </a>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Privacy Policy", "Terms of Service", "Support", "Documentation"].map((link, idx) => {
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

          <p className="text-[11px] text-slate-500 text-center md:text-right">
            &copy; 2024 LeadMagnet Pro. All rights reserved. Powered by Zoho CRM Integration.
          </p>
        </div>
      </footer>
    </div>
  );
}
