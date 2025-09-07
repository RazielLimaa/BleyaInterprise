import BleYALogo from "./ble-ya-logo";
import Noise from "./noise";

export const HeroTitleSection = () => {
  return (
    <>
      <div className="text-center relative z-10 max-w-7xl px-4">
        <h1
          className="hero-text text-shadow-glow leading-none tracking-tight"
          data-testid="hero-title"
        >
          <div className="hero-title-line-1">
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
              <span className="block text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                B L E Y A
              </span>
              <BleYALogo className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24" />
            </div>
          </div>
          <div className="hero-title-line-2 mt-2 sm:mt-4">
            <span className="block text-[hsl(var(--text-beige))]/80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
              ブレヤ
            </span>
          </div>
        </h1>
      </div>
    </>
  );
};
