"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="relative bg-[#0B0F1F] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 space-y-4">
          <Badge
            variant="outline"
            className="border-blue-400/30 bg-blue-500/10 px-4 py-1 text-blue-200"
          >
            Selected Work
          </Badge>
          <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Projects
          </h2>
          <p className="max-w-3xl text-lg text-slate-300 md:text-xl">
            Three examples that better represent the range: mobile product
            ownership, shared platform work, and transaction-critical commerce
            delivery.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div
                className={`grid gap-0 lg:grid-cols-[0.92fr_1.08fr] ${
                  index % 2 === 1 ? "lg:grid-cols-[1.08fr_0.92fr]" : ""
                }`}
              >
                <div
                  className={`relative min-h-[320px] overflow-hidden border-b border-white/10 lg:min-h-[420px] ${
                    index % 2 === 0
                      ? "lg:border-r lg:border-b-0"
                      : "lg:order-2 lg:border-l lg:border-b-0"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_34%)]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/10 via-transparent to-[#020617]/70" />
                  <div className="relative flex h-full items-center justify-center p-8">
                    <div className="relative w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-3 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
                      <div className="mb-3 flex items-center gap-2 px-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                      </div>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.15rem] bg-slate-950">
                        <Swiper
                          modules={[Autoplay, Pagination]}
                          slidesPerView={1}
                          loop={true}
                          autoplay={{ delay: 2800, disableOnInteraction: false }}
                          pagination={{ clickable: true }}
                          className="h-full w-full [&_.swiper-pagination-bullet]:bg-white/40 [&_.swiper-pagination-bullet-active]:bg-white"
                        >
                          {project.images.map((image) => (
                            <SwiperSlide key={image.src} className="h-full">
                              <div className="relative h-full w-full">
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  className="object-contain object-top"
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-8 sm:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className="bg-white/10 text-white hover:bg-white/10">
                        {project.name}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-blue-300/30 bg-blue-500/10 text-blue-100"
                      >
                        {project.label}
                      </Badge>
                      {project.status && (
                        <Badge
                          variant="outline"
                          className="border-amber-300/30 bg-amber-400/10 text-amber-100"
                        >
                          <Lock className="mr-2 h-3.5 w-3.5" />
                          {project.status}
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {project.summary}
                      </h3>
                      <p className="max-w-3xl text-lg leading-8 text-slate-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-6">
                      <div className="flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                        What this shows
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                      <ul className="mt-4 space-y-3 text-base leading-7 text-slate-300">
                        {project.outcomes.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                        Stack
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.stack.map((item) => (
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
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
