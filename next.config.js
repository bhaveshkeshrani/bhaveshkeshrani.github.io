const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",        // enables next export behavior
  trailingSlash: true,     // makes URLs with trailing slash (good for GitHub Pages)
  assetPrefix: isProd ? "https://bhaveshkeshrani.github.io/" : "",

  images: {
    unoptimized: true,     // disables next/image optimization (needed for static export)
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "**.amazonaws.com" }
    ],
  },
};
