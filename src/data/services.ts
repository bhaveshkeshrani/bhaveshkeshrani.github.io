import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Multi-Tenant SaaS Application Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/dart.svg",
      "/skills/flutter.svg",
      "/skills/getx.png",
      "/skills/firebase.svg",
    ],
    shortDescription:
      "Engineered scalable, secure SaaS platforms with subdomain/domain tenancy, database isolation, and RBAC using Laravel and React.",
    description:
      "Delivered robust multi-tenant SaaS architectures using Laravel Tenancy and React. Implemented subdomain and domain-based routing, per-tenant database isolation, dynamic tenant onboarding, and fine-grained role-based access control. Optimized for scalability, security, and growth — ideal for startups and enterprise-grade SaaS products.",
  },
  {
    id: 2,
    title: "Modern Frontend Development with React & Tailwind",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "Developed fast, responsive, and pixel-perfect dashboards and landing pages with React and Tailwind CSS.",
    description:
      "Designed and implemented modern frontend applications with React and Tailwind CSS, leveraging reusable components, responsive layouts, and optimized UI/UX flows. Delivered high-performance dashboards, admin panels, and SaaS interfaces built for mobile-first accessibility, SEO, and scalability using Next.js and TypeScript.",
  },
  {
    id: 3,
    title: "Custom API Development & Third-Party Integrations",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "Built secure RESTful APIs and integrated third-party platforms like Stripe, Plaid, Twilio, SendGrid, and Zapier with Laravel.",
    description:
      "Developed highly performant REST APIs using Laravel and seamlessly integrated services like Stripe (payments), Plaid (bank data), Twilio (SMS/OTP), SendGrid (email), Firebase, and Zapier. Implemented custom authentication methods (OAuth, API keys, HMAC), and webhook handlers to automate complex workflows across platforms.",
  },
  {
    id: 4,
    title: "Laravel Upgrade & Legacy System Modernization",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "Upgraded outdated Laravel applications to the latest 12.x version with full compatibility, testing, and zero downtime.",
    description:
      "Migrated legacy systems from Laravel 5.x to 12.x, ensuring modernized architecture, updated dependencies, and improved performance. Refactored outdated packages, replaced deprecated features, and introduced new Laravel paradigms like model factories, policies, service providers, and class-based route handling — without disrupting business logic or user experience.",
  },
  {
    id: 5,
    title: "MVP Development for SaaS Startups",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "Launched fully functional, investor-ready MVPs using Laravel and React with secure auth, payment flows, and admin panels.",
    description:
      "Built and deployed Minimum Viable Products (MVPs) in under 4–6 weeks using Laravel for backend systems and React/Next.js for frontend interfaces. Included features like authentication, subscription billing (Stripe), user management, dashboards, and RESTful APIs. Designed for early-stage validation, customer demos, and funding presentations.",
  },
  {
    id: 6,
    title: "DevOps & CI/CD Automation",
    icons: [
       "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "Automated Laravel and React deployments using Docker, GitHub Actions, Laravel Forge, AWS, and DigitalOcean.",
    description:
      "Configured efficient CI/CD pipelines for Laravel + React projects using GitHub Actions, Docker, Laravel Forge, and cloud providers like AWS and DigitalOcean. Enabled automated deployments, zero-downtime rollouts, staging environments, log monitoring, and database backup routines — ensuring high availability and continuous integration workflows.",
  },
  {
    id: 7,
    title: "Fintech & Payment Gateway Integration",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "Integrated payment processors and financial APIs like Stripe, PayPal, Plaid, and Razorpay for Laravel-based SaaS platforms.",
    description:
      "Implemented secure payment processing and fintech capabilities in SaaS platforms using APIs like Stripe (subscriptions, billing), PayPal, Razorpay, and Plaid (bank data and KYC). Customized invoice flows, wallet systems, payouts, and webhooks for real-time transaction handling and reconciliation.",
  },
  {
    id: 8,
    title: "Authentication & Role Management (RBAC)",
    icons: [
       "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "Deployed scalable authentication with 2FA, API keys, OAuth2, and RBAC using Laravel Jetstream, Sanctum, and Auth0.",
    description:
      "Engineered secure authentication flows using Laravel Sanctum, Jetstream, Passport, and Auth0. Enabled API token-based access, social logins, two-factor authentication (2FA), email verification, and passwordless login. Integrated role-based access control (RBAC) with fine-grained permissions for admins, users, and teams.",
  },
  {
    id: 9,
    title: "API Key Management & HMAC Authentication System",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "Implemented API key management and HMAC-based authentication layers for secure external access to multi-tenant SaaS APIs.",
    description:
      "Designed and deployed a robust API key management system with HMAC authentication for Laravel-based SaaS platforms. Enabled secure third-party integrations with rate-limiting, key rotation, scoped permissions, and request signature validation. Perfect for platforms offering public APIs or SDKs while maintaining tenant isolation and data security.",
  },
  {
    id: 10,
    title: "Modular Monolith & Microservice Architecture with Laravel",
    icons: [
       "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "Architected modular Laravel systems using service-based structure, decoupled logic, and domain-driven design for scale.",
    description:
      "Implemented modular monolith and microservice-style architectures using Laravel, ideal for growing SaaS platforms. Each module (auth, billing, user, tenant, etc.) was decoupled using service providers, contracts, interfaces, and job queues. Enabled teams to work in parallel, scale individual services, and onboard new devs faster with clean, testable code.",
  },
];

export default services;
