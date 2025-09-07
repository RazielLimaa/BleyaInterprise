import { useAILearningAnimations } from "@/hooks/animations/useAILearningSection";
import { RefObject } from "react";

interface AiLearningHeaderProps {}

export const AILearningHeaderSection: React.FC<
  AiLearningHeaderProps
> = ({}) => {
  const { titleRef } = useAILearningAnimations();
  return (
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
  );
};
