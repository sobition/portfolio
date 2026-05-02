import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Mail, Phone, Server, Smartphone } from "lucide-react";
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
  const focusAreas = [
    {
      icon: Smartphone,
      title: "Frontend depth",
      body: "React, React Native, Next.js, and product-facing user experience.",
      accent: "text-[#4285f4]",
    },
    {
      icon: Server,
      title: "Backend range",
      body: "APIs, business logic, shared systems, and platform-aware delivery.",
      accent: "text-[#a259ff]",
    },
    {
      icon: Bot,
      title: "AI-native workflow",
      body: "Agents, model selection, and task orchestration used to ship faster.",
      accent: "text-[#25b6d2]",
    },
  ];

  return (
    <section className="container mx-auto px-4 pt-36 pb-16 md:py-32">
      <div className="flex flex-col items-center md:flex-row">
        {isMobile && (
          <AnimateOnScroll
            animation="fade-up"
            delay={300}
            className="relative mb-12 w-full"
          >
            <div className="absolute top-0 right-0 h-[80%] w-[80%] rounded-full bg-[#a259ff]/80 blur-3xl opacity-30"></div>
            <div className="relative z-10">
              <div className="relative mx-auto max-w-[280px]">
                <div className="absolute -z-10 top-0 left-0 right-0 bottom-0">
                  <div className="absolute top-[-10%] right-[-5%] h-32 w-32 animate-[spin_20s_linear_infinite] rounded-full border-2 border-dashed border-[#4285f4]/30"></div>
                  <div className="absolute bottom-[-5%] left-[-10%] h-24 w-24 animate-[spin_15s_linear_infinite_reverse] rounded-full border-2 border-dashed border-[#a259ff]/30"></div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4285f4]/20 via-[#a259ff]/20 to-[#25b6d2]/20 blur-md"></div>
                  <div className="relative overflow-hidden rounded-full border-4 border-white/10 shadow-xl shadow-[#4285f4]/10">
                    <div className="relative aspect-square">
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

                  <div
                    className="absolute -right-4 top-10 cursor-pointer rounded-full border border-[#25b6d2]/30 bg-[#25b6d2]/10 px-4 py-2 shadow-lg transition-colors hover:bg-[#25b6d2]/20"
                    onClick={() => scrollToSection(contactRef)}
                  >
                    <span className="text-sm font-medium text-[#25b6d2]">
                      Let&apos;s talk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        )}

        <AnimateOnScroll animation="fade-right" className="space-y-6 md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Sobhan Aminnejad
          </h1>

          <p className="max-w-2xl text-xl text-[#4285f4] md:text-2xl">
            Product engineer across frontend and backend systems.
          </p>

          <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
            I build end-to-end product systems with strong frontend execution,
            credible backend contribution, and AI-native delivery workflows. My
            core stack is React, React Native, TypeScript, and Node-based
            platforms, but the value I bring is moving product work across the
            full system.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/Sobhan%20Aminnejad%20-%20CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
            >
              <Button
                className="bg-[#4285f4] px-8 py-6 text-white hover:bg-[#3b77db]"
                asChild
              >
                <span>Download CV</span>
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-[#25b6d2] px-8 py-6 text-[#25b6d2] hover:bg-[#25b6d2]/10"
              onClick={() => scrollToSection(contactRef)}
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-4 pt-2">
            <Link
              href="https://linkedin.com/in/sobhan-aminnejad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-[#4285f4]"
            >
              <LinkedinIcon name="linkedin" size={24} />
            </Link>
            <Link
              href="https://github.com/sobition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-[#4285f4]"
            >
              <GithubIcon name="github" size={24} />
            </Link>
            <Link
              href="mailto:sobition@gmail.com"
              className="text-gray-400 transition-colors hover:text-[#4285f4]"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="tel:+31684093339"
              className="text-gray-400 transition-colors hover:text-[#4285f4]"
            >
              <Phone className="h-6 w-6" />
            </Link>
          </div>
        </AnimateOnScroll>

        {!isMobile && (
          <AnimateOnScroll
            animation="fade-left"
            delay={300}
            className="relative mt-12 md:mt-0 md:w-1/2"
          >
            <div className="absolute top-0 right-0 h-[80%] w-[80%] rounded-full bg-[#a259ff]/80 blur-3xl opacity-30"></div>
            <div className="relative z-10">
              <div className="relative mx-auto max-w-md md:mx-0">
                <div className="absolute -z-10 top-0 left-0 right-0 bottom-0">
                  <div className="absolute top-[-10%] right-[-5%] h-32 w-32 animate-[spin_20s_linear_infinite] rounded-full border-2 border-dashed border-[#4285f4]/30"></div>
                  <div className="absolute bottom-[-5%] left-[-10%] h-24 w-24 animate-[spin_15s_linear_infinite_reverse] rounded-full border-2 border-dashed border-[#a259ff]/30"></div>
                  <svg
                    className="absolute top-[-10%] right-[-15%] h-40 w-40 rotate-12 text-[#4285f4]/20"
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

                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4285f4]/20 via-[#a259ff]/20 to-[#25b6d2]/20 blur-md"></div>
                  <div className="relative overflow-hidden rounded-full border-4 border-white/10 shadow-xl shadow-[#4285f4]/10">
                    <div className="relative aspect-square">
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

                  <svg
                    className="absolute -right-8 top-1/4 h-32 w-32 text-[#25b6d2]"
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

                  <div
                    className="absolute -right-4 top-10 cursor-pointer rounded-full border border-[#25b6d2]/30 bg-[#25b6d2]/10 px-4 py-2 shadow-lg transition-colors hover:bg-[#25b6d2]/20"
                    onClick={() => scrollToSection(contactRef)}
                  >
                    <span className="text-sm font-medium text-[#25b6d2]">
                      Let&apos;s talk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        )}
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {focusAreas.map((area, index) => {
          const Icon = area.icon;

          return (
            <AnimateOnScroll
              key={area.title}
              animation="fade-up"
              delay={150 + index * 100}
            >
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Icon className={`h-5 w-5 ${area.accent}`} />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {area.body}
                </p>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;
