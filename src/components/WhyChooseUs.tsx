'use client';

import { motion } from 'framer-motion';

const features = [
  {
    name: 'Business Growth',
    description: 'We help accelerate your business growth with expert guidance.',
    iconType: 'target',
    gradient: 'from-brand-secondary to-brand-accent',
  },
  {
    name: 'Unlimited Revision',
    description: 'We ensure complete satisfaction through unlimited revisions.',
    iconType: 'clock',
    gradient: 'from-brand-accent to-brand-accent-alt',
  },
  {
    name: 'Ultimate Perfection',
    description: 'We strive for excellence in every service we provide.',
    iconType: 'star',
    gradient: 'from-brand-secondary to-brand-accent-alt',
  },
  {
    name: 'Smart Experience',
    description: 'Benefit from our years of industry expertise.',
    iconType: 'case',
    gradient: 'from-brand-primary to-brand-secondary',
  },
  {
    name: 'Strict Deadline',
    description: 'We respect and adhere to agreed timelines.',
    iconType: 'calendar',
    gradient: 'from-brand-secondary to-brand-primary',
  },
  {
    name: 'Reputed Firm',
    description: 'A trusted name in auditing and consultancy services.',
    iconType: 'medal',
    gradient: 'from-brand-accent to-brand-secondary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const renderIcon = (type: string) => {
  switch (type) {
    case 'target':
      return (
        <svg className="w-8 h-8 text-white icon-target" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle className="target-ring-outer" cx="12" cy="12" r="10" strokeWidth="2" />
          <circle className="target-ring-inner" cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path className="target-arrow" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L11 13M18 6l-5 5" />
        </svg>
      );
    case 'clock':
      return (
        <svg className="w-8 h-8 text-white icon-clock" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path className="clock-hour" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6" />
          <path className="clock-min" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l4 2" />
        </svg>
      );
    case 'star':
      return (
        <svg className="w-8 h-8 text-white icon-star relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path className="main-star" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          <circle className="sparkle sparkle-1" cx="5" cy="5" r="1.5" fill="white" />
          <circle className="sparkle sparkle-2" cx="19" cy="19" r="1" fill="white" />
        </svg>
      );
    case 'case':
      return (
        <svg className="w-8 h-8 text-white icon-case" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <g className="case-group">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2" />
            <path className="case-handle" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
            <path opacity="0.5" d="M12 12h.01" />
          </g>
        </svg>
      );
    case 'calendar':
      return (
        <svg className="w-8 h-8 text-white icon-calendar" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect className="cal-whole" x="4" y="5" width="16" height="16" rx="2" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3v4M8 3v4M4 11h16" />
          <path className="check-mark" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 16l2 2 4-4" />
        </svg>
      );
    case 'medal':
      return (
        <svg className="w-8 h-8 text-white icon-medal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <g className="medal-whole">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l-2 5 2 2 2-2-2-5z" />
            <circle cx="12" cy="9" r="6" strokeWidth="2" />
          </g>
          <path className="medal-star" d="M12 6v3" strokeWidth="2" strokeLinecap="round" />
          <path className="medal-star" d="M12 9l2 2" strokeWidth="2" strokeLinecap="round" />
          <path className="medal-star" d="M12 9l-2 2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

export default function WhyChooseUs() {
  return (
    <div className="py-20 bg-gradient-to-b from-brand-neutral/70 via-white to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-brand-secondary/10 blur-3xl" />
        <div className="absolute left-10 bottom-0 w-72 h-72 rounded-full bg-brand-accent/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide uppercase text-brand-secondary">Our Advantages</h2>
          <p className="mt-2 text-4xl font-extrabold text-brand-primary sm:text-5xl">
            Why Choose Us?
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full"></div>
          <p className="mt-6 max-w-3xl text-xl text-brand-primary/70 lg:mx-auto leading-relaxed">
            We aim to add value to your organisation by offering practical suggestions to improve your systems and manage financial risks.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 overflow-hidden border border-transparent hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${feature.gradient}`}></div>
                
                <div className="relative flex flex-col items-center">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-xl 
                                bg-gradient-to-r ${feature.gradient} text-white 
                                transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {renderIcon(feature.iconType)}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-brand-primary group-hover:text-brand-secondary 
                              transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-base text-brand-primary/70 group-hover:text-brand-primary 
                              transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
