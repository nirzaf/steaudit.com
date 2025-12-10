'use client';

import { motion } from 'framer-motion';
import { Phone, CheckCircle2, AlertCircle, Calendar, Sparkles } from 'lucide-react';

export default function AuditFilingBanner() {
    const features = [
        "Ensure all financials are ready before 30 April",
        "Meet regulatory standards without stress",
        "Expert guidance for smooth audits and tax",
        "Streamlined processes to save time"
    ];

    const services = [
        "External & Internal Audit Services",
        "Tax Consultancy Services",
        "Book Keeping & Accounting",
        "Assurance Services",
        "Financial Due Diligence",
        "Forensic & Other Investigation",
        "Business Advisory & Consulting",
        "Capital Gain Tax Services"
    ];

    return (
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            {/* Enhanced Background patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Animated grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Headline & Deadline */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border border-blue-400/50 text-white font-semibold text-xs sm:text-sm mb-4 sm:mb-6 shadow-lg shadow-blue-900/30"
                            >
                                <Sparkles className="w-4 h-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">January to April Filing Season</span>
                            </motion.div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-3 sm:mb-4">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                                    style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.3)' }}
                                >
                                    2025
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300"
                                    style={{
                                        textShadow: '0 2px 20px rgba(59,130,246,0.8), 0 0 60px rgba(34,211,238,0.6)',
                                        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))'
                                    }}
                                >
                                    AUDIT FILING
                                </motion.span>
                            </h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-lg sm:text-xl md:text-2xl font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                            >
                                Audit with Confidence
                            </motion.p>
                        </div>

                        {/* Deadline Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl">
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <div className="p-3 sm:p-4 bg-gradient-to-br from-red-500/40 to-orange-500/40 rounded-xl border border-red-300/30 shadow-lg">
                                        <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-red-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">Deadline For Submission</h3>
                                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300 mb-3 sm:mb-4"
                                           style={{
                                               textShadow: '0 2px 16px rgba(239,68,68,0.8), 0 0 40px rgba(251,146,60,0.6)',
                                               filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                                           }}
                                        >
                                            30 April 2026
                                        </p>
                                        <div className="flex items-start gap-2 text-white bg-red-950/60 backdrop-blur-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm border border-red-800/60 shadow-lg">
                                            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
                                            <span className="leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Delay will cause <strong className="font-extrabold text-red-200">QR 500 per day</strong> penalty</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <a
                                href="tel:+97450008194"
                                className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl shadow-blue-900/50 hover:shadow-2xl hover:shadow-blue-800/60 hover:scale-105 active:scale-95"
                            >
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                                <span>Call Now: 5000 8194</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Services & Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-5 sm:space-y-6 lg:space-y-8"
                    >
                        {/* Why Choose Us */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-600/50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
                                <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center gap-3 !text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
                                >
                                    <span className="w-1 h-7 sm:h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></span>
                                    WHY CHOOSE US
                                </h3>
                                <ul className="space-y-3 sm:space-y-4">
                                    {features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3 group/item"
                                        >
                                            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform drop-shadow-[0_2px_6px_rgba(16,185,129,0.5)]" />
                                            <span className="text-sm sm:text-base text-white font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Key Services */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-10 group-hover:opacity-20 blur transition duration-300"></div>
                            <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-lg border border-slate-600/40 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
                                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 !text-white flex items-center gap-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
                                >
                                    <span className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.8)]"></span>
                                    OUR KEY SERVICES
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                    {services.map((service, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + (idx * 0.05), duration: 0.3 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-white font-medium p-2 rounded-lg hover:bg-slate-700/40 transition-colors"
                                        >
                                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                            <span className="leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{service}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Logos */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 items-center justify-center lg:justify-start pt-4"
                        >
                            {[
                                { src: "/assets/images/qdb-logo.webp", alt: "Qatar Development Bank" },
                                { src: "/assets/images/qfc-logo.png", alt: "Qatar Financial Centre" },
                                { src: "/assets/images/primeglobal-logo.png", alt: "PrimeGlobal" }
                            ].map((logo, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9 + (idx * 0.1), duration: 0.3 }}
                                    viewport={{ once: true }}
                                    className="relative h-12 w-28 sm:h-14 sm:w-32 lg:h-16 lg:w-40 bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-lg hover:scale-105 hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl group"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="w-full h-full object-contain grayscale-0 group-hover:grayscale-0 transition-all"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                    </motion.div>
                </div>
            </div >
        </section >
    );
}
