import type { Metadata } from "next";
import { teamData, siteConfig } from "@/app/data/siteData";
import PageHero from "@/app/components/ui/PageHero";
import CtaBanner from "@/app/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about MSD Solicitors — our team, our values, and our commitment to clients.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About MSD Solicitors"
        subtitle="Experienced, empathetic family law solicitors with offices in Manchester, Birmingham and London."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* About content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Who We Are</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-3 mb-5">
                A Trusted Team of Family Law Specialists
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  At {siteConfig.name}, we understand that divorce and family law matters are among the most
                  difficult challenges anyone can face. That's why we strive to ensure that every client
                  receives the personal attention, care, and expertise their situation deserves.
                </p>
                <p>
                  With solicitors based in {siteConfig.offices.join(", ")}, we keep in close contact with our
                  clients throughout the entire process. Our extensive experience in divorce and family law
                  provides the confidence you need to make well-informed decisions, even when they are difficult.
                </p>
                <p>
                  Our family solicitors are regulated by the Solicitors Regulation Authority and come with a
                  wealth of experience to handle even the most complex cases. We provide confidential legal
                  advice tailored to your personal situation.
                </p>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: "⚖️", title: "Expert Knowledge", desc: "Deep expertise in all areas of family law." },
                { icon: "🤝", title: "Empathy First", desc: "We treat every client with compassion and understanding." },
                { icon: "🔒", title: "Confidentiality", desc: "Complete confidentiality guaranteed at every stage." },
                { icon: "📋", title: "Transparency", desc: "Clear, upfront pricing with no hidden fees." },
              ].map((v) => (
                <div key={v.title} className="bg-slate-50 rounded-xl p-5">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-slate-800 mb-1">{v.title}</h3>
                  <p className="text-sm text-slate-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Our People</span>
            <h2 className="text-3xl font-bold text-slate-800 mt-3">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden text-center">
                <div className="bg-slate-200 h-48 flex items-center justify-center">
                  <span className="text-6xl text-slate-400" aria-hidden="true">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                  <p className="text-amber-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
