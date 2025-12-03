import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const SITE_URL = 'https://steaudit.com';

export function buildMetadata(
  page: keyof typeof seoConfig,
  pathname: string
): Metadata {
  const config = seoConfig[page];
  const keywords = config.keywords
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);
  const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
  const images = config.ogImage ? [{ url: config.ogImage }] : undefined;

  return {
    title: config.title,
    description: config.description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: config.title,
      description: config.description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : undefined,
    },
  };
}
