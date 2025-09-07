"use client";

import { NavigationLocationTime } from "./NavigationTimeLocation";
import { SocialLinks } from "./SocialLinks";

interface NavigationMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  currentTime: string;
}

const menuItems = ["Home", "About", "Services", "Portfolio", "Contact"];

export function NavigationMenu({
  isOpen,
  toggleMenu,
  currentTime,
}: NavigationMenuProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm md:w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="p-6 sm:p-8 pt-20 sm:pt-24">
        <nav className="space-y-4 sm:space-y-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-xl sm:text-2xl font-semibold text-gray-800 hover:text-primary transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <NavigationLocationTime currentTime={currentTime} />
        <SocialLinks />
      </div>
    </div>
  );
}
