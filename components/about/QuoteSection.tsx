'use client';

import { useLocale } from '../LocaleProvider';

export default function QuoteSection() {
  const { locale, isRTL } = useLocale();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  return (
    <section className="py-16 bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-2xl font-medium text-gray-900 italic">
          "{t(
            "If you can't show through an audit trail how you arrived at the numbers on your balance sheet, that is a significant internal control failure.",
            "إذا لم تتمكن من إظهار من خلال مسار التدقيق كيف وصلت إلى الأرقام في ميزانيتك العمومية، فهذا يعد فشلًا كبيرًا في الرقابة الداخلية."
          )}"
        </blockquote>
        <p className="mt-4 text-lg font-semibold text-brand-secondary">Robert Cobb</p>
        <p className="text-gray-500">{t('Auditor', 'مدقق حسابات')}</p>
      </div>
    </section>
  );
}
