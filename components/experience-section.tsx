import React, { useState } from "react";
import { AnimateOnScroll } from "./animate-on-scroll";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { experiences } from "@/data/experiences";

const ExperienceSection: React.FC = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(
    null
  );
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section id="experience" className="py-20 bg-[#0a0d1d]">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-5xl font-bold mb-6">Experience</h2>
          <p className="text-gray-300 mb-16 max-w-2xl">
            My professional journey through various companies and roles in the
            tech industry.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4285f4] via-[#a259ff] to-[#25b6d2] transform md:translate-x-[-0.5px]"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-16 last:mb-0 ${
                isMobile
                  ? "ml-8"
                  : index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:pl-12 ml-8 md:ml-auto"
              } ${!isMobile ? "md:w-1/2" : ""}`}
            >
              <AnimateOnScroll
                animation={
                  isMobile
                    ? "fade-up"
                    : index % 2 === 0
                    ? "fade-right"
                    : "fade-left"
                }
                delay={index * 100}
                className="relative"
              >
                {/* Company Logo or Briefcase Icon */}
                {(() => {
                  // Import here to avoid SSR issues
                  // eslint-disable-next-line @typescript-eslint/no-var-requires
                  const { CompanyLogo } = require("./company-logo");
                  const logoExists = [
                    "Catawiki",
                    "SnappMarket",
                    "Shab",
                  ].includes(exp.company);
                  const positionClass = isMobile
                    ? "left-0"
                    : index % 2 === 0
                    ? "right-0 md:-right-4"
                    : "-left-12 md:-left-4";
                  if (logoExists) {
                    return (
                      <div
                        className={`absolute top-0 ${positionClass} w-8 h-8 z-10 flex items-center justify-center`}
                      >
                        <CompanyLogo
                          company={exp.company}
                          size={28}
                          className="shadow-lg"
                        />
                      </div>
                    );
                  }
                  return (
                    <div
                      className={`absolute top-0 ${positionClass} w-8 h-8 bg-[#0f1631] border-4 border-[#4285f4] rounded-full z-10 flex items-center justify-center`}
                    >
                      <Briefcase className="w-3 h-3 text-[#4285f4]" />
                    </div>
                  );
                })()}

                <div
                  className={`bg-[#0f1631] rounded-lg p-6 shadow-lg hover:shadow-[#4285f4]/10 transition-all duration-300 min-h-[480] ${
                    activeTimelineItem === exp.id
                      ? "scale-105 border border-[#4285f4]/30"
                      : ""
                  }`}
                  onMouseEnter={() => setActiveTimelineItem(exp.id)}
                  onMouseLeave={() => setActiveTimelineItem(null)}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-l font-bold">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-gray-300 mt-1 text-md">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#4285f4] hover:underline text-md"
                        >
                          {exp.company} <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <Tabs defaultValue="achievements" className="w-full">
                    <TabsList
                      className={`grid ${
                        exp.screenshots && exp.screenshots.length > 0
                          ? "grid-cols-3"
                          : "grid-cols-2"
                      } mb-4`}
                    >
                      <TabsTrigger value="achievements">
                        Achievements
                      </TabsTrigger>
                      <TabsTrigger value="technologies">
                        Technologies
                      </TabsTrigger>
                      {exp.screenshots && exp.screenshots.length > 0 && (
                        <TabsTrigger value="screenshots">
                          Screenshots
                        </TabsTrigger>
                      )}
                    </TabsList>
                    <TabsContent value="achievements" className="mt-0">
                      <ul className="space-y-2 text-gray-300 list-disc ml-5 text-left">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="technologies" className="mt-0">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-[#4285f4]/10 text-[#4285f4] border-[#4285f4]/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                    {exp.screenshots && exp.screenshots.length > 0 && (
                      <TabsContent value="screenshots" className="mt-0">
                        <ScreenshotGallery
                          screenshots={exp.screenshots}
                          companyName={exp.company}
                        />
                      </TabsContent>
                    )}
                  </Tabs>
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
