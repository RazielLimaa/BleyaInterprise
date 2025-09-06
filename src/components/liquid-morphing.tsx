"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const interactiveRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const bubblesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const interactive = interactiveRef.current
    if (!interactive) return

    let animationId: number

    const bubbles = bubblesRef.current.filter(Boolean)
    const bubbleStates = bubbles.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      targetVx: (Math.random() - 0.5) * 3,
      targetVy: (Math.random() - 0.5) * 3,
    }))

    const move = () => {
      const cursor = cursorRef.current
      cursor.x += (cursor.targetX - cursor.x) / 20
      cursor.y += (cursor.targetY - cursor.y) / 20

      interactive.style.transform = `translate(${Math.round(cursor.x)}px, ${Math.round(cursor.y)}px)`

      bubbles.forEach((bubble, index) => {
        if (!bubble || !bubbleStates[index]) return

        const state = bubbleStates[index]

        // Random direction changes
        if (Math.random() < 0.01) {
          state.targetVx = (Math.random() - 0.5) * 3
          state.targetVy = (Math.random() - 0.5) * 3
        }

        // Smooth velocity transitions
        state.vx += (state.targetVx - state.vx) * 0.02
        state.vy += (state.targetVy - state.vy) * 0.02

        // Update positions
        state.x += state.vx
        state.y += state.vy

        // Bounce off edges
        if (state.x < -200 || state.x > window.innerWidth + 200) {
          state.vx *= -1
          state.targetVx *= -1
        }
        if (state.y < -200 || state.y > window.innerHeight + 200) {
          state.vy *= -1
          state.targetVy *= -1
        }

        bubble.style.transform = `translate(${state.x}px, ${state.y}px)`
      })

      animationId = requestAnimationFrame(move)
    }

    const handleMouseMove = (event: MouseEvent) => {
      cursorRef.current.targetX = event.clientX
      cursorRef.current.targetY = event.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)
    move()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full z-5 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 0 0 0 0.2 0 1 0 0 0.1 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      <div
        className="absolute inset-0 w-full h-full z-6 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fineNoise'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0.8 0.2 0 0 0.1 0.3 0.7 0 0 0.05 0.1 0.1 0.8 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fineNoise)' opacity='0.8'/%3E%3C/svg%3E")`,
          mixBlendMode: "soft-light",
        }}
      />

      {/* SVG Filter for goo effect */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          filter: "url(#goo) blur(40px)",
        }}
      >
        {/* Bubble 1 - Bright Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[0] = el
          }}
          className="absolute"
          style={{
            width: "60vw",
            height: "60vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 0, 0.9) 0%, rgba(255, 140, 0, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 2 - Deep Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[1] = el
          }}
          className="absolute"
          style={{
            width: "70vw",
            height: "70vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 0, 0.8) 0%, rgba(255, 100, 0, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 3 - Tangerine */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[2] = el
          }}
          className="absolute"
          style={{
            width: "80vw",
            height: "80vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 0, 0.7) 0%, rgba(255, 165, 0, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 4 - Burnt Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[3] = el
          }}
          className="absolute"
          style={{
            width: "75vw",
            height: "75vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 0, 0.8) 0%, rgba(255, 120, 0, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 5 - Large Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[4] = el
          }}
          className="absolute"
          style={{
            width: "120vw",
            height: "120vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 0, 0.6) 0%, rgba(255, 130, 0, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 6 - Coral Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[5] = el
          }}
          className="absolute"
          style={{
            width: "50vw",
            height: "50vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 80, 0.8) 0%, rgba(255, 127, 80, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 7 - Dark Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[6] = el
          }}
          className="absolute"
          style={{
            width: "65vw",
            height: "65vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 0, 0.7) 0%, rgba(255, 69, 0, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 8 - Pumpkin Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[7] = el
          }}
          className="absolute"
          style={{
            width: "55vw",
            height: "55vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 24, 0.8) 0%, rgba(255, 117, 24, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 9 - Amber Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[8] = el
          }}
          className="absolute"
          style={{
            width: "90vw",
            height: "90vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 0, 0.6) 0%, rgba(255, 191, 0, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 10 - Sunset Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[9] = el
          }}
          className="absolute"
          style={{
            width: "45vw",
            height: "45vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 77, 0.9) 0%, rgba(255, 94, 77, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 11 - Mandarin Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[10] = el
          }}
          className="absolute"
          style={{
            width: "85vw",
            height: "85vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 74, 0.7) 0%, rgba(255, 158, 74, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bubble 12 - Flame Orange */}
        <div
          ref={(el) => {
            if (el) bubblesRef.current[11] = el
          }}
          className="absolute"
          style={{
            width: "40vw",
            height: "40vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 0, 0.8) 0%, rgba(255, 79, 0, 0) 50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Interactive bubble that follows mouse */}
        <div
          ref={interactiveRef}
          className="absolute"
          style={{
            width: "40vw",
            height: "40vh",
            background: "radial-gradient(circle at center, rgba(255, 15, 0, 0.9) 0%, rgba(255, 150, 0, 0) 50%)",
            top: "-20%",
            left: "-20%",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  )
}
