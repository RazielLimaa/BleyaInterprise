"use client";

import { useBackgroundTransition } from "@/hooks/animations/useBackgroundAnimations";

export default function BackgroundTransition() {
  const { overlayRef } = useBackgroundTransition();

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black pointer-events-none z-5"
      style={{ opacity: 0 }}
    />
  );
}
