import type { Metadata } from 'next';
import HeroSection from '@/components/services/HeroSection';
import ServicesContainer from '@/components/services/ServicesContainer';
import JsonLd from '@/components/JsonLd';
import { services } from '@/data/services';
import { buildMetadata } from '@/lib/metadata';
import {
    buildBreadcrumbList,
    buildServicesStructuredData,
} from '@/lib/structuredData';

export const metadata: Metadata = buildMetadata('services', '/services');

export default function ServicesPage() {
    const breadcrumbList = buildBreadcrumbList([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
    ]);

    const safeServices = services.map(({ icon, ...rest }) => rest);
    const servicesSchema = buildServicesStructuredData(safeServices);

    return (
        <div className="pt-20">
            <JsonLd data={breadcrumbList} id="breadcrumb-services" />
            <JsonLd data={servicesSchema} id="services-schema" />
            <HeroSection />
            <ServicesContainer services={safeServices} />
        </div>
    );
}
