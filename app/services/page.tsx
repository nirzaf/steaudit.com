import type { Metadata } from 'next';
import HeroSection from '@/components/services/HeroSection';
import ServicesContainer from '@/components/services/ServicesContainer';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
    title: seoConfig.services?.title || 'Our Services',
    description: seoConfig.services?.description || 'Explore our professional services',
    keywords: seoConfig.services?.keywords || '',
    openGraph: {
        title: seoConfig.services?.title || 'Our Services',
        description: seoConfig.services?.description || 'Explore our professional services',
        images: [seoConfig.services?.ogImage || ''],
    },
};

const servicesData = [
    {
        title: 'External Audit',
        description: 'Professional and independent examination of financial statements and accounting records.',
        iconName: 'FileText',
    },
    {
        title: 'Real Time Accounting Software',
        description: 'Modern cloud-based accounting solutions for real-time financial tracking and management.',
        iconName: 'BarChart2',
    },
    {
        title: 'Consulting',
        description: 'Expert business advice and strategic consulting services tailored to your needs.',
        iconName: 'Lightbulb',
    },
    {
        title: 'Financial Statements',
        description: 'Comprehensive preparation and analysis of financial statements and reports.',
        iconName: 'Receipt',
    },
    {
        title: 'Budgeting',
        description: 'Strategic budget planning and management to optimize your financial resources.',
        iconName: 'Calculator',
    },
    {
        title: 'Payroll Services',
        description: 'Complete payroll management solutions including salary processing and compliance.',
        iconName: 'CreditCard',
    },
    {
        title: 'Investment Strategies',
        description: 'Expert guidance on investment opportunities and portfolio management.',
        iconName: 'PieChart',
    },
    {
        title: 'Contract Management',
        description: 'Efficient contract lifecycle management and compliance tracking.',
        iconName: 'Briefcase',
    },
    {
        title: 'Business Consulting',
        description: 'Comprehensive business strategy and operational improvement consulting.',
        iconName: 'Briefcase',
    },
    {
        title: 'Legal Compliance',
        description: 'Ensure regulatory compliance and legal requirements are met.',
        iconName: 'Scale',
    },
    {
        title: 'Wealth Management',
        description: 'Personalized wealth management and financial planning services.',
        iconName: 'Wallet',
    },
    {
        title: 'Risk Management',
        description: 'Identify, assess, and mitigate business risks effectively.',
        iconName: 'Shield',
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <HeroSection />
            <ServicesContainer services={servicesData} />
        </div>
    );
}
