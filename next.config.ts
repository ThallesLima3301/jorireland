import type { NextConfig } from "next";
import { legacyRedirects } from "./src/content/redirects";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jorireland.com").replace(/\/$/, "");

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  env: { BUILD_YEAR: String(new Date().getFullYear()) },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    localPatterns: [{ pathname: "/images/**" }, { pathname: "/brand/**" }],
  },
  async redirects() {
    return legacyRedirects(siteUrl);
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
