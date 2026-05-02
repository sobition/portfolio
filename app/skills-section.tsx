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
  const languages = [
    { name: "JavaScript", color: "[#4285f4]" },
    { name: "TypeScript", color: "[#a259ff]" },
    { name: "SQL", color: "[#25b6d2]" },
    { name: "Ruby", color: "[#a259ff]" },
    { name: "HTML", color: "[#4285f4]" },
    { name: "CSS", color: "[#25b6d2]" },
  ];

  const webFrontend = [
    { name: "React", color: "[#4285f4]" },
    { name: "Next.js", color: "[#a259ff]" },
    { name: "Redux", color: "[#25b6d2]" },
    { name: "Tailwind CSS", color: "[#4285f4]" },
    { name: "Styled Components", color: "[#a259ff]" },
    { name: "SCSS", color: "[#4285f4]" },
  ];

  const mobile = [
    { name: "React Native", color: "[#4285f4]" },
    { name: "Expo", color: "[#a259ff]" },
    { name: "Tamagui", color: "[#25b6d2]" },
  ];

  const backendArchitecture = [
    { name: "NestJS", color: "[#4285f4]" },
    { name: "Node.js", color: "[#4285f4]" },
    { name: "CQRS", color: "[#a259ff]" },
    { name: "Prisma", color: "[#25b6d2]" },
    { name: "Ruby on Rails", color: "[#25b6d2]" },
    { name: "GraphQL", color: "[#a259ff]" },
    { name: "REST APIs", color: "[#4285f4]" },
  ];

  const dataPlatform = [
    { name: "PostgreSQL", color: "[#4285f4]" },
    { name: "Redis", color: "[#4285f4]" },
    { name: "Apollo", color: "[#a259ff]" },
    { name: "CI/CD", color: "[#25b6d2]" },
    { name: "Docker", color: "[#4285f4]" },
    { name: "Turborepo", color: "[#a259ff]" },
  ];

  const testing = [
    { name: "Jest", color: "[#4285f4]" },
    { name: "React Testing Library", color: "[#a259ff]" },
    { name: "Playwright", color: "[#25b6d2]" },
    { name: "Cypress", color: "[#4285f4]" },
  ];

  const tools = [
    { name: "Git", color: "[#4285f4]" },
    { name: "GitHub", color: "[#a259ff]" },
    { name: "VS Code", color: "[#25b6d2]" },
    { name: "Linear", color: "[#4285f4]" },
    { name: "Figma", color: "[#a259ff]" },
    { name: "Vercel", color: "[#25b6d2]" },
    { name: "Webpack", color: "[#25b6d2]" },
    { name: "Babel", color: "[#4285f4]" },
    { name: "npm", color: "[#a259ff]" },
    { name: "Yarn", color: "[#25b6d2]" },
  ];

  const productFocus = [
    { name: "Platform Migrations", color: "[#4285f4]" },
    { name: "Developer Experience", color: "[#a259ff]" },
    { name: "Performance", color: "[#25b6d2]" },
    { name: "API Integrations", color: "[#4285f4]" },
    { name: "Cross-Functional Delivery", color: "[#a259ff]" },
    { name: "AI-Assisted Delivery", color: "[#25b6d2]" },
  ];

  return (
    <section ref={ref} id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-5xl font-bold mb-4">Skills</h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            The stack is broad, but the pattern is consistent: frontend depth,
            backend range, and product delivery across the system.
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
                  <SkillCategory title="Web Frontend" skills={webFrontend} />
                  <SkillCategory title="Mobile" skills={mobile} />
                  <SkillCategory
                    title="Backend & Architecture"
                    skills={backendArchitecture}
                  />
                  <SkillCategory title="Data & Platform" skills={dataPlatform} />
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
                  <SkillCategory title="Product Focus" skills={productFocus} />
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
