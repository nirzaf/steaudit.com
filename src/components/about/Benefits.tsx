'use client';

import { Heart, DollarSign, Clock4, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  { 
    name: 'We Do Things With Love And Passion',
    description: 'Every project is handled with utmost care and dedication to ensure exceptional quality and outstanding results.',
    icon: Heart 
  },
  { 
    name: 'Affordable Price Range',
    description: 'Competitive pricing without compromising on the quality of our services, delivering maximum value for your investment.',
    icon: DollarSign 
  },
  { 
    name: 'Receive on Time',
    description: 'We value your time and ensure timely delivery of all our commitments, maintaining strict adherence to project schedules.',
    icon: Clock4 
  },
  { 
    name: 'Satisfaction Guaranteed',
    description: 'Your satisfaction is our priority, backed by our commitment to excellence and continuous support throughout the process.',
    icon: CheckCircle2 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-neutral/60 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,108,176,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,178,172,0.08),transparent_40%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.name}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="relative p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-brand-secondary/10 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition-shadow duration-500 h-full flex flex-col">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-secondary/25 to-transparent"></div>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-secondary/25 to-transparent"></div>
                
                <div className="relative flex flex-col flex-1">
                  {/* Icon container with gradient background */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-brand-secondary/15 blur-2xl rounded-full transform -translate-y-1/2"></div>
                    <div className="relative bg-gradient-to-br from-brand-secondary to-brand-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <benefit.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col flex-1 justify-between">
                    <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">
                      {benefit.name}
                    </h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
