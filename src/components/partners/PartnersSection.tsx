import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

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
    <section className="py-16 bg-gradient-to-b from-brand-primary/5 to-[#00204A]/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,198,53,0.04),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,198,53,0.04),transparent_40%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="backdrop-blur-xl bg-white/90 rounded-2xl border border-brand-primary/10 shadow-[0_8px_30px_rgb(0,32,74,0.06)] overflow-hidden">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-1/3 relative group">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Award icon */}
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-brand-accent to-brand-accent-alt p-3 rounded-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <Award className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-medium text-brand-primary tracking-tight">
                          {partner.name}
                        </h2>
                        <div className="flex items-center mt-2">
                          <div className="h-px w-8 bg-[#FFC635]"></div>
                          <p className="ml-3 text-brand-primary font-medium">{partner.title}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {partner.description.map((paragraph, i) => (
                          <p key={i} className="text-brand-primary/70 text-sm leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
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

