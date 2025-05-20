import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";

interface HeroSectionProps {
  isMobile: boolean;
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  contactRef: React.RefObject<HTMLElement | null>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  isMobile,
  scrollToSection,
  contactRef,
}) => {
  return (
    <section className="container mx-auto px-4 pt-36 pb-16 md:py-32 flex flex-col md:flex-row items-center">
      {/* Profile Image - Comes first on mobile */}
      {isMobile && (
        <AnimateOnScroll
          animation="fade-up"
          delay={300}
          className="w-full mb-12 relative"
        >
          <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#a259ff]/80 rounded-full blur-3xl opacity-30"></div>
          <div className="relative z-10">
            <div className="relative max-w-[280px] mx-auto">
              {/* Decorative elements */}
              <div className="absolute -z-10 top-0 left-0 right-0 bottom-0">
                <div className="absolute top-[-10%] right-[-5%] w-32 h-32 rounded-full border-2 border-dashed border-[#4285f4]/30 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute bottom-[-5%] left-[-10%] w-24 h-24 rounded-full border-2 border-dashed border-[#a259ff]/30 animate-[spin_15s_linear_infinite_reverse]"></div>
              </div>

              {/* Main image with creative frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4285f4]/20 via-[#a259ff]/20 to-[#25b6d2]/20 rounded-full blur-md"></div>
                <div className="relative overflow-hidden rounded-full border-4 border-white/10 shadow-xl shadow-[#4285f4]/10">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/sobhan.png"
                      alt="Sobhan Aminnejad"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* "Let's Talk" badge */}
                <div
                  className="absolute -right-4 top-10 bg-[#25b6d2]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#25b6d2]/30 shadow-lg transform rotate-12 cursor-pointer hover:bg-[#25b6d2]/20 transition-colors"
                  onClick={() => scrollToSection(contactRef)}
                >
                  <span className="text-[#25b6d2] text-sm font-medium">
                    Let's Talk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      )}

      {/* Text Content */}
      <AnimateOnScroll animation="fade-right" className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I am <br />
          <span className="text-[#4285f4]">Sobhan Aminnejad</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-md">
          Senior Frontend Engineer specializing in building highly effective and
          user-friendly websites using JavaScript frameworks like React and
          Next.js.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button className="bg-[#4285f4] hover:bg-[#3b77db] text-white px-8 py-6">
            Download CV
          </Button>
          <Button
            variant="outline"
            className="border-[#25b6d2] text-[#25b6d2] hover:bg-[#25b6d2]/10 px-8 py-6"
            onClick={() => scrollToSection(contactRef)}
          >
            Get in touch
          </Button>
        </div>

        <div className="flex gap-4 pt-2">
          <Link
            href="https://linkedin.com/in/sobhan-aminnejad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#4285f4] transition-colors"
          >
            <LinkedinIcon name="linkedin" size={24} />
          </Link>
          <Link
            href="https://github.com/sobition"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#4285f4] transition-colors"
          >
            <GithubIcon name="github" size={24} />
          </Link>
          <Link
            href="mailto:sobition@gmail.com"
            className="text-gray-400 hover:text-[#4285f4] transition-colors"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link
            href="tel:+31684093339"
            className="text-gray-400 hover:text-[#4285f4] transition-colors"
          >
            <Phone className="w-6 h-6" />
          </Link>
        </div>
      </AnimateOnScroll>

      {/* Profile Image - Only on desktop */}
      {!isMobile && (
        <AnimateOnScroll
          animation="fade-left"
          delay={300}
          className="md:w-1/2 mt-12 md:mt-0 relative"
        >
          <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#a259ff]/80 rounded-full blur-3xl opacity-30"></div>
          <div className="relative z-10">
            <div className="relative max-w-md mx-auto md:mx-0">
              {/* Decorative elements */}
              <div className="absolute -z-10 top-0 left-0 right-0 bottom-0">
                <div className="absolute top-[-10%] right-[-5%] w-32 h-32 rounded-full border-2 border-dashed border-[#4285f4]/30 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute bottom-[-5%] left-[-10%] w-24 h-24 rounded-full border-2 border-dashed border-[#a259ff]/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                <svg
                  className="absolute top-[-10%] right-[-15%] text-[#4285f4]/20 w-40 h-40 rotate-12"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M70 30C70 41.0457 61.0457 50 50 50C38.9543 50 30 41.0457 30 30C30 18.9543 38.9543 10 50 10C61.0457 10 70 18.9543 70 30Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Main image with creative frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4285f4]/20 via-[#a259ff]/20 to-[#25b6d2]/20 rounded-full blur-md"></div>
                <div className="relative overflow-hidden rounded-full border-4 border-white/10 shadow-xl shadow-[#4285f4]/10">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/sobhan.png"
                      alt="Sobhan Aminnejad"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Decorative curved line */}
                <svg
                  className="absolute -right-8 top-1/4 w-32 h-32 text-[#25b6d2]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20,50 Q50,20 80,50 T20,50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

                {/* "Let's Talk" badge */}
                <div
                  className="absolute -right-4 top-10 bg-[#25b6d2]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#25b6d2]/30 shadow-lg transform rotate-12 cursor-pointer hover:bg-[#25b6d2]/20 transition-colors"
                  onClick={() => scrollToSection(contactRef)}
                >
                  <span className="text-[#25b6d2] text-sm font-medium">
                    Let's Talk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      )}
    </section>
  );
};

export default HeroSection;
