import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // For the user avatar reviews
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com', // For the subtle noise background
      }
    ],
  },
};

export default nextConfig;