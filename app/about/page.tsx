import type { Metadata } from 'next';
import HeroSection from '@/components/about/HeroSection';
import OurStory from '@/components/about/OurStory';
import QuoteSection from '@/components/about/QuoteSection';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Benefits from '@/components/about/Benefits';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('about', '/about');

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
