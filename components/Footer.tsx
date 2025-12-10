'use client';

import { useLocale } from './LocaleProvider';

const Footer = () => {
  const { locale, isRTL } = useLocale();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  return (
    <footer className="bg-brand-primary border-t border-brand-accent py-6" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <span className="text-gray-300 text-sm">
            {t('Powered by ', 'بدعم من ')}
            <a
              href="https://quadrate.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:text-brand-accent-alt transition-colors duration-300 font-medium"
            >
              {t('Quadrate Tech Solutions', 'QuadRate Tech Solutions')}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
