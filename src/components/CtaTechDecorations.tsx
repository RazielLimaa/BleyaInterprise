export const CTATechDecorationsSection = () => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="absolute top-12 left-12">
          <div className="w-8 h-px bg-white/30"></div>
          <div className="w-px h-8 bg-white/30"></div>
        </div>
        <div className="absolute top-12 right-12">
          <div className="w-8 h-px bg-white/30 ml-auto"></div>
          <div className="w-px h-8 bg-white/30 ml-auto"></div>
        </div>
        <div className="absolute bottom-12 left-12">
          <div className="w-px h-8 bg-white/30"></div>
          <div className="w-8 h-px bg-white/30"></div>
        </div>
        <div className="absolute bottom-12 right-12">
          <div className="w-px h-8 bg-white/30 ml-auto"></div>
          <div className="w-8 h-px bg-white/30 ml-auto"></div>
        </div>

        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-white/40 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 border border-white/20"></div>
        <div className="absolute top-2/3 left-1/3 w-px h-4 bg-white/30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-px bg-white/30"></div>
      </div>
    </>
  );
};
