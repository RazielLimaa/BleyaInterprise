// hooks/useDeveloperAnimations.ts
"use client";

import { useEffect } from "react";

export function useDeveloperAnimations(
  sectionRef: React.RefObject<HTMLElement>,
  contentRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    if (typeof window === "undefined" || !(window as any).gsap) return;

    const gsap = (window as any).gsap;
    const content = contentRef.current;
    const section = sectionRef.current;

    if (!content || !section) return;

    // Seletores
    const cards = content.querySelectorAll(".tech-card");
    const titles = content.querySelectorAll(".tech-title");
    const skillCards = content.querySelectorAll(".skill-card");
    const statsCards = content.querySelectorAll(".stat-item");
    const developerCards = content.querySelectorAll(".developer-card");

    // Timeline inicial
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });

    tl.from(titles, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
    })
      .from(
        cards,
        {
          y: 100,
          opacity: 0,
          stagger: 0.15,
        },
        "-=0.5"
      )
      .from(
        skillCards,
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
        },
        "-=0.7"
      );

    // Animação contínua nos stats
    statsCards.forEach((card: Element) => {
      gsap.to(card, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
        delay: Math.random() * 2,
      });
    });

    // Scroll-trigger para destacar cards
    developerCards.forEach((card: Element) => {
      gsap.fromTo(
        card,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    // Background animado
    gsap.to(section, {
      backgroundPosition: "200% 0",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, [sectionRef, contentRef]);
}
