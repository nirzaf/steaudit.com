'use client';

import { motion } from 'framer-motion';
import {
    Phone,
    CheckCircle2,
    Calendar,
    Sparkles,
    ShieldCheck,
    FileCheck,
    Clock3
} from 'lucide-react';
import { useLocale } from './LocaleProvider';

export default function AuditFilingBanner() {
    const { locale, isRTL } = useLocale();
    const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

    const features = locale === 'ar'
        ? [
            'تأكد من جاهزية القوائم المالية قبل 30 أبريل',
            'التزم بالمتطلبات الرقابية دون قلق',
            'إرشاد خبير لتدقيق وضريبة سلسة',
            'عمليات مبسطة لتوفير الوقت'
        ]
        : [
            'Ensure all financials are ready before 30 April',
            'Meet regulatory standards without stress',
            'Expert guidance for smooth audits and tax',
            'Streamlined processes to save time'
        ];

    const services = locale === 'ar'
        ? [
            'التدقيق الخارجي والداخلي',
            'الاستشارات الضريبية',
            'مسك الدفاتر والمحاسبة',
            'خدمات التأكيد',
            'العناية الواجبة المالية',
            'التحقيقات الجنائية وغيرها',
            'الاستشارات التجارية',
            'خدمات ضريبة الأرباح الرأسمالية'
        ]
        : [
            'External & Internal Audit Services',
            'Tax Consultancy Services',
            'Book Keeping & Accounting',
            'Assurance Services',
            'Financial Due Diligence',
            'Forensic & Other Investigation',
            'Business Advisory & Consulting',
            'Capital Gain Tax Services'
        ];

    const steps = locale === 'ar'
        ? [
            {
                title: 'فحص الجاهزية',
                description: 'تحليل الفجوات، قائمة المستندات، أبرز المخاطر',
                icon: <ShieldCheck className="w-5 h-5 text-emerald-300" />
            },
            {
                title: 'حزمة التدقيق',
                description: 'تحضير الأدلة، التسويات، الاعتمادات',
                icon: <FileCheck className="w-5 h-5 text-cyan-300" />
            },
            {
                title: 'التقديم',
                description: 'إرسال قبل الموعد مع تحديثات الجهات المنظمة',
                icon: <Clock3 className="w-5 h-5 text-blue-200" />
            },
        ]
        : [
            {
                title: 'Readiness Check',
                description: 'Gap analysis, document list, risk highlights',
                icon: <ShieldCheck className="w-5 h-5 text-emerald-300" />
            },
            {
                title: 'Audit Pack',
                description: 'Evidence prepared, reconciliations, approvals',
                icon: <FileCheck className="w-5 h-5 text-cyan-300" />
            },
            {
                title: 'Submission',
                description: 'Filed before deadline with regulator updates',
                icon: <Clock3 className="w-5 h-5 text-blue-200" />
            },
        ];

    const stats = locale === 'ar'
        ? [
            { label: 'ملفات في الوقت المحدد', value: '98%', tone: 'from-emerald-400/70 to-emerald-500/60' },
            { label: 'متوسط زمن الاستجابة', value: '< 24 ساعة', tone: 'from-cyan-400/70 to-blue-500/60' },
            { label: 'الفروع', value: 'مكتبـان', tone: 'from-blue-400/70 to-indigo-500/60' },
        ]
        : [
            { label: 'On-time filings', value: '98%', tone: 'from-emerald-400/70 to-emerald-500/60' },
            { label: 'Avg. response', value: '< 24 hrs', tone: 'from-cyan-400/70 to-blue-500/60' },
            { label: 'Locations', value: '2 Offices', tone: 'from-blue-400/70 to-indigo-500/60' },
        ];

    return (
        <section className="relative overflow-hidden bg-slate-950 text-white py-14 sm:py-16 lg:py-20" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="absolute inset-0">
                <div className="absolute -left-32 -top-24 h-72 w-72 sm:h-96 sm:w-96 bg-blue-600/20 blur-3xl rounded-full" />
                <div className="absolute right-[-20%] top-10 h-80 w-80 sm:h-[26rem] sm:w-[26rem] bg-cyan-400/10 blur-[90px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(45,212,191,0.12),transparent_35%)]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9InBhcmEiIHg9IjAiIHk9IjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVybkNvb250ZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDAgMTAgTCA2MCAxMCBNIDAgMjAgTCA2MCAyMCBNIDAgMzAgTCA2MCAzMCBNIDAgNDAgTCA2MCA0MCIgc3Ryb2tlPSJyZ2JhKDk4LDEyOSwyMDQsMC4zNSkiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvcGF0dGVybj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9InVybCgjcGFyYSkiLz48L3N2Zz4=')] opacity-[0.08]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-7 sm:space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold shadow-lg shadow-blue-900/30">
                            <Sparkles className="w-4 h-4 text-cyan-300" />
                            <span className="tracking-wide text-blue-100">
                                {t('January – April Filing Season', 'موسم التقديم من يناير إلى أبريل')}
                            </span>
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm uppercase tracking-[0.35em] text-blue-200/80">
                                {t('Audit & Tax Readiness', 'جاهزية التدقيق والضرائب')}
                            </p>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                                <span className="text-white">
                                    {t('File early.', 'قدّم مبكراً.')}
                                </span>{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-emerald-200 drop-shadow-lg">
                                    {t('Avoid penalties.', 'تجنب الغرامات.')}
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl">
                                {t(
                                    'A dedicated filing squad that prepares your audit pack, aligns with regulators, and keeps your team ahead of the 30 April 2026 deadline.',
                                    'فريق مختص بالتقديم يجهز حزمة التدقيق، ينسق مع الجهات المنظمة، ويحافظ على جاهزيتك قبل موعد 30 أبريل 2026.'
                                )}
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="grid sm:grid-cols-2 gap-4"
                        >
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5 shadow-xl">
                                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/40 to-orange-400/40 border border-red-200/20">
                                        <Calendar className="w-6 h-6 text-orange-50" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wide text-red-100/90">
                                            {t('Deadline', 'الموعد النهائي')}
                                        </p>
                                        <p className="text-2xl font-bold text-white">30 {t('April', 'أبريل')} 2026</p>
                                        <p className="text-sm text-red-100/80">
                                            {t('QR 500 per day late penalty', 'غرامة 500 ريال في اليوم للتأخير')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-md p-4 sm:p-5 shadow-xl">
                                <div className="absolute -right-10 -top-10 h-24 w-24 bg-emerald-400/20 rounded-full blur-3xl" />
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                                        <ShieldCheck className="w-6 h-6 text-emerald-200" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wide text-emerald-100/90">
                                            {t('Coverage', 'التغطية')}
                                        </p>
                                        <p className="text-2xl font-bold text-white">{t('End-to-end', 'شامل من البداية للنهاية')}</p>
                                        <p className="text-sm text-emerald-100/80">
                                            {t('Audit pack, filings, regulator updates', 'حزمة التدقيق، التقديمات، تحديثات الجهات المنظمة')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid sm:grid-cols-3 gap-3 sm:gap-4"
                        >
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center shadow-lg"
                                >
                                    <div className={`mx-auto mb-2 h-10 w-10 rounded-full bg-gradient-to-br ${stat.tone} flex items-center justify-center text-sm font-semibold text-slate-950`}>
                                        {stat.value}
                                    </div>
                                    <p className="text-sm text-blue-100/80">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isRTL ? 'items-stretch sm:flex-row-reverse' : ''}`}
                        >
                            <a
                                href="tel:+97450008194"
                                className="group relative flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-base sm:text-lg font-bold shadow-2xl shadow-blue-900/50 transition-all duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                            >
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-6 transition-transform" />
                                <span>{t('Call Now: 5000 8194', 'اتصل الآن: 8194 5000')}</span>
                            </a>
                            <a
                                href="/contact"
                                className="flex items-center justify-center gap-2 rounded-xl border border-cyan-200/40 bg-white/5 px-6 py-4 text-base font-semibold text-cyan-50 shadow-lg transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                            >
                                <span>{t('Schedule a consultation', 'احجز استشارة')}</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-5 sm:space-y-6 lg:space-y-7"
                    >
                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300" />
                            <div className="grid sm:grid-cols-2 gap-0">
                                <div className={`p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-white/10 space-y-4 ${isRTL ? 'text-right' : ''}`}>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                                        <span className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-300" />
                                        {t('Why choose us', 'لماذا تختارنا')}
                                    </h3>
                                    <ul className="space-y-3">
                                        {features.map((feature, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: 10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * idx }}
                                                className="flex items-start gap-2"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                                                <span className="text-sm sm:text-base text-blue-50/90">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                        {steps.map((step) => (
                                            <div
                                                key={step.title}
                                                className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-blue-50/90 space-y-1"
                                            >
                                                <div className="flex items-center gap-2 font-semibold text-white">
                                                    {step.icon}
                                                    <span>{step.title}</span>
                                                </div>
                                                <p className="text-xs leading-relaxed text-blue-100/80">{step.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={`p-6 sm:p-8 space-y-4 bg-gradient-to-br from-white/5 via-white/3 to-white/5 ${isRTL ? 'text-right' : ''}`}>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                                        {t('Our key services', 'خدماتنا الرئيسية')}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {services.map((service, idx) => (
                                            <motion.div
                                                key={service}
                                                initial={{ opacity: 0, y: 6 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.05 * idx }}
                                                className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-blue-50/90 border border-white/10 hover:bg-white/10 transition-colors"
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
                                                {service}
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center gap-3 text-sm text-blue-50/90">
                                        <ShieldCheck className="w-5 h-5 text-emerald-200" />
                                        <span>
                                            {t(
                                                'Certified experts coordinating with QFC, QDB, and PrimeGlobal standards.',
                                                'خبراء معتمدون ينسقون وفق معايير مركز قطر للمال وبنك قطر للتنمية وPrimeGlobal.'
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl px-4 sm:px-6 py-5"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-wide text-blue-100/80">{t('Trusted by', 'موثوق من')}</p>
                                    <p className="text-lg sm:text-xl font-semibold text-white">
                                        {t('Regional regulators & alliances', 'جهات تنظيمية وتحالفات إقليمية')}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3 sm:gap-4">
                                    {[
                                        { src: '/assets/images/qdb-logo.webp', alt: 'Qatar Development Bank' },
                                        { src: '/assets/images/qfc-logo.png', alt: 'Qatar Financial Centre' },
                                        { src: '/assets/images/primeglobal-logo.png', alt: 'PrimeGlobal' }
                                    ].map((logo) => (
                                        <div
                                            key={logo.alt}
                                            className="h-10 w-24 sm:h-12 sm:w-28 rounded-lg bg-white/90 px-2 py-1 flex items-center justify-center shadow-md border border-white/60"
                                        >
                                            <img
                                                src={logo.src}
                                                alt={logo.alt}
                                                className="h-full w-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
