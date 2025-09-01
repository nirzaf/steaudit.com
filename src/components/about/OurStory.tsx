import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Our Story
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            From our humble beginnings to a leading name in the industry.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Founded on the principles of integrity, precision, and unwavering
              commitment, Salem Taleb Efaifa Auditing and Consultancy has grown
              from a visionary idea into a cornerstone of Qatar's financial
              landscape. We are a full-service organization, dedicated to
              providing exceptional auditing and consultancy services.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Our journey is one of continuous evolution, driven by a passion
              for excellence and a deep understanding of our clients' needs. We
              believe in building partnerships, ensuring every aspect of our
              service is transparent and tailored to your unique organizational
              structure. Our performance is meticulously planned and executed,
              always aiming to exceed your expectations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-01.jpg?updatedAt=1732207350705"
              alt="Our Team"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
