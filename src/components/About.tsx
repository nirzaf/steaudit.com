import { motion } from 'framer-motion';

export default function About() {
  return (
    <div id="about" className="relative bg-gradient-to-b from-[#000000]/5 to-[#000000]/10 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(47,126,174,0.04),transparent_40%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(78,164,192,0.04),transparent_40%)] pointer-events-none"></div>
        </div>

        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-0.5 w-12 bg-[#2F7EAE]"></div>
            <h2 className="text-4xl font-medium tracking-tight text-[#000000] sm:text-5xl">
              Our Commitment to Excellence
            </h2>
            <div className="h-0.5 w-12 bg-[#2F7EAE]"></div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="backdrop-blur-xl bg-white/90 rounded-2xl border border-[#000000]/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-22.png?updatedAt=1732207355523"
                  alt="Financial analysis"
                  className="w-24 h-24 rounded-lg object-cover shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-3">Professional Excellence</h3>
                  <p className="text-[#000000]/70 leading-relaxed">
                    Salem Taleb Efaifa Auditing and consultancy is an organization of substance with a full-service capability available in Qatar.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="backdrop-blur-xl bg-white/90 rounded-2xl border border-[#000000]/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-15.jpg?updatedAt=1732207353030"
                  alt="Business consultation"
                  className="w-24 h-24 rounded-lg object-cover shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-3">Tailored Solutions</h3>
                  <p className="text-[#000000]/70 leading-relaxed">
                    We construct our team to reflect your organization structure. We make all aspects of our service delivery transparent to the client.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="backdrop-blur-xl bg-white/90 rounded-2xl border border-[#000000]/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-17.jpg?updatedAt=1732207353126"
                  alt="Team collaboration"
                  className="w-24 h-24 rounded-lg object-cover shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-3">Exceeding Expectations</h3>
                  <p className="text-[#000000]/70 leading-relaxed">
                    Our aim is to beat your expectations from any assignments, bringing our views about business operations and compliance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-2 group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-12.jpg?updatedAt=1732207352390"
                  alt="Business professionals"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Smaller Images */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <img
                src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-19.jpg?updatedAt=1732207353391"
                alt="Corporate meeting"
                className="w-full h-48 object-cover rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <img
                src="https://ik.imagekit.io/ri5cvrkrr/acc1.jpg?updatedAt=1732207356333"
                alt="Office workspace"
                className="w-full h-48 object-cover rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}