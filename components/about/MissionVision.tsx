'use client';

import { motion } from 'framer-motion';
import { useLocale } from '../LocaleProvider';

const AnimatedTarget = () => (
  <div className="relative w-14 h-14 flex items-center justify-center">
    <div className="absolute inset-0 border-2 border-dashed border-brand-secondary/30 rounded-full animate-[spin_10s_linear_infinite]" />
    <div className="absolute inset-2 border-2 border-brand-secondary/20 rounded-full animate-pulse" />
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7 text-brand-secondary relative z-10"
    >
      <circle cx="12" cy="12" r="10" className="opacity-20" />
      <circle cx="12" cy="12" r="6" className="group-hover:scale-110 transition-transform duration-500 origin-center" />
      <circle cx="12" cy="12" r="2" className="fill-brand-secondary animate-ping" style={{ animationDuration: '3s' }} />
    </svg>
    <div className="absolute inset-0 bg-brand-secondary/10 rounded-full blur-xl" />
  </div>
);

const AnimatedEye = () => (
  <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden rounded-full">
    <div className="absolute inset-0 bg-brand-secondary/10 rounded-full" />
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-brand-secondary relative z-10"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" className="group-hover:stroke-brand-secondary transition-colors" />
      <circle cx="12" cy="12" r="3" className="fill-brand-accent/20">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="-2 0; 2 0; -2 0"
          dur="4s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />
      </circle>
      <circle cx="12" cy="12" r="1" className="fill-brand-secondary">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="-2 0; 2 0; -2 0"
          dur="4s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />
      </circle>
    </svg>
  </div>
);

export default function MissionVision() {
  const { locale, isRTL } = useLocale();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group h-full"
          >
            <div className="backdrop-blur-xl bg-white/85 rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-brand-secondary/15 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition-shadow duration-500 h-full">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-6 h-full`}>
                <div className="bg-gradient-to-br from-brand-secondary to-brand-accent p-4 rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <AnimatedTarget />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-medium tracking-tight text-brand-primary mb-1">
                    {t('Our Mission', 'مهمتنا')}
                  </h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full mb-6"></div>
                  <p className="text-brand-primary/70 leading-relaxed">
                    {t(
                      'Audit and Assurance helps our clients achieve its targets by providing objective and independent audit and assurance services to reduce risk and improve operations and to ensure best practice in all aspects of financial reporting and compliance activities.',
                      'تساعد خدمات التدقيق والتأكيد عملاءنا على تحقيق أهدافهم من خلال تقديم خدمات تدقيق وتأكيد موضوعية ومستقلة لتقليل المخاطر وتحسين العمليات وضمان أفضل الممارسات في جميع جوانب التقارير المالية وأنشطة الامتثال.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group h-full"
          >
            <div className="backdrop-blur-xl bg-white/85 rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-brand-secondary/15 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition-shadow duration-500 h-full">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-6 h-full`}>
                <div className="bg-gradient-to-br from-brand-secondary to-brand-accent p-4 rounded-2xl shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <AnimatedEye />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-medium tracking-tight text-brand-primary mb-1">
                    {t('Our Vision', 'رؤيتنا')}
                  </h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full mb-6"></div>
                  <p className="text-brand-primary/70 leading-relaxed">
                    {t(
                      'Striving to be a team of world-class professional Accounting and Assurance experts, setting new standards in the industry. We aim to shape the future of Audit and Assurance services through innovation, integrity, and excellence. Our commitment to continuous improvement and adoption of cutting-edge methodologies ensures we remain at the forefront of the industry.',
                      'نسعى لأن نكون فريقًا من خبراء المحاسبة والتأكيد المحترفين ذوي المستوى العالمي، ونضع معايير جديدة في الصناعة. نهدف إلى تشكيل مستقبل خدمات التدقيق والتأكيد من خلال الابتكار والنزاهة والتميز. التزامنا بالتحسين المستمر واعتماد منهجيات متطورة يضمن بقاءنا في طليعة الصناعة.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
