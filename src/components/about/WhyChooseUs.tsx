import {
  Award,
  Clock,
  Target,
  Briefcase,
  Calendar,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Business Growth',
    icon: Target,
    description: 'We provide strategic insights to fuel your business expansion.',
  },
  {
    name: 'Unlimited Revision',
    icon: Clock,
    description:
      'We work tirelessly until you are completely satisfied with our service.',
  },
  {
    name: 'Ultimate Perfection',
    icon: Star,
    description:
      'Our commitment to excellence ensures flawless and impeccable results.',
  },
  {
    name: 'Smart Experience',
    icon: Briefcase,
    description:
      'Leveraging industry expertise for intelligent and effective solutions.',
  },
  {
    name: 'Strict Deadline',
    icon: Calendar,
    description:
      'We respect your time, delivering prompt and punctual outcomes.',
  },
  {
    name: 'Reputed Firm',
    icon: Award,
    description:
      'A trusted name in the industry, synonymous with reliability and quality.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Why Choose Us?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our commitment to excellence sets us apart from the rest.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white
                        shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                        border border-gray-100 hover:border-blue-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-150 transition-all duration-500"></div>
                  <feature.icon className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 group-hover:text-blue-700 transform group-hover:rotate-6 transition-all duration-500" />
                </div>
                <h3 className="block font-bold text-lg sm:text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-500 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base opacity-100 sm:opacity-0 group-hover:opacity-100 transform translate-y-0 sm:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
