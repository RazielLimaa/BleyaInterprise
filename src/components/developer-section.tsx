"use client"

import { useEffect, useRef } from "react"
import FaultyTerminal from "./FaultyTerminal"

export default function DeveloperSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap

      const section = sectionRef.current
      const content = contentRef.current

      if (!section || !content) return

      const cards = content.querySelectorAll(".tech-card")
      const titles = content.querySelectorAll(".tech-title")
      const skillCards = content.querySelectorAll(".skill-card")
      const statsCards = content.querySelectorAll(".stat-item")

      // Enhanced card animations with stagger and advanced easing
      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      cards.forEach((card, index) => {
        // Set initial state
        gsap.set(card, {
          opacity: 0,
          y: 80,
          scale: 0.8,
          rotationY: 15,
          transformPerspective: 1000,
        })

        cardTimeline.to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.15,
          },
          index * 0.1,
        )

        // Advanced hover animations
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            rotationX: 5,
            rotationY: -2,
            boxShadow: "0 20px 40px rgba(255, 60, 0, 0.3)",
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1000,
          })

          // Animate border gradient
          const borderEl = card.querySelector(".animated-border")
          if (borderEl) {
            gsap.to(borderEl, {
              scaleX: 1.02,
              duration: 0.4,
              ease: "power2.out",
            })
          }
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
          })

          const borderEl = card.querySelector(".animated-border")
          if (borderEl) {
            gsap.to(borderEl, {
              scaleX: 1,
              duration: 0.5,
              ease: "elastic.out(1, 0.5)",
            })
          }
        })
      })

      // Enhanced title animations with wave effect
      titles.forEach((title, index) => {
        const letters = title.textContent?.split("") || []
        const wrappedLetters = letters
          .map((letter) => (letter === " " ? " " : `<span class="letter">${letter}</span>`))
          .join("")
        title.innerHTML = wrappedLetters

        const letterElements = title.querySelectorAll(".letter")

        gsap.set(letterElements, {
          opacity: 0,
          y: 50,
          rotation: 10,
        })

        gsap.to(letterElements, {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.4)",
          stagger: {
            each: 0.05,
            from: "start",
          },
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Skill cards special animation
      skillCards.forEach((card, index) => {
        gsap.set(card, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          rotation: index % 2 === 0 ? -5 : 5,
        })

        gsap.to(card, {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Stats counter animation
      statsCards.forEach((stat) => {
        const numberElement = stat.querySelector(".stat-number")
        if (numberElement) {
          const finalValue = numberElement.textContent
          const numericValue = Number.parseInt(finalValue?.replace(/\D/g, "") || "0")

          gsap.set(numberElement, { textContent: 0 })

          gsap.to(numberElement, {
            textContent: numericValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function () {
              const current = Math.round(this.targets()[0].textContent)
              numberElement.textContent = finalValue?.includes("%")
                ? String(current) + "%"
                : finalValue?.includes("+")
                  ? String(current) + "+"
                  : String(current)
            },
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          })
        }
      })

      // Floating animation for developer cards
      const developerCards = content.querySelectorAll(".developer-card")
      developerCards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -10 : -15,
          duration: 3 + index * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        })
      })

      // Particle effect on scroll
      const createParticleEffect = () => {
        const particles: HTMLDivElement[] = []
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement("div")
          particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #FF3C00;
            pointer-events: none;
            z-index: 1000;
            border-radius: 50%;
            opacity: 0;
          `
          document.body.appendChild(particle)
          particles.push(particle)
        }

        window.addEventListener("scroll", () => {
          particles.forEach((particle, index) => {
            gsap.to(particle, {
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5,
              duration: 2,
              ease: "power2.out",
              delay: index * 0.1,
            })
          })
        })
      }

      createParticleEffect()
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0">
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <FaultyTerminal
            scale={1.5}
            gridMul={[1, 1]}
            digitSize={1.2}
            timeScale={1.5}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={0}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={1.0}
            tint="#FF3C00"
            mouseReact={true}
            mouseStrength={1.5}
            pageLoadAnimation={true}
            brightness={1}
          />
        </div>
      </div>

      <section ref={sectionRef} className="relative min-h-screen w-full z-10" data-testid="developer-section">
        <div ref={contentRef} className="relative z-10 py-20">
          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center px-8 lg:px-16 mb-32">
            <div className="max-w-6xl w-full text-center">
              <div className="tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-12 lg:p-20 relative overflow-hidden shadow-2xl">
                <div className="animated-border absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>

                <span className="text-orange-500 font-mono text-lg tracking-[0.3em] block mb-4">01</span>
                <span className="text-white/60 text-xl font-light block mb-8">開発者チーム</span>

                <h1 className="tech-title text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight">
                  RAZIEL &
                  <br />
                  <span className="text-orange-500">ALIXANDRE</span>
                </h1>

                <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>

                <p className="text-white/80 text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
                  Dois desenvolvedores empenhados em criar sistemas e sites inovadores para empresas. Combinamos
                  expertise em frontend e backend para entregar soluções completas e de alta qualidade.
                </p>
              </div>
            </div>
          </div>

          <div className="px-8 lg:px-16 mb-32">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-red-500 font-mono text-lg tracking-[0.3em]">02</span>
                <span className="text-white/60 text-lg font-light block mb-4">開発者プロフィール</span>
                <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">NOSSA EQUIPE</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Raziel Card */}
                <div className="developer-card tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-10 relative shadow-2xl">
                  <div className="animated-border absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">R</span>
                    </div>
                    <h3 className="tech-title text-4xl font-black text-white mb-2">RAZIEL</h3>
                    <p className="text-blue-400 text-lg font-medium mb-2">Frontend Developer</p>
                    <span className="text-white/60 text-sm">17 anos</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-blue-400 font-bold text-lg mb-3">Especialidades</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-sm font-mono">React</span>
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 text-sm font-mono">Tailwind CSS</span>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-sm font-mono">TypeScript</span>
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 text-sm font-mono">Next.js</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-blue-400 font-bold text-lg mb-3">Foco</h4>
                      <p className="text-white/80 leading-relaxed">
                        Especializado em criar interfaces modernas e responsivas. Apaixonado por UX/UI e sempre buscando
                        as melhores práticas em desenvolvimento frontend.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="stat-item text-center">
                        <span className="stat-number text-blue-400 text-2xl font-bold block">17</span>
                        <span className="text-white/60 text-sm">Anos</span>
                      </div>
                      <div className="stat-item text-center">
                        <span className="stat-number text-cyan-400 text-2xl font-bold block">100%</span>
                        <span className="text-white/60 text-sm">Frontend</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alixandre Card */}
                <div className="developer-card tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-10 relative shadow-2xl">
                  <div className="animated-border absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-green-500 to-emerald-500"></div>

                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">A</span>
                    </div>
                    <h3 className="tech-title text-4xl font-black text-white mb-2">ALIXANDRE</h3>
                    <p className="text-green-400 text-lg font-medium mb-2">Backend Developer</p>
                    <span className="text-white/60 text-sm">18 anos</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-green-400 font-bold text-lg mb-3">Especialidades</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 text-sm font-mono">Python</span>
                        <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 text-sm font-mono">Django</span>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 text-sm font-mono">REST APIs</span>
                        <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 text-sm font-mono">
                          PostgreSQL
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-green-400 font-bold text-lg mb-3">Foco</h4>
                      <p className="text-white/80 leading-relaxed">
                        Especializado em desenvolvimento backend robusto e escalável. Expert em Python e Django, focado
                        em criar APIs eficientes e arquiteturas sólidas.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="stat-item text-center">
                        <span className="stat-number text-green-400 text-2xl font-bold block">18</span>
                        <span className="text-white/60 text-sm">Anos</span>
                      </div>
                      <div className="stat-item text-center">
                        <span className="stat-number text-emerald-400 text-2xl font-bold block">100%</span>
                        <span className="text-white/60 text-sm">Backend</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 lg:px-16 mb-32">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-orange-500 font-mono text-lg tracking-[0.3em]">03</span>
                <span className="text-white/60 text-lg font-light block mb-4">チームミッション</span>
                <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">NOSSA MISSÃO</h2>
              </div>

              <div className="tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-12 lg:p-16 relative shadow-2xl">
                <div className="animated-border absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="tech-title text-3xl lg:text-4xl font-black text-white mb-6">
                      SOLUÇÕES COMPLETAS PARA EMPRESAS
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed mb-8">
                      Combinamos nossas especialidades complementares para oferecer desenvolvimento full-stack de alta
                      qualidade. Raziel cuida da experiência do usuário no frontend, enquanto Alixandre constrói a base
                      sólida no backend.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-white/80">Interfaces modernas e responsivas</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-white/80">APIs robustas e escaláveis</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-white/80">Soluções personalizadas</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-black/30 p-6 border border-blue-500/30">
                      <h4 className="text-blue-400 font-bold text-lg mb-2">Frontend Excellence</h4>
                      <p className="text-white/70 text-sm">
                        React, Tailwind CSS e as mais modernas tecnologias frontend
                      </p>
                    </div>
                    <div className="bg-black/30 p-6 border border-green-500/30">
                      <h4 className="text-green-400 font-bold text-lg mb-2">Backend Power</h4>
                      <p className="text-white/70 text-sm">
                        Python, Django e arquiteturas escaláveis para qualquer demanda
                      </p>
                    </div>
                    <div className="bg-black/30 p-6 border border-orange-500/30">
                      <h4 className="text-orange-400 font-bold text-lg mb-2">Full-Stack Solutions</h4>
                      <p className="text-white/70 text-sm">Projetos completos do conceito ao deploy em produção</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-12 lg:p-16 relative shadow-2xl">
                <div className="animated-border absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 to-red-500"></div>

                <span className="text-orange-500 font-mono text-lg tracking-[0.3em] block mb-4">04</span>
                <span className="text-white/60 text-xl font-light block mb-8">接続</span>

                <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">VAMOS TRABALHAR JUNTOS</h2>

                <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                  Prontos para transformar suas ideias em realidade. Entre em contato conosco para discutir seu próximo
                  projeto e descobrir como podemos ajudar sua empresa a crescer.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <div className="bg-black/30 border border-blue-500/30 px-6 py-3 transition-colors hover:bg-blue-500/10">
                    <span className="text-blue-400 font-mono text-sm">RAZIEL - FRONTEND</span>
                  </div>
                  <div className="bg-black/30 border border-green-500/30 px-6 py-3 transition-colors hover:bg-green-500/10">
                    <span className="text-green-400 font-mono text-sm">ALIXANDRE - BACKEND</span>
                  </div>
                  <div className="bg-black/30 border border-orange-500/30 px-6 py-3 transition-colors hover:bg-orange-500/10">
                    <span className="text-orange-400 font-mono text-sm">PROJETOS FULL-STACK</span>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-white/40 text-sm font-light">一緒に未来を築きましょう</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
