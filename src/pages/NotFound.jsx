import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden"
        >
          {/* Top Gradient Strip */}
          <div className="h-2 bg-gradient-to-r from-pink-500 to-red-500" />

          <div className="p-10 sm:p-12 text-center relative overflow-hidden">
            {/* Background blur bubbles */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />

            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative text-7xl sm:text-8xl font-extrabold text-gray-900"
            >
              404
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mt-4 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Page Not Found 😥
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-3 text-gray-600 max-w-lg mx-auto"
            >
              The page you are looking for doesn’t exist or has been moved.
              Please go back to homepage or explore other pages.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow hover:shadow-xl hover:scale-105 transition inline-flex items-center justify-center gap-2"
              >
                <FaHome />
                Go Home
              </Link>

              <Link
                to="/packages"
                className="px-8 py-4 rounded-full border border-gray-200 bg-white text-gray-800 font-semibold hover:bg-gray-50 transition inline-flex items-center justify-center gap-2"
              >
                <FaSearch />
                Explore Packages
              </Link>
            </motion.div>

            {/* Small Note */}
            <p className="relative mt-8 text-xs text-gray-500">
              If you think this is a mistake, contact support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
