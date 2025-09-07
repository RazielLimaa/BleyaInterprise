import { ChevronDown } from "lucide-react";

export const HeroScrollIndicatorSection = () => {
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
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
    </>
  );
};
