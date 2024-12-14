import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "harud.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
