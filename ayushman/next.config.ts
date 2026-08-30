import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/our-company/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
