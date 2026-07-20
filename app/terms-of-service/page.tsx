"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function TermsOfService() {
  const sections = [
    { id: "acceptance", name: "1. Acceptance of Terms" },
    { id: "license", name: "2. License Grant" },
    { id: "responsibilities", name: "3. User Responsibilities" },
    { id: "billing", name: "4. Billing & Refund Policy" },
    { id: "intellectual", name: "5. Intellectual Property" },
    { id: "liability", name: "6. Limitation of Liability" },
    { id: "governing", name: "7. Governing Law" },
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

            {/* Terms Document Body */}
            <article className="lg:col-span-3 max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark mb-4">
                Terms of Service
              </h1>
              <p className="text-slate-500 text-sm mb-12">Last Updated: July 20, 2026</p>

              <div className="space-y-12 text-slate-600 text-[15px] leading-relaxed">
                
                <section id="acceptance" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    Welcome to LeadMagnet Pro. These Terms of Service ("Terms") govern your access to and use of the LeadMagnet Pro browser extension, website, and related database connectivity tools.
                  </p>
                  <p>
                    By downloading, installing, or subscribing to LeadMagnet Pro, you agree to comply with and be bound by these Terms. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity.
                  </p>
                </section>

                <section id="license" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">2. License Grant</h2>
                  <p className="mb-4">
                    Subject to compliance with these Terms, LeadMagnet Pro grants you a limited, non-exclusive, non-transferable, and revocable license to install and run the browser extension for your internal business development operations.
                  </p>
                  <p>
                    You agree not to modify, reverse engineer, decompile, resell, or distribute the extension code or visual styles without written consent from the team.
                  </p>
                </section>

                <section id="responsibilities" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">3. User Responsibilities</h2>
                  <p className="mb-4">
                    LeadMagnet Pro integrates with Zoho CRM to help you push lead data from third-party networks (including LinkedIn, Google Maps, and Facebook). You explicitly acknowledge and agree that:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>You will comply with the terms of use of all third-party platforms accessed (e.g. LinkedIn User Agreements, Google Terms).</li>
                    <li>You are solely responsible for ensuring your data collection and outreach comply with local regulations (including GDPR, CAN-SPAM, and CCPA).</li>
                    <li>You will not use LeadMagnet Pro to scrape mass databases for spamming or malicious activities.</li>
                  </ul>
                  <p>
                    LeadMagnet Pro is not affiliated with Google, Facebook, LinkedIn, or Zoho CRM.
                  </p>
                </section>

                <section id="billing" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Billing & Refund Policy</h2>
                  <p className="mb-4">
                    Certain tiers of LeadMagnet Pro require a recurring or one-time license fee:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Billing:</strong> Fees are billed in advance on a monthly or annual basis depending on your subscription selection.</li>
                    <li><strong>Cancellations:</strong> You can cancel your subscription at any time via the Settings menu. Cancellations apply to the end of the current cycle.</li>
                    <li><strong>Refunds:</strong> Refund requests are processed within 14 days of subscription initiation if you encounter technical problems that prevent software operation.</li>
                  </ul>
                </section>

                <section id="intellectual" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Intellectual Property</h2>
                  <p>
                    All code, illustrations, mockups, branding styles, databases, and structural designs within the extension and site belong exclusively to LeadMagnet Pro. Our logo signature, CRM push logic, and custom deduplication logs are protected by copyright and intellectual property laws.
                  </p>
                </section>

                <section id="liability" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Limitation of Liability</h2>
                  <p className="mb-4">
                    To the maximum extent permitted by law, LeadMagnet Pro shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our tools.
                  </p>
                  <p>
                    This includes, but is not limited to, Zoho CRM API changes, loss of data, billing discrepancies, third-party network rate limit restrictions, or profile restrictions applied by third-party social networks.
                  </p>
                </section>

                <section id="governing" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflicts of law provisions. Any dispute arising under these Terms shall be resolved exclusively in the state and federal courts located in Delaware.
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
