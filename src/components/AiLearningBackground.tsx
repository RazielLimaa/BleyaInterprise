export const AILearningBackgroundSection = () => {
  return (
    <>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-pulse glitch-line"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent animate-pulse delay-1000 glitch-line"></div>
        <div className="absolute bottom-1/4 left-1/2 w-px h-24 bg-gradient-to-b from-transparent via-amber-500/60 to-transparent animate-pulse delay-2000 glitch-line"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-red-500/80 to-transparent animate-pulse delay-500 glitch-line"></div>
        <div className="absolute bottom-1/3 left-1/3 w-px h-16 bg-gradient-to-b from-transparent via-cyan-500/80 to-transparent animate-pulse delay-1500 glitch-line"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent h-3 animate-pulse opacity-50 glitch-scanner"
          style={{
            animation: "glitch-scan-chaos 2s linear infinite",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/15 to-transparent w-2 opacity-40 glitch-scanner-horizontal"
          style={{
            animation: "glitch-scan-horizontal 3.5s linear infinite reverse",
          }}
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
    </>
  );
};
