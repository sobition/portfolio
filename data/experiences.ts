interface Experience {
  id: number;
  company: string;
  companyUrl: string;
  location: string;
  position: string;
  period: string;
  achievements: string[];
  technologies: string[];
  media: {
    url: string;
    title: string;
    description: string;
    type?: "image" | "gif";
  }[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Catawiki",
    companyUrl: "https://www.catawiki.com",
    location: "Amsterdam",
    position: "Senior Frontend Engineer",
    period: "March 2024 - Present",
    achievements: [
      "Led the `cw-assets` to `@catawiki/layout` migration across seller-facing flows, reducing build times by 70%, improving Core Web Vitals, and unblocking broader Next.js upgrades.",
      "Helped turn specifications into a shared platform across Seller UI and Auctioneer Tools, reducing duplicated logic and letting new rules ship once across multiple surfaces.",
      "Worked beyond the frontend on Node.js and Rails-backed flows, contributing to backend-aligned product delivery for seller tooling and operational workflows.",
      "Shipped One-Click Resubmission end-to-end with TDD, coordinating UI, API behavior, and workflow logic to simplify repeat supply actions for sellers.",
      "Introduced AI-assisted engineering workflows through Copilot guidance and Figma-to-code experimentation, shortening delivery loops without making AI the product story.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Ruby on Rails",
      "SQL",
      "REST APIs",
      "Backend APIs",
      "Playwright",
      "Jest",
      "i18n",
      "SCSS",
      "Git",
    ],
    media: [
      {
        url: "/images/catawiki/resubmit.gif",
        title: "Resubmit Flow",
        description: "One-click resubmission feature demo",
        type: "gif",
      },
      {
        url: "/images/catawiki/autofill.gif",
        title: "Autofill Flow",
        description: "Smart autofill feature demonstration",
        type: "gif",
      },
      {
        url: "/images/catawiki/mobile-seller-landing.jpeg",
        title: "Mobile Seller Landing",
        description: "Mobile view of the seller landing page",
      },
      {
        url: "/images/catawiki/porsche-campaign.png",
        title: "Porsche Campaign",
        description: "Campaign page for Porsche",
      },
    ],
  },
  {
    id: 2,
    company: "Catawiki",
    companyUrl: "https://www.catawiki.com",
    location: "Amsterdam",
    position: "Frontend Engineer",
    period: "July 2022 - March 2024",
    achievements: [
      "Migrated seller-facing flows from Ruby templates into a standalone Next.js codebase, cutting build times from 20 to 6 minutes and improving release speed.",
      "Improved engineering leverage by refactoring shared components and documentation, reducing onboarding time by 40% for engineers entering the codebase.",
      "Raised product quality by expanding end-to-end coverage with Java Selenium, reducing QA backlog by 20% and cutting critical production bugs by 60%.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Ruby on Rails",
      "SQL",
      "REST APIs",
      "Playwright",
      "Jest",
      "i18n",
      "SCSS",
      "Git",
    ],
    media: [
      {
        url: "/images/catawiki/smart-fill.png",
        title: "Smart Fill",
        description: "Smart fill feature for lot submission",
      },
      {
        url: "/images/catawiki/lot-preview.png",
        title: "Lot Preview",
        description: "Preview of a lot",
      },
      {
        url: "/images/catawiki/mobile-seller-landing.jpeg",
        title: "Mobile Seller Landing",
        description:
          "Mobile-first seller landing flow from the standalone Next.js experience.",
      },
    ],
  },
  {
    id: 3,
    company: "SnappMarket",
    companyUrl: "https://snapp.market",
    location: "Tehran",
    position: "Front-End Team Lead",
    period: "August 2021 - July 2022",
    achievements: [
      "Architected a server-side cart flow with a client-side fallback to protect checkout reliability, increasing purchase completion rates by 20%.",
      "Launched bundle discount mechanics that combined product, pricing, and cart behavior, increasing average basket value by 40%.",
      "Improved release operations by introducing CI/CD automation, cutting deployment time by 50% and reducing manual release risk.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Jest",
      "React Testing Library",
      "HTML",
      "CSS",
      "SCSS",
      "jQuery",
      "Git",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
    media: [
      {
        url: "/images/SnappMarket/desktop-bundle.png",
        title: "Desktop Bundle",
        description: "Desktop view of the bundle feature",
      },
      {
        url: "/images/SnappMarket/mobile-bundle.png",
        title: "Mobile Bundle",
        description: "Mobile view of the bundle feature",
      },
      {
        url: "/images/SnappMarket/mobile-bundle-details.png",
        title: "Mobile Bundle Details",
        description: "Detailed view of the mobile bundle feature",
      },
      {
        url: "/images/SnappMarket/desktop-bundle-details.png",
        title: "Desktop Bundle Details",
        description: "Detailed view of the desktop bundle feature",
      },
    ],
  },
  {
    id: 4,
    company: "Shab",
    companyUrl: "https://shab.ir",
    location: "Tehran",
    position: "Senior Front-End Engineer",
    period: "May 2020 - August 2021",
    achievements: [
      "Improved conversion by 15% through targeted changes across the booking and purchase funnel.",
      "Implemented React SSR to improve search visibility and page indexing, increasing organic traffic by 35%.",
      "Reduced post-deployment issues by more than 30% by establishing stronger review practices and code quality standards.",
      "Mentored frontend interns while maintaining delivery pace on customer-facing product work.",
    ],
    technologies: [
      "JavaScript",
      "Flow.js",
      "React",
      "Redux",
      "Styled Components",
      "Jest",
      "HTML",
      "CSS",
      "SCSS",
      "jQuery",
      "Git",
      "Node.js",
      "Express.js",
    ],
    media: [
      {
        url: "/images/Shab/desktop-home.png",
        title: "Desktop Home",
        description: "Desktop view of the Shab homepage",
      },
      {
        url: "/images/Shab/mobile-home.png",
        title: "Mobile Home",
        description: "Mobile view of the Shab homepage",
      },
      {
        url: "/images/Shab/mobile-popular-cities.png",
        title: "Mobile Popular Cities",
        description: "Mobile view of the popular cities section",
      },
      {
        url: "/images/Shab/desktop-last-minute.png",
        title: "Desktop Last Minute",
        description: "Desktop view of the last minute deals section",
      },
    ],
  },
  {
    id: 5,
    company: "Shab",
    companyUrl: "https://shab.ir",
    location: "Tehran",
    position: "Front-End Engineer",
    period: "August 2018 - May 2020",
    achievements: [
      "Improved uptime and performance through a broader website architecture refresh that supported 99.9% availability.",
      "Built a React-based admin panel that reduced internal task completion time by 40%.",
      "Developed a B2B dashboard for account management, improving operational efficiency and retention support.",
    ],
    technologies: [
      "JavaScript",
      "Flow.js",
      "React",
      "Redux",
      "Styled Components",
      "SCSS",
      "jQuery",
      "Node.js",
      "Express.js",
      "Reactstrap",
    ],
    media: [],
  },
  {
    id: 6,
    company: "Jahan Gostar Pars",
    companyUrl: "https://jahangostar.com",
    location: "Tehran",
    position: "Front-End Developer",
    period: "May 2018 - August 2018",
    achievements: [
      "Redesigned a B2B panel from jQuery to React and Ant Design, modernizing the interface and improving maintainability.",
      "Built onboarding guidance components that made the product easier to navigate for new users.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Jest",
      "Ant Design",
      "HTML",
      "CSS",
      "SCSS",
      "jQuery",
      "Git",
    ],
    media: [],
  },
];
