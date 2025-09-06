import React, { RefObject } from "react";

interface CTATechDecorationsProps {
  titleRef: RefObject<HTMLDivElement>;
}

export const CTATitleSection: React.FC<CTATechDecorationsProps> = ({
  titleRef,
}) => {
  return (
    <div ref={titleRef} className="relative mb-10">
      <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-2">
        INIT
        <span className="block text-white/90 text-5xl md:text-7xl font-light">
          SYSTEM
        </span>
      </h1>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
  );
};
