import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

const staticRoutes = ['/', '/about', '/services', '/partners', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return staticRoutes.map((route) => ({
        url: `${SITE_URL}${route === '/' ? '' : route}`,
        lastModified,
        changeFrequency: route === '/' ? 'weekly' : 'monthly',
        priority: route === '/' ? 1 : 0.8,
    }));
}
