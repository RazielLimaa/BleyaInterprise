import { useNavigation } from "@/hooks/useNavigation";
import React, { MouseEventHandler } from "react";

interface HamburguerButtonProps {
  isMenuOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
}
export const HamburguerButton: React.FC<HamburguerButtonProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <>
      <button
        className={`group inline-flex w-10 h-10 sm:w-12 sm:h-12 text-center items-center justify-center rounded transition-all duration-300 hover:scale-105 z-[80] relative ${
          isMenuOpen ? "text-gray-800 bg-white/90" : "text-white"
        }`}
        aria-pressed={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current pointer-events-none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={`origin-center transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.1)] drop-shadow-sm ${
              isMenuOpen
                ? "translate-x-0 translate-y-0 rotate-[315deg]"
                : "-translate-y-[5px] translate-x-[7px]"
            }`}
            y="7"
            width="9"
            height="2"
            rx="1"
          />
          <rect
            className={`origin-center transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] drop-shadow-sm ${
              isMenuOpen ? "rotate-45 opacity-100" : "rotate-0 opacity-100"
            }`}
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className={`origin-center transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.1)] drop-shadow-sm ${
              isMenuOpen ? "translate-y-0 rotate-[135deg]" : "translate-y-[5px]"
            }`}
            y="7"
            width="9"
            height="2"
            rx="1"
          />
        </svg>
      </button>
    </>
  );
};
