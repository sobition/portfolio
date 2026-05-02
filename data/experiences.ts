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
      "Led cw-assets to @catawiki/layout migration, reducing build times by 70%, improving Core Web Vitals, and unblocking team-wide Next.js upgrades through systematic deprecation planning and cross-team collaboration.",
      "Unified Specifications Platform across Seller UI and Auctioneer Tools, eliminating code duplication and enabling new specification rules to ship instantly to all surfaces.",
      "Pioneered AI-assisted development workflows (Figma x Copilot integration, GitHub Copilot instructions) adopted by 3+ engineers, accelerating Node.js migration and reducing PR review cycles.",
      "Shipped One-Click Resubmission feature end-to-end using TDD and AI-accelerated tooling, streamlining repeat supply workflows while mentoring backend engineers.",
      "Spearheaded high-impact B2B campaign (Porsche Droomruil), leveraging data-driven UX improvements that increased user engagement by 20%.",
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
      "Reduced onboarding time by 40% by refactoring core components into a modular architecture and streamlining documentation.",
      "Strengthened product quality by implementing end-to-end testing with Java Selenium, reducing QA backlog by 20% and cutting critical production bugs by 60%.",
      "Migrated frontend from Ruby templates to a standalone Next.js repository, reducing build times by 70% (20 to 6 minutes) and improving CI/CD efficiency.",
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
      "Ensured uninterrupted transactions by architecting a server-side cart system with a client-side fallback, increasing purchase completion rates by 20%.",
      "Boosted average basket value by 40% by launching a bundle discount feature, driving cross-selling.",
      "Reduced deployment time by 50% by introducing CI/CD automation, minimizing release-related issues.",
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
      "Lifted conversion rate by 15% by optimizing UI flows across the purchase funnel.",
      "Reduced post-deployment issues by over 30% by establishing structured code review practices and improving code quality.",
      "Mentored two frontend interns, enabling successful project delivery ahead of schedule.",
      "Boosted organic traffic by 35% by implementing React Server-Side Rendering (SSR), improving search visibility and page indexing.",
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
      "Ensured 99.9% site availability by revamping website architecture for improved uptime and performance.",
      "Reduced admin task completion time by 40% by building and launching a React-based admin panel.",
      "Streamlined client account management by engineering a B2B dashboard with React, improving user retention.",
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
      "Led redesign of the B2B panel from jQuery to React and Ant Design, modernizing the UI and improving usability.",
      "Enhanced onboarding experience by building a custom hint component for user guidance.",
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
