import type { Metadata } from "next";
import PageHero from "@/app/components/ui/PageHero";
import CtaBanner from "@/app/components/sections/CtaBanner";
import GuideWizard from "@/app/components/pages/GuideWizard";

export const metadata: Metadata = {
  title: "Complete Divorce Guide",
  description:
    "A complete step-by-step guide to getting divorced in England and Wales — from checking eligibility to receiving your Final Order.",
};

export default function GuidePage() {
  return (
    <>
      <PageHero
        title="Complete UK Divorce Guide"
        subtitle="Seven clear steps from eligibility check to Final Order — walk through them one at a time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Divorce Guide" }]}
      />
      <GuideWizard />
      <CtaBanner />
    </>
  );
}
