'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, CheckCircle2 } from 'lucide-react';

interface Partner {
  name: string;
  title: string;
  image: string;
  description: string[];
}

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-primary/5 via-white to-[#00204A]/5 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,198,53,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,198,53,0.08),transparent_50%)] pointer-events-none"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="space-y-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent via-brand-accent-alt to-brand-accent opacity-20 group-hover:opacity-40 rounded-3xl blur transition-all duration-500"></div>

                {/* Main card */}
                <div className="relative backdrop-blur-xl bg-white/95 rounded-3xl border border-brand-primary/10 shadow-[0_20px_60px_-15px_rgba(0,32,74,0.15)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_25px_70px_-15px_rgba(0,32,74,0.25)]">
                  <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className="aspect-[4/5] md:aspect-auto md:h-full relative">
                        {/* Image */}
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 via-transparent to-brand-accent/30 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                        {/* Animated gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-brand-accent/30 to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-primary/30 to-transparent"></div>
                      </div>

                      {/* Floating Award Badge */}
                      <motion.div
                        className="absolute -bottom-6 -right-6 z-10"
                        whileHover={{ scale: 1.1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative">
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent to-brand-accent-alt rounded-2xl blur-xl opacity-60"></div>
                          {/* Badge */}
                          <div className="relative bg-gradient-to-br from-brand-accent to-brand-accent-alt p-4 rounded-2xl shadow-2xl transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                            <Award className="w-8 h-8 text-brand-primary" strokeWidth={2} />
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                      {/* Decorative accent bar */}
                      <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-transparent via-brand-accent to-transparent opacity-40"></div>

                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-3">
                          {/* Name with gradient */}
                          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-primary via-brand-primary to-[#00204A]/80 bg-clip-text text-transparent leading-tight">
                            {partner.name}
                          </h2>

                          {/* Title with icon */}
                          <div className="flex items-center gap-3">
                            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-brand-accent to-transparent"></div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-accent/10 to-brand-accent-alt/10 rounded-full border border-brand-accent/20">
                              <Briefcase className="w-4 h-4 text-brand-accent" strokeWidth={2} />
                              <p className="text-brand-primary font-semibold text-sm tracking-wide">
                                {partner.title}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4 pt-2">
                          {partner.description.map((paragraph, i) => (
                            <div key={i} className="flex gap-3 group/item">
                              {/* Bullet point */}
                              <div className="flex-shrink-0 mt-1.5">
                                <CheckCircle2 className="w-4 h-4 text-brand-accent opacity-60 group-hover/item:opacity-100 transition-opacity" strokeWidth={2} />
                              </div>
                              {/* Text */}
                              <p className={`leading-relaxed transition-colors ${i === 0
                                  ? 'text-brand-primary/90 font-medium text-base'
                                  : 'text-brand-primary/70 text-sm'
                                }`}>
                                {paragraph}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom decorative element */}
                      <div className="absolute bottom-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <Award className="w-32 h-32 text-brand-accent" strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
