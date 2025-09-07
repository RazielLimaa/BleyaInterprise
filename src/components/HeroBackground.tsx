import Noise from "./noise";

export const HeroBackgroundSection = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/70 to-transparent z-30 pointer-events-none"></div>
      <div className="bg-black/30 fixed inset-0 w-full h-[-20vh] top-10 md:top-[-255vh] lg:top-[-50vh] z-0 backdrop-blur-md pointer-events-none"></div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
    </>
  );
};
