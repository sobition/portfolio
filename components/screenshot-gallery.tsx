"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "./icon";
import { cn } from "@/lib/utils";

interface ScreenshotGalleryProps {
  screenshots: {
    url: string;
    title: string;
    description?: string;
    type?: "image" | "gif";
  }[];
  companyName: string;
}

export function ScreenshotGallery({
  screenshots,
  companyName,
}: ScreenshotGalleryProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="space-y-4" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Grid view */}
      <div className="grid grid-cols-2 gap-3">
        {screenshots.slice(0, 4).map((screenshot, index) => (
          <div
            key={index}
            className={cn(
              "relative group rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-800",
              screenshots.length === 1 ? "col-span-2 row-span-2" : "",
              screenshots.length === 3 && index === 0 ? "col-span-2" : ""
            )}
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-video bg-[#EAEAEA]">
              <Image
                src={screenshot.url || "/placeholder.svg"}
                alt={`${companyName} - ${screenshot.title}`}
                fill
                className="object-contain"
                unoptimized={screenshot.type === "gif"}
              />
              {screenshot.type === "gif" && (
                <div className="absolute top-2 right-2 bg-[#4285f4] text-white text-xs px-2 py-1 rounded-full font-semibold">
                  GIF
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="external-link" size={32} className="text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="text-white text-sm font-medium truncate">
                {screenshot.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show "View All" button if more than 4 items */}
      {screenshots.length > 4 && (
        <div className="text-center">
          <Button
            variant="outline"
            size="sm"
            className="border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4]/10"
            onClick={() => setOpen(true)}
          >
            View All ({screenshots.length}) Media
          </Button>
        </div>
      )}

      {/* Lightbox/Modal */}
      <Dialog
        open={open}
        onOpenChange={(newOpen) => {
          setOpen(newOpen);
        }}
      >
        <DialogContent className="max-w-5xl w-[90vw] h-[80vh] p-0 bg-[#0a0d1d] border-gray-800">
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <DialogTitle className="text-lg font-semibold">
                {companyName} - {screenshots[activeIndex]?.title}
              </DialogTitle>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  &times;
                </Button>
              </DialogClose>
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-[#10172a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={
                    screenshots[activeIndex]?.url ||
                    "/placeholder.svg?height=800&width=1200"
                  }
                  alt={screenshots[activeIndex]?.title || "Screenshot"}
                  fill
                  className="object-contain"
                  unoptimized={screenshots[activeIndex]?.type === "gif"}
                />
              </div>

              {screenshots[activeIndex]?.type === "gif" && (
                <div className="absolute top-4 right-4 bg-[#4285f4] text-white text-sm px-3 py-1 rounded-full font-semibold">
                  GIF
                </div>
              )}

              {/* Description overlay */}
              {screenshots[activeIndex]?.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 transform transition-transform">
                  <p className="text-white text-sm">
                    {screenshots[activeIndex].description}
                  </p>
                </div>
              )}

              {/* Navigation arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
                onClick={handlePrevious}
              >
                &lt;
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
                onClick={handleNext}
              >
                &gt;
              </Button>
            </div>

            {/* Thumbnails */}
            <div className="p-2 border-t border-gray-800 overflow-x-auto">
              <div className="flex gap-2">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative flex-shrink-0 w-20 h-12 rounded-md overflow-hidden cursor-pointer border-2",
                      activeIndex === index
                        ? "border-[#4285f4]"
                        : "border-transparent"
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Image
                      src={screenshot.url || "/placeholder.svg"}
                      alt={screenshot.title}
                      fill
                      className="object-contain"
                      unoptimized={screenshot.type === "gif"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
