// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import { navLinks, siteConfig, officeBranches } from "@/app/data/siteData";

// const WA_ICON = (
//   <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//   </svg>
// );

// export default function Header() {
//   const [menuOpen, setMenuOpen]   = useState(false);
//   const [phonesOpen, setPhonesOpen] = useState(false);
//   const [scrolled, setScrolled]   = useState(false);
//   const phonesRef = useRef<HTMLDivElement>(null);
//   const pathname  = usePathname();

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 8);
//     window.addEventListener("scroll", fn, { passive: true });
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   useEffect(() => {
//     const fn = (e: MouseEvent) => {
//       if (!phonesRef.current?.contains(e.target as Node)) setPhonesOpen(false);
//     };
//     document.addEventListener("mousedown", fn);
//     return () => document.removeEventListener("mousedown", fn);
//   }, []);

//   const waLink = `https://wa.me/44${officeBranches[0].number.replace(/\D/g, "").replace(/^0/, "")}`;

//   return (
//     <header className={`sticky top-0 z-50 transition-all duration-300 ${
//       scrolled
//         ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/8 border-b border-slate-100"
//         : "bg-white border-b border-slate-100"
//     }`}>

//       {/* ══ TRUST BAR ══════════════════════════════════════════════════ */}
//       <div className="bg-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between gap-4 py-2 flex-wrap">

//             {/* Left */}
//             <p className="text-slate-400 text-[11px] hidden sm:block">
//               Authorised &amp; regulated by the{" "}
//               <span className="text-slate-200 font-semibold">Solicitors Regulation Authority</span>
//             </p>
//             <p className="text-slate-400 text-[11px] sm:hidden font-semibold">SRA Regulated</p>

//             {/* Right */}
//             <div className="flex items-center gap-3 sm:gap-5">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img src="/HeaderImgs/google5Star.webp" alt="Google 5 Star" className="h-8 w-auto object-contain" />
//               <span className="w-px h-5 bg-slate-700" />
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img src="/HeaderImgs/trustPilot5Star.webp" alt="Trustpilot 5 Star" className="h-8 w-auto object-contain" />
//               <span className="w-px h-5 bg-slate-700 hidden md:block" />

//               {/* WhatsApp pill */}
//               <a href={waLink} target="_blank" rel="noreferrer"
//                 className="hidden md:inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-[11px] font-bold px-3 py-1.5 rounded-full transition-colors gap-2">
//                 {WA_ICON} WhatsApp
//               </a>

//               <span className="w-px h-5 bg-slate-700 hidden md:block" />

//               {/* Phone dropdown */}
//               <div className="relative" ref={phonesRef}>
//                 <button onClick={() => setPhonesOpen(p => !p)}
//                   className="inline-flex items-center gap-1.5 text-slate-200 hover:text-amber-400 text-[11px] font-semibold transition-colors">
//                   <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   {officeBranches[0].number}
//                   <svg className={`w-3 h-3 transition-transform ${phonesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {phonesOpen && (
//                   <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50">
//                     <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100">
//                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call an Office</p>
//                     </div>
//                     {officeBranches.map((b) => (
//                       <div key={b.city} className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 border-b border-slate-50 last:border-0 transition-colors">
//                         <div>
//                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{b.city}</p>
//                           <a href={b.href} className="text-sm font-bold text-slate-800 hover:text-amber-600 transition-colors">{b.number}</a>
//                         </div>
//                         <a href={`https://wa.me/44${b.number.replace(/\D/g, "").replace(/^0/, "")}`}
//                           target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
//                           className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
//                           {WA_ICON}
//                         </a>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ══ MAIN NAV ═══════════════════════════════════════════════════ */}
//       <nav className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200/70">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center h-[66px] gap-6">

//           {/* Logo */}
//           <Link href="/" className="shrink-0">
//             <Image src="/divorceLogo.webp" alt="MSD Solicitors" width={150} height={48}
//               className="h-11 w-auto object-contain" priority />
//           </Link>

//           {/* Desktop nav */}
//           <div className="hidden lg:flex items-center flex-1 justify-center gap-1">
//             {navLinks.map((link) => {
//               const active = pathname === link.href;
//               return (
//                 <Link key={link.href} href={link.href}
//                   className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap group ${
//                     active
//                       ? "text-amber-600 bg-amber-50"
//                       : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
//                   }`}>
//                   {link.label}
//                   {/* animated underline */}
//                   <span className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-amber-500 transition-transform duration-200 origin-left ${
//                     active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
//                   }`} />
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Right actions */}
//           <div className="flex items-center gap-2.5 ml-auto shrink-0">
//             {/* Phone pill — large screens */}
//             <a href={officeBranches[0].href}
//               className="hidden xl:inline-flex items-center gap-2 border border-slate-200 hover:border-amber-400 text-slate-700 hover:text-amber-600 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150">
//               <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               {officeBranches[0].number}
//             </a>

//             {/* CTA */}
//             <Link href="/contact"
//               className="hidden sm:inline-flex items-center gap-2 relative overflow-hidden bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-amber-200 hover:shadow-amber-300 transition-all duration-200 hover:-translate-y-0.5 group">
//               <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               Free Consultation
//             </Link>

//             {/* Hamburger */}
//             <button onClick={() => setMenuOpen(m => !m)} aria-label="Toggle menu"
//               className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 {menuOpen
//                   ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile menu ─────────────────────────────────────────────── */}
//         {menuOpen && (
//           <div className="lg:hidden border-t border-slate-100 py-3 space-y-0.5 pb-4">
//             {navLinks.map((link) => {
//               const active = pathname === link.href;
//               return (
//                 <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
//                   className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
//                     active ? "bg-amber-50 text-amber-600" : "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
//                   }`}>
//                   <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${active ? "bg-amber-500" : "bg-slate-300"}`} />
//                   {link.label}
//                 </Link>
//               );
//             })}

//             <div className="pt-3 space-y-2 border-t border-slate-100 mt-2">
//               <Link href="/contact" onClick={() => setMenuOpen(false)}
//                 className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-3 rounded-xl text-sm transition-colors">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//                 Free Consultation
//               </Link>
//               <a href={officeBranches[0].href}
//                 className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-sm hover:border-amber-400 hover:text-amber-600 transition-colors">
//                 <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 {officeBranches[0].number}
//               </a>
//               <a href={waLink} target="_blank" rel="noreferrer"
//                 className="flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold px-4 py-2.5 rounded-xl text-sm hover:bg-emerald-100 transition-colors">
//                 {WA_ICON} WhatsApp Us
//               </a>
//             </div>
//           </div>
//         )}
//         </div>
//       </nav>
//     </header>
//   );
// }















"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig, officeBranches } from "@/app/data/siteData";

const WA_ICON = (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [phonesOpen, setPhonesOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const phonesRef = useRef<HTMLDivElement>(null);
  const pathname  = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!phonesRef.current?.contains(e.target as Node)) setPhonesOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const waLink = `https://wa.me/44${officeBranches[0].number.replace(/\D/g, "").replace(/^0/, "")}`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/90 backdrop-blur-md shadow-md shadow-slate-900/5 border-b border-slate-200/60"
        : "bg-white border-b border-slate-100"
    }`}>

      {/* ══ TRUST BAR (LIGHT VERSION) ═══════════════════════════════════ */}
      <div className="bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-2 flex-wrap">

            {/* Left */}
            <p className="text-slate-500 text-[11px] hidden sm:block">
              Authorised &amp; regulated by the{" "}
              <span className="text-slate-800 font-semibold">Solicitors Regulation Authority</span>
            </p>
            <p className="text-slate-600 text-[11px] sm:hidden font-semibold">SRA Regulated</p>

            {/* Right */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/HeaderImgs/google5Star.webp" alt="Google 5 Star" className="h-8 w-auto object-contain brightness-95 mix-blend-multiply" />
              <span className="w-px h-5 bg-slate-200" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/HeaderImgs/trustPilot5Star.webp" alt="Trustpilot 5 Star" className="h-8 w-auto object-contain brightness-95 mix-blend-multiply" />
              <span className="w-px h-5 bg-slate-200 hidden md:block" />

              {/* WhatsApp pill */}
              <a href={waLink} target="_blank" rel="noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full transition-colors gap-2 shadow-sm">
                {WA_ICON} WhatsApp
              </a>

              <span className="w-px h-5 bg-slate-200 hidden md:block" />

              {/* Phone dropdown */}
              <div className="relative" ref={phonesRef}>
                <button onClick={() => setPhonesOpen(p => !p)}
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-amber-600 text-[11px] font-semibold transition-colors">
                  <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {officeBranches[0].number}
                  <svg className={`w-3 h-3 transition-transform ${phonesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {phonesOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                    <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call an Office</p>
                    </div>
                    {officeBranches.map((b) => (
                      <div key={b.city} className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 border-b border-slate-50 last:border-0 transition-colors">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{b.city}</p>
                          <a href={b.href} className="text-sm font-bold text-slate-800 hover:text-amber-600 transition-colors">{b.number}</a>
                        </div>
                        <a href={`https://wa.me/44${b.number.replace(/\D/g, "").replace(/^0/, "")}`}
                          target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
                          className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                          {WA_ICON}
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

      {/* ══ MAIN NAV (LIGHT CLEAN) ════════════════════════════════════ */}
      <nav className="bg-white/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[66px] gap-6">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image src="/divorceLogo.webp" alt="MSD Solicitors" width={150} height={48}
                className="h-11 w-auto object-contain" priority />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center flex-1 justify-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap group ${
                      active
                        ? "text-amber-600 bg-amber-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}>
                    {link.label}
                    {/* animated underline */}
                    <span className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-amber-500 transition-transform duration-200 origin-left ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2.5 ml-auto shrink-0">
              {/* Phone pill — large screens */}
              <a href={officeBranches[0].href}
                className="hidden xl:inline-flex items-center gap-2 border border-slate-200 hover:border-amber-400 text-slate-700 hover:text-amber-600 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {officeBranches[0].number}
              </a>

              {/* CTA */}
              <Link href="/contact"
                className="hidden sm:inline-flex items-center gap-2 relative overflow-hidden bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-amber-200 hover:shadow-amber-300 transition-all duration-200 hover:-translate-y-0.5 group">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Free Consultation
              </Link>

              {/* Hamburger */}
              <button onClick={() => setMenuOpen(m => !m)} aria-label="Toggle menu"
                className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {menuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>

          {/* ── Mobile menu ─────────────────────────────────────────────── */}
          {menuOpen && (
            <div className="lg:hidden border-t border-slate-100 py-3 space-y-0.5 pb-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      active ? "bg-amber-50 text-amber-600" : "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                    }`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${active ? "bg-amber-500" : "bg-slate-300"}`} />
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-3 space-y-2 border-t border-slate-100 mt-2">
                <Link href="/contact" onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-3 rounded-xl text-sm transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Free Consultation
                </Link>
                <a href={officeBranches[0].href}
                  className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-sm hover:border-amber-400 hover:text-amber-600 transition-colors">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {officeBranches[0].number}
                </a>
                <a href={waLink} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold px-4 py-2.5 rounded-xl text-sm hover:bg-emerald-100 transition-colors">
                  {WA_ICON} WhatsApp Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}