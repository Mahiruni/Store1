import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "*.shopifycdn.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
  poweredByHeader: false,
};

export default nextConfig;
