import type { Metadata } from "next";
import { feesData, familyLawFees } from "@/app/data/siteData";
import PageHero from "@/app/components/ui/PageHero";
import CtaBanner from "@/app/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Our Fees",
  description: "Transparent, competitive pricing for divorce and family law services. No hidden costs.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Our Fees"
        subtitle="We believe in complete transparency. Here's what you can expect to pay."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fees" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── 3 pricing cards — design unchanged ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {feesData.map((plan, i) => (
              <div
                key={plan.title}
                className={`rounded-xl border p-5 sm:p-8 flex flex-col ${
                  i === 1
                    ? "border-amber-500 shadow-lg ring-2 ring-amber-500 ring-offset-2"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                {i === 1 && (
                  <span className="self-start bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-bold text-slate-800 mb-1">{plan.title}</h2>
                <div className="text-3xl font-bold text-amber-500 mb-3">{plan.price}</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xs shrink-0" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center font-semibold py-3 rounded-md transition-colors text-sm ${
                    i === 1
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white"
                  }`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>

          {/* ── Full Family Law fee table ── */}
          <div className="mt-16">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              {/* Table header — gradient matching image */}
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-4 sm:px-8 py-5">
                <h2 className="text-xl font-extrabold text-white tracking-wide">FAMILY LAW</h2>
              </div>

              {/* Fee rows */}
              <div className="divide-y divide-slate-100 bg-gradient-to-br from-sky-500 to-blue-600">
                {familyLawFees.map((row, i) => (
                  <div
                    key={row.service}
                    className={`flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 ${
                      i % 2 === 0 ? "bg-white/10" : "bg-white/5"
                    } hover:bg-white/20 transition-colors group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/70 shrink-0" />
                      <span className="text-white text-sm sm:text-base font-medium">{row.service}</span>
                    </div>
                    <span className="text-white font-extrabold text-sm sm:text-base whitespace-nowrap ml-2 sm:ml-4">
                      {row.range}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-8 py-4">
                <p className="text-xs text-slate-500 leading-relaxed">
                  All fees are exclusive of VAT. Figures shown are estimated ranges — the exact fee depends on the complexity of your case.
                  A fixed-fee quote will be provided following your free initial consultation.
                </p>
              </div>
            </div>
          </div>

          {/* ── Not sure box ── */}
          <div className="mt-12 bg-slate-50 rounded-xl p-5 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-slate-800 mb-3">Not Sure What You Need?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Every situation is different. Contact us for a free initial consultation and we'll give you a clear
              cost estimate based on your specific circumstances. We never charge hidden fees.
            </p>
            <a
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
            >
              Book a Free Consultation
            </a>
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
