"use client";

import { HeroBackgroundSection } from "./HeroBackground";
import { HeroAuthorCreditSection } from "./HeroAuthorCredits";
import { HeroTitleSection } from "./HeroTitle";
import { HeroScrollIndicatorSection } from "./HeroScrollIndicator";
import { HeroStatusInfoSection } from "./HeroStatusInfo";

export default function HeroSection() {
  return (
    <main className="min-h-screen  flex flex-col justify-center items-center relative px-4 sm:px-6 md:px-8 z-10">
      <HeroBackgroundSection />
      <HeroAuthorCreditSection />
      <HeroTitleSection />
      <HeroScrollIndicatorSection />
      <HeroStatusInfoSection />
    </main>
  );
}
