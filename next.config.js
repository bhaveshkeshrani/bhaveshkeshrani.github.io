/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",  // This enables static export automatically
  trailingSlash: true,
  assetPrefix: isProd ? "https://bhaveshkeshrani.github.io" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "**.amazonaws.com" }
    ],
  },
};

module.exports = nextConfig;
