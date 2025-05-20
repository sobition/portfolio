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
                <div className="ml-4 text-gray-400 text-sm">
                  sobhan-aminnejad.dev
                </div>
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
                  Versatile and passionate Software Engineer with a strong focus
                  on front-end development and a broad interest in software
                  engineering as a whole. With extensive experience building
                  highly effective and user-friendly websites using JavaScript
                  frameworks like React and jQuery.
                </p>
                <p className="mb-4">
                  I consistently seek opportunities to make impactful
                  contributions that unblock business challenges—whether it's
                  writing APIs, implementing end-to-end tests with Java, or
                  exploring new technologies.
                </p>
                <p>
                  Always open to new challenges and eager to learn, I believe
                  that where there is trust and synergy within a team, my impact
                  improves significantly. My ability to foster collaboration and
                  communicate effectively with cross-functional teams ensures
                  the delivery of high-quality, scalable web solutions that
                  drive business success.
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
                      Senior Frontend Engineer at Catawiki
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
                          2024–2025:
                        </div>
                        <div>
                          Delivered +100 minutes of one-on-one ADPList
                          mentorship, guiding junior engineers in React,
                          performance tuning, and career development
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-[80px] text-[#4285f4] font-medium">
                          2024-Q3:
                        </div>
                        <div>
                          Reduced seller-facing build times by 70% (from 20 min
                          → 6 min) by migrating Ruby-templated front-end
                          components to a standalone Next.js architecture
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-[80px] text-[#a259ff] font-medium">
                          2021-Q2:
                        </div>
                        <div>
                          Led the "Bundle Discount" feature—applying total-price
                          discounts on item sets to promote new brands and clear
                          expiring stock—driving a 40% lift in average basket
                          value
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-[80px] text-[#25b6d2] font-medium">
                          2019–2020:
                        </div>
                        <div>
                          Migrated multiple legacy apps from vanilla JS & jQuery
                          to React / Next.js, improving maintainability and
                          accelerating developer velocity
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
