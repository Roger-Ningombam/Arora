import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: any = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {
    // optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  }
};

export default withBundleAnalyzer(nextConfig);
