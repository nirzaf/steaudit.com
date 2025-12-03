'use client';

import { motion } from 'framer-motion';
import ServiceIcon from './services/ServiceIcon';
import { services as servicesData } from '../data/services';

export default function Services() {
  return (
    <div id="services" className="bg-gradient-to-b from-brand-neutral/60 via-white to-white pb-16 pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
            Comprehensive solutions for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.slice(0, 9).map((service, index) => (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              key={service.title}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 via-white to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 flex flex-col items-center text-center gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(56,178,172,0.15)]">
                  <ServiceIcon title={service.title} />
                </div>
                <h3 className="text-xl font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-primary/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
