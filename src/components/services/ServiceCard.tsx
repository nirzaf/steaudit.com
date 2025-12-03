import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../types/service';
import ServiceIcon from './ServiceIcon';

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, index }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="h-full flex flex-col rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-transparent group-hover:-translate-y-1">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-brand-secondary/30 via-brand-accent/30 to-brand-accent-alt/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex-1 p-8 flex flex-col justify-between gap-6">
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <div className="w-full flex justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-brand-secondary/10 to-brand-accent/15 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(56,178,172,0.15)]">
                <ServiceIcon title={title} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-brand-primary/70 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-brand-secondary to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
