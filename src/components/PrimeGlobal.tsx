import { motion } from 'framer-motion';
import { tailwindColors } from '../theme';
import { Globe, Users, MapPin, Building } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: '3,000+',
    label: 'Partners'
  },
  {
    icon: <Building className="w-6 h-6" />,
    value: '28,000+',
    label: 'Employees'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    value: '940+',
    label: 'Locations'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    value: '100+',
    label: 'Countries'
  }
];

export default function PrimeGlobal() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute transform rotate-12 -right-40 -top-40 w-96 h-96 rounded-full bg-blue-500"></div>
        <div className="absolute transform -rotate-12 -left-40 -bottom-40 w-96 h-96 rounded-full bg-blue-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className={`text-4xl font-bold ${tailwindColors.primaryText} mb-6 text-left max-w-6xl mx-auto`}>
            Proud Member of PrimeGlobal
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="md:w-2/3">
              <p className="text-gray-600 text-lg leading-relaxed text-left">
                PrimeGlobal's independent member firms house a combined total of over 3,000 partners, 28,000 employees, 
                and upwards of 940 locations in more than 100 countries around the globe. PrimeGlobal members are typically 
                full service, regional, public accounting and business advisory firms.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                src="https://ik.imagekit.io/ri5cvrkrr/PrimeGlobal_Icon_2002-2.png?updatedAt=1732207361432"
                alt="PrimeGlobal Logo"
                className="h-40 md:h-48 w-auto object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${tailwindColors.primary} bg-opacity-10 rounded-full p-3 w-fit mx-auto mb-4`}>
                {stat.icon}
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${tailwindColors.primaryText} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Purpose Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 italic max-w-3xl mx-auto">
            "As the international association serving these firms, PrimeGlobal is built first and foremost on strong relationships, 
            and our purpose is to be a source for ideas and access to member firm expertise and fundamental standards for success."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
