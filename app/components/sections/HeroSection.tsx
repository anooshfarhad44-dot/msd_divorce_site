import Link from "next/link";
import Image from "next/image";
import { heroData, statsData } from "@/app/data/siteData";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden min-h-[90vh] flex flex-col">
      {/* Gradient orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">

          {/* LEFT — copy */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                SRA Regulated
              </span>
              <span className="text-slate-500 text-sm">Manchester · Birmingham · London</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
              <span className="text-white">{heroData.headline.split("in")[0]}</span>
              <span className="block bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                in Manchester
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-lg">
              {heroData.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Speak to solicitor — pulsing glow animation */}
              <Link href={heroData.cta1.href}
                className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-8 py-4 rounded-2xl text-base overflow-hidden group
                  shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.65)]
                  transition-all duration-300 hover:-translate-y-1 hover:from-amber-600 hover:to-amber-700">
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-amber-400 pointer-events-none" />
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative z-10">{heroData.cta1.label}</span>
              </Link>

              {/* Read the Guide — arrow bounce animation */}
              <Link href="/guide"
                className="relative inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white hover:bg-white/15 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-base group
                  hover:-translate-y-1 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Read the Divorce Guide
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex -space-x-2.5">
                {["RT","DK","PM","JD"].map((initials, i) => (
                  <div key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-slate-200">
                    {initials}
                  </div>
                ))}
              </div>
              <div className="border-l border-white/10 pl-6">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-sm text-slate-300">Trusted by <strong className="text-white">5,000+ clients</strong></p>
              </div>
              <div className="border-l border-white/10 pl-6 hidden sm:flex flex-col">
                <div className="text-sm text-slate-400">
                  <span className="text-green-400 font-bold">✓</span> Free first consultation
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — illustration */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-amber-500/10 blur-3xl" />

            <div className="relative w-full">
              {/* Main image — full column width, taller */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
                <Image
                  src="/divorce_hero_img.webp"
                  alt="MSD Solicitors — Divorce & Family Law"
                  width={700}
                  height={560}
                  className="object-contain w-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute -bottom-5 -left-5 bg-white text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">Free Consultation</p>
                  <p className="text-xs text-slate-500">No obligation, no pressure</p>
                </div>
              </div>

              {/* Floating card — top right */}
              <div className="absolute -top-5 -right-5 bg-amber-500 text-white px-4 py-3 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-2xl font-black leading-none">20+</p>
                <p className="text-xs text-amber-100 font-medium">Years experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/8 bg-white/3 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-4xl font-extrabold text-amber-400 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
