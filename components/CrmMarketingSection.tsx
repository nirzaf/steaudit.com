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
    MessageSquare,
    ClipboardCheck,
    Cpu,
    UserCheck,
    TrendingUp,
    ChevronRight,
    ArrowRight,
    LayoutGrid,
    BookOpen,
    Landmark,
    Globe,
    BarChart3,
    FileSpreadsheet,
    Wallet,
    ArrowDownLeft,
    Truck,
    Percent,
    Building2,
    Calculator,
    Package,
    Users,
    Combine,
    Key,
    Receipt
} from 'lucide-react';
import Link from 'next/link';

const FlowStep = ({ icon: Icon, title, description, isLast, isRTL }: { icon: any, title: string, description: string, isLast?: boolean, isRTL: boolean }) => (
    <div className="relative flex flex-col items-center text-center group flex-1">
        {/* Step Marker */}
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 border-site-accent flex items-center justify-center shadow-lg relative z-10 transition-colors duration-300 group-hover:bg-site-accent"
        >
            <Icon className="w-8 h-8 text-site-accent group-hover:text-white transition-colors duration-300" />
            
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-2xl border-4 border-site-accent/20 animate-ping opacity-0 group-hover:opacity-100" />
        </motion.div>

        {/* Content */}
        <div className="mt-6">
            <h4 className="text-lg font-bold text-site-text dark:text-white mb-2">{title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[200px]">{description}</p>
        </div>

        {/* Connector Line (Desktop) */}
        {!isLast && (
            <div className={`hidden lg:block absolute top-8 ${isRTL ? '-left-1/2 translate-x-12' : '-right-1/2 -translate-x-12'} w-full h-[2px] bg-gradient-to-r from-site-accent/50 to-transparent z-0`}>
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className={`h-full bg-site-accent origin-${isRTL ? 'right' : 'left'}`}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </div>
        )}
    </div>
);

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
        ctaButton: isRTL ? "تسجيل الدخول إلى بوابة CRM" : "Login to CRM Portal",
        accounting: {
            title: isRTL ? "نظام المحاسبة المتكامل لـ STE للتدقيق" : "Bespoke Accounting System for STE Auditing",
            subtitle: isRTL 
                ? "ارتقِ بإدارتك المالية مع نظام محاسبة متكامل مصمم خصيصاً لتلبية احتياجاتك الاحترافية"
                : "Elevate your financial management with an integrated accounting system custom-designed for professional excellence.",
            note: isRTL
                ? "تم تطويره وتخصيصه لضمان التكامل التام مع عمليات STE للتدقيق."
                : "Custom-developed and tailored to ensure seamless integration with STE Auditing operations.",
            flowTitle: isRTL ? "كيف تعمل الدورة المحاسبية" : "How the Accounting Lifecycle Works",
            coreFeaturesTitle: isRTL ? "الميزات الأساسية" : "Core Features",
            advancedFeaturesTitle: isRTL ? "قدرات متقدمة" : "Advanced Capabilities",
            coreFeatures: [
                {
                    icon: <LayoutGrid className="w-6 h-6 text-site-accent" />,
                    title: isRTL ? "دليل الحسابات" : "Chart of Accounts",
                    text: isRTL ? "فئات منظمة للأصول والالتزامات وحقوق الملكية والدخل والمصاريف." : "Structured categories for assets, liabilities, equity, income, and expenses."
                },
                {
                    icon: <BookOpen className="w-6 h-6 text-site-accent" />,
                    title: isRTL ? "القيد المزدوج" : "Double-Entry Bookkeeping",
                    text: isRTL ? "دفاتر يومية وأستاذ دقيقة مع إدارة كاملة للقيود." : "Accurate ledgers and journals with comprehensive journal entry management."
                },
                {
                    icon: <Landmark className="w-6 h-6 text-site-accent" />,
                    title: isRTL ? "التسوية البنكية" : "Banking & Reconciliation",
                    text: isRTL ? "تتبع واستيراد المعاملات البنكية ومطابقتها مع الكشوف." : "Track bank transactions and reconcile accounts with ease."
                },
                {
                    icon: <Globe className="w-6 h-6 text-site-accent" />,
                    title: isRTL ? "دعم العملات المتعددة" : "Multi-Currency Support",
                    text: isRTL ? "تحويلات العملات في الوقت الفعلي للتعامل مع العملاء الدوليين." : "Real-time currency conversions for seamless international operations."
                },
                {
                    icon: <BarChart3 className="w-6 h-6 text-site-accent" />,
                    title: isRTL ? "التقارير المالية" : "Financial Reports",
                    text: isRTL ? "الأرباح والخسائر، الميزانية العمومية، التدفقات النقدية، وملخصات الضرائب." : "Professional P&L, Balance Sheets, Cash Flow, and Tax summaries."
                }
            ],
            advancedFeatures: [
                { icon: FileSpreadsheet, title: isRTL ? "إدارة الفواتير" : "Invoice Management" },
                { icon: Wallet, title: isRTL ? "إدارة المصاريف" : "Expense Management" },
                { icon: ArrowDownLeft, title: isRTL ? "الحسابات المدينة" : "Accounts Receivable" },
                { icon: Truck, title: isRTL ? "إدارة الموردين" : "Vendor Management" },
                { icon: Percent, title: isRTL ? "إدارة الضرائب" : "Tax Management" },
                { icon: Building2, title: isRTL ? "تعدد الشركات" : "Multi-Company" },
                { icon: Calculator, title: isRTL ? "الميزانية والتنبؤ" : "Budget & Forecast" },
                { icon: Package, title: isRTL ? "الأصول الثابتة" : "Fixed Assets" },
                { icon: Users, title: isRTL ? "تكامل الرواتب" : "Payroll Integration" },
                { icon: LayoutGrid, title: isRTL ? "تكامل المخزون" : "Inventory Integration" },
                { icon: Combine, title: isRTL ? "الربط البنكي" : "Bank Integration" },
            ]
        },
        ctaTitle: isRTL ? "هل أنت مستعد لاتخاذ الخطوة التالية؟" : "Ready to take the next step?"
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

                {/* Visual Flow Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 mb-20"
                >
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-site-text dark:text-white mb-4">
                            {isRTL ? "كيف يعمل نظام إدارة التدقيق الخاص بنا" : "How Our Auditing Management System Works"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {isRTL 
                                ? "عملية مبسطة ومؤتمتة تضمن الدقة والشفافية في كل خطوة."
                                : "A streamlined, automated process ensuring accuracy and transparency at every step."}
                        </p>
                    </div>

                    <div className={`flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-4 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                        <FlowStep 
                            isRTL={isRTL}
                            icon={ClipboardCheck}
                            title={isRTL ? "إعداد التدقيق" : "Audit Setup"}
                            description={isRTL ? "بدء المشروع وتحديد المعالم من خلال بوابة CRM المتكاملة." : "Project initiation and milestone setting through our integrated CRM portal."}
                        />
                        <FlowStep 
                            isRTL={isRTL}
                            icon={Cpu}
                            title={isRTL ? "التحليل الذكي" : "Smart Analysis"}
                            description={isRTL ? "معالجة البيانات آلياً لتقليل الأخطاء البشرية وضمان الامتثال." : "Automated data processing to reduce human error and ensure compliance."}
                        />
                        <FlowStep 
                            isRTL={isRTL}
                            icon={UserCheck}
                            title={isRTL ? "مراجعة العميل" : "Client Review"}
                            description={isRTL ? "تفاعل مباشر وبوابة آمنة للمراجعة والتوقيعات الرقمية." : "Real-time interaction and secure portal for reviews and digital signatures."}
                        />
                        <FlowStep 
                            isRTL={isRTL}
                            isLast
                            icon={TrendingUp}
                            title={isRTL ? "الوضوح الاستراتيجي" : "Strategic Clarity"}
                            description={isRTL ? "تقديم رؤى مالية دقيقة تمكنك من اتخاذ قرارات نمو واثقة." : "Delivering precise financial insights that empower confident growth decisions."}
                        />
                    </div>
                </motion.div>

                {/* Accounting Module Section */}
                <div id="accounting-module" className="mt-40 pt-20 border-t border-gray-100 dark:border-gray-800">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-site-accent/10 text-site-accent text-sm font-bold mb-4 uppercase tracking-wider">
                            {isRTL ? "حلول مالية متكاملة" : "Integrated Financial Solutions"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-site-text dark:text-white mb-6">
                            {content.accounting.title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
                            {content.accounting.subtitle}
                        </p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 italic">
                            {content.accounting.note}
                        </p>
                    </motion.div>

                    {/* Accounting Flow */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-site-text dark:text-white">{content.accounting.flowTitle}</h3>
                        </div>
                        <div className={`flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-4 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                            <FlowStep 
                                isRTL={isRTL}
                                icon={Receipt}
                                title={isRTL ? "التقاط المعاملات" : "Transaction Capture"}
                                description={isRTL ? "فواتير، مصاريف، وتغذيات بنكية في مكان واحد." : "Invoices, expenses, and bank feeds simplified in one place."}
                            />
                            <FlowStep 
                                isRTL={isRTL}
                                icon={BookOpen}
                                title={isRTL ? "محرك القيد المزدوج" : "Double-Entry Engine"}
                                description={isRTL ? "إنشاء تلقائي للقيود المحاسبية بدقة تامة." : "Automated journal entries for 100% financial accuracy."}
                            />
                            <FlowStep 
                                isRTL={isRTL}
                                icon={Combine}
                                title={isRTL ? "تسوية شاملة" : "Global Reconciliation"}
                                description={isRTL ? "مطابقة ذكية عبر العملات والحسابات المتعددة." : "Smart matching across currencies and bank accounts."}
                            />
                            <FlowStep 
                                isRTL={isRTL}
                                isLast
                                icon={BarChart3}
                                title={isRTL ? "التمكن المالي" : "Financial Mastery"}
                                description={isRTL ? "تقارير وتحليلات فورية لدعم قراراتك." : "Real-time reports and analytics to guide your growth."}
                            />
                        </div>
                    </div>

                    {/* Core Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-20">
                        {content.accounting.coreFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 bg-site-accent/5 rounded-lg flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h4 className="font-bold text-site-text dark:text-white mb-2 text-sm">{feature.title}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Advanced Features */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-site-text dark:text-white mb-8 text-center">{content.accounting.advancedFeaturesTitle}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {content.accounting.advancedFeatures.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="flex flex-col items-center text-center space-y-3"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700">
                                            <Icon className="w-5 h-5 text-site-accent" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{feature.title}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
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

                    <div className="flex flex-col items-center justify-center space-y-8">
                        <h4 className="text-xl font-semibold text-site-text dark:text-white">
                            {content.ctaTitle}
                        </h4>

                        <Link
                            href="https://crm.steaudit.com/authentication/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-site-accent rounded-full hover:bg-site-accent/90 transform hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl shadow-site-accent/30"
                        >
                            {content.ctaButton}
                            <svg className={`w-5 h-5 ${isRTL ? 'mr-3 rotate-180' : 'ml-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
