import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Bhavesh Keshrani",
  description:
    "Bhavesh is a senior SaaS developer with expertise in Laravel Tenancy, React, and scalable cloud platforms. Explore projects across accounting systems, invoicing engines, RESTful APIs, and multi-product architectures.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon-16x16.ico",
      rel: "icon",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "/favicon-32x32.ico",
      rel: "icon",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/favicon-48x48.ico",
      rel: "icon",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/favicon-64x64.ico",
      rel: "icon",
      sizes: "64x64",
      type: "image/x-icon",
    },
  ],
  keywords: [
    "Bhavesh SaaS Developer",
    "Bhavesh Laravel Expert",
    "Bhavesh React Developer",
    "Bhavesh Full Stack Developer",
    "SaaS Architect Bhavesh",
    "Multi-Tenant SaaS Expert",
    "Laravel SaaS Developer",
    "React Frontend Developer",
    "Laravel Tenancy Expert",
    "Full Stack SaaS Engineer",
    "Laravel and React Developer",
    "SaaS MVP Builder",
    "REST API Developer",
    "Stripe Integration Specialist",
    "Custom Invoicing System",
    "Fintech SaaS Developer",
    "Backend Developer Laravel",
    "Frontend Developer React",
    "API Key + HMAC Authentication",
    "Cloud-Based SaaS Solutions",
    "Tailwind CSS UI Developer",
    "Next.js SaaS Developer",
    "Modular Laravel Developer",
    "Database Design for SaaS",
    "RBAC System Developer",
    "Startup SaaS Specialist",
    "DigitalOcean & AWS DevOps",
    "Laravel Horizon & Forge Expert",
    "Scalable Web App Architect"
  ]
};

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? <WebVitals /> : null}
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
