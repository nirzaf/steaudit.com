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
      <div className="h-full flex flex-col backdrop-blur-xl bg-white/90 rounded-2xl border border-brand-primary/10 shadow-[0_8px_30px_rgb(0,32,74,0.06)] overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-accent/20 to-brand-accent-alt/20 rounded-2xl flex items-center justify-center mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:-translate-y-1 transition-all duration-500 hover:scale-110">
              <ServiceIcon title={title} />
            </div>
            <h3 className="text-xl font-semibold text-brand-primary group-hover:text-brand-accent mb-2 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-brand-primary/70">
              {description}
            </p>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-brand-accent to-brand-accent-alt transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;

