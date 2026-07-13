"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { navLinks, siteConfig, officeBranches } from "@/app/data/siteData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [phonesOpen, setPhonesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phonesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!phonesRef.current?.contains(e.target as Node)) setPhonesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const waLink = `https://wa.me/44${officeBranches[0].number.replace(/\D/g, "").replace(/^0/, "")}`;

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-lg" : "shadow-sm"}`}>

      {/* ══ TRUST BAR ════════════════════════════════════════════════════ */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-x-4 gap-y-2 py-2">

            {/* Left — SRA text */}
            <p className="text-slate-500 text-xs hidden sm:block">
              Authorised &amp; regulated by the{" "}
              <span className="text-slate-800 font-semibold">Solicitors Regulation Authority</span>
            </p>
            <p className="text-slate-500 text-xs sm:hidden">SRA Regulated</p>

            {/* Right — trust images + contact */}
            <div className="flex items-center gap-5">

              {/* Google badge */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/HeaderImgs/google5Star.webp"
                alt="Google 5 Star Rated"
                className="h-10 w-auto object-contain"
              />

              <span className="w-px h-7 bg-slate-200" />

              {/* Trustpilot badge */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/HeaderImgs/trustPilot5Star.webp"
                alt="Trustpilot 5 Star Rated"
                className="h-10 w-auto object-contain"
              />

              <span className="w-px h-7 bg-slate-200 hidden md:block" />

              {/* WhatsApp */}
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>

              <span className="w-px h-7 bg-slate-200 hidden md:block" />

              {/* Phone — with office dropdown */}
              <div className="relative" ref={phonesRef}>
                <button
                  onClick={() => setPhonesOpen(p => !p)}
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-amber-600 transition-colors text-xs font-semibold"
                >
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {officeBranches[0].number}
                  <svg className={`w-3 h-3 transition-transform duration-150 ${phonesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {phonesOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                    <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call an Office</p>
                    </div>
                    {officeBranches.map((b) => (
                      <div key={b.city} className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 transition-colors border-b border-slate-50 last:border-0">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{b.city}</p>
                          <a href={b.href} className="text-sm font-bold text-slate-800 hover:text-amber-600 transition-colors">
                            {b.number}
                          </a>
                        </div>
                        <a
                          href={`https://wa.me/44${b.number.replace(/\D/g, "").replace(/^0/, "")}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ══ MAIN NAV ═════════════════════════════════════════════════════ */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-amber-500 group-hover:bg-amber-600 transition-colors flex items-center justify-center shadow-md shadow-amber-200">
              <span className="text-white font-black text-xl leading-none">M</span>
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-base leading-tight tracking-tight">{siteConfig.name}</div>
              <div className="text-[11px] text-slate-400 font-medium hidden sm:block leading-none mt-0.5">{siteConfig.tagline}</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg font-medium transition-all whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            <Link href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-amber-200 hover:shadow-lg hover:shadow-amber-300 transition-all">
              Free Consultation
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(m => !m)}
              aria-label="Toggle menu"
              className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-slate-100 mt-1">
              <Link href="/contact" onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-3 rounded-xl text-sm transition-colors">
                Free Consultation
              </Link>
              <a href={officeBranches[0].href}
                className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-sm hover:border-amber-400 hover:text-amber-600 transition-colors">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {officeBranches[0].number}
              </a>
              <a href={waLink} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold px-4 py-2.5 rounded-xl text-sm hover:bg-emerald-100 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
