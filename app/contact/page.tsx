import type { Metadata } from "next";
import PageHero from "@/app/components/ui/PageHero";
import ContactForm from "@/app/components/pages/ContactForm";
import { siteConfig } from "@/app/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MSD Solicitors for a free, confidential initial consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a free, confidential consultation with one of our family law solicitors."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact details */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Family law is a sensitive area and we treat every enquiry with the utmost care and
                discretion. Contact us today to discuss your situation in complete confidence.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: siteConfig.phone,
                    href: `tel:${siteConfig.phone}`,
                  },
                  {
                    icon: "✉",
                    label: "Email",
                    value: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                  },
                  {
                    icon: "📍",
                    label: "Address",
                    value: siteConfig.address,
                    href: undefined,
                  },
                  {
                    icon: "🕐",
                    label: "Office Hours",
                    value: "Monday – Friday: 9:00am – 5:30pm",
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-slate-500 mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-slate-800 font-medium hover:text-amber-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-slate-800 font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl">
                <h3 className="font-bold text-slate-800 mb-2">Our Offices</h3>
                <p className="text-sm text-slate-600">
                  We have offices in <strong>Manchester</strong>, <strong>Birmingham</strong>, and <strong>London</strong>.
                  All offices are easily accessible and we can also arrange video or telephone consultations.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
