import { seoConfig } from '@/config/seo';
import { SITE_URL } from '@/lib/metadata';

const ORGANIZATION_NAME_EN = 'Salem Taleb Efaifa Auditing & Consultancy';
const ORGANIZATION_NAME_AR = 'سالم طالب عفييفة للتدقيق والاستشارات';

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ORGANIZATION_NAME_EN,
    alternateName: ORGANIZATION_NAME_AR,
    legalName: ORGANIZATION_NAME_EN,
    description: 'Expert auditing, thinning, consulting, and tax services in Qatar. Member of PrimeGlobal network.',
    foundingDate: '1992', // Over 30 years as per description
    image: seoConfig.home.ogImage,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: '+974 5000 8194',
    address: {
        '@type': 'PostalAddress',
        streetAddress:
            'Flat No. 2, Floor No. 1, Street No 220, Building No 9, Zone 27, Umm Ghuwalina',
        addressLocality: 'Doha',
        addressRegion: 'Qatar',
        addressCountry: 'QA',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.2814,
        longitude: 51.5422,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
        opens: '08:00',
        closes: '17:00',
    },
    sameAs: [
        'https://www.linkedin.com/company/salem-taleb-efaifa-auditing-consultancy',
        'https://www.facebook.com/steaudit',
    ],
};

export function buildContactPageSchema(locale: 'en' | 'ar' = 'en'): Record<string, unknown> {
    const isAr = locale === 'ar';
    return {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: isAr ? 'اتصل بنا' : 'Contact Us',
        description: isAr 
            ? 'تواصل مع فريق الخبراء لدينا للحصول على خدمات التدقيق والاستشارات المهنية في قطر.' 
            : 'Get in touch with our expert team for professional auditing and consulting services in Qatar.',
        mainEntity: {
            '@id': SITE_URL,
        },
    };
}

export function buildAboutPageSchema(locale: 'en' | 'ar' = 'en'): Record<string, unknown> {
    const isAr = locale === 'ar';
    return {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: isAr ? 'من نحن' : 'About Us',
        description: isAr 
            ? 'اكتشف أكثر من 30 عاماً من التميز في تقديم خدمات التدقيق والاستشارات المهنية في قطر.' 
            : 'Discover our 30+ years of excellence in providing professional auditing and consulting services in Qatar.',
        mainEntity: {
            '@id': SITE_URL,
        },
    };
}

export function buildBreadcrumbList(
    crumbs: Array<{ name: string; nameAr?: string; path: string }>,
    locale: 'en' | 'ar' = 'en'
): Record<string, unknown> {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: locale === 'ar' && crumb.nameAr ? crumb.nameAr : crumb.name,
            item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}`,
        })),
    };
}

export function buildServicesStructuredData(
    serviceItems: Array<{ title: string; titleAr?: string; description: string; descriptionAr?: string }>,
    locale: 'en' | 'ar' = 'en'
): Record<string, unknown> {
    const isAr = locale === 'ar';
    return {
        '@context': 'https://schema.org',
        '@graph': serviceItems.map((item) => ({
            '@type': 'Service',
            name: isAr && item.titleAr ? item.titleAr : item.title,
            description: isAr && item.descriptionAr ? item.descriptionAr : item.description,
            provider: {
                '@id': SITE_URL,
            },
            areaServed: {
                '@type': 'AdministrativeArea',
                name: isAr ? 'قطر' : 'Qatar',
            },
            serviceType: isAr && item.titleAr ? item.titleAr : item.title,
        })),
    };
}
