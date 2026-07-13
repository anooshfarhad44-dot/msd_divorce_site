"use client";

import { useState } from "react";
import { faqData } from "@/app/data/siteData";
import PageHero from "@/app/components/ui/PageHero";
import CtaBanner from "@/app/components/sections/CtaBanner";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800 pr-4">{question}</span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to the most common questions we receive about divorce and family law."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>

          <div className="mt-16 bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Can't Find Your Answer?</h2>
            <p className="text-slate-600 mb-5 text-sm">
              Get in touch with our team for a free, confidential consultation.
            </p>
            <a
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
