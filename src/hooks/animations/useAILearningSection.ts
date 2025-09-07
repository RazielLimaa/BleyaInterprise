"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAILearningAnimations = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(titleRef.current, { opacity: 0, y: 50, filter: "blur(10px)" });
    sectionsRef.current.forEach((section, index) => {
      gsap.set(section, {
        opacity: 0,
        x: index % 2 === 0 ? -200 : 200,
        filter: "blur(8px)",
      });
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
        });

        sectionsRef.current.forEach((section, index) => {
          gsap.to(section, {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 2,
            delay: 0.5 + index * 0.4,
            ease: "power2.out",
          });
        });
      },
      onLeave: () => {
        sectionsRef.current.forEach((section, index) => {
          gsap.to(section, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            filter: "blur(5px)",
            duration: 1.5,
            ease: "power2.in",
          });
        });
      },
      onEnterBack: () => {
        sectionsRef.current.forEach((section) => {
          gsap.to(section, {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1.8,
            ease: "power2.out",
          });
        });
      },
    });

    sectionsRef.current.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.to(section, { opacity: 1, filter: "blur(0px)", duration: 0.6 });
        },
        onLeave: () => {
          gsap.to(section, {
            opacity: 0.8,
            filter: "blur(2px)",
            duration: 0.4,
          });
        },
      });
    });
  }, []);

  return { sectionRef, titleRef, addToRefs };
};
