"use client"

import { useEffect, useRef } from "react"

export default function BackgroundTransition() {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap
      const ScrollTrigger = (window as any).ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Set initial state - transparent
      gsap.set(overlayRef.current, { opacity: 0 })

      // Create scroll trigger for background transition starting from AI Learning section
      ScrollTrigger.create({
        trigger: "[data-testid='ai-learning-section']",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        onUpdate: (self: any) => {
          // Smooth transition from transparent to black as user scrolls
          gsap.to(overlayRef.current, {
            opacity: self.progress,
            duration: 0.1,
            ease: "none",
          })
        },
      })

      // Keep background black for AI Learning, Developer and CTA sections
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
          })
        },
        onLeave: () => {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          })
        },
        onEnterBack: () => {
          gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        },
        onLeaveBack: () => {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          })
        },
      })
    }
  }, [])

  return <div ref={overlayRef} className="fixed inset-0 bg-black pointer-events-none z-5" style={{ opacity: 0 }} />
}
