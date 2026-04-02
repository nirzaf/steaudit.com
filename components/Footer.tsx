'use client';

import Link from 'next/link';
import { useLocale } from './LocaleProvider';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { locale, isRTL } = useLocale();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  const quickLinks = [
    { name: t('Home', 'الرئيسية'), href: '/' },
    { name: t('About Us', 'من نحن'), href: '/about' },
    { name: t('Services', 'الخدمات'), href: '/services' },
    { name: t('Our Partners', 'شركاؤنا'), href: '/partners' },
    { name: t('Contact', 'تواصل معنا'), href: '/contact' },
  ];

  const services = [
    { name: t('External Audit', 'التدقيق الخارجي'), href: '/services#external-audit' },
    { name: t('Internal Audit', 'التدقيق الداخلي'), href: '/services#internal-audit' },
    { name: t('Taxation Services', 'خدمات الضرائب'), href: '/services#taxation' },
    { name: t('Consultancy', 'الاستشارات'), href: '/services#consultancy' },
  ];

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 border-t border-white/10" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary to-brand-accent">
              STE Audit
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t(
                'Professional auditing and consultancy services in Qatar, providing expert guidance for business growth.',
                'خدمات تدقيق واستشارات مهنية في قطر، نقدم إرشادات الخبراء لنمو الأعمال.'
              )}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-secondary/20 transition-colors duration-300">
                <FaFacebook size={20} className="text-brand-accent" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-secondary/20 transition-colors duration-300">
                <FaTwitter size={20} className="text-brand-accent" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-secondary/20 transition-colors duration-300">
                <FaLinkedin size={20} className="text-brand-accent" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-secondary/20 transition-colors duration-300">
                <FaInstagram size={20} className="text-brand-accent" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-brand-secondary/30 pb-2 inline-block">
              {t('Quick Links', 'روابط سريعة')}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    id={`footer-link-${link.href === '/' ? 'home' : link.href.substring(1)}`}
                    className="text-gray-400 hover:text-brand-accent transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-brand-secondary/30 pb-2 inline-block">
              {t('Our Services', 'خدماتنا')}
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    id={`footer-service-${service.href.split('#')[1]}`}
                    className="text-gray-400 hover:text-brand-accent transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-brand-secondary/30 pb-2 inline-block">
              {t('Contact Us', 'تواصل معنا')}
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-secondary shrink-0 mt-1" />
                <span>{t('Doha, Qatar', 'الدوحة، قطر')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-secondary shrink-0" />
                <a href="tel:+97450008194" id="footer-contact-phone" className="hover:text-brand-accent transition-colors">+974 5000 8194</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-secondary shrink-0" />
                <a href="mailto:info@steaudit.com" id="footer-contact-email" className="hover:text-brand-accent transition-colors">info@steaudit.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Salem Taleb Efaifa. {t('All Rights Reserved.', 'جميع الحقوق محفوظة.')}</p>
          <div className="flex items-center gap-1">
            <span>{t('Powered by', 'بدعم من')}</span>
            <a href="https://quadrate.lk" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent-alt transition-colors font-medium">
              Quadrate Tech Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
