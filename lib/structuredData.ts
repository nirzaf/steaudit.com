import { seoConfig } from '@/config/seo';
import { SITE_URL } from '@/lib/metadata';

const ORGANIZATION_NAME = 'Salem Taleb Efaifa Auditing & Consultancy';

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ORGANIZATION_NAME,
    image: seoConfig.home.ogImage,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: '+974 5000 8194',
    address: {
        '@type': 'PostalAddress',
        streetAddress:
            'Office No 4, Building No 3, Street No 902, Zone No 55 Muaither Area',
        addressLocality: 'Doha',
        addressRegion: 'Qatar',
        addressCountry: 'QA',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.2854,
        longitude: 51.531,
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

export function buildBreadcrumbList(
    crumbs: Array<{ name: string; path: string }>
): Record<string, unknown> {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}`,
        })),
    };
}

export function buildServicesStructuredData(
    serviceItems: Array<{ title: string; description: string }>
): Record<string, unknown> {
    return {
        '@context': 'https://schema.org',
        '@graph': serviceItems.map(({ title, description }) => ({
            '@type': 'Service',
            name: title,
            description,
            provider: {
                '@id': SITE_URL,
            },
            areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Qatar',
            },
            serviceType: title,
        })),
    };
}
