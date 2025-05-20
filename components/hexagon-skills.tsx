"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

interface Skill {
  name: string
  level: SkillLevel
  color: string
  category?: string
  description?: string
}

interface HexagonSkillsProps {
  skills: Skill[]
  className?: string
}

export function HexagonSkills({ skills, className }: HexagonSkillsProps) {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)

  // Get color class based on skill level
  const getColorClass = (color: string, level: SkillLevel) => {
    const baseColor = `${color}`

    switch (level) {
      case "Expert":
        return `from-${baseColor}/90 to-${baseColor}/70 border-${baseColor}`
      case "Advanced":
        return `from-${baseColor}/80 to-${baseColor}/60 border-${baseColor}/90`
      case "Intermediate":
        return `from-${baseColor}/70 to-${baseColor}/50 border-${baseColor}/80`
      case "Beginner":
        return `from-${baseColor}/60 to-${baseColor}/40 border-${baseColor}/70`
      default:
        return `from-${baseColor}/70 to-${baseColor}/50 border-${baseColor}/80`
    }
  }

  // Get size class based on skill level
  const getSizeClass = (level: SkillLevel) => {
    switch (level) {
      case "Expert":
        return "w-20 h-20 md:w-24 md:h-24"
      case "Advanced":
        return "w-18 h-18 md:w-22 md:h-22"
      case "Intermediate":
        return "w-16 h-16 md:w-20 md:h-20"
      case "Beginner":
        return "w-14 h-14 md:w-18 md:h-18"
      default:
        return "w-16 h-16 md:w-20 md:h-20"
    }
  }

  return (
    <div className={cn("relative", className)}>
      {/* Skill detail popup */}
      {activeSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveSkill(null)}
        >
          <div
            className="bg-[#0f1631] p-6 rounded-lg max-w-md w-full border border-gray-700 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br",
                  getColorClass(activeSkill.color, activeSkill.level),
                )}
              >
                <span className="text-white font-bold">{activeSkill.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{activeSkill.name}</h3>
                <p
                  className={cn(
                    "text-sm",
                    activeSkill.level === "Expert"
                      ? "text-[#4285f4]"
                      : activeSkill.level === "Advanced"
                        ? "text-[#a259ff]"
                        : activeSkill.level === "Intermediate"
                          ? "text-[#25b6d2]"
                          : "text-gray-400",
                  )}
                >
                  {activeSkill.level}
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-4">
              {activeSkill.description ||
                `${activeSkill.level} proficiency in ${activeSkill.name}, with extensive experience applying it in professional projects.`}
            </p>

            {activeSkill.category && (
              <div className="text-sm text-gray-400">
                Category: <span className="text-gray-300">{activeSkill.category}</span>
              </div>
            )}

            <button
              className="mt-6 w-full py-2 bg-[#0a0d1d] hover:bg-[#0a0d1d]/80 rounded-md text-white"
              onClick={() => setActiveSkill(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hexagon grid */}
      <div className="flex flex-wrap justify-center gap-1 md:gap-2">
        {skills.map((skill, index) => (
          <AnimateOnScroll key={skill.name} animation="zoom-in" delay={index * 30} className="relative">
            <button
              className={cn(
                "hexagon flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110",
                getSizeClass(skill.level),
              )}
              onClick={() => setActiveSkill(skill)}
            >
              <div className={cn("hexagon-inner bg-gradient-to-br border-2", getColorClass(skill.color, skill.level))}>
                <div className="hexagon-content flex flex-col items-center justify-center text-center p-1">
                  <span className="font-bold text-white text-xs md:text-sm">{skill.name}</span>
                  <span
                    className={cn(
                      "text-[10px] opacity-80",
                      skill.level === "Expert"
                        ? "text-white"
                        : skill.level === "Advanced"
                          ? "text-white/90"
                          : skill.level === "Intermediate"
                            ? "text-white/80"
                            : "text-white/70",
                    )}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            </button>
          </AnimateOnScroll>
        ))}
      </div>

      <style jsx>{`
        .hexagon {
          position: relative;
          display: inline-block;
        }
        
        .hexagon-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        .hexagon-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
