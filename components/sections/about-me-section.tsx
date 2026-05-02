import React from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const AboutMeSection = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-5xl font-bold mb-16">About me</h2>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <AnimateOnScroll animation="fade-right" className="lg:w-1/2">
            <div className="bg-[#0f1631] rounded-lg p-8 relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-400 text-sm">sobition.dev</div>
              </div>

              <div
                className="flex items-center gap-2 mb-6"
                style={{ fontFamily: "Cascadia Code, monospace" }}
              >
                <div className="text-yellow-400">✦</div>
                <div>
                  <span className="text-[#1ACB01]">sobition</span>{" "}
                  <span className="text-[#4E4E4E]">at</span>{" "}
                  <span className="text-[#FF0]">portfolio</span>
                  <span className="text-[#4E4E4E]"> :</span>
                </div>
              </div>

              <div className="text-gray-200 leading-relaxed">
                <p className="mb-4">
                  Product-minded software engineer with 8+ years of experience
                  building customer-facing products across web, backend, and
                  mobile. I work comfortably across React, Next.js, React
                  Native, Expo, NestJS, and platform architecture when the
                  product needs it.
                </p>
                <p className="mb-4">
                  My strongest work usually sits at the intersection of product
                  delivery and engineering foundations: platform migrations,
                  shared systems, performance work, APIs, developer experience,
                  and pragmatic architecture that helps teams ship faster.
                </p>
                <p>
                  I care about clear ownership, cross-functional collaboration,
                  and building systems that stay useful after launch. Whether
                  the problem is a React migration, a backend integration, or a
                  new React Native flow, I aim to keep momentum high without
                  sacrificing quality.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="lg:w-1/2 relative">
            {/* New connected sections with visual elements */}
            <div className="relative space-y-6">
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="bg-[#0f1631] p-6 rounded-lg relative overflow-hidden group hover:bg-[#0f1631]/80 transition-colors">
                  {/* Accent border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4285f4]"></div>
                  {/* Hover effect */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#4285f4]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative">
                    <h3 className="text-l font-semibold mb-2 flex items-center">
                      <span className="text-[#4285f4] mr-2">🎓</span> Education
                    </h3>
                    <p className="text-gray-300">B. Engineering in Computer</p>
                    <p className="text-gray-400">
                      University of Science and Culture, Tehran, Iran • 2019
                    </p>
                    <p className="text-gray-300 mt-2">
                      B. Engineering in Computer
                    </p>
                    <p className="text-gray-400">
                      University of Pretoria, Pretoria, South Africa • 2016
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={200}>
                <div className="bg-[#0f1631] p-6 rounded-lg relative overflow-hidden group hover:bg-[#0f1631]/80 transition-colors">
                  {/* Accent border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#a259ff]"></div>
                  {/* Hover effect */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#a259ff]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative">
                    <h3 className="text-l font-semibold mb-2 flex items-center">
                      <span className="text-[#a259ff] mr-2">📍</span> Location
                    </h3>
                    <p className="text-gray-300">Haarlem, The Netherlands</p>
                    <p className="text-gray-400">
                      Product Engineer at Catawiki
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={300}>
                <div className="bg-[#0f1631] p-6 rounded-lg relative overflow-hidden group hover:bg-[#0f1631]/80 transition-colors">
                  {/* Accent border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#25b6d2]"></div>
                  {/* Hover effect */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#25b6d2]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative">
                    <h3 className="text-l font-semibold mb-2 flex items-center">
                      <span className="text-[#25b6d2] mr-2">🏆</span> Key
                      Achievements
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <div className="min-w-[80px] text-[#4285f4] font-medium">
                          2024–Now:
                        </div>
                        <div>
                          Reduced 15M+ weekly API calls at Catawiki by leading a
                          shared layout migration and consolidating API-driven
                          form specifications into reusable packages
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-[80px] text-[#4285f4] font-medium">
                          2024:
                        </div>
                        <div>
                          Expanded impact beyond frontend through backend API
                          contributions, AI-assisted workflows, and development
                          experience leadership within the Frontend guild
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-[80px] text-[#a259ff] font-medium">
                          2025:
                        </div>
                        <div>
                          Building Aimee, an AI-powered travel app with React
                          Native, Expo, GraphQL, NestJS, Prisma, and Tamagui
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-[80px] text-[#a259ff] font-medium">
                          2023–2024:
                        </div>
                        <div>
                          Cut seller-facing build times by 70% by migrating
                          frontend flows from Ruby templates to a standalone
                          Next.js repository and improving CI/CD workflows
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutMeSection.displayName = "AboutMeSection";

export default AboutMeSection;
