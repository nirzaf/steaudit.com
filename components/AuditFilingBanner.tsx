'use client';

import { motion } from 'framer-motion';
import { Phone, CheckCircle2, AlertCircle, ArrowRight, Calendar, Calculator } from 'lucide-react';
import Link from 'next/link';

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
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Headline & Deadline */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-sm mb-4"
                            >
                                January to April
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-2">
                                <span className="text-white">2025</span><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AUDIT FILING</span>
                            </h2>
                            <p className="text-2xl font-light text-blue-100">Audit with Confidence</p>
                        </div>

                        {/* Deadline Card */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-red-500/20 rounded-lg">
                                        <Calendar className="w-8 h-8 text-red-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Deadline For Submission</h3>
                                        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                                            30 April 2026
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-red-300 bg-red-950/30 px-3 py-2 rounded-lg text-sm">
                                            <AlertCircle className="w-4 h-4" />
                                            <span>Delay will Cause Qr500 Per Day</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:+97450008194" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-900/70 hover:scale-105 active:scale-95">
                                <Phone className="w-6 h-6" />
                                <span>Call Now: 5000 8194</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Services & Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Why Choose Us */}
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                                WHY CHOOSE US
                            </h3>
                            <ul className="space-y-4">
                                {features.map((feature, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (idx * 0.1) }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                                        <span className="text-slate-200">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Key Services */}
                        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8">
                            <h3 className="text-xl font-bold mb-4 text-white">OUR KEY SERVICES</h3>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {services.map((service, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-100 font-medium">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        {service}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer Logos */}
                        <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start mt-8">
                            <div className="relative h-16 w-40 bg-white/90 p-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm">
                                <img
                                    src="/assets/images/qdb-logo.webp"
                                    alt="Qatar Development Bank"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="relative h-16 w-40 bg-white/90 p-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm">
                                <img
                                    src="/assets/images/qfc-logo.png"
                                    alt="Qatar Financial Centre"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="relative h-16 w-40 bg-white/90 p-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm">
                                <img
                                    src="/assets/images/primeglobal-logo.png"
                                    alt="PrimeGlobal"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div >
        </section >
    );
}
