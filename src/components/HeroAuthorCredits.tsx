import Noise from "./noise";

export const HeroAuthorCreditSection = () => {
  return (
    <>
      <div
        className="author-credit absolute top-20 sm:top-24 md:top-32 left-4 sm:left-6 md:left-8 text-sm sm:text-base md:text-lg font-light text-secondary tracking-wider uppercase z-20"
        data-testid="author-credit"
      >
        <div className="hidden sm:block">
          BLEYA VISION -{" "}
          <span className="bg-gradient-to-tr from-orange-600 to-white bg-clip-text text-transparent">
            勉強するときに安心する
          </span>
        </div>
        <div className="block sm:hidden">
          <div>BLEYA VISION</div>
          <div className="bg-gradient-to-tr from-orange-600 to-white bg-clip-text text-transparent text-xs mt-1">
            勉強するときに安心する
          </div>
        </div>
      </div>
    </>
  );
};
