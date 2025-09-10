import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for Vercel deployment
  // output: 'export',
  // trailingSlash: true,
  images: {
    // Enable image optimization for Vercel
    // unoptimized: true
  },
  // Remove basePath and assetPrefix for Vercel root deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/Personal-Website' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Personal-Website/' : '',
};

export default nextConfig;
