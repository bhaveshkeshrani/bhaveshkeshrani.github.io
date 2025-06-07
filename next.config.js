/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Enable static HTML export (replaces next export CLI)
  output: "export",

  // Adds trailing slash for GitHub Pages routing compatibility
  trailingSlash: true,

  // Important: Prefix assets with your GitHub Pages URL base
  assetPrefix: isProd ? "https://bhaveshkeshrani.github.io/" : "",

  images: {
    unoptimized: true,  // Required for static export with next/image

    // Allow images from these domains
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "**.amazonaws.com" }
    ],
  },
};

module.exports = nextConfig;
