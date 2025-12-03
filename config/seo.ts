interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
}

interface PageSEOConfig {
  home: SEOConfig;
  about: SEOConfig;
  services: SEOConfig;
  contact: SEOConfig;
  partners: SEOConfig;
}

export const seoConfig: PageSEOConfig = {
  home: {
    title: 'Salem Taleb Efaifa | Leading Auditing & Consultancy in Qatar',
    description: 'Salem Taleb Efaifa Auditing & Consultancy offers expert financial services, auditing, consulting, and tax solutions in Qatar. Member of PrimeGlobal with over 30 years of experience.',
    keywords: 'auditing qatar, financial consulting qatar, tax services qatar, accounting services doha, business advisory qatar, salem taleb efaifa, ste audit',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-01.jpg'
  },
  about: {
    title: 'About Us | Salem Taleb Efaifa Auditing & Consultancy',
    description: 'Discover our 30+ years of excellence in providing professional auditing and consulting services in Qatar. Learn about our expertise, values, and commitment to client success.',
    keywords: 'about ste audit, qatar auditing firm, professional services qatar, accounting firm qatar, salem taleb efaifa history',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-02.jpg'
  },
  services: {
    title: 'Our Services | Professional Auditing & Financial Solutions',
    description: 'Comprehensive range of professional services including external audit, accounting, tax services, consulting, and financial management solutions tailored for Qatar businesses.',
    keywords: 'audit services qatar, financial consulting, tax advisory qatar, accounting services, business consulting doha, erp implementation qatar',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-03.jpg'
  },
  contact: {
    title: 'Contact Us | Salem Taleb Efaifa Auditing & Consultancy',
    description: 'Get in touch with our expert team for professional auditing and consulting services in Qatar. Visit our office in Muaither Area or contact us online.',
    keywords: 'contact auditor qatar, financial consultant contact, qatar accounting firm contact, ste audit location',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-04.jpg'
  },
  partners: {
    title: 'Our Partners | Global Network & Collaborations',
    description: 'Part of PrimeGlobal network, connecting us with over 28,000 professionals worldwide. Learn about our strategic partnerships and international capabilities.',
    keywords: 'primeglobal qatar, international accounting network, global audit partners, qatar business network',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-05.jpg'
  }
};