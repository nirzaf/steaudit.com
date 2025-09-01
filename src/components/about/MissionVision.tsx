import { Lightbulb, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MissionVision() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group h-full"
          >
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 h-full">
              <div className="flex items-start space-x-4 sm:space-x-6 h-full">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 sm:p-4 rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <Lightbulb
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 mb-1">
                    Our Mission
                  </h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 sm:mb-6"></div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    To empower our clients by delivering objective, independent
                    audit and assurance services that mitigate risk, enhance
                    operational efficiency, and ensure unwavering compliance. We
                    are committed to upholding the highest standards of
                    financial reporting and professional integrity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group h-full"
          >
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 h-full">
              <div className="flex items-start space-x-4 sm:space-x-6 h-full">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 sm:p-4 rounded-2xl shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <Eye
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 mb-1">
                    Our Vision
                  </h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 sm:mb-6"></div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    To be the undisputed leader in accounting and assurance,
                    recognized globally for our world-class expertise and
                    unwavering commitment to excellence. We aspire to redefine
                    the future of our industry through continuous innovation,
                    unshakable integrity, and the adoption of transformative
                    technologies, ensuring we always stay ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
