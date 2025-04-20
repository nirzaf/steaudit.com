import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-[#00204A] to-[#002B5B] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(47,126,174,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(78,164,192,0.08),transparent_40%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="bg-[#2F7EAE]/10 backdrop-blur-xl p-4 rounded-2xl mb-6 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <Briefcase className="h-8 w-8 text-[#2F7EAE]" strokeWidth={1.5} />
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl font-medium tracking-tight text-[#4EA4C0]/90 max-w-3xl"
          >
            Comprehensive auditing and consultancy services for your business
          </motion.p>
        </motion.div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4EA4C0]/20 to-transparent"></div>
    </div>
  );
}
