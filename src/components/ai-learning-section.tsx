"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AILearningSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const titleRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      })

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          gsap.set(section, {
            opacity: 0,
            x: index % 2 === 0 ? -200 : 200,
            filter: "blur(8px)",
          })
        }
      })

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
            onStart: () => {
              gsap.set(titleRef.current, {
                filter: "hue-rotate(30deg) contrast(3) saturate(5) brightness(2)",
              })
              gsap.to(titleRef.current, {
                filter: "hue-rotate(0deg) contrast(1) saturate(1) brightness(1)",
                duration: 0.8,
                delay: 0.2,
              })
            },
          })

          sectionsRef.current.forEach((section, index) => {
            if (section) {
              gsap.to(section, {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                duration: 2,
                delay: 0.5 + index * 0.4,
                ease: "power2.out",
                onStart: () => {
                  gsap.set(section, {
                    filter: "hue-rotate(45deg) contrast(4) saturate(8) brightness(3)",
                  })
                  gsap.to(section, {
                    filter: "hue-rotate(0deg) contrast(1) saturate(1) brightness(1)",
                    duration: 1,
                    delay: 0.3,
                  })
                },
              })
            }
          })
        },
        onLeave: () => {
          sectionsRef.current.forEach((section, index) => {
            if (section) {
              gsap.to(section, {
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                filter: "blur(5px)",
                duration: 1.5,
                ease: "power2.in",
              })
            }
          })
        },
        onEnterBack: () => {
          sectionsRef.current.forEach((section, index) => {
            if (section) {
              gsap.to(section, {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                duration: 1.8,
                ease: "power2.out",
              })
            }
          })
        },
      })

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          ScrollTrigger.create({
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            onEnter: () => {
              gsap.to(section, {
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.6,
                ease: "power2.out",
              })
            },
            onLeave: () => {
              gsap.to(section, {
                opacity: 0.8,
                filter: "blur(2px)",
                duration: 0.4,
                ease: "power2.in",
              })
            },
          })
        }
      })
    }
  }, [])

  const addToRefs = (el: any) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  const aiLearningBenefits = [
    {
      number: "01/04",
      title: "Aprendizado Personalizado",
      subtitle: "ADAPTIVE INTELLIGENCE",
      description:
        "A IA adapta-se ao seu ritmo e estilo de aprendizagem, criando um caminho único para cada pessoa. Como um tutor pessoal que nunca se cansa, ela identifica suas dificuldades e ajusta o conteúdo para maximizar sua compreensão.",
      japanese: "個人に合わせた学習",
      japaneseTranslation: "Kojin ni awaseta gakushū",
    },
    {
      number: "02/04",
      title: "Disponibilidade 24/7",
      subtitle: "ALWAYS ACCESSIBLE",
      description:
        "Diferente de professores tradicionais, a IA está sempre disponível. Pode tirar dúvidas às 3h da manhã ou revisar conceitos no fim de semana. Seu mentor digital nunca dorme e está sempre pronto para ajudar.",
      japanese: "いつでも利用可能",
      japaneseTranslation: "Itsu demo riyō kanō",
    },
    {
      number: "03/04",
      title: "Feedback Instantâneo",
      subtitle: "IMMEDIATE RESPONSE",
      description:
        "Receba correções e sugestões em tempo real. A IA analisa seu progresso instantaneamente, oferecendo feedback preciso que acelera seu aprendizado e evita que você pratique métodos incorretos.",
      japanese: "即座のフィードバック",
      japaneseTranslation: "Sokuza no fīdobakku",
    },
    {
      number: "04/04",
      title: "Conhecimento Infinito",
      subtitle: "BOUNDLESS WISDOM",
      description:
        "Acesso a uma biblioteca infinita de conhecimento. A IA pode explicar desde conceitos básicos até tópicos avançados, conectando diferentes áreas do conhecimento de forma que nenhum professor humano conseguiria.",
      japanese: "無限の知識",
      japaneseTranslation: "Mugen no chishiki",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-black overflow-hidden"
      data-testid="ai-learning-section"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-pulse glitch-line"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent animate-pulse delay-1000 glitch-line"></div>
        <div className="absolute bottom-1/4 left-1/2 w-px h-24 bg-gradient-to-b from-transparent via-amber-500/60 to-transparent animate-pulse delay-2000 glitch-line"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-red-500/80 to-transparent animate-pulse delay-500 glitch-line"></div>
        <div className="absolute bottom-1/3 left-1/3 w-px h-16 bg-gradient-to-b from-transparent via-cyan-500/80 to-transparent animate-pulse delay-1500 glitch-line"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent h-3 animate-pulse opacity-50 glitch-scanner"
          style={{
            animation: "glitch-scan-chaos 2s linear infinite",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/15 to-transparent w-2 opacity-40 glitch-scanner-horizontal"
          style={{
            animation: "glitch-scan-horizontal 3.5s linear infinite reverse",
          }}
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 relative">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] 2xl:text-[12rem] font-black text-white mb-4 sm:mb-6 tracking-tight leading-none relative z-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400 transition-all duration-700 cursor-default glitch-text-apocalypse"
            style={{
              textShadow:
                "0 0 20px rgba(251, 146, 60, 0.3), 2px 0 0 rgba(255, 0, 0, 0.1), -2px 0 0 rgba(0, 255, 255, 0.1)",
            }}
          >
            IA LEARNING
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 relative z-10">
            Por que a Inteligência Artificial é o futuro da educação personalizada
          </p>
          <div className="w-20 sm:w-32 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto relative z-10 animate-pulse shadow-lg shadow-orange-500/30 glitch-divider" />
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {aiLearningBenefits.map((benefit, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative transition-all duration-300 hover:scale-[1.02] glitch-card-apocalypse cursor-pointer"
              data-testid={`ai-benefit-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/8 to-amber-600/8 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse glitch-overlay-1"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/12 to-cyan-600/12 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:animate-pulse delay-75 glitch-overlay-2"></div>
              <div className="absolute inset-0 border border-white/5 rounded-xl opacity-0 group-hover:opacity-100 group-hover:border-orange-500/30 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(251,146,60,0.2)] glitch-border"></div>

              <div className="relative p-6 sm:p-8 rounded-xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm group-hover:from-black/70 group-hover:to-black/50 transition-all duration-300 overflow-hidden glitch-card-container">
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-orange-500/60 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:animate-pulse group-hover:border-orange-400 glitch-corner-1"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-amber-500/60 opacity-0 group-hover:opacity-100 group-hover:animate-pulse group-hover:border-amber-400 glitch-corner-2"></div>
                <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-red-500/80 opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-100 glitch-corner-3"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-cyan-500/80 opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-150 glitch-corner-4"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent w-full h-1 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 glitch-scan-line-1"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent w-full h-px opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-100 transition-all duration-200 glitch-scan-line-2"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyan-500/25 to-transparent w-full h-2 opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-200 transition-all duration-250 glitch-scan-line-3"></div>

                <div className="mb-6 sm:mb-8 relative z-10">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <span className="text-sm sm:text-base lg:text-lg font-mono text-white/60 tracking-wider group-hover:text-orange-400 transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.7)] group-hover:animate-pulse glitch-number">
                      {benefit.number}
                    </span>
                    <div className="w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-r from-orange-500 to-amber-500 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-200 group-hover:h-1 group-hover:animate-pulse glitch-divider-small" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 sm:mb-4 leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-300 cursor-default relative glitch-title-apocalypse">
                    {benefit.title}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg font-mono text-orange-400 tracking-wider mb-6 sm:mb-8 group-hover:text-amber-400 transition-all duration-200 group-hover:drop-shadow-[0_0_5px_rgba(251,146,60,0.5)] group-hover:animate-pulse glitch-subtitle">
                    {benefit.subtitle}
                  </p>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 items-start relative z-10">
                  <div className="md:col-span-2 lg:col-span-1 order-1 lg:order-2 flex flex-col items-center lg:items-end">
                    <div className="text-center lg:text-right transform group-hover:scale-105 transition-all duration-300 glitch-japanese">
                      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 mb-2 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.4)] transition-all duration-300">
                        {benefit.japanese}
                      </p>
                      <p className="text-xs sm:text-sm font-mono text-white/60 tracking-wide group-hover:text-white/80 transition-all duration-300">
                        {benefit.japaneseTranslation}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-2 lg:col-span-2 order-2 lg:order-1">
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed group-hover:text-white transition-all duration-300 glitch-description">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {index < aiLearningBenefits.length - 1 && (
                  <div className="mt-12 sm:mt-16 lg:mt-20 relative">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-orange-500/30 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(251,146,60,0.2)] glitch-separator" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20 lg:mt-24 relative">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600/10 to-amber-600/10 rounded-full border border-white/10 hover:border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-600/15 hover:to-amber-600/15 transition-all duration-300 backdrop-blur-sm hover:scale-105 cursor-pointer group glitch-cta">
            <span className="text-sm sm:text-base text-white font-medium text-center px-2 group-hover:text-white/95 transition-all duration-300">
              Pronto para experimentar o futuro da educação?
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse group-hover:shadow-md group-hover:shadow-orange-500/40 group-hover:scale-110 transition-all duration-300 glitch-dot" />
          </div>
        </div>
      </div>

      <style jsx>{`
         .scanner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    animation: glitch-scan 3s linear infinite;
  }

  @keyframes glitch-scan {
    0%   { transform: translate3d(0, -100vh, 0); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { transform: translate3d(0, 100vh, 0); opacity: 0; }
  }
        
        /* Updated all animations to 0.5s duration with orange-focused colors */
        @keyframes glitch-scan-chaos {
          0% { transform: translateY(-100vh) skew(0deg); opacity: 0; filter: hue-rotate(0deg); }
          5% { transform: translateY(-80vh) skew(15deg); opacity: 0.8; filter: hue-rotate(30deg) contrast(3); }
          10% { transform: translateY(-60vh) skew(-10deg); opacity: 1; filter: hue-rotate(60deg) saturate(5); }
          15% { transform: translateY(-40vh) skew(20deg); opacity: 0.6; filter: hue-rotate(15deg) brightness(3); }
          20% { transform: translateY(-20vh) skew(-15deg); opacity: 1; filter: hue-rotate(45deg) contrast(0.3); }
          25% { transform: translateY(0vh) skew(25deg); opacity: 0.4; filter: hue-rotate(20deg) saturate(8); }
          30% { transform: translateY(20vh) skew(-20deg); opacity: 1; filter: hue-rotate(40deg) brightness(0.2); }
          35% { transform: translateY(40vh) skew(30deg); opacity: 0.7; filter: hue-rotate(25deg) contrast(4); }
          40% { transform: translateY(60vh) skew(-25deg); opacity: 1; filter: hue-rotate(35deg) saturate(2); }
          45% { transform: translateY(80vh) skew(35deg); opacity: 0.5; filter: hue-rotate(50deg) brightness(4); }
          50% { transform: translateY(100vh) skew(-30deg); opacity: 0.8; filter: hue-rotate(10deg) contrast(0.1); }
          55% { transform: translateY(120vh) skew(40deg); opacity: 1; filter: hue-rotate(55deg) saturate(6); }
          60% { transform: translateY(140vh) skew(-35deg); opacity: 0.3; filter: hue-rotate(30deg) brightness(2.5); }
          65% { transform: translateY(160vh) skew(45deg); opacity: 0.9; filter: hue-rotate(40deg) contrast(2.8); }
          70% { transform: translateY(180vh) skew(-40deg); opacity: 0.6; filter: hue-rotate(20deg) saturate(4); }
          75% { transform: translateY(200vh) skew(50deg); opacity: 1; filter: hue-rotate(45deg) brightness(0.4); }
          80% { transform: translateY(220vh) skew(-45deg); opacity: 0.4; filter: hue-rotate(35deg) contrast(3.5); }
          85% { transform: translateY(240vh) skew(55deg); opacity: 0.8; filter: hue-rotate(25deg) saturate(7); }
          90% { transform: translateY(260vh) skew(-50deg); opacity: 1; filter: hue-rotate(50deg) brightness(3.2); }
          95% { transform: translateY(280vh) skew(60deg); opacity: 0.2; filter: hue-rotate(15deg) contrast(0.2); }
          100% { transform: translateY(300vh) skew(0deg); opacity: 0; filter: hue-rotate(0deg); }
        }
        
        @keyframes glitch-scan-horizontal {
          0% { transform: translateX(-100vw) skew(0deg, 0deg); opacity: 0; filter: hue-rotate(0deg); }
          10% { transform: translateX(-50vw) skew(0deg, 10deg); opacity: 0.6; filter: hue-rotate(30deg) contrast(2); }
          20% { transform: translateX(0vw) skew(0deg, -15deg); opacity: 1; filter: hue-rotate(45deg) saturate(3); }
          30% { transform: translateX(50vw) skew(0deg, 20deg); opacity: 0.4; filter: hue-rotate(20deg) brightness(2); }
          40% { transform: translateX(100vw) skew(0deg, -10deg); opacity: 0.8; filter: hue-rotate(40deg) contrast(0.5); }
          50% { transform: translateX(150vw) skew(0deg, 25deg); opacity: 1; filter: hue-rotate(25deg) saturate(4); }
          60% { transform: translateX(200vw) skew(0deg, -20deg); opacity: 0.3; filter: hue-rotate(35deg) brightness(3); }
          70% { transform: translateX(250vw) skew(0deg, 15deg); opacity: 0.7; filter: hue-rotate(15deg) contrast(3); }
          80% { transform: translateX(300vw) skew(0deg, -25deg); opacity: 1; filter: hue-rotate(50deg) saturate(5); }
          90% { transform: translateX(350vw) skew(0deg, 30deg); opacity: 0.5; filter: hue-rotate(30deg) brightness(0.3); }
          100% { transform: translateX(400vw) skew(0deg, 0deg); opacity: 0; filter: hue-rotate(0deg); }
        }
        
        /* Updated hover animations to run once for exactly 0.5 seconds */
        .glitch-text-apocalypse:hover {
          animation: glitch-text-apocalypse 0.2s ease-in-out forwards;
        }
        
        @keyframes glitch-text-apocalypse {
          0%, 100% { 
            transform: translate(0) scale(1);
            filter: none;
            clip-path: inset(0);
          }
          4% { 
            transform: translate(-150px, 15px) skew(8deg) rotateZ(3deg) scale(1.1);
            filter: hue-rotate(30deg) contrast(5) saturate(8) brightness(4);
            clip-path: inset(20% 0 30% 0);
          }
          8% { 
            transform: translate(120px, -20px) skew(-6deg) rotateZ(-2.5deg) scale(0.9);
            filter: hue-rotate(45deg) saturate(10) brightness(0.1) contrast(8);
            clip-path: inset(0 20% 0 30%);
          }
          12% { 
            transform: translate(-80px, 25px) skew(10deg) rotateZ(4deg) scale(1.2);
            filter: hue-rotate(20deg) brightness(6) contrast(0.1) saturate(12);
            clip-path: inset(40% 0 10% 0);
          }
          16% { 
            transform: translate(100px, -15px) skew(-8deg) rotateZ(-3deg) scale(0.8);
            filter: hue-rotate(40deg) contrast(10) saturate(2) brightness(0.05);
            clip-path: inset(0 40% 0 10%);
          }
          20% { 
            transform: translate(-60px, 30px) skew(12deg) rotateZ(5deg) scale(1.3);
            filter: contrast(50) saturate(15) brightness(8) hue-rotate(25deg);
            clip-path: inset(15% 0 45% 0);
          }
          24% { 
            transform: translate(90px, -25px) skew(-10deg) rotateZ(-4deg) scale(0.7);
            filter: contrast(0.05) saturate(0.1) brightness(10) hue-rotate(50deg);
            clip-path: inset(0 15% 0 45%);
          }
          30% { 
            transform: translate(-40px, 20px) skew(6deg) rotateZ(2deg) scale(1.1);
            filter: brightness(5) hue-rotate(35deg) saturate(6) contrast(3);
            clip-path: inset(25% 0 25% 0);
          }
          36% { 
            transform: translate(70px, -10px) skew(-4deg) rotateZ(-1.5deg) scale(0.95);
            filter: brightness(0.2) hue-rotate(15deg) contrast(6) saturate(8);
            clip-path: inset(0 25% 0 25%);
          }
          44% { 
            transform: translate(-30px, 12px) skew(3deg) rotateZ(1deg) scale(1.05);
            filter: saturate(4) contrast(2.5) brightness(2.5) hue-rotate(45deg);
            clip-path: inset(35% 0 15% 0);
          }
          52% { 
            transform: translate(50px, -8px) skew(-2deg) rotateZ(-0.8deg) scale(0.98);
            filter: saturate(0.2) contrast(0.3) brightness(0.4) hue-rotate(30deg);
            clip-path: inset(0 35% 0 15%);
          }
          60% { 
            transform: translate(-20px, 8px) skew(2deg) rotateZ(0.5deg) scale(1.02);
            filter: brightness(3) hue-rotate(40deg) saturate(3) contrast(2);
            clip-path: inset(10% 0 40% 0);
          }
          70% { 
            transform: translate(30px, -5px) skew(-1.5deg) rotateZ(-0.5deg) scale(0.99);
            filter: brightness(0.3) hue-rotate(20deg) contrast(4) saturate(5);
            clip-path: inset(0 10% 0 40%);
          }
          80% { 
            transform: translate(-15px, 5px) skew(1deg) rotateZ(0.3deg) scale(1.01);
            filter: contrast(1.8) saturate(2.5) brightness(1.8) hue-rotate(35deg);
            clip-path: inset(20% 0 30% 0);
          }
          90% { 
            transform: translate(20px, -3px) skew(-0.8deg) rotateZ(-0.3deg) scale(0.995);
            filter: contrast(0.6) saturate(0.4) brightness(0.6) hue-rotate(25deg);
            clip-path: inset(0 20% 0 30%);
          }
        }
        
        /* Updated card hover animation to run once for exactly 0.5 seconds */
        .glitch-card-apocalypse:hover .glitch-title-apocalypse {
          animation: glitch-title-apocalypse 0.5s ease-in-out forwards;
        }
        
        @keyframes glitch-title-apocalypse {
          0%, 100% { 
            transform: translate(0) scale(1);
            text-shadow: 0 0 20px rgba(251, 146, 60, 0.3);
            filter: none;
            clip-path: inset(0);
          }
          6% { 
            transform: translate(25px, -25px) skew(8deg) rotateZ(3deg) scale(1.15);
            text-shadow: 15px 0 0 #ff6600, -15px 0 0 #ff9900, 0 0 50px #ffaa00, 10px 10px 0 #ff4400;
            filter: hue-rotate(30deg) contrast(4) saturate(6);
            clip-path: inset(30% 0 20% 0);
          }
          12% { 
            transform: translate(-20px, 20px) skew(-6deg) rotateZ(-2deg) scale(0.85);
            text-shadow: -12px 0 0 #ff4400, 12px 0 0 #ffaa00, 0 0 40px #ff6600, -8px -8px 0 #ff8800;
            filter: hue-rotate(45deg) saturate(8) brightness(3);
            clip-path: inset(0 30% 0 20%);
          }
          18% { 
            transform: translate(18px, -18px) skew(5deg) rotateZ(2.5deg) scale(1.1);
            text-shadow: 10px 0 0 #ff5500, -10px 0 0 #ff9900, 0 0 35px #ffbb00, 6px 6px 0 #ff3300;
            filter: contrast(6) saturate(4) brightness(0.3) hue-rotate(20deg);
            clip-path: inset(40% 0 10% 0);
          }
          24% { 
            transform: translate(-15px, 15px) skew(-4deg) rotateZ(-2deg) scale(0.9);
            text-shadow: -8px 0 0 #ff7700, 8px 0 0 #ff9900, 0 0 30px #ff6600, -5px -5px 0 #ffaa00;
            filter: contrast(0.2) saturate(10) brightness(5) hue-rotate(40deg);
            clip-path: inset(0 40% 0 10%);
          }
          30% { 
            transform: translate(12px, -12px) skew(3deg) rotateZ(1.5deg) scale(1.05);
            text-shadow: 6px 0 0 #ff4400, -6px 0 0 #ff8800, 0 0 25px #ffcc00, 4px 4px 0 #ff2200;
            filter: hue-rotate(25deg) contrast(3) saturate(5);
            clip-path: inset(25% 0 35% 0);
          }
          40% { 
            transform: translate(-10px, 10px) skew(-2.5deg) rotateZ(-1deg) scale(0.95);
            text-shadow: -5px 0 0 #ff6600, 5px 0 0 #ff9900, 0 0 20px #ff5500, -3px -3px 0 #ffaa00;
            filter: hue-rotate(35deg) saturate(7) brightness(2);
            clip-path: inset(0 25% 0 35%);
          }
          50% { 
            transform: translate(8px, -8px) skew(2deg) rotateZ(0.8deg) scale(1.03);
            text-shadow: 4px 0 0 #ff3300, -4px 0 0 #ff7700, 0 0 18px #ffdd00, 3px 3px 0 #ff1100;
            filter: contrast(2.5) saturate(3) brightness(1.5) hue-rotate(15deg);
            clip-path: inset(15% 0 45% 0);
          }
          60% { 
            transform: translate(-6px, 6px) skew(-1.5deg) rotateZ(-0.6deg) scale(0.98);
            text-shadow: -3px 0 0 #ff5500, 3px 0 0 #ff8800, 0 0 15px #ff4400, -2px -2px 0 #ffbb00;
            filter: contrast(0.4) saturate(8) brightness(0.7) hue-rotate(50deg);
            clip-path: inset(0 15% 0 45%);
          }
          80% { 
            transform: translate(5px, -5px) skew(1deg) rotateZ(0.4deg) scale(1.02);
            text-shadow: 3px 0 0 #ff2200, -3px 0 0 #ff6600, 0 0 12px #ffee00, 2px 2px 0 #ff0000;
            filter: hue-rotate(30deg) contrast(2) saturate(2.5);
            clip-path: inset(35% 0 15% 0);
          }
        }
        
        /* Updated card container hover animation to run once for exactly 0.5 seconds */
        .glitch-card-apocalypse:hover {
          animation: card-glitch-apocalypse 0.2s ease-in-out forwards;
        }
        
        @keyframes card-glitch-apocalypse {
          0%, 100% { 
            filter: none;
            transform: translate(0) scale(1);
            clip-path: inset(0);
          }
          4% { 
            filter: hue-rotate(30deg) contrast(4) saturate(8) brightness(3);
            transform: translate(8px, -8px) skew(4deg) rotateZ(2deg) scale(1.05);
            clip-path: inset(20% 0 30% 0);
          }
          8% { 
            filter: hue-rotate(45deg) contrast(0.2) brightness(6) saturate(12);
            transform: translate(-6px, 6px) skew(-3deg) rotateZ(-1.5deg) scale(0.95);
            clip-path: inset(0 20% 0 30%);
          }
          12% { 
            filter: saturate(15) brightness(0.1) contrast(8) hue-rotate(20deg);
            transform: translate(5px, 5px) skew(2.5deg) rotateZ(1.2deg) scale(1.03);
            clip-path: inset(40% 0 10% 0);
          }
          16% { 
            filter: saturate(0.05) brightness(8) contrast(0.1) hue-rotate(50deg);
            transform: translate(-4px, -4px) skew(-2deg) rotateZ(-1deg) scale(0.97);
            clip-path: inset(0 40% 0 10%);
          }
          20% { 
            filter: hue-rotate(35deg) contrast(6) brightness(2.5) saturate(6);
            transform: translate(4px, -4px) skew(1.8deg) rotateZ(0.8deg) scale(1.02);
            clip-path: inset(30% 0 20% 0);
          }
          24% { 
            filter: hue-rotate(25deg) contrast(0.3) brightness(0.2) saturate(10);
            transform: translate(-3px, 3px) skew(-1.5deg) rotateZ(-0.6deg) scale(0.98);
            clip-path: inset(0 30% 0 20%);
          }
          30% { 
            filter: saturate(8) brightness(4) contrast(3) hue-rotate(40deg);
            transform: translate(3px, 3px) skew(1.2deg) rotateZ(0.6deg) scale(1.015);
            clip-path: inset(25% 0 25% 0);
          }
          36% { 
            filter: saturate(0.1) brightness(0.3) contrast(5) hue-rotate(15deg);
            transform: translate(-2.5px, -2.5px) skew(-1deg) rotateZ(-0.4deg) scale(0.985);
            clip-path: inset(0 25% 0 25%);
          }
          44% { 
            filter: hue-rotate(45deg) contrast(2.5) saturate(4) brightness(2);
            transform: translate(2.5px, -2.5px) skew(0.8deg) rotateZ(0.4deg) scale(1.01);
            clip-path: inset(35% 0 15% 0);
          }
          52% { 
            filter: hue-rotate(30deg) contrast(0.4) saturate(7) brightness(0.4);
            transform: translate(-2px, 2px) skew(-0.6deg) rotateZ(-0.3deg) scale(0.99);
            clip-path: inset(0 35% 0 15%);
          }
          60% { 
            filter: brightness(3) hue-rotate(20deg) saturate(3) contrast(2.2);
            transform: translate(2px, 2px) skew(0.5deg) rotateZ(0.25deg) scale(1.008);
            clip-path: inset(15% 0 35% 0);
          }
          70% { 
            filter: brightness(0.5) hue-rotate(50deg) contrast(3.5) saturate(5);
            transform: translate(-1.8px, -1.8px) skew(-0.4deg) rotateZ(-0.2deg) scale(0.992);
            clip-path: inset(0 15% 0 35%);
          }
          80% { 
            filter: hue-rotate(35deg) contrast(2) brightness(1.8) saturate(2.5);
            transform: translate(1.8px, -1.8px) skew(0.3deg) rotateZ(0.15deg) scale(1.006);
            clip-path: inset(45% 0 5% 0);
          }
          90% { 
            filter: hue-rotate(25deg) contrast(0.6) brightness(0.6) saturate(4);
            transform: translate(-1.5px, 1.5px) skew(-0.25deg) rotateZ(-0.12deg) scale(0.994);
            clip-path: inset(0 45% 0 5%);
          }
        }
        
        /* Updated additional glitch effects to run once for exactly 0.5 seconds */
        .glitch-line:hover {
          animation: line-glitch-chaos 0.2s ease-in-out forwards;
        }
        
        @keyframes line-glitch-chaos {
          0%, 100% { transform: translate(0) scale(1); filter: none; }
          20% { transform: translate(5px, -5px) scale(1.2); filter: hue-rotate(30deg) saturate(3); }
          40% { transform: translate(-3px, 3px) scale(0.8); filter: hue-rotate(45deg) brightness(2); }
          60% { transform: translate(4px, 4px) scale(1.1); filter: contrast(4) saturate(5) hue-rotate(20deg); }
          80% { transform: translate(-2px, -2px) scale(0.9); filter: contrast(0.2) brightness(3) hue-rotate(40deg); }
        }
        
        .glitch-corner-1:hover, .glitch-corner-2:hover, .glitch-corner-3:hover, .glitch-corner-4:hover {
          animation: corner-glitch-extreme 0.2s ease-in-out forwards;
        }
        
        @keyframes corner-glitch-extreme {
          0%, 100% { transform: translate(0) rotate(0deg) scale(1); }
          30% { transform: translate(3px, -3px) rotate(15deg) scale(1.3); }
          60% { transform: translate(-2px, 2px) rotate(-10deg) scale(0.7); }
          90% { transform: translate(2px, 2px) rotate(20deg) scale(1.1); }
        }
        
        .glitch-divider:hover {
          animation: divider-glitch-chaos 0.2s ease-in-out forwards;
        }
        
        @keyframes divider-glitch-chaos {
          0%, 100% { transform: scaleX(1) scaleY(1); filter: none; }
          20% { transform: scaleX(2) scaleY(3); filter: hue-rotate(30deg) saturate(4); }
          40% { transform: scaleX(0.5) scaleY(0.3); filter: hue-rotate(45deg) brightness(3); }
          60% { transform: scaleX(1.5) scaleY(2); filter: contrast(5) saturate(6) hue-rotate(20deg); }
          80% { transform: scaleX(0.8) scaleY(0.6); filter: contrast(0.1) brightness(4) hue-rotate(40deg); }
        }
      `}</style>
    </section>
  )
}
