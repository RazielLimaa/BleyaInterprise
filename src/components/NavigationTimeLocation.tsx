import React from "react";

interface NavigationLocationTimeProps {
  currentTime: string;
}

export const NavigationLocationTime: React.FC<NavigationLocationTimeProps> = ({
  currentTime,
}) => {
  return (
    <div
      className="time-location text-xs sm:text-sm font-light text-[hsl(var(--text-beige))]/70 hidden sm:block"
      data-testid="time-location"
    >
      <div className="flex items-center space-x-2 sm:space-x-4">
        <span data-testid="current-time" className="whitespace-nowrap">
          {currentTime}
        </span>
        <span>•</span>
        <span data-testid="location" className="whitespace-nowrap">
          Japan, Shibuya
        </span>
      </div>
    </div>
  );
};
