import BleYALogo from "./logo";

export const NavigationLogo = () => {
  return (
    <div
      className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
      data-testid="logo"
    >
      <BleYALogo className="w-8 h-8 sm:w-10 sm:h-10" />
      <span className="text-xl sm:text-2xl font-black text-[hsl(var(--text-beige))] hover:text-primary transition-colors duration-300">
        BleYA
      </span>
    </div>
  );
};
