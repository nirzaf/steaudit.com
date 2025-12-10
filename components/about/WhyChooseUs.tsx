'use client';

import { useLocale } from '../LocaleProvider';

const features = [
  { name: 'Business Growth', nameAr: 'نمو الأعمال', iconType: 'target' },
  { name: 'Unlimited Revision', nameAr: 'مراجعة غير محدودة', iconType: 'clock' },
  { name: 'Ultimate Perfection', nameAr: 'الكمال النهائي', iconType: 'star' },
  { name: 'Smart Experience', nameAr: 'تجربة ذكية', iconType: 'briefcase' },
  { name: 'Strict Deadline', nameAr: 'موعد نهائي صارم', iconType: 'calendar' },
  { name: 'Reputed Firm', nameAr: 'شركة ذات سمعة طيبة', iconType: 'medal' },
];

const renderIcon = (type: string) => {
  switch (type) {
    case 'target':
      return (
        <svg className="w-12 h-12 text-brand-secondary draw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle className="origin-center group-hover:scale-110 transition-transform duration-500" cx="12" cy="12" r="10" />
          <circle className="origin-center group-hover:scale-95 transition-transform duration-500" cx="12" cy="12" r="6" />
          <circle className="origin-center group-hover:scale-120 transition-transform duration-500" cx="12" cy="12" r="2" />
        </svg>
      );
    case 'clock':
      return (
        <svg className="w-12 h-12 text-brand-secondary draw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path className="group-hover:-translate-x-1 transition-transform" d="M3 3v5h5" />
          <g className="origin-center group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out">
            <circle cx="12" cy="12" r="1" />
            <path d="M12 7v5l3 3" />
          </g>
        </svg>
      );
    case 'star':
      return (
        <svg className="w-12 h-12 text-brand-secondary draw-icon origin-center group-hover:rotate-6 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg className="w-12 h-12 text-brand-secondary draw-icon group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <path d="M12 12v.01" />
        </svg>
      );
    case 'calendar':
      return (
        <svg className="w-12 h-12 text-brand-secondary draw-icon origin-top group-hover:skew-x-3 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      );
    case 'medal':
      return (
        <svg className="w-12 h-12 text-brand-secondary draw-icon origin-top group-hover:rotate-6 transition-transform duration-500 ease-in-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15c-3.3 0-6-2.7-6-6 0-3.3 2.7-6 6-6s6 2.7 6 6c0 3.3-2.7 6-6 6Z" />
          <path d="m8.21 13.89-7 3.89 2.07-7.73" />
          <path d="m15.79 13.89 7 3.89-2.07-7.73" />
        </svg>
      );
    default:
      return null;
  }
};

export default function WhyChooseUs() {
  const { locale, isRTL } = useLocale();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('Why Choose Us?', 'لماذا تختارنا؟')}</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group flex flex-col items-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-brand-secondary/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-brand-secondary rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-150 transition-all duration-500"></div>
                  <div className="p-3 bg-brand-secondary/10 rounded-xl">
                    {renderIcon(feature.iconType)}
                  </div>
                </div>
                <span className="block font-bold text-xl text-brand-primary group-hover:text-brand-secondary transition-colors duration-500 mb-3">
                  {locale === 'ar' ? feature.nameAr : feature.name}
                </span>
                <p className="text-brand-primary/70 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {t('Discover excellence in every detail of our professional services.', 'اكتشف التميز في كل تفاصيل خدماتنا المهنية.')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
