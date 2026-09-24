import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rokbucket.rokomari.io",
      },
    ],
  },
};

export default nextConfig;
