import { testimonials } from "@/app/data/siteData";

// Star SVG
function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg className={`w-4 h-4 ${filled ? "text-amber-400 fill-amber-400" : "text-slate-300 fill-slate-300"}`} viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// Inline quote illustration
function QuoteIllustration() {
  return (
    <svg viewBox="0 0 120 80" className="w-24 h-16 opacity-10 absolute top-4 right-4" fill="none">
      <path d="M10 50 Q10 20 40 20 L40 40 Q25 40 25 55 L10 55 Z" fill="currentColor"/>
      <path d="M55 50 Q55 20 85 20 L85 40 Q70 40 70 55 L55 55 Z" fill="currentColor"/>
    </svg>
  );
}

const avatarColors = [
  "from-rose-400 to-pink-600",
  "from-blue-400 to-indigo-600",
  "from-emerald-400 to-teal-600",
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-amber-400 font-bold text-xs uppercase tracking-widest mb-3">Client Reviews</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We measure our success by the confidence and peace of mind we give our clients.
          </p>
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 mt-5 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} />)}
            </div>
            <span className="text-white font-bold">5.0</span>
            <span className="text-slate-400 text-sm">from 200+ verified reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col">
              <QuoteIllustration />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => <Star key={j} />)}
              </div>

              {/* Quote */}
              <p className="text-slate-300 leading-relaxed text-sm flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/8">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-black text-lg shrink-0 shadow-lg`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-500 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "⚖️", label: "SRA Regulated", sub: "Solicitors Regulation Authority" },
            { icon: "🔒", label: "100% Confidential", sub: "All consultations protected" },
            { icon: "🏆", label: "Award-Winning", sub: "Recognised family law team" },
            { icon: "📞", label: "Same-Day Response", sub: "Mon–Fri, 9am–5:30pm" },
          ].map((b) => (
            <div key={b.label}
              className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center hover:bg-white/8 transition-colors">
              <div className="text-2xl mb-2">{b.icon}</div>
              <div className="text-white font-bold text-sm">{b.label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{b.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
