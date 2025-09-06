"use client";

import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AILearningSection from "@/components/ai-learning-section";
import BackgroundTransition from "@/components/background-transition";
import DeveloperSection from "@/components/developer-section";
import CTASection from "@/components/cta-section";
import Footer from "../components/Footer";

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;

      // Set initial states
      gsap.set(".hero-title-line-1", { opacity: 0, y: 100 });
      gsap.set(".hero-title-line-2", { opacity: 0, y: 100 });
      gsap.set(".author-credit", { opacity: 0, x: -50 });
      gsap.set(".time-location", { opacity: 0, x: 50 });
      gsap.set(".scroll-indicator", { opacity: 0, y: 50 });
      gsap.set(".status-info", { opacity: 0, x: 50 });

      // Create timeline for orchestrated entrance
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(".hero-title-line-1", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          ".hero-title-line-2",
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          ".author-credit",
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          ".time-location",
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          ".scroll-indicator",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          ".status-info",
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );

      // Continuous glow animation for main title
      gsap.to(".hero-title-line-1", {
        textShadow:
          "0 0 40px hsla(0, 100%, 50%, 0.6), 0 0 60px hsla(25, 100%, 50%, 0.4)",
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

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
