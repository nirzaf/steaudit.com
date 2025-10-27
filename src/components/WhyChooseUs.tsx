import { Award, Clock, Target, Briefcase, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Business Growth',
    description: 'We help accelerate your business growth with expert guidance.',
    icon: Target,
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    name: 'Unlimited Revision',
    description: 'We ensure complete satisfaction through unlimited revisions.',
    icon: Clock,
    gradient: 'from-emerald-400 to-teal-600',
  },
  {
    name: 'Ultimate Perfection',
    description: 'We strive for excellence in every service we provide.',
    icon: Star,
    gradient: 'from-amber-400 to-orange-600',
  },
  {
    name: 'Smart Experience',
    description: 'Benefit from our years of industry expertise.',
    icon: Briefcase,
    gradient: 'from-purple-400 to-pink-600',
  },
  {
    name: 'Strict Deadline',
    description: 'We respect and adhere to agreed timelines.',
    icon: Calendar,
    gradient: 'from-red-400 to-rose-600',
  },
  {
    name: 'Reputed Firm',
    description: 'A trusted name in auditing and consultancy services.',
    icon: Award,
    gradient: 'from-cyan-400 to-blue-600',
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
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -skew-y-12 transform bg-blue-50 opacity-50 w-full h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center mb-16">
          <p className="text-base font-semibold tracking-wide uppercase text-blue-600">Our Advantages</p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Why Choose Us?
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-blue-600 rounded-full"></div>
          <p className="mt-6 max-w-3xl text-xl text-gray-500 lg:mx-auto leading-relaxed">
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
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                          transition-all duration-300 p-8 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 
                              transition-opacity duration-300 ${feature.gradient}"></div>
                
                <div className="relative flex flex-col items-start">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-xl 
                                bg-gradient-to-r ${feature.gradient} text-white 
                                transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-blue-600 
                              transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500 group-hover:text-gray-600 
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