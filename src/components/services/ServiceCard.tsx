import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../types/service';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="h-full flex flex-col backdrop-blur-xl bg-white/90 rounded-2xl border border-[#00204A]/10 shadow-[0_8px_30px_rgb(0,32,74,0.06)] overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FFC635]/20 to-[#FFD700]/20 rounded-2xl flex items-center justify-center mb-4 transform -rotate-6 group-hover:rotate-0 transition-all duration-500 hover:scale-110">
              {React.createElement(icon, { className: "w-12 h-12 text-[#FFC635]" })}
            </div>
            <h3 className="text-xl font-semibold text-[#00204A] mb-2">
              {title}
            </h3>
            <p className="text-[#00204A]/70">
              {description}
            </p>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-[#FFC635] to-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
