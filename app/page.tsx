import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import ServicesShowcase from '@/components/ServicesShowcase';
import About from '@/components/About';
import MissionVision from '@/components/MissionVision';
import Performance from '@/components/Performance';
import PrimeGlobal from '@/components/PrimeGlobal';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    keywords: seoConfig.home.keywords,
    openGraph: {
        title: seoConfig.home.title,
        description: seoConfig.home.description,
        images: [seoConfig.home.ogImage || ''],
    },
};

export default function HomePage() {
    return (
        <div className="bg-site-bg">
            <Hero />
            <WhyChooseUs />
            <PrimeGlobal />
            <Performance />
            <ServicesShowcase />
            <Services />
            <MissionVision />
            <About />
        </div>
    );
}
