"use client"

import { ChevronDown } from "lucide-react"
import Noise from "./noise"
import BleYALogo from "./ble-ya-logo"

export default function HeroSection() {
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <main className="min-h-screen  flex flex-col justify-center items-center relative px-4 sm:px-6 md:px-8 z-10">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/70 to-transparent z-30 pointer-events-none"></div>
        <div className="bg-black/30 fixed inset-0 w-full h-[-20vh] top-10 md:top-[-255vh] lg:top-[-50vh] z-0 backdrop-blur-md pointer-events-none"></div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
          zIndex: 0,

        }}
      >
        <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={2} patternAlpha={15} />
      </div>

      {/* Author Credit */}
      <div
        className="author-credit absolute top-20 sm:top-24 md:top-32 left-4 sm:left-6 md:left-8 text-sm sm:text-base md:text-lg font-light text-secondary tracking-wider uppercase z-20"
        data-testid="author-credit"
      >
        <div className="hidden sm:block">
          BLEYA VISION -{" "}
          <span className="bg-gradient-to-tr from-orange-600 to-white bg-clip-text text-transparent">
            勉強するときに安心する
          </span>
        </div>
        <div className="block sm:hidden">
          <div>BLEYA VISION</div>
          <div className="bg-gradient-to-tr from-orange-600 to-white bg-clip-text text-transparent text-xs mt-1">
            勉強するときに安心する
          </div>
        </div>
      </div>

      {/* Main Typography */}
      <div className="text-center relative z-10 max-w-7xl px-4">
        <h1 className="hero-text text-shadow-glow leading-none tracking-tight" data-testid="hero-title">
          <div className="hero-title-line-1">
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
              <span className="block text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">B  L  E  Y  A</span>
              <BleYALogo className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24" />
            </div>
          </div>
          <div className="hero-title-line-2 mt-2 sm:mt-4">
            <span className="block text-[hsl(var(--text-beige))]/80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
              ブレヤ
            </span>
          </div>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div
        className="scroll-indicator absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollClick}
        data-testid="scroll-indicator"
      >
        <div className="flex items-center space-x-3 text-[hsl(var(--text-beige))]/60 hover:text-primary transition-colors duration-300">
          <div className="flex flex-col items-center space-y-1">
            <span className="text-sm sm:text-lg font-light tracking-wide [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180">
              Keep Scrolling
            </span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="w-px h-1 sm:h-4 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
            <ChevronDown className="w-12 h-12 sm:w-12 sm:h-12 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Side Information */}
      <div
        className="status-info absolute bottom-12 sm:bottom-16 right-4 sm:right-6 md:right-8 text-right text-xs sm:text-sm font-light text-[hsl(var(--text-beige))]/70"
        data-testid="status-info"
      >
        <div className="mb-1 sm:mb-2">
          <span className="block sm:inline">knowledge is infinite,</span>
          <span className="block sm:inline"> keep going!</span>
        </div>
        <div className="text-xs text-secondary">
          <div className="block sm:inline">
            <span>& Raziel - Bleya </span>
          </div>
          <div className="block sm:inline">
            <span className="text-primary hover:text-secondary transition-colors duration-300 cursor-pointer">
              Projeto Open Source
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
