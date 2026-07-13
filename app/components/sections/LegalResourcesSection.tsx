import { ukLegalResources } from "@/app/data/siteData";
import Link from "next/link";

// ─── Per-resource inline SVG illustrations ────────────────────────────────────

function GovDivorceIllustration() {
  return (
    <svg viewBox="0 0 120 90" className="w-28 h-20" fill="none">
      {/* Document */}
      <rect x="20" y="8" width="58" height="74" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
      <rect x="20" y="8" width="58" height="18" rx="5" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="2"/>
      <text x="27" y="22" fontSize="7" fill="#B45309" fontWeight="bold">DIVORCE</text>
      <path d="M30 36h38M30 44h30M30 52h34M30 60h24M30 68h28" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round"/>
      {/* Stamp */}
      <circle cx="82" cy="68" r="16" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="2"/>
      <path d="M74 68 l5 5 9-9" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Crown / official marker */}
      <path d="M35 6 L38 2 L41 5 L44 1 L47 5 L50 2 L53 6Z" fill="#F59E0B"/>
    </svg>
  );
}

function GovChildrenIllustration() {
  return (
    <svg viewBox="0 0 120 90" className="w-28 h-20" fill="none">
      {/* Parent 1 */}
      <circle cx="30" cy="28" r="12" fill="#FED7AA"/>
      <path d="M14 65 C14 54 22 48 30 48 C38 48 46 54 46 65" fill="#FB923C"/>
      {/* Parent 2 */}
      <circle cx="90" cy="28" r="12" fill="#FBCFE8"/>
      <path d="M74 65 C74 54 82 48 90 48 C98 48 106 54 106 65" fill="#F472B6"/>
      {/* Child */}
      <circle cx="60" cy="38" r="10" fill="#FDE68A"/>
      <path d="M46 72 C46 63 52 58 60 58 C68 58 74 63 74 72" fill="#FBBF24"/>
      {/* Heart */}
      <path d="M56 28 C56 25 58 23 60 25 C62 23 64 25 64 28 C64 32 60 35 60 35 C60 35 56 32 56 28Z" fill="#F87171"/>
      {/* Arms */}
      <path d="M43 58 Q50 64 52 68" stroke="#FB923C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M77 58 Q70 64 68 68" stroke="#F472B6" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function GovMoneyIllustration() {
  return (
    <svg viewBox="0 0 120 90" className="w-28 h-20" fill="none">
      {/* House */}
      <path d="M20 78 L20 46 L48 26 L76 46 L76 78Z" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
      <path d="M14 50 L48 24 L82 50" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
      <rect x="36" y="58" width="24" height="20" rx="2" fill="#93C5FD"/>
      {/* Coin stack */}
      <ellipse cx="98" cy="72" rx="14" ry="5" fill="#FCD34D"/>
      <rect x="84" y="58" width="28" height="14" rx="3" fill="#F59E0B"/>
      <ellipse cx="98" cy="58" rx="14" ry="5" fill="#FCD34D"/>
      <ellipse cx="98" cy="53" rx="14" ry="5" fill="#FBBF24"/>
      {/* Dividing line */}
      <path d="M48 50 L48 78" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round"/>
      {/* Arrows */}
      <path d="M42 64 L28 64" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M28 61 L24 64 L28 67" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M54 64 L68 64" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M68 61 L72 64 L68 67" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GovMediationIllustration() {
  return (
    <svg viewBox="0 0 120 90" className="w-28 h-20" fill="none">
      {/* Left person */}
      <circle cx="22" cy="26" r="11" fill="#C4B5FD"/>
      <path d="M8 60 C8 50 14 44 22 44 C30 44 36 50 36 60" fill="#7C3AED"/>
      {/* Right person */}
      <circle cx="98" cy="26" r="11" fill="#C4B5FD"/>
      <path d="M84 60 C84 50 90 44 98 44 C106 44 112 50 112 60" fill="#7C3AED"/>
      {/* Mediator */}
      <circle cx="60" cy="22" r="13" fill="#FDE68A"/>
      <path d="M44 58 C44 46 52 40 60 40 C68 40 76 46 76 58" fill="#F59E0B"/>
      {/* Arrows between */}
      <path d="M36 52 L44 52" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round"/>
      <path d="M76 52 L84 52" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round"/>
      {/* Handshake */}
      <path d="M36 76 C36 76 44 70 50 72 L60 70 L70 72 C76 70 84 76 84 76" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="60" cy="82" r="5" fill="#FCD34D"/>
      <text x="57" y="85" fontSize="7" fill="white">✓</text>
    </svg>
  );
}

function GovLegalAidIllustration() {
  return (
    <svg viewBox="0 0 120 90" className="w-28 h-20" fill="none">
      {/* Scales */}
      <rect x="58" y="34" width="4" height="46" rx="2" fill="#94A3B8"/>
      <ellipse cx="60" cy="82" rx="16" ry="5" fill="#CBD5E1"/>
      <rect x="24" y="30" width="72" height="6" rx="3" fill="#64748B"/>
      <circle cx="60" cy="30" r="5" fill="#F59E0B"/>
      {/* Left pan */}
      <line x1="34" y1="36" x2="30" y2="56" stroke="#94A3B8" strokeWidth="1.5"/>
      <line x1="40" y1="36" x2="44" y2="56" stroke="#94A3B8" strokeWidth="1.5"/>
      <path d="M24 56 Q37 64 50 56" stroke="#64748B" strokeWidth="2" fill="none"/>
      {/* Left weight (heavier — person silhouette) */}
      <circle cx="37" cy="52" r="5" fill="#3B82F6" opacity="0.5"/>
      {/* Right pan */}
      <line x1="80" y1="36" x2="76" y2="56" stroke="#94A3B8" strokeWidth="1.5"/>
      <line x1="86" y1="36" x2="90" y2="56" stroke="#94A3B8" strokeWidth="1.5"/>
      <path d="M70 56 Q83 64 96 56" stroke="#64748B" strokeWidth="2" fill="none"/>
      {/* Right weight (coin) */}
      <circle cx="83" cy="52" r="5" fill="#FCD34D" opacity="0.7"/>
      {/* Shield with £ */}
      <path d="M60 6 C60 6 72 10 72 20 C72 30 60 36 60 36 C60 36 48 30 48 20 C48 10 60 6 60 6Z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5"/>
      <text x="55" y="24" fontSize="11" fill="#16A34A" fontWeight="bold">£</text>
    </svg>
  );
}

function GovCourtIllustration() {
  return (
    <svg viewBox="0 0 120 90" className="w-28 h-20" fill="none">
      {/* Building */}
      <rect x="16" y="38" width="88" height="48" rx="2" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2"/>
      {/* Roof / pediment */}
      <path d="M12 40 L60 14 L108 40Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2"/>
      {/* Columns */}
      {[28, 46, 64, 82, 100].map((x) => (
        <rect key={x} x={x} y={38} width="7" height="48" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1"/>
      ))}
      {/* Steps */}
      <rect x="10" y="84" width="100" height="5" rx="1" fill="#CBD5E1"/>
      <rect x="6" y="88" width="108" height="4" rx="1" fill="#E2E8F0"/>
      {/* Door */}
      <rect x="50" y="60" width="20" height="26" rx="2" fill="#93C5FD" stroke="#60A5FA" strokeWidth="1"/>
      {/* Torch / scales on pediment */}
      <path d="M60 22 L60 36" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M54 24 Q60 20 66 24" stroke="#F59E0B" strokeWidth="1.5" fill="none"/>
      {/* Flag */}
      <rect x="55" y="6" width="2" height="12" fill="#94A3B8"/>
      <path d="M57 6 L65 9 L57 12Z" fill="#EF4444"/>
    </svg>
  );
}

const resourceIllustrations: Record<string, React.ReactNode> = {
  "Apply for a Divorce": <GovDivorceIllustration />,
  "Child Arrangements": <GovChildrenIllustration />,
  "Money and Property": <GovMoneyIllustration />,
  "Family Mediation": <GovMediationIllustration />,
  "Check Legal Aid": <GovLegalAidIllustration />,
  "Find a Court": <GovCourtIllustration />,
};

const resourceAccents: Record<string, { bg: string; iconBg: string }> = {
  "Apply for a Divorce": { bg: "from-amber-50 to-yellow-50", iconBg: "bg-amber-100" },
  "Child Arrangements": { bg: "from-orange-50 to-rose-50", iconBg: "bg-orange-100" },
  "Money and Property": { bg: "from-blue-50 to-sky-50", iconBg: "bg-blue-100" },
  "Family Mediation": { bg: "from-violet-50 to-purple-50", iconBg: "bg-violet-100" },
  "Check Legal Aid": { bg: "from-emerald-50 to-green-50", iconBg: "bg-emerald-100" },
  "Find a Court": { bg: "from-slate-50 to-gray-50", iconBg: "bg-slate-100" },
};

export default function LegalResourcesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Official Information</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            UK Government Legal Resources
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Direct links to official GOV.UK resources for divorce and family law information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ukLegalResources.map((resource) => {
            const accent = resourceAccents[resource.title] ?? { bg: "from-slate-50 to-white", iconBg: "bg-slate-100" };
            return (
              <a key={resource.title} href={resource.url} target="_blank" rel="noopener noreferrer"
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">

                {/* Illustration panel */}
                <div className={`relative h-40 bg-gradient-to-br ${accent.bg} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white/50" />
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-white/40" />
                  <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                    {resourceIllustrations[resource.title] ?? <span className="text-6xl">{resource.icon}</span>}
                  </div>
                  {/* External link icon */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/80 flex items-center justify-center text-slate-400 group-hover:text-amber-500 transition-colors shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className={`w-9 h-9 rounded-xl ${accent.iconBg} flex items-center justify-center text-lg mb-3 shadow-sm`}>
                    {resource.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-amber-600 group-hover:gap-2.5 transition-all">
                    Visit GOV.UK
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Need personalised advice?</h3>
            <p className="text-slate-400 text-sm max-w-md">While these official resources are helpful, every situation is unique. Speak to our expert solicitors for tailored legal guidance.</p>
          </div>
          <Link href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg shadow-amber-500/20 text-sm">
            Get a Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
