"use client";

import { useEffect, useRef } from "react";
import { FooterBigText } from "./FooterBigText";
import { FooterBottomSection } from "./FooterBottomSection";
import { FooterConnectSection } from "./FooterConnectSection";
import { FooterNavigationSection } from "./FooterNavigation";
import { FooterAcknowledgmentText } from "./FooterAcknowledgmentText";
import { FooterContactSection } from "./FooterContact";
import { FooterStyleSection } from "./FooterStyle";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            if (entry.target === navLinksRef.current) {
              const links = entry.target.querySelectorAll("a");
              links.forEach((link, index) => {
                setTimeout(() => {
                  link.classList.add("animate-link");
                }, index * 150);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    if (bigTextRef.current) observer.observe(bigTextRef.current);
    if (sectionsRef.current) observer.observe(sectionsRef.current);
    if (navLinksRef.current) observer.observe(navLinksRef.current);

    return () => observer.disconnect();
  }, []);

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
