import React, { RefObject } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CTATechDecorationsProps {
  buttonRef: RefObject<HTMLButtonElement>;
}

export const CTAButtonSection: React.FC<CTATechDecorationsProps> = ({
  buttonRef,
}) => {
  return (
    <Button
      onClick={() => (window.location.href = "/chat-page")}
      ref={buttonRef}
      size="lg"
      className="cursor-target bg-white hover:bg-orange-500 text-black hover:text-white font-bold px-10 py-5 text-base transition-all duration-300 hover:scale-105 uppercase tracking-wider border-2 border-transparent hover:border-white/20"
    >
      EXECUTE
      <ArrowRight className="ml-3 h-4 w-4" />
    </Button>
  );
};
