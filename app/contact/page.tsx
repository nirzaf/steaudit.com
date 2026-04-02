import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import { buildBreadcrumbList, buildContactPageSchema } from '@/lib/structuredData';

// Force dynamic rendering for contact page (uses Supabase)
export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildMetadata('contact', '/contact');

export default function ContactPage() {
    const breadcrumbList = buildBreadcrumbList([
        { name: 'Home', nameAr: 'الرئيسية', path: '/' },
        { name: 'Contact', nameAr: 'اتصل بنا', path: '/contact' },
    ]);

    const contactPageSchema = buildContactPageSchema();

    return (
        <div className="pt-20">
            <JsonLd data={breadcrumbList} id="breadcrumb-contact" />
            <JsonLd data={contactPageSchema} id="contact-page-schema" />
            <Contact />
        </div>
    );
}
