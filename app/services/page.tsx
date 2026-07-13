import type { Metadata } from "next";
import { servicesData } from "@/app/data/siteData";
import PageHero from "@/app/components/ui/PageHero";
import Card from "@/app/components/ui/Card";
import CtaBanner from "@/app/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Expert family law services including divorce proceedings, financial settlements, child arrangements, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Family Law Services"
        subtitle="Comprehensive legal support across all areas of divorce and family law."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <Card key={service.slug} className="flex gap-5">
                <div className="text-4xl shrink-0">{service.icon}</div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Why MSD Solicitors</span>
            <h2 className="text-3xl font-bold text-slate-800 mt-3 mb-6">
              The Right Team for Your Family Law Needs
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Family law is a sensitive area and cases can significantly impact the lives of everyone involved.
              Our experienced team provides a service that is sensitive to your situation. Our solicitors are
              regulated by the Solicitors Regulation Authority and bring a wealth of experience to even the most
              complex cases.
            </p>
            <ul className="text-left grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Regulated by the SRA",
                "Confidential legal advice",
                "Transparent fixed fees",
                "Offices in 3 UK cities",
                "Empathetic, expert team",
                "No court proceedings in most cases",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-slate-700">
                  <span className="w-5 h-5 bg-amber-500 rounded-full text-white text-xs flex items-center justify-center shrink-0" aria-hidden="true">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
