import type { Metadata } from 'next';
import { services } from '@/data/services';
import HeroSection from '@/components/services/HeroSection';
import ServicesContainer from '@/components/services/ServicesContainer';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('services', '/services');

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesContainer services={services} />
    </div>
  );
}
