import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const SITE_URL = 'https://steaudit.com';

export function buildMetadata(
  page: keyof typeof seoConfig,
  pathname: string,
  locale: 'en' | 'ar' = 'en'
): Metadata {
  const config = seoConfig[page];
  const isAr = locale === 'ar';
  
  const title = isAr && config.titleAr ? config.titleAr : config.title;
  const description = isAr && config.descriptionAr ? config.descriptionAr : config.description;
  const keywordsStr = isAr && config.keywordsAr ? config.keywordsAr : config.keywords;
  
  const keywords = keywordsStr
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);
    
  const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
  const images = config.ogImage ? [{ url: config.ogImage }] : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'ar-QA': url, // Since we handle switching via state, both point to same URL, but bots will see both options
      },
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      images,
      locale: isAr ? 'ar_QA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: config.ogImage ? [config.ogImage] : undefined,
    },
    other: {
      'google-site-verification': 'your-verification-code', // Recommended to add this placeholder
    }
  };
}
