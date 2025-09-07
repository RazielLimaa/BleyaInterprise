"use client";

import { AILearningBackgroundSection } from "./AiLearningBackground";
import { AILearningHeaderSection } from "./AiLearningHeader";
import { AILearningCTASection } from "./AiLearningCTA";
import AILearningCardListSection from "./AiLearningCardSection";
import { AILearningStylesSection } from "./AiLearningStyles";
import { useAILearningAnimations } from "@/hooks/animations/useAILearningSection";

export default function AILearningSection() {
  const { sectionRef } = useAILearningAnimations();
  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-black overflow-hidden"
      data-testid="ai-learning-section"
    >
      <AILearningBackgroundSection />

      <div className="max-w-6xl mx-auto relative z-10">
        <AILearningHeaderSection />
        <AILearningCardListSection />
        <AILearningCTASection />
      </div>

      <AILearningStylesSection />
    </section>
  );
}
