'use client';

import { services } from '@/data/services';
import HeroSection from '@/components/services/HeroSection';
import ServicesContainer from '@/components/services/ServicesContainer';

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <HeroSection />
            <ServicesContainer services={services} />
        </div>
    );
}
