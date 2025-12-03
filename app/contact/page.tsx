import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import { seoConfig } from '@/config/seo';

// Contact page doesn't need revalidation (dynamic content)
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: seoConfig.contact.title,
    description: seoConfig.contact.description,
    keywords: seoConfig.contact.keywords,
    openGraph: {
        title: seoConfig.contact.title,
        description: seoConfig.contact.description,
        images: [seoConfig.contact.ogImage || ''],
    },
};

export default function ContactPage() {
    return (
        <div className="pt-20">
            <Contact />
        </div>
    );
}
