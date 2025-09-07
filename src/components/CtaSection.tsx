"use client";

import { useCTAAnimations } from "@/hooks/animations/useCTAAnimations";
import { CTAPlasmaBackgroundSection } from "./CtaPlasmaBackground";
import { CTATechDecorationsSection } from "./CtaTechDecorations";
import { CTAHeaderSection } from "./CtaHeader";
import { CTATitleSection } from "./CtaTitle";
import { CTASubtitleSection } from "./CtaSubtitle";
import { CTAButtonSection } from "./CtaButton";

export default function CTASection() {
  const { sectionRef, titleRef, subtitleRef, buttonRef, japaneseRef } =
    useCTAAnimations();

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black overflow-hidden flex items-center justify-center relative"
      data-testid="cta-section"
    >
      <CTAPlasmaBackgroundSection />
      <CTATechDecorationsSection />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <CTAHeaderSection japaneseRef={japaneseRef} />
        <CTATitleSection titleRef={titleRef} />
        <CTASubtitleSection subtitleRef={subtitleRef} />
        <CTAButtonSection buttonRef={buttonRef} />
      </div>
    </section>
  );
}
