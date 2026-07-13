import Link from "next/link";
import SidebarForm from "@/app/components/ui/SidebarForm";

const steps = [
  {
    n: 1,
    title: "Check You Can Divorce",
    summary: "Confirm eligibility: married 1+ year, marriage broken down, legally recognised in UK.",
    color: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    n: 2,
    title: "Before You Apply",
    summary: "Decide joint or sole application. Minimum 7 months. Consider children, finances and property.",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    n: 3,
    title: "How to Apply",
    summary: "Gather documents, pay the £612 court fee and submit online via HMCTS or by post.",
    color: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    n: 4,
    title: "After You Apply",
    summary: "Application served on your spouse. 20-week waiting period begins from the issue date.",
    color: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    n: 5,
    title: "Conditional Order",
    summary: "Court confirms no reason to prevent the divorce. You're still married at this stage.",
    color: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    n: 6,
    title: "Finalise Your Divorce",
    summary: "Apply for the Final Order after 43 days. Once granted, the marriage is legally over.",
    color: "from-slate-600 to-slate-800",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    n: 7,
    title: "Mental Capacity Cases",
    summary: "If your spouse lacks mental capacity, a litigation friend will represent them.",
    color: "from-indigo-500 to-violet-600",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function GuidePreviewSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">
              Step-by-Step
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Complete UK<br />
              <span className="text-amber-500">Divorce Guide</span>
            </h2>
            <p className="text-slate-500 text-lg mt-3 max-w-md leading-relaxed">
              Seven plain-English steps — from checking eligibility to your Final Order.
            </p>
          </div>
          <Link href="/guide"
            className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-2xl transition-colors shadow-lg text-sm">
            Read the Full Guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => (
              <Link key={step.n} href={`/guide#step-${step.n}`}
                className="group relative bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-lg hover:border-transparent hover:-translate-y-0.5 transition-all duration-200 flex gap-4 items-start overflow-hidden">
                {/* Subtle background accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl ${step.iconBg} ${step.iconColor} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                  {step.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black text-slate-300 uppercase tracking-wider">Step {step.n}</span>
                    <svg className="w-4 h-4 text-slate-200 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm leading-snug mb-1.5 group-hover:text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.summary}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Sticky form — desktop only */}
          <div className="hidden lg:block sticky top-24 self-start">
            <SidebarForm
              headline="Where are you in the process?"
              subtext="Tell us your situation and a solicitor will call you back — free and confidential."
              ctaLabel="Book My Free Callback"
              variant="amber"
            />
            {/* Trust badges */}
            <div className="mt-4 bg-slate-50 rounded-2xl border border-slate-100 p-4">
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: "🔒", text: "100% confidential consultation" },
                  { icon: "⚖️", text: "SRA regulated solicitors" },
                  { icon: "📞", text: "Same-day callback available" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="text-base">{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>{/* end grid */}

        {/* Mobile form — shown below steps on small screens */}
        <div className="lg:hidden mt-10 pt-10 border-t border-slate-200">
          <SidebarForm
            headline="Where are you in the process?"
            subtext="Tell us your situation and a solicitor will call you back — free and confidential."
            ctaLabel="Book My Free Callback"
            variant="amber"
          />
        </div>

      </div>
    </section>
  );
}
