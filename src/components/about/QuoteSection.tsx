import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,32,74,0.02),transparent_50%)] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            A Word of Wisdom
          </p>
          <blockquote className="mt-6 text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 italic leading-tight">
            "The numbers have a story to tell. Our job is to listen, interpret,
            and translate it with clarity and precision."
          </blockquote>
          <footer className="mt-8">
            <p className="text-lg font-semibold text-gray-800">
              Salem Taleb Efaifa
            </p>
            <p className="text-base text-gray-500">Founder & CEO</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
