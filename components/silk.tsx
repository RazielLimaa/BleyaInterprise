"use client"

import { useEffect, useRef } from "react"

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

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.2,
            ease: "power2.out",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          })
        })
      })

      titles.forEach((title, index) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
      data-testid="developer-section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]"></div>

      <div ref={contentRef} className="relative z-10 py-20">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center px-8 lg:px-16 mb-32">
          <div className="max-w-6xl w-full text-center">
            <div className="tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>

              <span className="text-orange-500 font-mono text-lg tracking-[0.3em] block mb-4">01</span>
              <span className="text-white/60 text-xl font-light block mb-8">開発者の世界</span>

              <h1 className="tech-title text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight">
                RAZIEL
                <br />
                <span className="text-orange-500">DEVELOPER</span>
              </h1>

              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>

              <p className="text-white/80 text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
                17 anos explorando o universo da programação, criando experiências digitais que conectam tecnologia e
                criatividade através de código limpo e design inovador.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="px-8 lg:px-16 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-500 font-mono text-lg tracking-[0.3em]">02</span>
              <span className="text-white/60 text-lg font-light block mb-4">技術スタック</span>
              <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">EXPERTISE TÉCNICA</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="tech-card bg-black/30 backdrop-blur-sm border border-white/20 p-8 relative transition-transform duration-300 hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
                <span className="text-orange-500 text-sm font-light block mb-4">フロントエンド</span>
                <h3 className="tech-title text-2xl font-bold text-white mb-6">FRONTEND</h3>

                <div className="space-y-3">
                  <div className="text-white font-medium">React.js</div>
                  <div className="text-white font-medium">Next.js</div>
                  <div className="text-white font-medium">TypeScript</div>
                </div>

                <p className="text-white/70 text-sm mt-6 leading-relaxed">
                  Especializado em criar interfaces reativas e performáticas com foco em experiência do usuário.
                </p>
              </div>

              <div className="tech-card bg-black/30 backdrop-blur-sm border border-white/20 p-8 relative transition-transform duration-300 hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                <span className="text-red-500 text-sm font-light block mb-4">デザイン</span>
                <h3 className="tech-title text-2xl font-bold text-white mb-6">DESIGN</h3>

                <div className="space-y-3">
                  <div className="text-white font-medium">Tailwind CSS</div>
                  <div className="text-white font-medium">Framer Motion</div>
                  <div className="text-white font-medium">GSAP</div>
                </div>

                <p className="text-white/70 text-sm mt-6 leading-relaxed">
                  Criação de animações fluidas e layouts responsivos que elevam a experiência visual.
                </p>
              </div>

              <div className="tech-card bg-black/30 backdrop-blur-sm border border-white/20 p-8 relative transition-transform duration-300 hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/50"></div>
                <span className="text-white/60 text-sm font-light block mb-4">ツール</span>
                <h3 className="tech-title text-2xl font-bold text-white mb-6">FERRAMENTAS</h3>

                <div className="space-y-3">
                  <div className="text-white font-medium">Node.js</div>
                  <div className="text-white font-medium">Git/GitHub</div>
                  <div className="text-white font-medium">Figma</div>
                </div>

                <p className="text-white/70 text-sm mt-6 leading-relaxed">
                  Domínio de ferramentas essenciais para desenvolvimento colaborativo e prototipagem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="px-8 lg:px-16 mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-mono text-lg tracking-[0.3em]">03</span>
              <span className="text-white/60 text-lg font-light block mb-4">職歴</span>
              <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">JORNADA PROFISSIONAL</h2>
            </div>

            <div className="space-y-12">
              <div className="tech-card bg-black/30 backdrop-blur-sm border border-white/20 p-10 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <span className="text-orange-500 text-sm font-light block mb-2">現在の職位</span>
                    <h3 className="tech-title text-3xl font-bold text-white">ESTAGIÁRIO DESENVOLVEDOR</h3>
                    <p className="text-red-500 text-lg font-medium">PLANCEL • 2024 - Presente</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="bg-orange-500/20 text-orange-500 px-4 py-2 text-sm font-mono">ATIVO</span>
                  </div>
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Desenvolvimento de interfaces React com foco em performance, acessibilidade e experiência do usuário.
                  Colaboração em projetos de grande escala utilizando metodologias ágeis.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <span className="text-orange-500 text-2xl font-bold block">15+</span>
                    <span className="text-white/60 text-sm">Projetos</span>
                  </div>
                  <div className="text-center">
                    <span className="text-red-500 text-2xl font-bold block">98%</span>
                    <span className="text-white/60 text-sm">Performance</span>
                  </div>
                  <div className="text-center">
                    <span className="text-white text-2xl font-bold block">5</span>
                    <span className="text-white/60 text-sm">Tecnologias</span>
                  </div>
                  <div className="text-center">
                    <span className="text-orange-500 text-2xl font-bold block">100%</span>
                    <span className="text-white/60 text-sm">Dedicação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BleYA AI Section */}
        <div className="px-8 lg:px-16 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-500 font-mono text-lg tracking-[0.3em]">04</span>
              <span className="text-white/60 text-lg font-light block mb-4">人工知能の創造</span>
              <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">CRIAÇÃO DA IA BleYA</h2>
            </div>

            <div className="tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-12 lg:p-16 relative mb-12">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-orange-500 text-lg font-light block mb-4">革新的なAI</span>
                  <h3 className="tech-title text-5xl lg:text-7xl font-black text-white mb-6">BleYA</h3>
                  <p className="text-orange-500 text-xl font-mono tracking-wide mb-8">ARTIFICIAL INTELLIGENCE SYSTEM</p>

                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    BleYA representa o culminar de meses de pesquisa em inteligência artificial. Uma IA conversacional
                    avançada com processamento de linguagem natural e sistema de memória contextual.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="bg-orange-500/20 text-orange-500 px-4 py-2 text-sm font-mono">NLP AVANÇADO</span>
                    <span className="bg-red-500/20 text-red-500 px-4 py-2 text-sm font-mono">MEMÓRIA CONTEXTUAL</span>
                    <span className="bg-white/20 text-white px-4 py-2 text-sm font-mono">APRENDIZADO CONTÍNUO</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/30 p-6 border border-orange-500/30">
                    <h4 className="text-orange-500 font-bold text-lg mb-2">Arquitetura Neural</h4>
                    <p className="text-white/70 text-sm">Rede neural personalizada com camadas de atenção otimizadas</p>
                  </div>
                  <div className="bg-black/30 p-6 border border-red-500/30">
                    <h4 className="text-red-500 font-bold text-lg mb-2">Processamento NLP</h4>
                    <p className="text-white/70 text-sm">Compreensão contextual avançada e geração de texto natural</p>
                  </div>
                  <div className="bg-black/30 p-6 border border-white/30">
                    <h4 className="text-white font-bold text-lg mb-2">Sistema de Memória</h4>
                    <p className="text-white/70 text-sm">Retenção de contexto e personalização de respostas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-12 lg:p-16 relative">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 to-red-500"></div>

              <span className="text-orange-500 font-mono text-lg tracking-[0.3em] block mb-4">05</span>
              <span className="text-white/60 text-xl font-light block mb-8">接続</span>

              <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">VAMOS CONECTAR</h2>

              <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                Sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia. Vamos construir o futuro
                juntos.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-black/30 border border-orange-500/30 px-6 py-3 transition-colors hover:bg-orange-500/10">
                  <span className="text-orange-500 font-mono text-sm">GITHUB</span>
                </div>
                <div className="bg-black/30 border border-red-500/30 px-6 py-3 transition-colors hover:bg-red-500/10">
                  <span className="text-red-500 font-mono text-sm">LINKEDIN</span>
                </div>
                <div className="bg-black/30 border border-white/30 px-6 py-3 transition-colors hover:bg-white/10">
                  <span className="text-white font-mono text-sm">EMAIL</span>
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
  )
}
