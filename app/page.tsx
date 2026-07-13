import HeroSection from "@/app/components/sections/HeroSection";
import GuidePreviewSection from "@/app/components/sections/GuidePreviewSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import ProcessSection from "@/app/components/sections/ProcessSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import LegalResourcesSection from "@/app/components/sections/LegalResourcesSection";
import BlogPreviewSection from "@/app/components/sections/BlogPreviewSection";
import CtaBanner from "@/app/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GuidePreviewSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <LegalResourcesSection />
      <BlogPreviewSection />
      <CtaBanner />
    </>
  );
}
