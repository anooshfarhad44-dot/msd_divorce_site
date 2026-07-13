import Link from "next/link";
import { siteConfig } from "@/app/data/siteData";

// Inline scales of justice illustration
function ScalesIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      {/* Stand */}
      <rect x="96" y="60" width="8" height="80" rx="4" fill="white" opacity="0.3"/>
      <ellipse cx="100" cy="145" rx="28" ry="8" fill="white" opacity="0.2"/>
      {/* Beam */}
      <rect x="30" y="56" width="140" height="8" rx="4" fill="white" opacity="0.4"/>
      {/* Left pan */}
      <line x1="50" y1="64" x2="44" y2="100" stroke="white" strokeWidth="2" opacity="0.5"/>
      <line x1="58" y1="64" x2="64" y2="100" stroke="white" strokeWidth="2" opacity="0.5"/>
      <path d="M34 100 Q51 112 68 100" stroke="white" strokeWidth="2.5" fill="none" opacity="0.6"/>
      {/* Left weights */}
      <circle cx="42" cy="96" r="6" fill="white" opacity="0.3"/>
      <circle cx="54" cy="94" r="5" fill="white" opacity="0.25"/>
      {/* Right pan */}
      <line x1="142" y1="64" x2="136" y2="100" stroke="white" strokeWidth="2" opacity="0.5"/>
      <line x1="150" y1="64" x2="156" y2="100" stroke="white" strokeWidth="2" opacity="0.5"/>
      <path d="M126 100 Q143 112 160 100" stroke="white" strokeWidth="2.5" fill="none" opacity="0.6"/>
      {/* Center pivot */}
      <circle cx="100" cy="56" r="7" fill="white" opacity="0.5"/>
      {/* Stars */}
      <circle cx="170" cy="20" r="3" fill="white" opacity="0.4"/>
      <circle cx="30" cy="30" r="2" fill="white" opacity="0.3"/>
      <circle cx="155" cy="35" r="2" fill="white" opacity="0.35"/>
      <circle cx="50" cy="18" r="2.5" fill="white" opacity="0.3"/>
    </svg>
  );
}

export default function CtaBanner() {
  return (
    <section className="relative bg-gradient-to-br from-amber-500 via-amber-500 to-orange-500 py-20 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
      </div>

      {/* Floating illustration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-36 opacity-20 hidden lg:block pointer-events-none">
        <ScalesIllustration />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          100% Confidential
        </div>

        <h2 className="text-3xl sm:text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
          Ready to Take the<br />
          <span className="text-amber-100">Next Step?</span>
        </h2>

        <p className="text-amber-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Speak to one of our experienced family law solicitors today. Your first consultation is free and completely confidential.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 hover:bg-amber-50 font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Free Consultation
          </Link>
          <a href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white hover:text-amber-600 font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {siteConfig.phone}
          </a>
        </div>

        {/* Feature chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Free initial consultation", "No obligation", "Same-day callback", "SRA regulated"].map((f) => (
            <span key={f} className="bg-white/15 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
              ✓ {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
