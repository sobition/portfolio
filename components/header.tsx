import React from "react";
import Link from "next/link";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  aboutRef: React.RefObject<HTMLElement | null>;
  experienceRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  skillsRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  aboutRef,
  experienceRef,
  projectsRef,
  skillsRef,
  contactRef,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-t from-transparent to-[#0c1024] backdrop-blur-sm">
      <div className="container mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-3xl font-bold mb-4 sm:mb-0">
          <span className="text-[#4285f4]">Sobhan</span>
          <span className="text-[#a259ff]">.dev</span>
        </Link>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 text-gray-200">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(experienceRef)}
            className="hover:text-white transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="hover:text-white transition-colors"
          >
            Selected work
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="hover:text-white transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
