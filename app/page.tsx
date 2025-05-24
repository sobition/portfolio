"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SkillsSection from "./skills-section";
import Header from "../components/header";
import { Inter } from "next/font/google";
import ExperienceSection from "@/components/experience-section";
// import ProjectsSection from "@/components/projects-section";
import CertificatesSection from "@/components/certificates-section";
import ContactSection from "@/components/contact-section";
import AboutMeSection from "@/components/about-me-section";
import HeroSection from "@/components/hero-section";

const cascadiacode = Inter({
  subsets: ["latin"],
  variable: "--font-cascadiacode",
  display: "swap",
});

export default function Portfolio() {
  const isMobile = typeof window !== "undefined" ? useIsMobile() : false;

  const isMobileBoolean = isMobile ?? false;

  // Refs for scroll sections
  const aboutRef = useRef<HTMLElement>(
    null
  ) as React.MutableRefObject<HTMLElement | null>;
  const experienceRef = useRef<HTMLElement>(
    null
  ) as React.MutableRefObject<HTMLElement | null>;
  // const projectsRef = useRef<HTMLElement>(
  //   null
  // ) as React.MutableRefObject<HTMLElement | null>;
  const certificatesRef = useRef<HTMLElement>(
    null
  ) as React.MutableRefObject<HTMLElement | null>;
  const skillsRef = useRef<HTMLElement>(
    null
  ) as React.MutableRefObject<HTMLElement | null>;
  const contactRef = useRef<HTMLElement>(
    null
  ) as React.MutableRefObject<HTMLElement | null>;

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Offset for header
        behavior: "smooth",
      });
    }
  };

  // Wrapping client-only logic in useEffect
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash === "#about") scrollToSection(aboutRef);
        if (hash === "#experience") scrollToSection(experienceRef);
        // if (hash === "#projects") scrollToSection(projectsRef);
        if (hash === "#certificates") scrollToSection(certificatesRef);
        if (hash === "#skills") scrollToSection(skillsRef);
        if (hash === "#contact") scrollToSection(contactRef);
      };

      // Check hash on initial load
      handleHashChange();

      // Add event listener for hash changes
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  return (
    <div
      className={`min-h-screen bg-[#0c1024] text-white ${cascadiacode.variable} flex flex-col`}
    >
      <Header
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        // projectsRef={projectsRef}
        certificatesRef={certificatesRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      <main className="flex-1 overflow-y-auto">
        {/* Hero/Jumbotron */}
        <HeroSection
          isMobile={isMobileBoolean}
          scrollToSection={scrollToSection}
          contactRef={contactRef}
        />

        {/* About Me Section */}
        <AboutMeSection ref={aboutRef} />

        <ExperienceSection ref={experienceRef} />

        {/* Projects Section */}
        {/* <ProjectsSection ref={projectsRef} /> */}

        {/* Certificates Section */}
        <CertificatesSection ref={certificatesRef} />

        {/* Skills Section */}
        <SkillsSection ref={skillsRef} />

        {/* Contact Section */}
        <ContactSection ref={contactRef} />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
