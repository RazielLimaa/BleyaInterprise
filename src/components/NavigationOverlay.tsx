import React, { MouseEventHandler } from "react";

interface NavigationOverlayProps {
  isMenuOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLDivElement>;
}

export const NavigationOverlay: React.FC<NavigationOverlayProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black/20 backdrop-blur-md z-40 transition-all duration-500 ease-out  ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={toggleMenu}
    />
  );
};
