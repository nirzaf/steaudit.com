import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { SITE_URL, buildMetadata } from '@/lib/metadata';
import { organizationSchema } from '@/lib/structuredData';
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
                        __html: JSON.stringify(organizationSchema),
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
