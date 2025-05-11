import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig(); // ensure basePath is in publicRuntimeConfig

export const portfolioItems = [
  {
    id: "catawiki",
    name: "Catawiki",
    logo: "/logos/catawiki-logo.jpeg",
    link: "https://www.catawiki.com",
    description:
      "Catawiki is the leading online marketplace to buy and sell special objects. Over 75,000 objects are offered in auction every week, each reviewed by in-house experts across art, design, fashion, classic cars, and more.",
    highlights: [
      "Migrated lot submission pages into a modular Next.js setup, boosting page load performance by 15%.",
      "Introduced a Java Selenium end-to-end testing suite, reducing QA backlog by 20% and critical bugs by 60%.",
      "Refactored core components and improved CI/CD, cutting build times by 70%.",
      "Optimized caching and layout-sharing strategies, cutting redundant requests by 30%.",
    ],
    screenshots: [
      `${publicRuntimeConfig}/images/catawiki/smart-fill.png`,
      `${publicRuntimeConfig}/images/catawiki/resubmit-sold-lots.png`,
      `${publicRuntimeConfig}/images/catawiki/mobile-seller-landing.jpeg`,
      `${publicRuntimeConfig}/images/catawiki/porsche-campaign.png`,
      `${publicRuntimeConfig}/images/catawiki/create-lot.png`,
      `${publicRuntimeConfig}/images/catawiki/lot-preview.png`,
    ],
  },
  {
    id: "snappmarket",
    name: "SnappMarket",
    logo: "/logos/snappmarket-logo.jpeg",
    link: "https://snapp.market",
    description:
      "SnappMarket is redefining online supermarket shopping in Iran with Quick delivery (Express), Bulk orders (Hyper), and tailored services (Pro) for seamless, convenient grocery experiences.",
    highlights: [
      "Designed a server-side cart with client-side fallback, increasing purchase completion rates by 20%.",
      "Built a bundle discount feature driving a 40% lift in average basket value.",
      "Implemented custom SSR for SEO, raising organic traffic by 30%.",
      "Automated CI/CD pipelines, cutting deployment time by 50% and reducing release issues.",
    ],
    screenshots: [
      `${publicRuntimeConfig}/images/snappmarket/desktop-bundle.png`,
      `${publicRuntimeConfig}/images/snappmarket/mobile-bundle.png`,
      `${publicRuntimeConfig}/images/snappmarket/mobile-bundle-details.png`,
      `${publicRuntimeConfig}/images/snappmarket/desktop-bundle-details.png`,
    ],
  },
  {
    id: "shab",
    name: "Shab.ir",
    logo: "/logos/shabir-logo.jpeg",
    link: "https://shab.ir",
    description:
      "Shab.ir is an online marketplace for listing, discovering, and booking vacation rental places across Iran.",
    highlights: [
      "Optimized key UI flows, boosting conversion rates by 15%.",
      "Led SSR implementation in React, improving SEO and increasing organic traffic by 35%.",
      "Developed reusable carousel components (house cards & popular cities) with touch-swipe support.",
      "Mentored interns and established code review practices, reducing post-deployment issues by 30%.",
    ],
    screenshots: [
      `${publicRuntimeConfig}/images/shab/desktop-home.png`,
      `${publicRuntimeConfig}/images/shab/mobile-home.png`,
      `${publicRuntimeConfig}/images/shab/mobile-popular-cities.png`,
      `${publicRuntimeConfig}/images/shab/desktop-last-minute.png`,
    ],
  },
];
