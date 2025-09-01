import { Shield, Crosshair, Star, Users, Eye, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    name: 'Integrity',
    icon: Shield,
    description:
      'We uphold the highest standards of fairness, honesty, and ethical behavior in every service we provide.',
  },
  {
    name: 'Objectivity',
    icon: Crosshair,
    description:
      'Our duties are performed with an unbiased perspective, based on informed analysis and clear understanding.',
  },
  {
    name: 'Quality',
    icon: Star,
    description:
      'We are committed to delivering accurate reports and timely, relevant, and actionable recommendations.',
  },
  {
    name: 'Community',
    icon: Users,
    description:
      'We foster collaboration with colleagues and clients to enhance stakeholder effectiveness and efficiency.',
  },
  {
    name: 'Visionary',
    icon: Eye,
    description:
      'We pioneer creative and innovative solutions to address the key challenges our clients face.',
  },
  {
    name: 'Confidentiality',
    icon: Lock,
    description:
      'We safeguard client information with the utmost care, building relationships on a foundation of trust.',
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Our Core Values
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            The principles that guide our every action and decision.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-50 flex-shrink-0 flex items-center
                            justify-center"
                >
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {value.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
