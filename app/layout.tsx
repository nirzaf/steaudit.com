import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { seoConfig } from '@/config/seo';
import { SITE_URL, buildMetadata } from '@/lib/metadata';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const defaultSEO = seoConfig.home;

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Salem Taleb Efaifa Auditing & Consultancy',
    image: defaultSEO.ogImage,
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

export const metadata: Metadata = {
    ...buildMetadata('home', '/'),
    metadataBase: new URL(SITE_URL),
    icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${outfit.variable} scroll-smooth`}
            suppressHydrationWarning
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </head>
            <body className="font-sans min-h-screen bg-site-bg antialiased">
                <Navbar />
                {children}
                <Footer />
                <Toaster position="top-right" />
                <Script
                    id="hs-script-loader"
                    src="//js-eu1.hs-scripts.com/144768548.js"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
