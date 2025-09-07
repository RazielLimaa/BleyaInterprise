"use client";

import { FooterBigText } from "./FooterBigText";
import { FooterBottomSection } from "./FooterBottomSection";
import { FooterConnectSection } from "./FooterConnectSection";
import { FooterNavigationSection } from "./FooterNavigation";
import { FooterAcknowledgmentText } from "./FooterAcknowledgmentText";
import { FooterContactSection } from "./FooterContact";
import { FooterStyleSection } from "./FooterStyle";
import { useFooterAnimations } from "@/hooks/animations/useFooterAnimations";

export default function Footer() {
  const { footerRef, bigTextRef, sectionsRef, navLinksRef } =
    useFooterAnimations();

  return (
    <footer ref={footerRef} className="bg-black text-orange-500 px-8 py-16">
      <div className="max-w-7xl mx-auto z-50 relative">
        <div
          ref={sectionsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
        >
          <FooterContactSection />
          <FooterNavigationSection navLinksRef={navLinksRef} />
          <FooterConnectSection />
        </div>
        <FooterAcknowledgmentText />
        <FooterBottomSection />
        <FooterBigText bigTextRef={bigTextRef} />
      </div>

      <FooterStyleSection />
    </footer>
  );
}
