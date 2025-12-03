import type { Metadata } from 'next';
import HeroSection from '@/components/about/HeroSection';
import OurStory from '@/components/about/OurStory';
import QuoteSection from '@/components/about/QuoteSection';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Benefits from '@/components/about/Benefits';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import { seoConfig } from '@/config/seo';

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour (ISR)

export const metadata: Metadata = {
    title: seoConfig.about.title,
    description: seoConfig.about.description,
    keywords: seoConfig.about.keywords,
    openGraph: {
        title: seoConfig.about.title,
        description: seoConfig.about.description,
        images: [seoConfig.about.ogImage || ''],
    },
};

export default function AboutPage() {
    return (
        <div className="pt-20">
            <HeroSection />
            <OurStory />
            <QuoteSection />
            <WhyChooseUs />
            <Benefits />
            <MissionVision />
            <CoreValues />
        </div>
    );
}
