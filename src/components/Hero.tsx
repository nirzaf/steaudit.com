import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-01.jpg?updatedAt=1732207350705"
          alt="Hero background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/80 via-[#0f172a]/60 to-brand-secondary/40"></div>
        
        {/* Glass Panels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/10 backdrop-blur-3xl rounded-full"></div>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="backdrop-blur-sm bg-white/[0.05] py-12 px-6 rounded-2xl shadow-2xl border border-white/10"
              >
                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg text-brand-accent font-semibold tracking-wide mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                >
                  Goodbye to Accounting Problems
                </motion.p>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-6"
                >
                  <span className="block text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                    Salem Taleb Efaifa
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent mt-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_0_4px_8px_rgb(0_0_0_/_90%)]" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.9))' }}>
                    Auditing & Consultancy
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-3 text-lg text-white sm:mt-5 sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                >
                  Salem Taleb Efaifa Auditing and Consultancy is one of top global alliance of expert firms providing high-quality professional services and advice.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4"
                >
                  {/* Contact Button */}
                  <Link
                    to="/contact"
                    className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-secondary/40 hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-accent to-brand-secondary opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                    <div className="relative flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                      <span>Contact Us</span>
                      <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>

                  {/* Services Button */}
                  <a
                    href="#services"
                    className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 border border-white/20 hover:border-white/40"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-secondary/20 to-brand-accent/20 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                    <div className="relative flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                      <span>Our Services</span>
                      <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
