import { motion } from "framer-motion";
import { FaUsers, FaMapMarkedAlt, FaStar, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const stats = [
    { title: "12K+", label: "Happy Travelers", icon: <FaUsers /> },
    { title: "150+", label: "Destinations", icon: <FaMapMarkedAlt /> },
    { title: "4.9", label: "Average Rating", icon: <FaStar /> },
    { title: "100%", label: "Safe Travel", icon: <FaShieldAlt /> },
  ];

  return (
    <section className="bg-white">
      {/* Top Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
            alt="about banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm"
          >
            About TraveLand
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl sm:text-5xl font-extrabold text-white leading-tight"
          >
            We Create Journeys That
            <span className="text-pink-400"> Stay Forever</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 max-w-2xl"
          >
            TraveLand is a travel agency platform offering curated tour packages,
            premium experiences, and budget-friendly trips worldwide. Our mission
            is to make travel simple, safe, and memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex gap-4 flex-col sm:flex-row"
          >
            <Link
              to="/packages"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow hover:shadow-xl hover:scale-105 transition text-center"
            >
              View Packages
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white font-semibold hover:bg-white/25 transition text-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop"
              alt="about travel"
              className="rounded-3xl shadow-xl w-full object-cover"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-200">
              <p className="text-sm text-gray-600">Trusted by</p>
              <p className="text-2xl font-extrabold text-gray-900">
                12,000+ Travelers
              </p>
              <div className="mt-2 w-20 h-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-pink-600 font-semibold">Who We Are</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              We Plan Tours That You’ll Love ❤️
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We help travelers explore destinations with comfort, safety, and
              affordability. Our team ensures the best experiences, from hotels,
              travel planning, guide support to custom tour packages.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <p className="mt-3 text-xl font-extrabold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/packages"
              className="inline-block mt-10 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold shadow hover:shadow-xl hover:scale-105 transition"
            >
              Start Your Journey →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
