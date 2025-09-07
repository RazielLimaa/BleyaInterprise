"use client";

import Navigation from "@/components/navigation";
import HeroSection from "@/components/HeroSection";
import AILearningSection from "@/components/AILearningSection";
import BackgroundTransition from "@/components/BackgroundTransiotion";
import DeveloperSection from "@/components/DeveloperSection";
import CTASection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { useHomeAnimations } from "@/hooks/animations/useHomeAnimations";

export default function HomePage() {
  useHomeAnimations();

  return (
    <div className="relative">
      <BackgroundTransition />

      <div className="min-h-screen relative overflow-hidden">
        <Navigation />
        <HeroSection />
      </div>

      <AILearningSection />
      <DeveloperSection />
      <CTASection />
      <Footer />
    </div>
  );
}
