import type { NextConfig } from "next";

const pages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  ...(pages
    ? {
        output: "export" as const,
        basePath: "/fandun",
        assetPrefix: "/fandun",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
