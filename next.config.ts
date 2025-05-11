import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Tell Next.js all pages and links live under /portfolio
  basePath: isProd ? "/portfolio" : "",
  // Prefix all static assets (images, JS, CSS) with /portfolio/
  assetPrefix: isProd ? "/portfolio/" : "",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
