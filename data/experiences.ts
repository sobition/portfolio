interface Experience {
  id: number;
  company: string;
  companyUrl: string;
  location: string;
  position: string;
  period: string;
  achievements: string[];
  technologies: string[];
  screenshots: {
    url: string;
    title: string;
    description: string;
  }[];
}
export const experiences: Experience[] = [
  {
    id: 1,
    company: "Catawiki",
    companyUrl: "https://www.catawiki.com",
    location: "Amsterdam",
    position: "Senior Frontend Engineer",
    period: "July 2022 - Present",
    achievements: [
      "Piloted the seamless migration of lot submission pages, implementing performance enhancements and structured deprecation strategies, leading to a 15% improvement in page load times.",
      "Optimized frontend performance by refining layout-sharing mechanisms and implementing caching strategies, reducing redundant requests by 30% and boosting site responsiveness.",
      "Spearheaded a high-impact B2B campaign (Porsche Droomruil), leveraging data-driven UX improvements that increased user engagement by 20%.",
      "Actively contributed to backend Ruby on Rails development, accelerating feature delivery by 25% and improving team efficiency.",
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
    screenshots: [
      {
        url: "/images/catawiki/smart-fill.png",
        title: "Smart Fill",
        description: "Smart fill feature for lot submission",
      },
      {
        url: "/images/catawiki/resubmit-sold-lots.png",
        title: "Resubmit Sold Lots",
        description: "Feature for resubmitting sold lots",
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
      {
        url: "/images/catawiki/create-lot.png",
        title: "Create Lot",
        description: "Create lot page",
      },
      {
        url: "/images/catawiki/lot-preview.png",
        title: "Lot Preview",
        description: "Preview of a lot",
      },
      {
        url: "/placeholder.svg?height=600&width=800",
        title: "Component Library",
        description:
          "Modular component library with documentation and usage examples.",
      },
    ],
  },
  // {
  //   id: 2,
  //   company: "Catawiki",
  //   companyUrl: "https://www.catawiki.com",
  //   location: "Amsterdam",
  //   position: "Frontend Engineer",
  //   period: "July 2022 - March 2024",
  //   achievements: [
  //     "Refactored core components of the codebase, introducing modular architecture and improved documentation, reducing onboarding time for new developers by 40% and enhancing maintainability.",
  //     "Developed an end-to-end testing suite with Java Selenium, reducing QA backlog by 20% and cutting production bugs in critical workflows by 60%.",
  //     "Migrated frontend components from Ruby templates to a standalone Next.js repository, cutting build times by 70% (from 20 minutes to 6 minutes) and improving CI/CD efficiency.",
  //     "Owned a shared runtime library utilized by 10+ microservices, driving consistency and reducing redundant code by 35%.",
  //   ],
  //   technologies: [
  //     "JavaScript",
  //     "TypeScript",
  //     "React",
  //     "Next.js",
  //     "Ruby on Rails",
  //     "SQL",
  //     "REST APIs",
  //     "Playwright",
  //     "Jest",
  //     "i18n",
  //     "SCSS",
  //     "Git",
  //   ],
  //   screenshots: [
  //     {
  //       url: "/placeholder.svg?height=600&width=800",
  //       title: "Component Library",
  //       description:
  //         "Modular component library with documentation and usage examples.",
  //     },
  //     {
  //       url: "/placeholder.svg?height=600&width=800",
  //       title: "Testing Dashboard",
  //       description:
  //         "End-to-end testing dashboard showing test coverage and results.",
  //     },
  //     {
  //       url: "/placeholder.svg?height=600&width=800",
  //       title: "Next.js Migration",
  //       description:
  //         "Architecture diagram of the Ruby to Next.js migration strategy.",
  //     },
  //   ],
  // },
  {
    id: 2,
    company: "SnappMarket",
    companyUrl: "https://snapp.market",
    location: "Tehran",
    position: "Front-End Team Lead",
    period: "August 2021 - July 2022",
    achievements: [
      "Designed and implemented a server-side cart system with a client-side fallback, ensuring uninterrupted transactions and increasing purchase completion rates by 20%.",
      "Launched a bundle discount feature, driving a 40% increase in average basket value and boosting cross-selling opportunities.",
      "Improved SEO through a custom SSR solution, resulting in a 30% increase in organic traffic and higher search engine rankings.",
      "Led CI/CD automation initiatives, reducing deployment time by 50% and minimizing release-related issues.",
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
    screenshots: [
      {
        url: "/images/snappmarket/desktop-bundle.png",
        title: "Desktop Bundle",
        description: "Desktop view of the bundle feature",
      },
      {
        url: "/images/snappmarket/mobile-bundle.png",
        title: "Mobile Bundle",
        description: "Mobile view of the bundle feature",
      },
      {
        url: "/images/snappmarket/mobile-bundle-details.png",
        title: "Mobile Bundle Details",
        description: "Detailed view of the mobile bundle feature",
      },
      {
        url: "/images/snappmarket/desktop-bundle-details.png",
        title: "Desktop Bundle Details",
        description: "Detailed view of the desktop bundle feature",
      },
    ],
  },
  {
    id: 3,
    company: "Shab",
    companyUrl: "https://shab.ir",
    location: "Tehran",
    position: "Senior Front-End Engineer",
    period: "August 2018 - August 2021",
    achievements: [
      "Enhanced conversion rates by optimizing UI flows, increasing traffic-to-payment conversions by 15%.",
      "Strengthened code quality by establishing thorough code review practices, reducing post-deployment issues by over 30%.",
      "Guided and mentored two frontend interns, facilitating a successful project delivery ahead of schedule.",
      "Implemented React Server-Side Rendering (SSR), resulting in a 35% increase in organic search traffic and improved page indexing.",
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
    screenshots: [
      {
        url: "/images/shab/desktop-home.png",
        title: "Desktop Home",
        description: "Desktop view of the Shab homepage",
      },
      {
        url: "/images/shab/mobile-home.png",
        title: "Mobile Home",
        description: "Mobile view of the Shab homepage",
      },
      {
        url: "/images/shab/mobile-popular-cities.png",
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
  // {
  //   id: 5,
  //   company: "Shab",
  //   companyUrl: "https://shab.ir",
  //   location: "Tehran",
  //   position: "Front-End Engineer",
  //   period: "August 2018 - May 2020",
  //   achievements: [
  //     "Revamped website architecture with a focus on uptime and performance, ensuring 99.9% site availability.",
  //     "Designed and launched a React-based admin panel, improving efficiency and reducing admin task completion time by 40%.",
  //     "Developed a B2B dashboard with React and Reactstrap, streamlining client account management and boosting user retention.",
  //   ],
  //   technologies: [
  //     "JavaScript",
  //     "Flow.js",
  //     "React",
  //     "Redux",
  //     "Styled Components",
  //     "Jest",
  //     "HTML",
  //     "CSS",
  //     "SCSS",
  //     "jQuery",
  //     "Git",
  //     "Node.js",
  //     "Express.js",
  //     "Reactstrap",
  //   ],
  //   screenshots: [
  //     {
  //       url: "/placeholder.svg?height=600&width=800",
  //       title: "Website Architecture",
  //       description:
  //         "Revamped website architecture focusing on uptime and performance.",
  //     },
  //     {
  //       url: "/placeholder.svg?height=600&width=800",
  //       title: "Admin Panel",
  //       description:
  //         "React-based admin panel with improved efficiency and usability.",
  //     },
  //     {
  //       url: "/placeholder.svg?height=600&width=800",
  //       title: "B2B Dashboard",
  //       description:
  //         "Client account management dashboard with analytics and reporting features.",
  //     },
  //   ],
  // },
  {
    id: 4,
    company: "Jahan Gostar",
    companyUrl: "https://jahangostar.com",
    location: "Tehran",
    position: "Front-End Developer",
    period: "May 2018 - August 2018",
    achievements: [
      "Initiated the comprehensive redesign of the B2B panel from jQuery to Ant Design and React, enhancing user interface and functionality.",
      "Organized component styling using SCSS and SCSS modules, improving maintainability and scalability.",
      "Led the successful development of a custom hint component for user onboarding, enhancing the user experience.",
      "Managed and demonstrated various widgets by developing a fully customized, draggable dashboard using React.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Jest",
      "Ant design",
      "HTML",
      "CSS",
      "SCSS",
      "jQuery",
      "Git",
    ],
    screenshots: [],
  },
];
