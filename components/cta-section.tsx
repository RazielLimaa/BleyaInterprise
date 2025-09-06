"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Plasma from "./plasma"


gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const japaneseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const button = buttonRef.current
    const japanese = japaneseRef.current

    if (!section || !title || !subtitle || !button || !japanese) return

    gsap.set([title, subtitle, button, japanese], {
      opacity: 0,
      y: 50,
      scale: 0.9,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

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
        "-=0.4",
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
        "-=0.6",
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
        "-=0.4",
      )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black overflow-hidden flex items-center justify-center relative"
      data-testid="cta-section"
    >


      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/70 to-transparent z-20 pointer-events-none"></div>

      <div className="absolute inset-0 w-full h-full top-10 md:top-[15vh] lg:top-[5vh] z-0">
        <div style={{ width: '100%', height: '800px', position: 'relative' }}>
          <Plasma
            rotateOnHover={true}
            hue={1}
            forceHoverState={false}
          />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {/* Technological grid lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Corner brackets - technological style */}
        <div className="absolute top-12 left-12">
          <div className="w-8 h-px bg-white/30"></div>
          <div className="w-px h-8 bg-white/30"></div>
        </div>
        <div className="absolute top-12 right-12">
          <div className="w-8 h-px bg-white/30 ml-auto"></div>
          <div className="w-px h-8 bg-white/30 ml-auto"></div>
        </div>
        <div className="absolute bottom-12 left-12">
          <div className="w-px h-8 bg-white/30"></div>
          <div className="w-8 h-px bg-white/30"></div>
        </div>
        <div className="absolute bottom-12 right-12">
          <div className="w-px h-8 bg-white/30 ml-auto"></div>
          <div className="w-8 h-px bg-white/30 ml-auto"></div>
        </div>

        {/* Minimal tech elements */}
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-white/40 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 border border-white/20"></div>
        <div className="absolute top-2/3 left-1/3 w-px h-4 bg-white/30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-px bg-white/30"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <div ref={japaneseRef} className="mb-8">
          <span className="text-white/50 text-xs font-mono tracking-[0.3em] block uppercase">システム開始</span>
          <div className="flex items-center justify-center mt-3">
            <div className="w-6 h-px bg-white/40"></div>
            <div className="w-1 h-1 bg-white/60 mx-2"></div>
            <div className="w-6 h-px bg-white/40"></div>
          </div>
        </div>

        <div ref={titleRef} className="relative mb-10">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-2">
            INIT
            <span className="block text-white/90 text-5xl md:text-7xl font-light">SYSTEM</span>
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        </div>

        <p ref={subtitleRef} className="text-white/60 text-base font-mono mb-12 tracking-wide uppercase">
          Programming Interface Ready
        </p>

        <Button
          onClick={() => (window.location.href = "/chat-page")}
          ref={buttonRef}
          size="lg"
          className="cursor-target bg-white hover:bg-orange-500 text-black hover:text-white font-bold px-10 py-5 text-base transition-all duration-300 hover:scale-105 uppercase tracking-wider border-2 border-transparent hover:border-white/20"
        >
          EXECUTE
          <ArrowRight className="ml-3 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
