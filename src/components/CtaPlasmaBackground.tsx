import Plasma from "./plasma";

export const CTAPlasmaBackgroundSection = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/70 to-transparent z-20 pointer-events-none"></div>

      <div className="absolute inset-0 w-full h-full top-10 md:top-[15vh] lg:top-[5vh] z-0">
        <div style={{ width: "100%", height: "800px", position: "relative" }}>
          <Plasma rotateOnHover={true} hue={1} forceHoverState={false} />
        </div>
      </div>
    </>
  );
};
