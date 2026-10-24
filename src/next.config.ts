import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v-img.crazymaplestudios.com',
      },
      {
        protocol: 'https',
        hostname: 'sz-cpp-misc-prod.oss-cn-shenzhen.aliyuncs.com',
      },
      {
        protocol: 'https',
        hostname: 'v-mps.crazymaplestudios.com',
      },
    ],
  },
};

export default nextConfig;
