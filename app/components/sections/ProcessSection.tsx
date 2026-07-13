import Link from "next/link";
import { processSteps } from "@/app/data/siteData";

// SVG illustrations per step — inline so no external deps
const stepIllustrations: Record<number, React.ReactNode> = {
  1: (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
      <circle cx="40" cy="40" r="38" fill="#FEF3C7" />
      <rect x="22" y="20" width="36" height="44" rx="4" fill="white" stroke="#F59E0B" strokeWidth="2"/>
      <path d="M30 32h20M30 40h20M30 48h12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="54" cy="54" r="10" fill="#10B981"/>
      <path d="M50 54l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  2: (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
      <circle cx="40" cy="40" r="38" fill="#EEF2FF" />
      <circle cx="32" cy="34" r="10" fill="#818CF8"/>
      <circle cx="50" cy="34" r="10" fill="#6366F1" opacity="0.7"/>
      <path d="M18 58c0-8.837 6.268-16 14-16h16c7.732 0 14 7.163 14 16" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M38 46l4 4-4 4" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  3: (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
      <circle cx="40" cy="40" r="38" fill="#F0FDF4" />
      <rect x="18" y="24" width="44" height="34" rx="4" fill="white" stroke="#10B981" strokeWidth="2"/>
      <rect x="24" y="30" width="32" height="6" rx="2" fill="#D1FAE5"/>
      <rect x="24" y="40" width="20" height="4" rx="2" fill="#A7F3D0"/>
      <circle cx="56" cy="56" r="10" fill="#F59E0B"/>
      <path d="M52 56h8M56 52v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  4: (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
      <circle cx="40" cy="40" r="38" fill="#FFF7ED" />
      <circle cx="40" cy="36" r="18" fill="white" stroke="#F97316" strokeWidth="2"/>
      <path d="M40 24v12l7 4" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 58c0-6 3-10 8-12h16c5 2 8 6 8 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3"/>
    </svg>
  ),
  5: (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
      <circle cx="40" cy="40" r="38" fill="#FFF1F2" />
      <rect x="20" y="22" width="40" height="38" rx="5" fill="white" stroke="#F43F5E" strokeWidth="2"/>
      <path d="M28 34h24M28 42h24M28 50h14" stroke="#FDA4AF" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="56" cy="22" r="8" fill="#F43F5E"/>
      <path d="M52.5 22l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  6: (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
      <circle cx="40" cy="40" r="38" fill="#F0FDF4" />
      <path d="M40 18l4.5 9 10 1.5-7.25 7 1.75 10L40 41l-9 4.5 1.75-10L25.5 28.5l10-1.5L40 18z" fill="#10B981" opacity="0.3" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="40" cy="48" r="10" fill="#10B981"/>
      <path d="M36 48l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
      <div className="absolute top-32 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            The Divorce Process in the UK
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We guide you through every stage — no surprises, no jargon.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-10">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.step}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}>

                  {/* Connector dot */}
                  <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow-md -translate-x-1/2 hidden sm:flex items-center justify-center z-10" />

                  {/* Illustration side */}
                  <div className={`hidden sm:flex w-1/2 ${isEven ? "justify-end pr-12" : "justify-start pl-12"}`}>
                    <div className="w-24 h-24 shrink-0">
                      {stepIllustrations[step.step]}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`sm:w-1/2 ${isEven ? "pl-0 sm:pl-12" : "pr-0 sm:pr-12"}`}>
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200 p-6 group">
                      <div className="flex items-center gap-3 mb-3">
                        {/* Mobile illustration */}
                        <div className="sm:hidden w-10 h-10 shrink-0">
                          {stepIllustrations[step.step]}
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black text-sm flex items-center justify-center shadow-sm shrink-0">
                          {step.step}
                        </div>
                        <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-amber-600 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline summary banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 p-5 sm:p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Total time: approximately 6–7 months</h3>
              <p className="text-amber-100 text-sm">For an uncontested divorce in England and Wales</p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full sm:w-auto">
              {[{ n: "20", label: "Week\ncooling-off" }, { n: "43", label: "Day wait\nfor Final Order" }, { n: "£612", label: "Court\napplication fee" }].map((s) => (
                <div key={s.n} className="text-center bg-white/15 backdrop-blur rounded-2xl px-3 sm:px-5 py-4">
                  <div className="text-xl sm:text-2xl font-extrabold">{s.n}</div>
                  <div className="text-amber-100 text-xs mt-1 leading-tight whitespace-pre-line">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/guide"
              className="shrink-0 bg-white text-amber-600 hover:bg-amber-50 font-bold px-6 py-3 rounded-2xl text-sm transition-colors shadow-lg whitespace-nowrap">
              Read Full Guide →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
