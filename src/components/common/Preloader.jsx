import { motion } from "framer-motion";
import { FaPlaneDeparture } from "react-icons/fa";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Icon Animation */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="mx-auto w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white shadow-xl text-3xl"
        >
          <FaPlaneDeparture />
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-2xl font-extrabold text-white"
        >
          TraveLand
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-white/70 text-sm"
        >
          Loading your journey...
        </motion.p>

        {/* Progress bar */}
        <div className="mt-6 w-64 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-red-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
}
