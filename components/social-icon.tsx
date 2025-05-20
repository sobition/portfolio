"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  name: "linkedin" | "github" | "facebook" | "instagram";
  className?: string;
  size?: number;
}

export default function SocialIcon({
  name,
  className = "",
  size = 24,
}: SocialIconProps) {
  return (
    <div
      className={cn("relative fill-current", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={`/images/icons/${name}.svg`}
        alt={name}
        width={size}
        height={size}
        className="text-current"
      />
    </div>
  );
}
