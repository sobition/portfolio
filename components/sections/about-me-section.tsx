import React from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const AboutMeSection = React.forwardRef<HTMLElement>((_, ref) => {
  const principles = [
    {
      title: "Fullstack by default",
      accent: "bg-[#4285f4]",
      body: "My strongest area is frontend, but the work rarely stops there. I'm comfortable following product problems across APIs, business logic, service boundaries, and delivery systems when that is what the outcome requires.",
    },
    {
      title: "Product impact over surface area",
      accent: "bg-[#a259ff]",
      body: "A lot of my best work sits in shared systems, migrations, performance, and workflow simplification. That tends to look less flashy than a new screen, but it changes how fast teams can ship and how reliably products operate.",
    },
    {
      title: "AI as engineering leverage",
      accent: "bg-[#25b6d2]",
      body: "I use AI for implementation support, task orchestration, and faster exploration across unfamiliar areas. The point is not to center AI as identity. The point is to increase throughput while keeping engineering judgment intact.",
    },
  ];

  return (
    <section ref={ref} id="about" className="relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-6 text-5xl font-bold">About</h2>
          <p className="mb-16 max-w-3xl text-lg leading-8 text-gray-300">
            I&apos;m a product engineer with around eight years of experience
            across web, mobile, and supporting backend systems. I&apos;m
            strongest when the brief is ambiguous, the product matters, and the
            work spans more than one layer of the stack.
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <AnimateOnScroll animation="fade-right" className="lg:w-1/2">
            <div className="relative rounded-lg bg-[#0f1631] p-8">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-gray-400">
                  operating-range.ts
                </div>
              </div>

              <div
                className="mb-6 flex items-center gap-2"
                style={{ fontFamily: "Cascadia Code, monospace" }}
              >
                <div className="text-yellow-400">✦</div>
                <div>
                  <span className="text-[#1ACB01]">sobhan</span>{" "}
                  <span className="text-[#4E4E4E]">positionedAs</span>{" "}
                  <span className="text-[#FF0]">product_engineer</span>
                  <span className="text-[#4E4E4E]">;</span>
                </div>
              </div>

              <div className="leading-relaxed text-gray-200">
                <p className="mb-4">
                  I&apos;ve spent most of my career shipping user-facing product
                  in React ecosystems, but my contribution is not limited to UI
                  implementation. I regularly work through the surrounding
                  system: APIs, platform constraints, delivery architecture, and
                  shared logic that affects multiple teams.
                </p>
                <p className="mb-4">
                  That makes me a strong fit for product engineering roles where
                  frontend quality matters, but the real job is delivering
                  outcomes across the full stack. I ramp quickly, ask the right
                  system questions, and tend to be useful in both mature
                  codebases and messy transition periods.
                </p>
                <p>
                  In recent work, AI has become part of how I operate rather
                  than the headline. I use it to compress research,
                  implementation, and iteration loops, while keeping the work
                  grounded in sound engineering and product judgment.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="relative lg:w-1/2">
            <div className="relative space-y-6">
              {principles.map((principle, index) => (
                <AnimateOnScroll
                  key={principle.title}
                  animation="fade-left"
                  delay={100 + index * 100}
                >
                  <div className="group relative overflow-hidden rounded-lg bg-[#0f1631] p-6 transition-colors hover:bg-[#0f1631]/80">
                    <div
                      className={`absolute top-0 bottom-0 left-0 w-1 ${principle.accent}`}
                    ></div>
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.03] transition-transform duration-500 group-hover:scale-150"></div>

                    <div className="relative">
                      <h3 className="mb-3 text-lg font-semibold text-white">
                        {principle.title}
                      </h3>
                      <p className="leading-7 text-gray-300">
                        {principle.body}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}

              <AnimateOnScroll animation="fade-left" delay={450}>
                <div className="grid gap-4 rounded-lg border border-white/10 bg-[#0c132c] p-6 md:grid-cols-2">
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-[#25b6d2]">
                      Location
                    </div>
                    <div className="mt-2 text-gray-200">
                      Haarlem, The Netherlands
                    </div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-[#25b6d2]">
                      Current role
                    </div>
                    <div className="mt-2 text-gray-200">
                      Senior Frontend Engineer at Catawiki
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutMeSection.displayName = "AboutMeSection";

export default AboutMeSection;
