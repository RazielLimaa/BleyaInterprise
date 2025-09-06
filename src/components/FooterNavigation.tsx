import { RefObject } from "react";

interface FooterNavigationProps {
  navLinksRef: RefObject<HTMLDivElement>;
}

export const FooterNavigationSection: React.FC<FooterNavigationProps> = ({
  navLinksRef,
}) => {
  return (
    <div>
      <h3 className="text-orange-300 text-sm font-medium mb-6 tracking-wider">
        Navigation
      </h3>
      <nav ref={navLinksRef} className="space-y-3">
        {["Home", "Work", "About", "Careers", "Systems", "Contact"].map(
          (item, index) => (
            <a
              key={item}
              href="#"
              className="block text-orange-500 text-3xl lg:text-4xl font-bold transition-all duration-300 hover:text-orange-300 nav-link"
            >
              {item}
            </a>
          )
        )}
      </nav>
    </div>
  );
};
