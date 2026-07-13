"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to an API route
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Message Received</h3>
        <p className="text-slate-600">
          Thank you for getting in touch. One of our solicitors will contact you within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="07700 000000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
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
        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          <option value="divorce">Divorce Proceedings</option>
          <option value="financial">Financial Settlement</option>
          <option value="children">Child Arrangements</option>
          <option value="mediation">Family Mediation</option>
          <option value="prenuptial">Prenuptial Agreement</option>
          <option value="cohabitation">Cohabitation Dispute</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Brief Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Please briefly describe your situation..."
          className={inputClass}
        />
      </div>

      <p className="text-xs text-slate-500">
        All information is treated in strict confidence. By submitting this form you agree to our Privacy Policy.
      </p>

      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}
