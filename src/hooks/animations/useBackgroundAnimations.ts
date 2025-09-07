"use client";

import { useEffect, useRef } from "react";

export function useBackgroundTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      // Estado inicial transparente
      gsap.set(overlayRef.current, { opacity: 0 });

      // Transição suave ao entrar no AI Learning
      ScrollTrigger.create({
        trigger: "[data-testid='ai-learning-section']",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        onUpdate: (self: any) => {
          gsap.to(overlayRef.current, {
            opacity: self.progress,
            duration: 0.1,
            ease: "none",
          });
        },
      });

      // Mantém o fundo preto até CTA
      ScrollTrigger.create({
        trigger: "[data-testid='ai-learning-section']",
        start: "top 20%",
        end: "bottom bottom",
        endTrigger: "[data-testid='cta-section']",
        onEnter: () => {
          gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        },
        onLeave: () => {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });
    }
  }, []);

  return { overlayRef };
}
