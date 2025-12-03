import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedTarget = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 border-2 border-dashed border-brand-secondary/30 rounded-full animate-[spin_10s_linear_infinite]" />
    <div className="absolute inset-2 border-2 border-brand-secondary/20 rounded-full animate-pulse" />
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-brand-secondary relative z-10"
    >
      <circle cx="12" cy="12" r="10" className="opacity-20" />
      <circle cx="12" cy="12" r="6" className="group-hover:scale-110 transition-transform duration-500 origin-center" />
      <circle cx="12" cy="12" r="2" className="fill-brand-secondary animate-ping" style={{ animationDuration: '3s' }} />
    </svg>
    <div className="absolute inset-0 bg-brand-secondary/10 rounded-full blur-xl" />
  </div>
);

const AnimatedEye = () => (
  <div className="relative w-16 h-16 flex items-center justify-center overflow-hidden rounded-full">
    <div className="absolute inset-0 bg-brand-secondary/10 rounded-full" />
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 text-brand-secondary relative z-10"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" className="group-hover:stroke-brand-secondary transition-colors" />
      <circle cx="12" cy="12" r="3" className="fill-brand-accent/20">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="-2 0; 2 0; -2 0"
          dur="4s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />
      </circle>
      <circle cx="12" cy="12" r="1" className="fill-brand-secondary">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="-2 0; 2 0; -2 0"
          dur="4s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />
      </circle>
    </svg>
  </div>
);

export default function MissionVision() {
  return (
    <section className="pt-8 pb-24 relative overflow-hidden bg-gradient-to-b from-white to-brand-neutral/60">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute transform rotate-12 -right-40 -top-40 w-96 h-96 rounded-full bg-brand-secondary/15"></div>
        <div className="absolute transform -rotate-12 -left-40 -bottom-40 w-96 h-96 rounded-full bg-brand-accent/15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent rounded-2xl transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-brand-secondary/10 rounded-xl">
                  <AnimatedTarget />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary ml-4">Our Mission</h3>
              </div>
              <p className="text-lg text-brand-primary/70 leading-relaxed mb-6">
                Delivering excellence in auditing and consultancy services through innovative solutions and unwavering commitment to quality.
              </p>
              <ul className="space-y-3">
                {['Professional Excellence', 'Client Satisfaction', 'Innovative Solutions'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <ArrowRight className="w-5 h-5 text-brand-secondary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent rounded-2xl transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-brand-secondary/10 rounded-xl">
                  <AnimatedEye />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary ml-4">Our Vision</h3>
              </div>
              <p className="text-lg text-brand-primary/70 leading-relaxed mb-6">
                Shaping the future of financial services in Qatar by setting new standards of excellence and innovation in auditing and consultancy.
              </p>
              <ul className="space-y-3">
                {['Industry Leadership', 'Continuous Innovation', 'Regional Excellence'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <ArrowRight className="w-5 h-5 text-brand-secondary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
