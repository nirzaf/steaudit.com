import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

const staticRoutes = ['/', '/about', '/services', '/partners', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return staticRoutes.map((route) => {
        const url = `${SITE_URL}${route === '/' ? '' : route}`;
        return {
            url,
            lastModified,
            changeFrequency: route === '/' ? 'weekly' : 'monthly' as const,
            priority: route === '/' ? 1 : 0.8,
            languages: {
                'en-US': url,
                'ar-QA': url, // Pointing to same URL since we handle switching via state, but signals multilingual support
            },
        };
    });
}
