export const HeroStatusInfoSection = () => {
  return (
    <>
      <div
        className="status-info absolute bottom-12 sm:bottom-16 right-4 sm:right-6 md:right-8 text-right text-xs sm:text-sm font-light text-[hsl(var(--text-beige))]/70"
        data-testid="status-info"
      >
        <div className="mb-1 sm:mb-2">
          <span className="block sm:inline">knowledge is infinite,</span>
          <span className="block sm:inline"> keep going!</span>
        </div>
        <div className="text-xs text-secondary">
          <div className="block sm:inline">
            <span>& Raziel - Bleya </span>
          </div>
          <div className="block sm:inline">
            <span className="text-primary hover:text-secondary transition-colors duration-300 cursor-pointer">
              Projeto Open Source
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
