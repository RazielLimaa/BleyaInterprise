import React, { RefObject } from "react";

interface CTATechDecorationsProps {
  japaneseRef: RefObject<HTMLDivElement>;
}

export const CTAHeaderSection: React.FC<CTATechDecorationsProps> = ({
  japaneseRef,
}) => {
  return (
    <div ref={japaneseRef} className="mb-8">
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] block uppercase">
        システム開始
      </span>
      <div className="flex items-center justify-center mt-3">
        <div className="w-6 h-px bg-white/40"></div>
        <div className="w-1 h-1 bg-white/60 mx-2"></div>
        <div className="w-6 h-px bg-white/40"></div>
      </div>
    </div>
  );
};
