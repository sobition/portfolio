"use client";

import React from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  name: string;
  color: string;
  className?: string;
}

function SkillTag({ name, color, className }: SkillTagProps) {
  return (
    <div
      className={cn(
        "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
        `bg-${color}/10 text-${color} border border-${color}/20`,
        className
      )}
    >
      {name}
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: { name: string; color: string }[];
  className?: string;
}

function SkillCategory({ title, skills, className }: SkillCategoryProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <AnimateOnScroll
            key={skill.name}
            animation="fade-up"
            delay={index * 30}
          >
            <SkillTag name={skill.name} color={skill.color} />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}

const SkillsSection = React.forwardRef<HTMLElement>((_, ref) => {
  // Programming Languages
  const languages = [
    { name: "JavaScript", color: "[#4285f4]" },
    { name: "TypeScript", color: "[#a259ff]" },
    { name: "HTML", color: "[#25b6d2]" },
    { name: "CSS", color: "[#4285f4]" },
    { name: "Ruby", color: "[#a259ff]" },
    { name: "SQL", color: "[#25b6d2]" },
  ];

  // Frontend Frameworks & Libraries
  const frontendFrameworks = [
    { name: "React", color: "[#4285f4]" },
    { name: "Next.js", color: "[#a259ff]" },
    { name: "Redux", color: "[#25b6d2]" },
    { name: "Tailwind CSS", color: "[#4285f4]" },
    { name: "Styled Components", color: "[#a259ff]" },
    { name: "Material UI", color: "[#25b6d2]" },
    { name: "SCSS", color: "[#4285f4]" },
  ];

  // Backend Technologies
  const backendTech = [
    { name: "Node.js", color: "[#4285f4]" },
    { name: "Express", color: "[#a259ff]" },
    { name: "Ruby on Rails", color: "[#25b6d2]" },
    { name: "REST APIs", color: "[#4285f4]" },
    { name: "GraphQL", color: "[#a259ff]" },
  ];

  // Databases
  const databases = [
    { name: "PostgreSQL", color: "[#4285f4]" },
    { name: "MongoDB", color: "[#a259ff]" },
    { name: "Firebase", color: "[#25b6d2]" },
    { name: "Redis", color: "[#4285f4]" },
  ];

  // Testing
  const testing = [
    { name: "Jest", color: "[#4285f4]" },
    { name: "React Testing Library", color: "[#a259ff]" },
    { name: "Playwright", color: "[#25b6d2]" },
    { name: "Cypress", color: "[#4285f4]" },
  ];

  // Tools
  const tools = [
    { name: "Git", color: "[#4285f4]" },
    { name: "GitHub", color: "[#a259ff]" },
    { name: "VS Code", color: "[#25b6d2]" },
    { name: "Docker", color: "[#4285f4]" },
    { name: "CI/CD", color: "[#a259ff]" },
    { name: "Webpack", color: "[#25b6d2]" },
    { name: "Babel", color: "[#4285f4]" },
    { name: "npm", color: "[#a259ff]" },
    { name: "Yarn", color: "[#25b6d2]" },
  ];

  // Design Tools
  const designTools = [
    { name: "Figma", color: "[#4285f4]" },
    { name: "Adobe XD", color: "[#a259ff]" },
    { name: "Sketch", color: "[#25b6d2]" },
    { name: "Photoshop", color: "[#4285f4]" },
  ];

  return (
    <section ref={ref} id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-5xl font-bold mb-4">Skills</h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            My technical skills and tools I use in my development workflow.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-[#0f1631] rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  Skills
                </h3>
                <div className="space-y-6">
                  <SkillCategory title="Languages" skills={languages} />
                  <SkillCategory title="Frontend" skills={frontendFrameworks} />
                  <SkillCategory title="Backend" skills={backendTech} />
                  <SkillCategory title="Databases" skills={databases} />
                  <SkillCategory title="Testing" skills={testing} />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="space-y-8">
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-[#0f1631] rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  Tools
                </h3>
                <div className="space-y-6">
                  <SkillCategory title="Development Tools" skills={tools} />
                  <SkillCategory title="Design Tools" skills={designTools} />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
