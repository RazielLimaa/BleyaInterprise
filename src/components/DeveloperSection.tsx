"use client";

import FaultyTerminal from "./FaultyTerminal";
import { useDeveloperAnimations } from "@/hooks/animations/useDeveloperAnimarions";
import { DeveloperContactSection } from "./DeveloperContactSection";
import { DeveloperTeamSection } from "./DeveloperTeam";
import { DeveloperIntroSection } from "./DeveloperIntro";
import { DeveloperMissionSection } from "./DeveloperMissionSection";

export default function DeveloperSection() {
  const { sectionRef, contentRef } = useDeveloperAnimations();

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0">
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <FaultyTerminal
            scale={1.5}
            gridMul={[1, 1]}
            digitSize={1.2}
            timeScale={1.5}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={0}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={1.0}
            tint="#FF3C00"
            mouseReact={true}
            mouseStrength={1.5}
            pageLoadAnimation={true}
            brightness={1}
          />
        </div>
      </div>

      <section
        ref={sectionRef}
        className="relative min-h-screen w-full z-10"
        data-testid="developer-section"
      >
        <div ref={contentRef} className="relative z-10 py-20">
          <DeveloperIntroSection />
          <DeveloperTeamSection />
          <DeveloperMissionSection />
          <DeveloperContactSection />
        </div>
      </section>
    </>
  );
}
