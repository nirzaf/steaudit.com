import { Award, Clock, Target, Briefcase, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Business Growth',
    description: 'We help accelerate your business growth with expert guidance.',
    icon: Target,
    gradient: 'from-brand-secondary to-brand-accent',
  },
  {
    name: 'Unlimited Revision',
    description: 'We ensure complete satisfaction through unlimited revisions.',
    icon: Clock,
    gradient: 'from-brand-accent to-brand-accent-alt',
  },
  {
    name: 'Ultimate Perfection',
    description: 'We strive for excellence in every service we provide.',
    icon: Star,
    gradient: 'from-brand-secondary to-brand-accent-alt',
  },
  {
    name: 'Smart Experience',
    description: 'Benefit from our years of industry expertise.',
    icon: Briefcase,
    gradient: 'from-brand-primary to-brand-secondary',
  },
  {
    name: 'Strict Deadline',
    description: 'We respect and adhere to agreed timelines.',
    icon: Calendar,
    gradient: 'from-brand-secondary to-brand-primary',
  },
  {
    name: 'Reputed Firm',
    description: 'A trusted name in auditing and consultancy services.',
    icon: Award,
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
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
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
