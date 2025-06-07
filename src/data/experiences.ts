import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineering Manager",
    company: "Mocha Technologies",
    link:"https://www.linkedin.com/company/mocha-accounting/posts/?feedView=all",
    startDate: "Jan 2025",
    isCurrentJob: true,
    location: "Mumbai, India",
    description: [
      "Led the architecture and development of a scalable, multi-tenant SaaS platform using subdomain/domain-based routing for accounting and operational workflows.",
      "Implemented centralized user and tenant provisioning, dynamic role-permission matrix, and secure public API layer with API Key + HMAC authentication for third-party integrations.",
      "Engineered a double-entry accounting system with customizable chart of accounts, ledger management, journal entries, and real-time financial reports like Trial Balance, P&L, and Balance Sheet.",
      "Built a modern billing engine with recurring invoices, credit notes, purchase orders, customer/supplier ledgers, and PDF invoice generation using a multilingual, RTL-ready drag-and-drop template builder.",
      "Developed robust inventory and warehouse management modules featuring multi-warehouse stock tracking, product variants, batch tracking, FIFO/Avg valuation, zone/rack/bin configurations, and real-time barcode-based availability.",
      "Enabled smart inventory operations including expiry-based filtering, reorder alerts, inter-warehouse transfers, and planned cost tracking based on location.",
      "Integrated Uppy.js with Laravel Queues for asynchronous file uploads and Amazon S3-backed cloud storage with support for invoices, transactions, and inventory attachments.",
      "Established automation pipelines for invoicing, stock updates, ACH file generation, and S3-based daily backups using Laravel Horizon-managed job queues and cron routines.",
      "Enabled tenant-level audit logs, triggered financial event tracking, and implemented secure, authenticated email delivery via Amazon SES with domain verification.",
      "Configured infrastructure and application monitoring using AWS CloudWatch for server and queue health, and Datadog for real-time performance metrics, alerting, and distributed tracing.",
      "Planned and prototyped payroll module with tax regime logic, PF/ESI integration, and salary simulation, aligning with statutory compliance needs.",
      "Initiated a unified dashboard roadmap featuring business KPIs, multilingual i18n support, and a tenant-aware, RTL-compatible UI framework."
    ]
  },
  {
    designation: "Senior Software Engineer",
    company: "Taurus LLC",
    link:"https://www.linkedin.com/company/taurusllc/posts/?feedView=all",
    startDate: "Jan 2020",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Mumbai, India",
    description: [
      "Led end-to-end development of the Investment Center, including UI/UX, transactional logic, and reporting modules.",
      "Built Account Center module to manage chart of accounts, general entries, and memorized transactions with audit trail support.",
      "Implemented core banking functionalities within the Banking Center, including reconciliations and ledger syncing.",
      "Developed Print Check module with dynamic layout designer, print queue handling, and batch processing logic.",
      "Managed full check lifecycle in Check Register, including voiding, reissue, stale check detection, and register reporting.",
      "Automated Renewal Reminder Notice system for policy notifications using scheduled job queues and templated PDFs.",
      "Engineered General Ledger (GL) posting engine to dynamically generate financial entries from business transactions.",
      "Enhanced Account Folder module with features like Action Rules, Sub-Account configuration, Subledger views, and GL reconciliation.",
      "Delivered branded company profile setup with custom themes, logo management, and document template configuration.",
      "Integrated FSSI document services for secure file transmission and printing, using encrypted SFTP and callback tracking.",
      "Configured Positive Pay file generation for banking fraud protection, matching issued vs presented checks automatically.",
      "Developed ACH file processing engine to support automated bulk payments, NACHA compliance, and secure SFTP transmission.",
      "Integrated Farmers and Foremost agent/agency carrier feeds with sync mechanisms, data normalization, and error handling.",
      "Designed secure agent onboarding system via Agent Portal with role-based access, approval workflows, and email notifications.",
    ]
  },
  {
    designation: "Software Engineer",
    company: "Aloha Technology",
    link:"https://www.linkedin.com/company/alohatechnology/",
    startDate: "Nov 2017",
    endDate: "Mar 2019",
    isCurrentJob: false,
    location: "Pune, India",
    description: [
      "Developed custom themes and plugins in WordPress, enhancing performance and security across client websites.",
      "Implemented and customized Magento modules, improving eCommerce workflows, checkout UX, and third-party integrations.",
      "Built scalable web applications using Symfony framework with RESTful APIs and Doctrine ORM for efficient database access.",
      "Engineered dynamic and responsive user interfaces using React.js with Redux, improving frontend performance and user experience.",
      "Designed and maintained robust backend services with Laravel, incorporating authentication, job queues, and API versioning.",
      "Developed feature-rich SPA applications using Angular, integrated with REST APIs, RxJS, and real-time data bindings.",
      "Led implementation of core business logic such as user roles/permissions, subscription billing, and multi-tenant architecture.",
      "Optimized SQL queries and applied database indexing, resulting in faster load times and improved scalability in production systems.",
    ]
  },
  {
    designation: "Software Engineer Intern",
    company: "NetSofters LLP",
    link:"https://www.linkedin.com/company/netsofters/posts/?feedView=all",
    startDate: "Jul 2017",
    endDate: "Oct 2017",
    isCurrentJob: false,
    location: "Bhuj, India",
    description: [
      "Assisted in developing dynamic websites using HTML5, CSS3, JavaScript, and PHP.",
      "Worked on back-end functionalities with core PHP and early Laravel (5.x) under senior developer supervision.",
      "Gained experience in MySQL database management and basic CRUD operations.",
      "Followed MVC architecture and participated in initial unit testing and debugging processes.",
      "Used Git for version control and collaborated through shared repositories.",
      "Learned industry practices including code commenting, documentation, and basic project structuring.",
    ],
  },
  {
    designation: "Professional Freelancer",
    company: "Upwork",
    link:"https://www.linkedin.com/company/netsofters/posts/?feedView=all",
    startDate: "Jun 2015",
    isCurrentJob: true,
    location: "Remote",
    description: [
      "Engineered scalable multi-tenant SaaS platforms using Laravel (10+) and React, enabling subdomain routing, tenant isolation, and advanced RBAC systems.",
      "Developed secure, token-based REST APIs with Laravel Sanctum, Passport, and HMAC authentication for third-party integrations and SDK access.",
      "Built responsive admin dashboards and landing pages using React, Redux, and Tailwind CSS, focusing on UX, accessibility, and performance.",
      "Migrated legacy systems from Laravel 5.x to Laravel 12.x, refactoring code into service-oriented architecture with CI/CD pipelines and zero downtime.",
      "Integrated Stripe, PayPal, Razorpay, and Plaid for full-stack payment processing, subscription billing, invoicing, and KYC workflows.",
      "Implemented custom domain routing, API throttling, and job queues using Laravel Horizon, Redis, and supervisor for high-performance SaaS applications.",
      "Delivered MVPs within tight deadlines using agile delivery, test-driven development, and modular Laravel packages with multi-environment deployment.",
      "Collaborated with international startups and founders to launch and scale full-stack SaaS products, providing ongoing technical consultation and DevOps support.",
    ]
  }
];

export default experiences;
