"use client";

import { useEffect, useRef } from "react";

export function useFooterAnimations() {
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

            // animação especial para links
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

  return {
    footerRef,
    bigTextRef,
    sectionsRef,
    navLinksRef,
  };
}
