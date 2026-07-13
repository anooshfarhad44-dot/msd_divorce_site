"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SidebarForm from "@/app/components/ui/SidebarForm";

// ─── shared sub-components ────────────────────────────────────────────────────
function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4 text-sm text-slate-700 leading-relaxed my-5">
      {children}
    </div>
  );
}

function CheckList({ items, icon = "check" }: { items: string[]; icon?: "check" | "arrow" }) {
  return (
    <ul className="space-y-3 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
          {icon === "check" ? (
            <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">✓</span>
          ) : (
            <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">→</span>
          )}
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

// ─── step content data ────────────────────────────────────────────────────────
const STEPS = [
  {
    n: 1,
    title: "Check You Can Get a Divorce",
    icon: "⚖️",
    color: "from-violet-500 to-purple-600",
    lightBg: "bg-violet-50",
    accent: "text-violet-600",
    formHeadline: "Not sure if you qualify?",
    formSubtext: "Our solicitors will check your eligibility in a free, confidential call.",
  },
  {
    n: 2,
    title: "Before You Apply",
    icon: "📋",
    color: "from-blue-500 to-cyan-500",
    lightBg: "bg-blue-50",
    accent: "text-blue-600",
    formHeadline: "Joint or sole — not sure which?",
    formSubtext: "We'll help you decide the right approach for your situation.",
  },
  {
    n: 3,
    title: "How to Apply",
    icon: "📝",
    color: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    accent: "text-emerald-600",
    formHeadline: "Need help with your application?",
    formSubtext: "We'll handle all the paperwork and submit on your behalf.",
  },
  {
    n: 4,
    title: "After You Apply",
    icon: "⏳",
    color: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    accent: "text-amber-600",
    formHeadline: "Waiting and unsure what's next?",
    formSubtext: "Get clarity on the 20-week period and what to expect from your solicitor.",
  },
  {
    n: 5,
    title: "Apply for a Conditional Order",
    icon: "📄",
    color: "from-pink-500 to-rose-500",
    lightBg: "bg-pink-50",
    accent: "text-pink-600",
    formHeadline: "Ready to apply for your Conditional Order?",
    formSubtext: "We'll prepare and submit your application — quickly and accurately.",
  },
  {
    n: 6,
    title: "Finalise Your Divorce",
    icon: "🏁",
    color: "from-slate-600 to-slate-800",
    lightBg: "bg-slate-50",
    accent: "text-slate-700",
    formHeadline: "Almost there — let's get your Final Order.",
    formSubtext: "Our team will finalise everything so you can move forward with confidence.",
  },
  {
    n: 7,
    title: "Mental Capacity Cases",
    icon: "🤝",
    color: "from-indigo-500 to-violet-600",
    lightBg: "bg-indigo-50",
    accent: "text-indigo-600",
    formHeadline: "Dealing with a complex situation?",
    formSubtext: "Our specialist solicitors have experience with mental capacity proceedings.",
  },
];

// ─── step content renderers ───────────────────────────────────────────────────
function Step1() {
  return (
    <div>
      <p className="text-slate-500 leading-relaxed mb-6">
        Before starting divorce proceedings, you must meet <strong className="text-slate-700">all three</strong> of the following conditions.
      </p>
      <CheckList items={[
        "You've been married for <strong>over a year</strong>",
        "Your relationship has <strong>permanently broken down</strong>",
        "Your marriage is <strong>legally recognised in the UK</strong> (including same-sex marriage)",
      ]} />
      <InfoBox>
        <strong>This guide applies to England and Wales.</strong> There is a different process if you want to get a divorce in Scotland or Northern Ireland.
      </InfoBox>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {[
          { title: "Civil Partnership?", desc: "Read the separate guide for ending a civil partnership." },
          { title: "Don't want a divorce?", desc: "You can apply for a legal separation or annulment — even within the first year of marriage." },
        ].map((c) => (
          <div key={c.title} className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
            <h4 className="font-bold text-slate-800 text-sm mb-2">{c.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">{c.desc}</p>
            <Link href="/contact" className="text-amber-600 hover:text-amber-700 text-xs font-bold">Speak to a solicitor →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div>
      <p className="text-slate-500 leading-relaxed mb-6">
        Your first decision is whether to apply <strong className="text-slate-700">jointly</strong> or as a <strong className="text-slate-700">sole applicant</strong>.
        It normally takes <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-md text-sm">at least 7 months</span> either way.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-green-500 text-white flex items-center justify-center text-xs font-black">JT</span>
            <h3 className="font-bold text-slate-800">Joint Application</h3>
          </div>
          <CheckList items={["You both agree you should divorce", "You're not at risk of domestic abuse"]} />
          <div className="bg-white border border-green-100 rounded-xl p-3 mt-3 space-y-1.5 text-xs text-slate-600">
            <p>• Both must use the same method (online or post)</p>
            <p>• Either can switch to sole applicant if needed</p>
            <p>• Both must be eligible for fee remission</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-slate-700 text-white flex items-center justify-center text-xs font-black">SO</span>
            <h3 className="font-bold text-slate-800">Sole Application</h3>
          </div>
          <CheckList icon="arrow" items={["Your spouse does not agree to the divorce", "They won't cooperate or respond to court notifications"]} />
          <div className="bg-white border border-slate-100 rounded-xl p-3 mt-3 text-xs text-slate-600">
            <p>• You confirm at each stage to continue</p>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-slate-800 mb-3">Also Consider Separately</h3>
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { emoji: "👨‍👩‍👧", title: "Child Arrangements" },
          { emoji: "💷", title: "Child Maintenance" },
          { emoji: "🏠", title: "Money & Property" },
        ].map((i) => (
          <div key={i.title} className="bg-white border border-slate-100 rounded-2xl p-3 sm:p-4 text-center shadow-sm">
            <div className="text-2xl mb-1">{i.emoji}</div>
            <div className="font-bold text-slate-800 text-xs sm:text-sm">{i.title}</div>
          </div>
        ))}
      </div>
      <InfoBox>You can usually <strong>avoid going to court</strong> if you agree on children, money and property.</InfoBox>
    </div>
  );
}

function Step3() {
  return (
    <div>
      <p className="text-slate-500 leading-relaxed mb-6">
        You can apply online or by post. Gather these documents first.
      </p>
      <CheckList items={[
        "Full name and address of both you and your husband or wife",
        "Original marriage certificate or certified copy <em>(with certified translation if not in English)</em>",
        "Proof of name change if applicable — e.g. marriage certificate or deed poll",
        "Your husband or wife's current address <em>(so the court can serve papers)</em>",
      ]} />
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 my-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl shrink-0">💳</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Court Fee: <span className="text-amber-400">£612</span></h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              Fees are <strong className="text-white">non-refundable</strong> once your application is issued.
            </p>
            <div className="space-y-1.5 text-sm text-slate-300">
              <p>• You may qualify for fee remission on low income or benefits</p>
              <p>• For joint applications, <strong className="text-white">both</strong> must apply and be eligible</p>
            </div>
          </div>
        </div>
      </div>
      <a href="https://hmcts-access.service.gov.uk/login?client_id=divorce&response_type=code&redirect_uri=https://www.apply-divorce.service.gov.uk/oauth2/callback"
        target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md text-sm">
        Apply Online via HMCTS
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}

function Step4() {
  return (
    <div>
      <p className="text-slate-500 leading-relaxed mb-6">What happens next depends on whether you applied jointly or on your own.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="rounded-2xl bg-green-50 border border-green-100 p-5">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-500 text-white text-xs font-black flex items-center justify-center shrink-0">JT</span>
            Joint Application
          </h3>
          <CheckList items={["Notice that your application has been issued", "A copy stamped by HMCTS", "An acknowledge receipt", "A case number"]} />
          <InfoBox>Wait <strong>20 weeks</strong> before applying for the Conditional Order.</InfoBox>
        </div>
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-black flex items-center justify-center shrink-0">SO</span>
            Sole Application
          </h3>
          <p className="text-xs text-slate-600 mb-3">The court serves your spouse who must respond within <strong>14 days</strong>.</p>
          <div className="space-y-2">
            {[
              { label: "If they agree", desc: "Apply for the Conditional Order after 20 weeks." },
              { label: "If they dispute", desc: "They must submit an answer form with a genuine legal reason." },
              { label: "If no response", desc: "Contact them if safe. The court will advise next steps." },
            ].map((r) => (
              <div key={r.label} className="bg-white border border-slate-100 rounded-xl px-3 py-2.5 text-xs">
                <span className="font-bold text-amber-600">{r.label}: </span>
                <span className="text-slate-600">{r.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  return (
    <div>
      <p className="text-slate-500 leading-relaxed mb-6">
        A <strong className="text-slate-700">Conditional Order</strong> (previously <em>decree nisi</em>) confirms the court sees no reason why you cannot divorce. Your marriage is <strong>not yet legally over</strong>.
      </p>
      <div className="bg-amber-500 text-white rounded-2xl p-5 mb-6 flex items-start gap-4">
        <div className="text-3xl shrink-0">⏱</div>
        <div>
          <h3 className="font-bold mb-1">20-Week Waiting Period</h3>
          <p className="text-sm text-amber-100 leading-relaxed">You must wait at least 20 weeks after your application is issued before you can apply.</p>
        </div>
      </div>
      <h3 className="font-bold text-slate-800 mb-3">Applications on or after 6 April 2022</h3>
      <CheckList icon="arrow" items={[
        "Applied <strong>online</strong> — you'll be guided how to apply online",
        "Apply <strong>by post</strong> — fill in the application for a conditional order",
        "You can apply as a sole applicant even if you started jointly",
        "Solicitors can apply via a MyHMCTS account",
      ]} />
      <h3 className="font-bold text-slate-800 mt-6 mb-3">Applications before 6 April 2022</h3>
      <CheckList icon="arrow" items={[
        "Apply for a <strong>decree nisi</strong> online or by post",
        "Fill in a statement confirming your divorce application is true",
        "Attach a copy of your spouse's response",
      ]} />
      <InfoBox>
        After approval the court sends a <strong>certificate</strong> with your granted date. You must then wait at least <strong>43 days</strong> before applying to finalise.
      </InfoBox>
    </div>
  );
}

function Step6() {
  return (
    <div>
      <p className="text-slate-500 leading-relaxed mb-6">
        To legally end your marriage apply for a <strong className="text-slate-700">Final Order</strong> (previously <em>decree absolute</em>).
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { icon: "⏳", title: "Wait 43 days", desc: "After the Conditional Order" },
          { icon: "📅", title: "Within 12 months", desc: "Otherwise explain the delay" },
          { icon: "⚠️", title: "Sort finances first", desc: "Get a consent order first" },
        ].map((c) => (
          <div key={c.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
            <div className="text-2xl mb-2">{c.icon}</div>
            <div className="font-bold text-slate-800 text-sm mb-1">{c.title}</div>
            <div className="text-xs text-slate-500">{c.desc}</div>
          </div>
        ))}
      </div>
      <CheckList icon="arrow" items={[
        "Apply online — you'll be guided through the process",
        "Or apply by post using the application for a final order",
        "Solicitors can apply via MyHMCTS",
      ]} />
      <div className="bg-green-50 border border-green-100 rounded-2xl p-5 mt-6 space-y-2 text-sm text-slate-700">
        <p>✓ You are legally <strong>divorced and no longer married</strong></p>
        <p>✓ You are <strong>free to remarry</strong> if you wish</p>
        <p>✓ <strong>Keep the document safe</strong> — you'll need it to remarry</p>
        <p>✓ If you lose it, you can <strong>apply to the court for a copy</strong></p>
      </div>
    </div>
  );
}

function Step7() {
  return (
    <div>
      <p className="text-slate-500 leading-relaxed mb-6">
        You can still get a divorce if your spouse lacks mental capacity. They need a <strong className="text-slate-700">'litigation friend'</strong> to make decisions on their behalf.
      </p>
      <h3 className="font-bold text-slate-800 mb-3">Who can be a Litigation Friend?</h3>
      <CheckList items={["A family member", "A close friend", "Any suitable person willing to represent them"]} />
      <InfoBox>
        If there is <strong>no one suitable</strong>, you can apply to court. The <strong>Official Solicitor</strong> may agree to act as litigation friend of last resort.
      </InfoBox>
      <h3 className="font-bold text-slate-800 mb-3 mt-6">How to Apply</h3>
      <div className="space-y-3">
        {[
          "Check there is nobody else suitable or willing to act as litigation friend",
          "Confirm money is available for any costs the Official Solicitor may incur",
          "Check whether your spouse may be eligible for legal aid",
          "Provide details of your spouse's doctor to the court so it can request a certificate of capacity",
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-4">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
            <p className="text-sm text-slate-700 leading-relaxed">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const STEP_CONTENT = [Step1, Step2, Step3, Step4, Step5, Step6, Step7];

// ─── Main wizard ──────────────────────────────────────────────────────────────
export default function GuideWizard() {
  const [current, setCurrent] = useState(0); // 0-indexed
  const total = STEPS.length;
  const step = STEPS[current];
  const StepContent = STEP_CONTENT[current];
  const progress = ((current + 1) / total) * 100;

  // Scroll to top of wizard on step change
  useEffect(() => {
    document.getElementById("guide-wizard-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [current]);

  const goTo = (i: number) => {
    if (i >= 0 && i < total) setCurrent(i);
  };

  return (
    <div id="guide-wizard-top" className="scroll-mt-28">
      {/* ── Progress bar ─────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-[130px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
              Step {current + 1} of {total}
            </span>
            <span className="text-xs font-bold text-amber-600">{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Step dots — desktop */}
          <div className="hidden sm:flex items-center justify-between mt-3 gap-1">
            {STEPS.map((s, i) => (
              <button
                key={s.n}
                onClick={() => goTo(i)}
                className={`flex-1 text-center py-1 rounded-lg text-[10px] font-bold transition-all duration-200 truncate px-1 ${
                  i === current
                    ? "bg-amber-500 text-white shadow-sm"
                    : i < current
                    ? "bg-green-100 text-green-700"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {i < current ? "✓ " : ""}{s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-8 lg:gap-10 items-start">

            {/* Step card */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-md overflow-hidden">

              {/* Card header */}
              <div className={`bg-gradient-to-r ${step.color} px-6 sm:px-8 py-7`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-3xl shrink-0 shadow-inner">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-black uppercase tracking-widest mb-1">
                      Step {step.n} of {total}
                    </p>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                      {step.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-6 sm:px-8 py-7">
                <StepContent />
              </div>

              {/* Card footer — nav buttons */}
              <div className="px-6 sm:px-8 pb-7">
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 gap-3">
                  <button
                    onClick={() => goTo(current - 1)}
                    disabled={current === 0}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  <div className="flex items-center gap-1.5">
                    {STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`rounded-full transition-all duration-200 ${
                          i === current
                            ? "w-6 h-2.5 bg-amber-500"
                            : i < current
                            ? "w-2.5 h-2.5 bg-green-400"
                            : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                        }`}
                        aria-label={`Go to step ${i + 1}`}
                      />
                    ))}
                  </div>

                  {current < total - 1 ? (
                    <button
                      onClick={() => goTo(current + 1)}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r ${step.color} text-white font-bold text-sm shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all`}
                    >
                      Next Step
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm shadow-md hover:opacity-90 transition-all"
                    >
                      Speak to a Solicitor
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar — sticky form + quick nav */}
            <div className="sticky top-48 self-start space-y-4">
              {/* Form */}
              <SidebarForm
                headline={step.formHeadline}
                subtext={step.formSubtext}
                ctaLabel="Get Free Advice"
                variant="amber"
              />

              {/* Step quick-jump */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Jump to Step</p>
                <div className="space-y-1">
                  {STEPS.map((s, i) => (
                    <button
                      key={s.n}
                      onClick={() => goTo(i)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all text-sm ${
                        i === current
                          ? "bg-amber-50 text-amber-700 font-bold"
                          : i < current
                          ? "text-green-700 hover:bg-green-50"
                          : "text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                        i === current
                          ? "bg-amber-500 text-white"
                          : i < current
                          ? "bg-green-500 text-white"
                          : "bg-slate-200 text-slate-500"
                      }`}>
                        {i < current ? "✓" : s.n}
                      </span>
                      <span className="truncate">{s.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Or Call Directly</p>
                <a href="tel:+441615030553" className="text-lg font-black text-slate-800 hover:text-amber-600 transition-colors">
                  0161 503 0553
                </a>
                <p className="text-xs text-slate-400 mt-1">Mon–Fri · 9am–5:30pm</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile form */}
      <section className="lg:hidden py-10 bg-white border-t border-slate-100">
        <div className="max-w-lg mx-auto px-4">
          <SidebarForm
            headline={step.formHeadline}
            subtext={step.formSubtext}
            ctaLabel="Get Free Advice"
            variant="amber"
          />
        </div>
      </section>
    </div>
  );
}
