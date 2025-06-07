const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",         // Enables static export mode
  trailingSlash: true,      // Needed for GitHub Pages to handle routes correctly
  assetPrefix: isProd ? "/bhaveshkeshrani.github.io" : "",

  images: {
    unoptimized: true,      // Required for static export
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
  },
};

module.exports = nextConfig;
