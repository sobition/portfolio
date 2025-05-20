"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip"
  | "rotate";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial styles
    const setStyles = (isVisible: boolean) => {
      element.style.transition = `transform ${duration}ms ease ${delay}ms, opacity ${duration}ms ease ${delay}ms`;

      if (!isVisible) {
        element.style.opacity = "0";

        switch (animation) {
          case "fade-up":
            element.style.transform = "translateY(40px)";
            break;
          case "fade-down":
            element.style.transform = "translateY(-40px)";
            break;
          case "fade-left":
            element.style.transform = "translateX(-40px)";
            break;
          case "fade-right":
            element.style.transform = "translateX(40px)";
            break;
          case "zoom-in":
            element.style.transform = "scale(0.9)";
            break;
          case "zoom-out":
            element.style.transform = "scale(1.1)";
            break;
          case "flip":
            element.style.transform = "perspective(400px) rotateY(90deg)";
            break;
          case "rotate":
            element.style.transform = "rotate(15deg)";
            break;
        }
      } else {
        element.style.opacity = "1";
        element.style.transform = "translate(0) rotate(0) scale(1)";
      }
    };

    // Initial setup - hide element
    setStyles(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStyles(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setStyles(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Slight delay to ensure styles are applied before observing
    setTimeout(() => {
      observer.observe(element);
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay, duration, rootMargin, threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: 0,
        transform:
          animation === "fade-up"
            ? "translateY(40px)"
            : animation === "fade-down"
            ? "translateY(-40px)"
            : animation === "fade-left"
            ? "translateX(-40px)"
            : animation === "fade-right"
            ? "translateX(40px)"
            : animation === "zoom-in"
            ? "scale(0.9)"
            : animation === "zoom-out"
            ? "scale(1.1)"
            : animation === "flip"
            ? "perspective(400px) rotateY(90deg)"
            : animation === "rotate"
            ? "rotate(15deg)"
            : "none",
      }}
    >
      {children}
    </div>
  );
}
