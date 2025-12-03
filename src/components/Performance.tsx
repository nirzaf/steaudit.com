import { motion } from 'framer-motion';

export default function Performance() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -right-24 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-48 -left-24 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Performance Through{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Excellence
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Salem Taleb Efaifa Auding and Consultancy is one of the top global alliances of expert firms providing
                high-quality professional services and advice. With a rapidly growing global presence made up of accountancy
                and law firms worldwide, our cross-border service offering facilitates the international operations of
                businesses of all sizes and ambition, whatever their needs.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Supporting firm growth and development, we are the global alliance of choice offering clients fast and
                effective access to quality-assured accounting and legal professionals across the globe.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '500+', label: 'Clients Served' },
                { number: '98%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/ri5cvrkrr/istockphoto-1328399948-170667a.jpg?updatedAt=1732207359642"
                alt="Professional Excellence"
                className="w-full h-[600px] object-cover rounded-xl shadow-2xl"
              />
              {/* Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>

              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
