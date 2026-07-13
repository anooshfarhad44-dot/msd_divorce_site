"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig, officeBranches, socialLinks, navLinks } from "@/app/data/siteData";

const serviceLinks = [
  { label: "Divorce Proceedings", href: "/services" },
  { label: "Financial Settlements", href: "/services" },
  { label: "Child Arrangements", href: "/services" },
  { label: "Family Mediation", href: "/services" },
  { label: "Prenuptial Agreements", href: "/services" },
  { label: "Cohabitation Disputes", href: "/services" },
];

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "instagram":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "facebook":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "x":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l16 16M4 20L20 4" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "youtube":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const [activeBranch, setActiveBranch] = useState(officeBranches[0]);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 relative overflow-hidden border-t border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-slate-700/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top grid — brand + map + links */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-8 lg:gap-12 pb-12 border-b border-slate-800">

          {/* Col 1 — Brand + services */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:bg-amber-400 transition-colors">
                  <span className="text-white font-black text-xl leading-none">M</span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg leading-tight">{siteConfig.name}</div>
                  <div className="text-xs text-slate-500">{siteConfig.tagline}</div>
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Experienced family law solicitors in Manchester, Birmingham and London.
                Regulated by the Solicitors Regulation Authority.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-amber-400 mb-4">Our Services</h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-all duration-200 hover:translate-x-1 transform"
                    >
                      <span className="text-amber-500/50 text-[9px]">➔</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 2 — Map + office tabs */}
          <div className="flex flex-col gap-5">
            {/* Map */}
            <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/30 relative bg-slate-800">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeBranch.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${activeBranch.city} office map`}
              />
            </div>

            {/* Office tabs */}
            <div>
              <div className="flex items-center gap-1 border-b border-slate-700 mb-5">
                {officeBranches.map((branch) => (
                  <button
                    key={branch.city}
                    onClick={() => setActiveBranch(branch)}
                    className={`pb-2.5 px-3 text-xs font-bold transition-all duration-200 cursor-pointer relative whitespace-nowrap ${
                      activeBranch.city === branch.city
                        ? "text-amber-400"
                        : "text-slate-500 hover:text-slate-200"
                    }`}
                  >
                    {branch.city}
                    {activeBranch.city === branch.city && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <address className="not-italic space-y-3 min-h-[100px]">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-slate-400 leading-relaxed">{activeBranch.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href={activeBranch.href} className="text-amber-400 hover:text-amber-300 font-bold text-sm tracking-wide transition-colors">
                    {activeBranch.number}
                  </a>
                  {activeBranch.city === "Manchester" && (
                    <a
                      href={`https://wa.me/44${activeBranch.number.replace(/\D/g, "").replace(/^0+/, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 ml-2"
                      aria-label="WhatsApp Manchester"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.95 11.95 0 001.99 6.6L0 24l5.53-1.83A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-2.1 0-4.05-.6-5.73-1.63l-.41-.25-3.28 1.09 1.1-3.2-.26-.42A9.5 9.5 0 012.5 12 9.5 9.5 0 1112 21.5z" />
                        <path d="M17.3 14.1c-.3-.15-1.76-.86-2.03-.96-.27-.1-.46-.15-.65.15s-.74.96-.9 1.16c-.16.2-.33.22-.62.07-.3-.15-1.13-.42-2.15-1.32-.8-.72-1.34-1.6-1.5-1.9-.16-.3-.02-.46.13-.61.13-.12.3-.33.45-.5.15-.16.2-.27.3-.45.1-.18.05-.34-.02-.49-.07-.15-.65-1.56-.9-2.14-.24-.56-.48-.48-.65-.49l-.55-.01c-.18 0-.46.07-.7.34-.24.27-.94.92-.94 2.24 0 1.32.96 2.6 1.1 2.78.13.18 1.9 2.9 4.6 3.95 2.7 1.05 2.7.7 3.18.66.48-.03 1.54-.66 1.76-1.3.22-.64.22-1.18.15-1.3-.07-.12-.27-.18-.57-.33z" fill="#fff" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Col 3 — Quick links + social */}
          <div className="flex flex-col gap-8">
            {/* Quick links — show full site links in two columns */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-amber-400 mb-4">Quick Links</h3>
              {/* Footer should list all main site links in two columns for easy access */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Divorce Guide", href: "/guide" },
                  { label: "The Process", href: "/process" },
                  { label: "Fees", href: "/fees" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Blog", href: "/blog" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-all duration-200"
                  >
                    <span className="text-amber-500/50 text-[9px]">➔</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Office hours */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-amber-400 mb-4">Office Hours</h3>
              <ul className="space-y-1.5 text-sm text-slate-400">
                <li className="flex justify-between gap-4">
                  <span>Monday – Friday</span>
                  <span className="text-slate-300 font-medium">9:00am – 5:30pm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="text-slate-500">Closed</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="text-slate-500">Closed</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-amber-400 mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 ${link.colorClass}`}
                  >
                    <SocialIcon icon={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="py-6 border-b border-slate-800 text-center">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-4xl mx-auto">
            Masaud Solicitors Limited T/A MSD Solicitors is authorised and regulated by the Solicitors Regulation
            Authority (SRA No: {siteConfig.sraNumber}). Masaud Solicitors Limited is registered in England and Wales
            with registration number {siteConfig.companyNumber}. VAT Registration No. {siteConfig.vatNumber}. The
            registered office address is Suite 2, First Floor, 6 Oldham Road, Manchester, M4 5DB.{" "}
            <span className="text-amber-400 font-semibold">We do not accept service by email or fax.</span>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-600 font-semibold uppercase tracking-widest text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-600">
            <Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</Link>
          </div>
          <p className="text-[10px] text-slate-600 text-center sm:text-right max-w-xs">
            Information provided is for guidance only and does not substitute direct legal advice.
          </p>
        </div>

      </div>
    </footer>
  );
}
