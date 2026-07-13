import Link from "next/link";
import { servicesData } from "@/app/data/siteData";

// ─── Per-service inline SVG illustrations ────────────────────────────────────

function DivorceIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-36 h-28" fill="none">
      {/* Scales base & pole */}
      <rect x="78" y="55" width="4" height="42" rx="2" fill="#94A3B8"/>
      <ellipse cx="80" cy="100" rx="18" ry="5" fill="#CBD5E1"/>
      {/* Beam */}
      <rect x="34" y="50" width="92" height="6" rx="3" fill="#64748B"/>
      <circle cx="80" cy="50" r="5" fill="#F59E0B"/>
      {/* Left pan strings */}
      <line x1="46" y1="56" x2="42" y2="76" stroke="#94A3B8" strokeWidth="1.5"/>
      <line x1="52" y1="56" x2="56" y2="76" stroke="#94A3B8" strokeWidth="1.5"/>
      {/* Left pan */}
      <path d="M36 76 Q49 84 62 76" stroke="#64748B" strokeWidth="2" fill="none"/>
      {/* Right pan strings */}
      <line x1="108" y1="56" x2="104" y2="76" stroke="#94A3B8" strokeWidth="1.5"/>
      <line x1="114" y1="56" x2="118" y2="76" stroke="#94A3B8" strokeWidth="1.5"/>
      {/* Right pan */}
      <path d="M98 76 Q111 84 124 76" stroke="#64748B" strokeWidth="2" fill="none"/>
      {/* Gavel head */}
      <rect x="22" y="22" width="28" height="14" rx="4" fill="#B45309" transform="rotate(-35 36 29)"/>
      <rect x="30" y="28" width="5" height="26" rx="2" fill="#78350F" transform="rotate(-35 32 41)"/>
      {/* Broken heart */}
      <path d="M94 28 C94 22 100 18 104 22 C108 18 114 22 114 28 C114 36 104 44 104 44 C104 44 94 36 94 28Z" fill="#FCA5A5"/>
      <path d="M104 28 L101 34 L106 34 L104 44" stroke="#EF4444" strokeWidth="1.5" fill="none"/>
      {/* Document */}
      <rect x="60" y="16" width="22" height="28" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="1.5"/>
      <path d="M65 23h12M65 28h8M65 33h10" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M66 17v-1" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2"/>
      <text x="63" y="44" fontSize="5" fill="#F59E0B" fontWeight="bold">DIVORCE</text>
    </svg>
  );
}

function FinancialIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-36 h-28" fill="none">
      {/* House */}
      <path d="M52 72 L52 44 L80 24 L108 44 L108 72 Z" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2"/>
      <path d="M44 48 L80 22 L116 48" stroke="#1D4ED8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Door */}
      <rect x="72" y="55" width="16" height="17" rx="2" fill="#93C5FD"/>
      <circle cx="85" cy="63" r="1.5" fill="#1D4ED8"/>
      {/* Window */}
      <rect x="56" y="52" width="10" height="10" rx="1" fill="white" stroke="#93C5FD" strokeWidth="1.5"/>
      <line x1="56" y1="57" x2="66" y2="57" stroke="#93C5FD" strokeWidth="1"/>
      <line x1="61" y1="52" x2="61" y2="62" stroke="#93C5FD" strokeWidth="1"/>
      {/* Shield */}
      <path d="M108 52 C108 52 118 48 118 60 C118 68 112 73 108 75 C104 73 98 68 98 60 C98 48 108 52 108 52Z" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5"/>
      <path d="M104 61 l2.5 2.5 5-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Coins stack */}
      <ellipse cx="48" cy="92" rx="12" ry="4" fill="#FCD34D"/>
      <rect x="36" y="82" width="24" height="10" rx="2" fill="#F59E0B"/>
      <ellipse cx="48" cy="82" rx="12" ry="4" fill="#FCD34D"/>
      <ellipse cx="48" cy="79" rx="12" ry="4" fill="#FBBF24"/>
      {/* Document */}
      <rect x="112" y="76" width="26" height="34" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="1.5"/>
      <path d="M118 83h14M118 88h10M118 93h12" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="114" y="106" fontSize="4.5" fill="#10B981" fontWeight="bold">SETTLEMENT</text>
      <text x="116" y="111" fontSize="4.5" fill="#10B981" fontWeight="bold">AGREEMENT</text>
    </svg>
  );
}

function ChildArrangementsIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-36 h-28" fill="none">
      {/* Parent 1 */}
      <circle cx="48" cy="36" r="14" fill="#FED7AA"/>
      <path d="M26 78 C26 62 36 54 48 54 C60 54 70 62 70 78" fill="#FB923C"/>
      {/* Parent 2 */}
      <circle cx="112" cy="36" r="14" fill="#FBCFE8"/>
      <path d="M90 78 C90 62 100 54 112 54 C124 54 134 62 134 78" fill="#F472B6"/>
      {/* Child */}
      <circle cx="80" cy="52" r="11" fill="#FDE68A"/>
      <path d="M62 90 C62 78 70 72 80 72 C90 72 98 78 98 90" fill="#FBBF24"/>
      {/* Heart above child */}
      <path d="M76 42 C76 39 78.5 37 80 39 C81.5 37 84 39 84 42 C84 46 80 49 80 49 C80 49 76 46 76 42Z" fill="#F87171"/>
      {/* Connecting lines / arms */}
      <path d="M59 68 Q70 76 68 82" stroke="#FB923C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M101 68 Q90 76 92 82" stroke="#F472B6" strokeWidth="2" strokeLinecap="round"/>
      {/* House in background */}
      <path d="M70 108 L70 95 L80 88 L90 95 L90 108Z" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1"/>
      <path d="M67 97 L80 87 L93 97" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function MediationIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-36 h-28" fill="none">
      {/* Person left */}
      <circle cx="34" cy="34" r="13" fill="#C4B5FD"/>
      <path d="M14 76 C14 62 24 54 34 54 C44 54 54 62 54 76" fill="#7C3AED"/>
      {/* Person right */}
      <circle cx="126" cy="34" r="13" fill="#C4B5FD"/>
      <path d="M106 76 C106 62 116 54 126 54 C136 54 146 62 146 76" fill="#7C3AED"/>
      {/* Mediator (center, slightly larger) */}
      <circle cx="80" cy="28" r="16" fill="#FDE68A"/>
      <path d="M58 74 C58 56 68 48 80 48 C92 48 102 56 102 74" fill="#F59E0B"/>
      {/* Handshake / connection lines */}
      <path d="M54 65 Q66 72 68 76" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2"/>
      <path d="M106 65 Q94 72 92 76" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2"/>
      {/* Speech bubble left */}
      <rect x="8" y="14" width="22" height="14" rx="3" fill="white" stroke="#DDD6FE" strokeWidth="1.5"/>
      <path d="M14 28 L12 33 L20 28" fill="white" stroke="#DDD6FE" strokeWidth="1"/>
      <path d="M12 19h14M12 23h10" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Speech bubble right */}
      <rect x="130" y="14" width="22" height="14" rx="3" fill="white" stroke="#DDD6FE" strokeWidth="1.5"/>
      <path d="M136 28 L148 33 L140 28" fill="white" stroke="#DDD6FE" strokeWidth="1"/>
      <path d="M134 19h14M134 23h10" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Handshake icon */}
      <path d="M66 96 C66 96 70 92 74 94 L80 92 L86 94 C90 92 94 96 94 96" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M62 96 L66 96" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
      <path d="M98 96 L94 96" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function PrenuptialIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-36 h-28" fill="none">
      {/* Scroll / Document */}
      <rect x="40" y="20" width="80" height="90" rx="6" fill="white" stroke="#FCD34D" strokeWidth="2"/>
      <rect x="40" y="20" width="80" height="18" rx="6" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="2"/>
      {/* Scroll curl top */}
      <path d="M40 26 Q34 26 34 32 Q34 38 40 38" stroke="#FCD34D" strokeWidth="1.5" fill="#FFFBEB"/>
      <path d="M120 26 Q126 26 126 32 Q126 38 120 38" stroke="#FCD34D" strokeWidth="1.5" fill="#FFFBEB"/>
      {/* Document title */}
      <text x="62" y="34" fontSize="7" fill="#B45309" fontWeight="bold">AGREEMENT</text>
      {/* Lines */}
      <path d="M52 50h56M52 58h56M52 66h40M52 74h48M52 82h36" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round"/>
      {/* Seal / stamp */}
      <circle cx="96" cy="92" r="14" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
      <circle cx="96" cy="92" r="10" fill="#FCD34D" opacity="0.4"/>
      <text x="91" y="96" fontSize="10" fill="#B45309">✦</text>
      {/* Rings */}
      <circle cx="44" cy="18" r="9" fill="none" stroke="#FCD34D" strokeWidth="3"/>
      <circle cx="56" cy="18" r="9" fill="none" stroke="#F59E0B" strokeWidth="3"/>
      {/* Pen */}
      <rect x="112" y="72" width="6" height="26" rx="2" fill="#7C3AED" transform="rotate(-30 115 85)"/>
      <path d="M106 98 L110 104 L114 98Z" fill="#4C1D95"/>
      <rect x="113" y="70" width="6" height="6" rx="1" fill="#A78BFA" transform="rotate(-30 116 73)"/>
    </svg>
  );
}

function CohabitationIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-36 h-28" fill="none">
      {/* House outline */}
      <path d="M28 112 L28 58 L80 24 L132 58 L132 112 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2"/>
      <path d="M20 62 L80 22 L140 62" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Roof shading */}
      <path d="M28 58 L80 24 L132 58Z" fill="#E2E8F0"/>
      {/* Door */}
      <rect x="66" y="82" width="28" height="30" rx="3" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="1.5"/>
      <circle cx="90" cy="97" r="2" fill="#3B82F6"/>
      {/* Windows */}
      <rect x="36" y="70" width="20" height="18" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1.5"/>
      <line x1="36" y1="79" x2="56" y2="79" stroke="#CBD5E1" strokeWidth="1"/>
      <line x1="46" y1="70" x2="46" y2="88" stroke="#CBD5E1" strokeWidth="1"/>
      <rect x="104" y="70" width="20" height="18" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1.5"/>
      <line x1="104" y1="79" x2="124" y2="79" stroke="#CBD5E1" strokeWidth="1"/>
      <line x1="114" y1="70" x2="114" y2="88" stroke="#CBD5E1" strokeWidth="1"/>
      {/* Split arrow through house */}
      <path d="M72 97 L56 97" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round"/>
      <path d="M88 97 L104 97" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round"/>
      <path d="M60 93 L56 97 L60 101" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M100 93 L104 97 L100 101" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* People each side */}
      <circle cx="18" cy="90" r="9" fill="#FED7AA"/>
      <path d="M8 112 C8 104 12 100 18 100 C24 100 28 104 28 112" fill="#FB923C"/>
      <circle cx="142" cy="90" r="9" fill="#FBCFE8"/>
      <path d="M132 112 C132 104 136 100 142 100 C148 100 152 104 152 112" fill="#F472B6"/>
    </svg>
  );
}

const serviceIllustrations: Record<string, React.ReactNode> = {
  divorce: <DivorceIllustration />,
  "financial-settlements": <FinancialIllustration />,
  "child-arrangements": <ChildArrangementsIllustration />,
  mediation: <MediationIllustration />,
  "prenuptial-agreements": <PrenuptialIllustration />,
  cohabitation: <CohabitationIllustration />,
};

const cardAccents: Record<string, { bg: string; badge: string; badgeText: string }> = {
  divorce: { bg: "from-rose-50 to-orange-50", badge: "bg-rose-100 text-rose-700", badgeText: "Most Common" },
  "financial-settlements": { bg: "from-emerald-50 to-teal-50", badge: "bg-emerald-100 text-emerald-700", badgeText: "Asset Protection" },
  "child-arrangements": { bg: "from-blue-50 to-sky-50", badge: "bg-blue-100 text-blue-700", badgeText: "Child-Focused" },
  mediation: { bg: "from-violet-50 to-purple-50", badge: "bg-violet-100 text-violet-700", badgeText: "Out of Court" },
  "prenuptial-agreements": { bg: "from-amber-50 to-yellow-50", badge: "bg-amber-100 text-amber-700", badgeText: "Pre-Marriage" },
  cohabitation: { bg: "from-slate-50 to-gray-50", badge: "bg-slate-200 text-slate-700", badgeText: "Unmarried Couples" },
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Our Family Law Services
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From divorce proceedings to child arrangements, we provide expert legal support across all areas of family law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const accent = cardAccents[service.slug] ?? { bg: "from-slate-50 to-white", badge: "bg-slate-100 text-slate-600", badgeText: "Expert Help" };
            return (
              <div key={service.slug}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">

                {/* Illustration panel */}
                <div className={`relative h-48 bg-gradient-to-br ${accent.bg} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/50" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/30" />
                  <div className="relative z-10 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                    {serviceIllustrations[service.slug] ?? <span className="text-7xl">{service.icon}</span>}
                  </div>
                  <span className={`absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${accent.badge}`}>
                    {accent.badgeText}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{service.summary}</p>
                  <Link href="/services"
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-sm transition-colors group/link">
                    Learn more
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Not sure which service you need?</h3>
            <p className="text-slate-400 text-sm">Our solicitors will assess your situation and advise you on the best path forward.</p>
          </div>
          <Link href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg shadow-amber-500/20 text-sm">
            Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
