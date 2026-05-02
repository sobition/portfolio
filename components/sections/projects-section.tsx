import React from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";

const ProjectsSection = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-5xl font-bold mb-6">Projects</h2>
          <p className="text-gray-300 mb-16 max-w-2xl">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and solution.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <AnimateOnScroll animation="zoom-in" delay={100}>
            <div className="bg-[#0f1631] rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-[#4285f4] to-[#a259ff] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-l font-bold">
                    Project Image
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-l font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-300 mb-4">
                  A full-stack e-commerce platform built with React, Django, and
                  PostgreSQL.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#4285f4]/20 text-[#4285f4] px-2 py-1 rounded-full text-xs">
                    React
                  </span>
                  <span className="bg-[#25b6d2]/20 text-[#25b6d2] px-2 py-1 rounded-full text-xs">
                    Django
                  </span>
                  <span className="bg-[#a259ff]/20 text-[#a259ff] px-2 py-1 rounded-full text-xs">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4]/10"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#a259ff] text-[#a259ff] hover:bg-[#a259ff]/10"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Project 2 */}
          <AnimateOnScroll animation="zoom-in" delay={200}>
            <div className="bg-[#0f1631] rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-[#25b6d2] to-[#4285f4] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-l font-bold">
                    Project Image
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-l font-bold mb-2">AI Image Generator</h3>
                <p className="text-gray-300 mb-4">
                  An AI-powered image generation tool using OpenAI's DALL-E API.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#4285f4]/20 text-[#4285f4] px-2 py-1 rounded-full text-xs">
                    Next.js
                  </span>
                  <span className="bg-[#25b6d2]/20 text-[#25b6d2] px-2 py-1 rounded-full text-xs">
                    OpenAI API
                  </span>
                  <span className="bg-[#a259ff]/20 text-[#a259ff] px-2 py-1 rounded-full text-xs">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4]/10"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#a259ff] text-[#a259ff] hover:bg-[#a259ff]/10"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Project 3 */}
          <AnimateOnScroll animation="zoom-in" delay={300}>
            <div className="bg-[#0f1631] rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-[#a259ff] to-[#25b6d2] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-l font-bold">
                    Project Image
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-l font-bold mb-2">Task Management App</h3>
                <p className="text-gray-300 mb-4">
                  A collaborative task management application with real-time
                  updates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#4285f4]/20 text-[#4285f4] px-2 py-1 rounded-full text-xs">
                    React
                  </span>
                  <span className="bg-[#25b6d2]/20 text-[#25b6d2] px-2 py-1 rounded-full text-xs">
                    Firebase
                  </span>
                  <span className="bg-[#a259ff]/20 text-[#a259ff] px-2 py-1 rounded-full text-xs">
                    Material UI
                  </span>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4]/10"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#a259ff] text-[#a259ff] hover:bg-[#a259ff]/10"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
