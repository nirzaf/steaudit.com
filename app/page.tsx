import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import About from '@/components/About';
import MissionVision from '@/components/MissionVision';
import Performance from '@/components/Performance';
import PrimeGlobal from '@/components/PrimeGlobal';
import { seoConfig } from '@/config/seo';

// Dynamically import heavy components with GSAP/Lottie animations
const ServicesShowcase = dynamic(() => import('@/components/ServicesShowcase'), {
    loading: () => (
        <div className="h-96 flex items-center justify-center">
            <div className="animate-pulse text-gray-400">Loading services...</div>
        </div>
    ),
});

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
