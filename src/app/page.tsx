import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
import Link from "next/link";
import { MobileCarousel } from "./Carousel";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      {/* Photo and About Section */}
      <header className="text-center mb-12">
        <div className="mx-auto w-40 h-40 relative mb-4">
          <Image
            src="/images/me.jpeg"
            alt="Sobhan Aminnejad"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">Sobhan Aminnejad</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Versatile and passionate Software Engineer with a strong focus on
          front-end development and a broad interest in software engineering.
          Experienced in building high-performance websites using React,
          Next.js, and modern frontend tools, and driving impactful business
          results.
        </p>
        <p className="text-gray-500 mt-2">
          Haarlem, The Netherlands • (+31) 684093339 •{" "}
          <a href="mailto:sobition@gmail.com" className="underline">
            sobition@gmail.com
          </a>
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="/Sobhan_Aminnejad-CV.pdf"
            download="Sobhan_Aminnejad-CV.pdf"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download Résumé
          </a>
          <a
            href="https://linkedin.com/in/sobhan-aminnejad/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* Portfolio Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>
        <div className="space-y-16">
          {portfolioItems.map((item) => (
            <div key={item.id}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mb-4"
              >
                {item.logo && (
                  <div className="flex items-center justify-center w-16 h-16 mr-4">
                    <Image
                      className="rounded-lg"
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={48}
                      height={48}
                      objectFit="contain"
                    />
                  </div>
                )}
                <h3 className="text-3xl font-bold">{item.name}</h3>
              </Link>
              <p className="mb-4 text-gray-600">{item.description}</p>
              <ul className="list-disc list-inside mb-4">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="mb-2">
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Mobile: Infinite Carousel */}
              <div className="md:hidden mb-4">
                <MobileCarousel images={item.screenshots} />
              </div>

              {/* Tablet & Desktop: Tiled Grid */}
              <div className="hidden md:grid grid-cols-3 gap-4">
                {item.screenshots.map((src, idx) => {
                  // Pattern: idx 0 & 3 = landscape (span 2 columns), idx 1 & 2 = portrait (span 1)
                  const isLandscape = idx % 4 === 0 || idx % 4 === 3;
                  return (
                    <div
                      key={idx}
                      className={`relative w-full ${
                        isLandscape ? "col-span-2" : "col-span-1"
                      } h-80 bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden rounded-lg shadow-lg flex items-center justify-center`}
                    >
                      <Image
                        src={src}
                        alt={`${item.name} screenshot ${idx + 1}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
