import React, { RefObject } from "react";

interface CTATechDecorationsProps {
  subtitleRef: RefObject<HTMLDivElement>;
}

export const CTASubtitleSection: React.FC<CTATechDecorationsProps> = ({
  subtitleRef,
}) => {
  return (
    <p
      ref={subtitleRef}
      className="text-white/60 text-base font-mono mb-12 tracking-wide uppercase"
    >
      Programming Interface Ready
    </p>
  );
};
