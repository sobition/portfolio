"use client";

import { forwardRef, useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Sparkles, Smartphone, Server, Database, Lock } from "lucide-react";

const previews = [
  {
    title: "Inspiration feed",
    image: "/images/aimee/inspirations.png",
    alt: "Aimee inspiration feed screenshot",
    width: 1206,
    height: 2622,
  },
  {
    title: "Map-based exploration",
    image: "/images/aimee/inspirations-map.png",
    alt: "Aimee map exploration screenshot",
    width: 1206,
    height: 2622,
  },
  {
    title: "Trip creation flow",
    image: "/images/aimee/create.png",
    alt: "Aimee trip creation screenshot",
    width: 1206,
    height: 2622,
  },
];

const capabilities = [
  "Owned the original idea, core product features, and the end-to-end mobile app experience.",
  "Built the app in React Native and Expo, shaping the interaction model for discovery, inspiration, and planning.",
  "Also contributed to the backend in NestJS, working across GraphQL, Prisma, and service design to support the product.",
];

const stack = [
  "React Native",
  "Expo",
  "TypeScript",
  "NestJS",
  "GraphQL",
  "Prisma",
  "PostgreSQL",
  "CQRS",
];

function PreviewCard({
  preview,
  className = "",
}: {
  preview: (typeof previews)[number];
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 ${className}`}
    >
      <div className="p-3">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.4)]">
          <div className="mb-2 flex justify-center">
            <div className="h-1.5 w-16 rounded-full bg-white/10" />
          </div>
          <div
            className="relative mx-auto w-full max-w-[220px] overflow-hidden rounded-[1.25rem] bg-slate-950"
            style={{ aspectRatio: `${preview.width} / ${preview.height}` }}
          >
            <Image src={preview.image} alt={preview.alt} fill className="object-contain" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-3 text-sm text-slate-300">
        {preview.title}
      </div>
    </div>
  );
}

export const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateCurrent = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    updateCurrent();
    carouselApi.on("select", updateCurrent);
    carouselApi.on("reInit", updateCurrent);

    return () => {
      carouselApi.off("select", updateCurrent);
      carouselApi.off("reInit", updateCurrent);
    };
  }, [carouselApi]);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative min-h-screen bg-[#0B0F1F] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 space-y-4">
          <Badge
            variant="outline"
            className="border-blue-400/30 bg-blue-500/10 px-4 py-1 text-blue-200"
          >
            Selected Project
          </Badge>
          <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Projects
          </h2>
          <p className="max-w-3xl text-lg text-slate-300 md:text-xl">
            A focused look at product work that combines frontend, mobile, and backend engineering.
          </p>
        </div>

        <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_35%)]" />
              <div className="relative space-y-8">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-white/10 text-white hover:bg-white/10">
                      Aimee
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-amber-300/30 bg-amber-400/10 text-amber-100"
                    >
                      <Lock className="mr-2 h-3.5 w-3.5" />
                      Pre-release
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-2">
                      <Image
                        src="/images/logos/aimee-logo.jpg"
                        alt="Aimee logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                      Private mobile product
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white sm:text-4xl">
                      AI-assisted travel planning across mobile and backend systems
                    </h3>
                    <p className="max-w-2xl text-lg leading-8 text-slate-300">
                      Aimee is a mobile-first travel product that I drove from concept to product
                      definition and into implementation. The idea, feature design, and mobile app
                      development were fully owned by me, while I also contributed to the backend
                      capabilities required to support the experience.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <Smartphone className="mb-3 h-5 w-5 text-cyan-300" />
                    <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Mobile</div>
                    <div className="mt-2 text-base font-semibold text-white">React Native + Expo</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <Server className="mb-3 h-5 w-5 text-violet-300" />
                    <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Backend</div>
                    <div className="mt-2 text-base font-semibold text-white">NestJS + GraphQL</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <Database className="mb-3 h-5 w-5 text-emerald-300" />
                    <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Data</div>
                    <div className="mt-2 text-base font-semibold text-white">Prisma + PostgreSQL</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <Sparkles className="h-5 w-5 text-blue-300" />
                    <h4 className="text-lg font-semibold">What this project demonstrates</h4>
                  </div>
                  <ul className="space-y-3 text-base leading-7 text-slate-300">
                    {capabilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="space-y-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-slate-400">Stack</div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {stack.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm uppercase tracking-[0.24em] text-slate-400">Preview</div>

                  <Carousel
                    setApi={setCarouselApi}
                    opts={{ align: "center", containScroll: "trimSnaps" }}
                    className="sm:hidden"
                  >
                    <CarouselContent className="-ml-3">
                      {previews.map((preview) => (
                        <CarouselItem key={preview.title} className="basis-[88%] pl-3">
                          <PreviewCard preview={preview} className="h-full" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>

                  <div className="flex justify-center gap-2 sm:hidden">
                    {previews.map((preview, index) => (
                      <span
                        key={preview.title}
                        className={`h-1.5 rounded-full transition-all ${
                          index === activeIndex ? "w-8 bg-white/70" : "w-6 bg-white/10"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <div className="hidden gap-5 sm:grid sm:grid-cols-2">
                    {previews.map((preview) => (
                      <PreviewCard key={preview.title} preview={preview} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
