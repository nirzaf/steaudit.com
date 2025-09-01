import { Heart, DollarSign, Clock4, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    name: 'Passion-Driven Work',
    description:
      'Every project is infused with genuine care and dedication, ensuring exceptional quality and outstanding results.',
    icon: Heart,
  },
  {
    name: 'Affordable Excellence',
    description:
      'We offer competitive pricing without ever compromising on the quality of our services, delivering maximum value.',
    icon: DollarSign,
  },
  {
    name: 'Timely Delivery',
    description:
      'Your time is valuable. We guarantee on-time delivery of all commitments, adhering strictly to project schedules.',
    icon: Clock4,
  },
  {
    name: 'Guaranteed Satisfaction',
    description:
      'Your satisfaction is our ultimate goal, backed by a commitment to excellence and continuous support.',
    icon: CheckCircle2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Benefits() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Our Core Benefits
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Experience the advantages of a partnership built on trust and
            excellence.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.name}
              variants={itemVariants}
              className="group h-full"
            >
              <div
                className="relative p-6 sm:p-8 rounded-3xl bg-gray-50/50 border border-gray-100
                          shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative flex flex-col flex-1 items-center text-center">
                  <div className="mb-4 sm:mb-6">
                    <div
                      className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl
                                flex items-center justify-center transform transition-transform duration-500
                                group-hover:scale-110 group-hover:rotate-3"
                    >
                      <benefit.icon
                        className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-between">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                      {benefit.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
