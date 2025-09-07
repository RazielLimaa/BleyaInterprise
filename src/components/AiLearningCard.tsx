import { useAILearningAnimations } from "@/hooks/animations/useAILearningSection";
import React, { forwardRef } from "react";

interface AiLearningCardProps {
  index: number;
  aiLearningBenefits: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    japanese: string;
    japaneseTranslation: string;
  }[];
  benefit: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    japanese: string;
    japaneseTranslation: string;
  };
}

const AiLearningCard = forwardRef<HTMLDivElement, AiLearningCardProps>(
  ({ index, aiLearningBenefits, benefit }) => {
    const { addToRefs } = useAILearningAnimations();
    return (
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
    );
  }
);

AiLearningCard.displayName = "AiLearningCard";
export default AiLearningCard;
