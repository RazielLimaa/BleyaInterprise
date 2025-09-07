"use client";

import { useNavigation } from "@/hooks/useNavigation";
import { HamburguerButton } from "./HamburguerButton";
import { NavigationLocationTime } from "./NavigationTimeLocation";
import { NavigationLogo } from "./NavigationLogo";
import { NavigationOverlay } from "./NavigationOverlay";
import { NavigationMenu } from "./NavigationMenu";

export default function Navigation() {
  const { currentTime, isMenuOpen, toggleMenu } = useNavigation();

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[9999] p-4 sm:p-6 lg:p-8"
        data-testid="navigation"
      >
        <div className="flex justify-between items-center">
          <NavigationLogo />
          <NavigationLocationTime currentTime={currentTime} />
          <HamburguerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>

      <NavigationOverlay isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <NavigationMenu
        currentTime={currentTime}
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </>
  );
}
