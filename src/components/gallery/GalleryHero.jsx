import { motion } from "framer-motion";
import { FaCameraRetro } from "react-icons/fa";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
          alt="gallery hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm"
        >
          <FaCameraRetro className="text-pink-400" />
          TraveLand Gallery
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Explore Our Travel
          <span className="text-pink-400"> Moments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-white/85 max-w-2xl text-base sm:text-lg"
        >
          A collection of breathtaking destinations, adventures, and memories
          from our happy travelers.
        </motion.p>
      </div>
    </section>
  );
}
