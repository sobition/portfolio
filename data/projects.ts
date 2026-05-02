export interface Project {
  id: number;
  name: string;
  label: string;
  status?: string;
  summary: string;
  description: string;
  outcomes: string[];
  stack: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Aimee",
    label: "AI-native product build",
    status: "Pre-release",
    summary: "Mobile product ownership with backend contribution.",
    description:
      "Aimee is a private travel product I have been shaping from concept through implementation. I own the product direction and core mobile experience, and I also contribute to the backend capabilities needed to support planning, discovery, and orchestration flows.",
    outcomes: [
      "Built the app in React Native and Expo with a product-first focus on discovery, trip creation, and planning flows.",
      "Worked across NestJS, GraphQL, Prisma, and service design to support backend behavior behind the mobile experience.",
      "Used AI-native workflows for task breakdown, implementation acceleration, and faster iteration across product and engineering work.",
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "CQRS",
    ],
    images: [
      {
        src: "/images/aimee/inspirations.png",
        alt: "Aimee inspiration feed screenshot",
      },
      {
        src: "/images/aimee/inspirations-map.png",
        alt: "Aimee map exploration screenshot",
      },
      {
        src: "/images/aimee/create.png",
        alt: "Aimee trip creation flow screenshot",
      },
      {
        src: "/images/aimee/inspiration-details.png",
        alt: "Aimee inspiration details screenshot",
      },
    ],
  },
  {
    id: 2,
    name: "Catawiki Seller Platform",
    label: "Shared systems and platform delivery",
    summary: "Seller platform work across UI, shared systems, and APIs.",
    description:
      "At Catawiki, my strongest work has been less about isolated UI tickets and more about platform-level product delivery: migrating seller flows, consolidating shared logic, and helping product teams move faster on top of more reliable foundations.",
    outcomes: [
      "Migrated seller-facing flows into a standalone Next.js setup, improving build performance and delivery speed.",
      "Helped unify specification logic across Seller UI and Auctioneer Tools so new rules could be shipped once across multiple internal surfaces.",
      "Delivered product features such as One-Click Resubmission with close attention to API behavior, workflow logic, and operational usability.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Ruby on Rails",
      "Node.js",
      "REST APIs",
      "Playwright",
      "Jest",
    ],
    images: [
      {
        src: "/images/catawiki/resubmit.gif",
        alt: "Catawiki one-click resubmission flow",
      },
      {
        src: "/images/catawiki/autofill.gif",
        alt: "Catawiki smart autofill flow",
      },
      {
        src: "/images/catawiki/mobile-seller-landing.jpeg",
        alt: "Catawiki mobile seller landing page",
      },
      {
        src: "/images/catawiki/lot-preview.png",
        alt: "Catawiki lot preview interface",
      },
    ],
  },
  {
    id: 3,
    name: "SnappMarket Cart and Promotions",
    label: "Product engineering under transaction pressure",
    summary: "Checkout reliability and promotions for high-traffic commerce.",
    description:
      "At SnappMarket, the work sat closer to revenue and transaction quality. I focused on building features that improved checkout completion, increased basket size, and reduced release friction for the team.",
    outcomes: [
      "Architected a server-side cart flow with a client-side fallback to make checkout more resilient during failure scenarios.",
      "Shipped bundle discount behavior that improved cross-sell performance and lifted average basket value.",
      "Introduced CI/CD improvements that reduced deployment time and made shipping safer for the team.",
    ],
    stack: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Jest",
      "SCSS",
    ],
    images: [
      {
        src: "/images/SnappMarket/desktop-bundle.png",
        alt: "SnappMarket desktop bundle promotion interface",
      },
      {
        src: "/images/SnappMarket/mobile-bundle.png",
        alt: "SnappMarket mobile bundle promotion interface",
      },
      {
        src: "/images/SnappMarket/mobile-bundle-details.png",
        alt: "SnappMarket mobile bundle details interface",
      },
      {
        src: "/images/SnappMarket/desktop-bundle-details.png",
        alt: "SnappMarket desktop bundle details interface",
      },
    ],
  },
];
