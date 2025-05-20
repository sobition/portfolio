"use client"

import { useState, useEffect } from "react"

interface IconProps {
  name: string
  className?: string
  size?: number
}

export default function Icon({ name, className = "", size = 24 }: IconProps) {
  const [color, setColor] = useState("currentColor")

  // Check if we're in the browser before accessing window
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get computed color of the element to pass to SVG
      const computedStyle = window.getComputedStyle(document.documentElement)
      const textColor = computedStyle.getPropertyValue("color")
      if (textColor) setColor(textColor)
    }
  }, [])

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <object
        data={`/images/icons/${name}.svg`}
        type="image/svg+xml"
        width={size}
        height={size}
        className="pointer-events-none"
        aria-label={name}
        style={{ color }}
      />
    </div>
  )
}
