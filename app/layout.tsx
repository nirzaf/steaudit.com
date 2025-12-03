import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

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
    title: {
        default: 'Salem Taleb Efaifa | Leading Auditing & Consultancy in Qatar',
        template: '%s | Salem Taleb Efaifa',
    },
    description:
        'Salem Taleb Efaifa Auditing & Consultancy offers expert financial services, auditing, consulting, and tax solutions in Qatar. Member of PrimeGlobal with over 30 years of experience.',
    keywords:
        'auditing qatar, financial consulting qatar, tax services qatar, accounting services doha, business advisory qatar, salem taleb efaifa, ste audit',
    openGraph: {
        title: 'Salem Taleb Efaifa | Leading Auditing & Consultancy in Qatar',
        description:
            'Expert financial services, auditing, consulting, and tax solutions in Qatar',
        images: ['https://ik.imagekit.io/ri5cvrkrr/neve-accounting-01.jpg'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body className="font-sans min-h-screen bg-site-bg antialiased">
                <Navbar />
                {children}
                <Footer />
                <Toaster position="top-right" />
            </body>
        </html>
    );
}
