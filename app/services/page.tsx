import type { Metadata } from 'next';
import { services } from '@/data/services';
import HeroSection from '@/components/services/HeroSection';
import ServicesContainer from '@/components/services/ServicesContainer';
import { seoConfig } from '@/config/seo';

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour (ISR)

export const metadata: Metadata = {
    title: seoConfig.services?.title || 'Our Services',
    description: seoConfig.services?.description || 'Explore our professional services',
    keywords: seoConfig.services?.keywords || '',
    openGraph: {
        title: seoConfig.services?.title || 'Our Services',
        description: seoConfig.services?.description || 'Explore our professional services',
        images: [seoConfig.services?.ogImage || ''],
    },
};

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <HeroSection />
            <ServicesContainer services={services} />
        </div>
    );
}
