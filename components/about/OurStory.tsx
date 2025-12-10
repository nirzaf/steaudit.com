'use client';

import { useLocale } from '../LocaleProvider';

export default function OurStory() {
  const { locale, isRTL } = useLocale();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  return (
    <section className="py-16 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">{t('Our Story', 'قصتنا')}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              {t(
                'Salem Taleb Efaifa Auditing and consultancy is an organization of substance with a full-service capability available in Qatar. We construct our team to reflect your organization structure. We make all aspects of our service delivery transparent to the client.',
                'سالم طالب إفيفا للتدقيق والاستشارات هي منظمة ذات جوهر مع قدرة خدمة كاملة متاحة في قطر. نبني فريقنا ليعكس هيكل مؤسستك. نجعل جميع جوانب تقديم خدماتنا شفافة للعميل.'
              )}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t(
                'Our performance is pre-scheduled, agreed with you for deliverables, timetable, and maximum cost effectiveness. Our aim is to beat your expectations from any assignments. The approach we adopt ensures that we bring our views to you about business operations as well as Financial and legal compliance.',
                'يتم جدولة أدائنا مسبقًا، ويتم الاتفاق معك على المخرجات والجدول الزمني والفعالية القصوى من حيث التكلفة. هدفنا هو تجاوز توقعاتك من أي مهام. النهج الذي نتبعه يضمن أن نقدم لك آراءنا حول العمليات التجارية بالإضافة إلى الامتثال المالي والقانوني.'
              )}
            </p>
          </div>
          <div>
            <img
              src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-01.jpg?updatedAt=1732207350705"
              alt={t('Our Team', 'فريقنا')}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
