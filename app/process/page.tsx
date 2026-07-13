import type { Metadata } from "next";
import { processSteps } from "@/app/data/siteData";
import PageHero from "@/app/components/ui/PageHero";
import CtaBanner from "@/app/components/sections/CtaBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Divorce Process",
  description:
    "Understand the key stages of the divorce process in England and Wales, from what to consider before you apply through to the Final Order.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="How the Divorce Process Works"
        subtitle="A clear, step-by-step guide to the legal process of getting divorced in England and Wales — from what to consider before you apply through to your Final Order."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "The Process" }]}
      />

      {/* ── BEFORE YOU APPLY ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 font-black text-sm flex items-center justify-center shrink-0">1</span>
            <span className="text-xs font-black uppercase tracking-widest text-amber-500">Stage One</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Before You Apply</h2>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl">
            It normally takes <strong className="text-slate-700">at least 7 months</strong> to get a divorce —
            the same for both joint and sole applications. Your first decision is how you want to apply.
          </p>

          {/* Application type cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

            {/* Joint application */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 hover:border-amber-300 hover:shadow-md transition-all duration-200 group">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-200 group-hover:bg-amber-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Joint Application</h3>
                  <p className="text-sm text-slate-500 mt-0.5">With your husband or wife</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                You can make a joint application if both of the following apply:
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "You both agree that you should get a divorce",
                  "You're not at risk of domestic abuse",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 space-y-2 text-sm text-slate-600">
                <p>You'll both have to <strong className="text-slate-800">separately confirm</strong> that you want to continue at each stage.</p>
                <p>You will need to decide if you want to apply <strong className="text-slate-800">online or by post</strong> — your husband or wife must use the same method.</p>
                <p>If your husband or wife stops responding, you can continue as a <strong className="text-slate-800">sole applicant</strong>.</p>
                <p>For fee remission, <strong className="text-slate-800">both of you must be eligible</strong> to qualify.</p>
              </div>
            </div>

            {/* Sole application */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 hover:border-amber-300 hover:shadow-md transition-all duration-200 group">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-slate-300 group-hover:bg-slate-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Sole Application</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Applying on your own</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Make a sole application if either of the following apply:
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Your husband or wife does not agree you should get a divorce",
                  "You don't think they will cooperate or respond to court notifications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
                <p>You will need to <strong className="text-slate-800">confirm you want to continue</strong> with the divorce application at each stage of the process.</p>
              </div>
            </div>
          </div>

          {/* Arrangements section */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 mb-10 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Arrangements for Children, Money and Property</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Divorce proceedings deal with ending the marriage itself. Separately, you and your husband or wife
              can choose to work out the following — and you can usually <strong className="text-slate-800">avoid going to court</strong> if
              you agree between yourselves.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Child Arrangements",
                  desc: "Where the children will live and how much time they spend with each parent.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Child Maintenance",
                  desc: "Financial support payments for any children of the marriage.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                  title: "Money & Property",
                  desc: "Division of shared assets, savings, pensions and property.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-xl p-5">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Get help + polygamy note */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Get help */}
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Get Help or Advice
              </h3>
              <p className="text-sm text-slate-600 mb-4">You can get help or advice from:</p>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Citizens Advice", href: "https://www.citizensadvice.org.uk" },
                  { label: "Advice Now", href: "https://www.advicenow.org.uk" },
                  { label: "A legal adviser", href: "/contact" },
                  { label: "A divorce service provider", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors"
                    >
                      <span className="text-amber-400 text-xs">→</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Polygamy note */}
            <div className="rounded-2xl bg-slate-800 border border-slate-700 p-6 text-white">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Married to More Than One Person?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                If you are married to more than one person (polygamy), your situation requires specialist advice.
                Contact the Divorce Service Centre directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                Contact us for guidance <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── THE PROCESS STEPS ────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 font-black text-sm flex items-center justify-center shrink-0">2</span>
            <span className="text-xs font-black uppercase tracking-widest text-amber-500">Stage Two</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">The Six Key Stages</h2>
          <p className="text-slate-500 text-lg mb-12 max-w-2xl">
            Once you've decided how to apply, here's how the divorce process unfolds from application to Final Order.
          </p>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="flex gap-5 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md shadow-amber-200 group-hover:bg-amber-400 transition-colors">
                    {step.step}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="flex-1 w-px bg-amber-200 my-2" />
                  )}
                </div>
                <div className={`pb-6 flex-1 ${i < processSteps.length - 1 ? "" : ""}`}>
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:border-amber-200 hover:shadow-md transition-all duration-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY CONCEPTS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 font-black text-sm flex items-center justify-center shrink-0">3</span>
            <span className="text-xs font-black uppercase tracking-widest text-amber-500">Key Concepts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Important Terms Explained</h2>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl">
            Understanding the legal terminology makes the whole process much less daunting.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "What is No-Fault Divorce?",
                body: "No-fault divorce allows couples to end a marriage without needing to prove fault or wrongdoing by either party. Introduced in April 2022, it simplifies proceedings and reduces conflict. Only one party needs to state the marriage has irretrievably broken down.",
              },
              {
                title: "What is the Conditional Order?",
                body: "The Conditional Order is a legal document issued by the court confirming that the legal and procedural requirements for divorce have been met. It is provisional — the marriage is not yet legally over at this stage.",
              },
              {
                title: "What is the Final Order?",
                body: "The Final Order is the document that legally ends your marriage. It can be applied for at least 6 weeks after the Conditional Order is granted. Once issued, you are officially divorced.",
              },
              {
                title: "Do financial matters have to be resolved first?",
                body: "Financial arrangements and child arrangements are separate from the divorce itself and do not need to be resolved before the Final Order is granted. However, it is strongly advisable to formalise a financial settlement before finalising the divorce.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:border-amber-200 hover:shadow-sm transition-all duration-200">
                <h3 className="text-base font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
