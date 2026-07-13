"use client";

import { useState } from "react";

interface SidebarFormProps {
  headline: string;
  subtext: string;
  ctaLabel?: string;
  /** Optional accent colour variant — defaults to amber */
  variant?: "amber" | "slate";
}

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function SidebarForm({
  headline,
  subtext,
  ctaLabel = "Get Free Advice",
  variant = "amber",
}: SidebarFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const accentBg = variant === "slate" ? "bg-slate-800" : "bg-amber-500";
  const accentText = "text-white";
  const accentRing = variant === "slate" ? "focus:ring-slate-400" : "focus:ring-amber-400";
  const btnClass =
    variant === "slate"
      ? "bg-amber-500 hover:bg-amber-600 text-white"
      : "bg-slate-800 hover:bg-slate-900 text-white";

  const inputClass = `w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-sm bg-white focus:outline-none focus:ring-2 ${accentRing} focus:border-transparent transition`;

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">We'll be in touch!</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          One of our solicitors will contact you within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
      {/* Header strip */}
      <div className={`${accentBg} ${accentText} px-6 py-5`}>
        <p className="text-xs font-black uppercase tracking-widest opacity-75 mb-1">Free Consultation</p>
        <h3 className="text-lg font-bold leading-snug">{headline}</h3>
        <p className="text-sm mt-1.5 opacity-80 leading-relaxed">{subtext}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="px-6 py-5 space-y-3.5">
        {/* First / Last name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="sf-firstName" className="block text-xs font-semibold text-slate-600 mb-1">
              First Name <span className="text-red-400">*</span>
            </label>
            <input
              id="sf-firstName"
              name="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={handleChange}
              placeholder="Jane"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="sf-lastName" className="block text-xs font-semibold text-slate-600 mb-1">
              Last Name <span className="text-red-400">*</span>
            </label>
            <input
              id="sf-lastName"
              name="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={handleChange}
              placeholder="Smith"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="sf-phone" className="block text-xs font-semibold text-slate-600 mb-1">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            id="sf-phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="07700 000 000"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="sf-email" className="block text-xs font-semibold text-slate-600 mb-1">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="sf-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="sf-message" className="block text-xs font-semibold text-slate-600 mb-1">
            Your Situation
          </label>
          <textarea
            id="sf-message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Briefly describe what you need help with…"
            className={inputClass}
          />
        </div>

        <p className="text-[10px] text-slate-400 leading-relaxed">
          100% confidential. By submitting you agree to our Privacy Policy. We never share your details.
        </p>

        <button
          type="submit"
          className={`w-full font-bold py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 text-sm ${btnClass}`}
        >
          {ctaLabel} →
        </button>
      </form>
    </div>
  );
}
