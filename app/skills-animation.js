"use client"

// This script animates the skill bars when they come into view
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll(".bg-gradient-to-r")

          skillBars.forEach((bar) => {
            // Get the percentage from the text
            const percentText = bar.closest(".space-y-2").querySelector('[class*="text-[#"]').textContent
            const percent = percentText.replace("%", "")

            // Set the width as a CSS variable
            bar.style.setProperty("--skill-percent", `${percent}`)

            // Add the animation class
            bar.classList.add("animate-skill-bar")
          })

          // Unobserve after animation is triggered
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  // Observe the skills section
  const skillsSection = document.getElementById("skills")
  if (skillsSection) {
    observer.observe(skillsSection)
  }
})
