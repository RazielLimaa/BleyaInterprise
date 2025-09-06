"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseCTAAnimationsProps {
  sectionRef: React.RefObject<HTMLElement>;
  titleRef: React.RefObject<HTMLDivElement>;
  subtitleRef: React.RefObject<HTMLParagraphElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  japaneseRef: React.RefObject<HTMLDivElement>;
}

export function useCTAAnimations({
  sectionRef,
  titleRef,
  subtitleRef,
  buttonRef,
  japaneseRef,
}: UseCTAAnimationsProps) {
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const japanese = japaneseRef.current;

    if (!section || !title || !subtitle || !button || !japanese) return;

    gsap.set([title, subtitle, button, japanese], {
      opacity: 0,
      y: 50,
      scale: 0.9,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(japanese, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        title,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        button,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionRef, titleRef, subtitleRef, buttonRef, japaneseRef]);
}
