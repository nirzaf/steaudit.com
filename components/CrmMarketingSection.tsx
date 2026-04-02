'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/components/LocaleProvider';
import {
    Clock,
    FileText,
    CreditCard,
    Lock,
    Shield,
    RefreshCcw,
    Laptop,
    PenTool,
    MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function CrmMarketingSection() {
    const { isRTL } = useLocale();

    const content = {
        title: isRTL
            ? "تدقيق إس تي إي: إعادة تعريف التميز من خلال حلول التدقيق المعتمدة على التكنولوجيا"
            : "STE Auditing: Redefining Excellence with Technology-Driven Auditing Solutions",
        description: isRTL
            ? "في إس تي إي للتدقيق، نؤمن بأن أساس العمل الناجح يُبنى على الشفافية والدقة والثقة. وللوفاء بهذا الوعد، قمنا بدمج نظام إدارة تدقيق متطور في عملياتنا الأساسية، لضمان حصول عملائنا على خدمات تدقيق عالمية المستوى بكفاءة وتفاعل لا مثيل لهما."
            : "At STE Auditing, we believe that the foundation of a successful business is built on transparency, precision, and trust. To deliver on this promise, we have integrated a cutting-edge Auditing Management System into our core operations, ensuring our clients receive world-class auditing services with unparalleled efficiency and interactivity.",
        sections: [
            {
                title: isRTL ? "الكفاءة في جوهرها" : "Efficiency at Its Core",
                description: isRTL
                    ? "يتيح لنا نظام إدارة المشاريع والعلاقات الخاص بنا تبسيط كل خطوة من خطوات دورة التدقيق."
                    : "Our proprietary CRM and project management platform allows us to streamline every step of the auditing lifecycle:",
                features: [
                    {
                        icon: <Clock className="w-6 h-6 text-site-accent" />,
                        title: isRTL ? "إدارة المشاريع بدقة" : "Precision Project Management",
                        text: isRTL ? "تتبع المعالم وإدارة المهام في الوقت الفعلي لضمان إنجاز التدقيق في الوقت المحدد." : "We track every audit milestone using advanced Gantt charts and real-time task management. This ensures that your audits are completed on time, every time, with zero oversight."
                    },
                    {
                        icon: <FileText className="w-6 h-6 text-site-accent" />,
                        title: isRTL ? "تقارير التدقيق الآلية" : "Automated Audit Reporting",
                        text: isRTL ? "من إعلانات التدقيق إلى تقارير الرأي، يقوم نظامنا بأتمتة التوثيق لتقليل الأخطاء." : "From Audit Announcements to Opinion Reports, our system automates documentation, reducing human error and ensuring that your reports meet the highest professional standards."
                    },
                    {
                        icon: <CreditCard className="w-6 h-6 text-site-accent" />,
                        title: isRTL ? "عمليات مالية سلسة" : "Seamless Financial Operations",
                        text: isRTL ? "تقديرات فورية وفواتير آلية ومعالجة دفع آمنة." : "Our integrated accounting module allows for instant estimates, automated invoicing in multiple currencies, and secure payment processing, making your financial interactions with us smooth and hassle-free."
                    }
                ]
            },
            {
                title: isRTL ? "تفاعل غير مسبوق مع العملاء" : "Unmatched Client Interactivity",
                description: isRTL
                    ? "نحن لا نعمل من أجلك فقط؛ بل نعمل معك من خلال بوابة تفاعلية مخصصة:"
                    : "We don't just work for you; we work with you. Our platform bridges the gap between auditors and clients through a dedicated interactive portal:",
                features: [
                    {
                        icon: <Laptop className="w-6 h-6 text-site-accent" />,
                        title: isRTL ? "بوابة عملاء آمنة 24/7" : "Secure 24/7 Client Portal",
                        text: isRTL ? "الوصول إلى مستنداتك وتقدم التدقيق والبيانات التاريخية في أي وقت ومن أي مكان." : "Access your documents, audit progress, and historical data anytime, anywhere. Our portal serves as a single source of truth for all your auditing needs."
                    },
                    {
                        icon: <PenTool className="w-6 h-6 text-site-accent" />,
                        title: isRTL ? "التحول الرقمي" : "Digital Transformation",
                        text: isRTL ? "قل وداعًا للأعمال الورقية المادية من خلال دعم التوقيع الرقمي الآلي." : "Say goodbye to physical paperwork. With integrated Digital Signature support and automated Proposals, you can review and approve contracts instantly from your device."
                    },
                    {
                        icon: <MessageSquare className="w-6 h-6 text-site-accent" />,
                        title: isRTL ? "تواصل شفاف" : "Transparent Communication",
                        text: isRTL ? "نظام تذاكر متكامل وإشعارات فورية عبر البريد الإلكتروني والرسائل القصيرة." : "Our integrated Ticketing System and real-time email/SMS notifications ensure you are never in the dark about your audit status. Have a question? Our support team is just a click away."
                    }
                ]
            },
            {
                title: isRTL ? "الأمان والامتثال والثقة" : "Safety, Compliance, and Trust",
                description: isRTL
                    ? "بياناتك هي أثمن أصولك، ونحن نحميها بأمان على مستوى المؤسسات:"
                    : "Your data is your most valuable asset, and we protect it with enterprise-grade security:",
                features: [
                    {
                        icon: <Lock className="w-6 h-6 text-site-accent" />,
                        title: isRTL ? "أمان على مستوى المؤسسات" : "Enterprise-Grade Security",
                        text: isRTL ? "حماية كل تفاعل من خلال المصادقة الثنائية وسجلات النشاط التفصيلية." : "Every interaction is protected by Two-Factor Authentication (2FA) and detailed activity logs, ensuring that only authorized personnel can access sensitive information."
                    },
                    {
                        icon: <Shield className="w-6 h-6 text-site-accent" />,
                        title: isRTL ? "الامتثال وخصوصية البيانات" : "GDPR & Data Privacy",
                        text: isRTL ? "أدوات قوية لإدارة الموافقة على البيانات والخصوصية وفقًا للوائح الدولية." : "Our system is built with compliance in mind. We provide robust tools for managing data consent and privacy, ensuring your business stays compliant with international regulations."
                    },
                    {
                        icon: <RefreshCcw className="w-6 h-6 text-site-accent" />,
                        title: isRTL ? "سلامة البيانات" : "Data Integrity",
                        text: isRTL ? "نسخ احتياطية مشفرة ومؤتمتة تضمن سلامة بياناتك وقابليتها للاسترداد." : "Automated, encrypted backups mean your data is safe and recoverable under any circumstances."
                    }
                ]
            }
        ],
        empoweringTitle: isRTL ? "تمكين نجاح عملك" : "Empowering Your Business Success",
        empoweringText: isRTL
            ? "باختيارك إس تي إي للتدقيق، فأنت تتعاون مع شركة تستفيد من التكنولوجيا لتقديم رؤى أعمق ونتائج أسرع. نهجنا التكنولوجي المتقدم يسمح لنا بالتركيز على تزويدك بالوضوح المالي الاستراتيجي لتنمية عملك."
            : "By choosing STE Auditing, you are partnering with a firm that leverages technology to provide deeper insights and faster results. Our tech-forward approach allows us to focus more on what matters most: providing you with the strategic financial clarity to grow your business.",
        ctaTitle: isRTL ? "هل أنت مستعد لتجربة مستقبل التدقيق؟" : "Ready to experience the future of auditing?",
        ctaButton: isRTL ? "تسجيل الدخول إلى بوابة CRM" : "Login to CRM Portal",
        ctaNote: isRTL ? "تم إنشاؤه بواسطة إس تي إي للتدقيق - شريكك في النمو المالي." : "Generated by STE Auditing – Your Partner in Financial Growth."
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 bg-site-bg dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-site-text dark:text-white mb-6">
                        {content.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {content.sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/40 dark:shadow-none border border-gray-100 dark:border-gray-700"
                        >
                            <div className="mb-10 text-center md:text-start">
                                <h3 className="text-2xl font-bold text-site-text dark:text-white mb-4">{section.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{section.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {section.features.map((feature, fIdx) => (
                                    <motion.div
                                        key={fIdx}
                                        variants={itemVariants}
                                        className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                                    >
                                        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-sm mb-6">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-site-text dark:text-white mb-3">{feature.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 bg-gradient-to-br from-site-accent/10 to-transparent dark:from-site-accent/20 rounded-3xl p-8 md:p-12 text-center border border-site-accent/20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-site-text dark:text-white mb-6">
                        {content.empoweringTitle}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        {content.empoweringText}
                    </p>

                    <div className="flex flex-col items-center justify-center space-y-6">
                        <h4 className="text-xl font-semibold text-site-text dark:text-white">
                            {content.ctaTitle}
                        </h4>

                        <Link
                            href="https://crm.steaudit.com/authentication/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-site-accent rounded-full hover:bg-site-accent/90 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl shadow-site-accent/30"
                        >
                            {content.ctaButton}
                            <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>

                        <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-8">
                            {content.ctaNote}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
