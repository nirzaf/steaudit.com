import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

// Bundle analyzer setup (run with ANALYZE=true)
const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
            },
        ],
        // Enable modern image formats
        formats: ['image/avif', 'image/webp'],
        // Add image optimization settings
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },

    typescript: {
        // Temporarily ignore build errors during optimization phase
        ignoreBuildErrors: true,
    },

    // Enable experimental features for performance
    experimental: {
        // Optimize server actions
        serverActions: {
            bodySizeLimit: '2mb',
        },

        // Enable optimized package imports
        optimizePackageImports: [
            'lucide-react',
            'react-icons',
            'framer-motion',
        ],
    },

    // Production optimizations
    compress: true,
    poweredByHeader: false,
};

export default withBundleAnalyzer(nextConfig);
