import { RefObject } from "react";

interface AiLearningCTAProps {}

export const AILearningCTASection: React.FC<AiLearningCTAProps> = () => {
  return (
    <div className="text-center mt-16 sm:mt-20 lg:mt-24 relative">
      <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600/10 to-amber-600/10 rounded-full border border-white/10 hover:border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-600/15 hover:to-amber-600/15 transition-all duration-300 backdrop-blur-sm hover:scale-105 cursor-pointer group glitch-cta">
        <span className="text-sm sm:text-base text-white font-medium text-center px-2 group-hover:text-white/95 transition-all duration-300">
          Pronto para experimentar o futuro da educação?
        </span>
        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse group-hover:shadow-md group-hover:shadow-orange-500/40 group-hover:scale-110 transition-all duration-300 glitch-dot" />
      </div>
    </div>
  );
};
