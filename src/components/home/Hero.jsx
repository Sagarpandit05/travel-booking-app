import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaMapMarkedAlt, FaUmbrellaBeach } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop"
          alt="travel hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm"
            >
              <FaUmbrellaBeach className="text-pink-400" />
              Explore the world with TraveLand
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Discover Beautiful Places,
              <span className="text-pink-400"> Book Your Tour</span> Today!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-white/85 text-base sm:text-lg max-w-xl"
            >
              Premium tour packages, unforgettable destinations and best travel
              experiences at affordable prices.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/packages"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all text-center"
              >
                Explore Packages
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-white/15 border border-white/20 backdrop-blur-md text-white font-semibold hover:bg-white/25 transition-all text-center"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-4 max-w-md"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                <p className="text-2xl font-bold">12K+</p>
                <p className="text-white/70 text-sm">Happy Travelers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                <p className="text-2xl font-bold">150+</p>
                <p className="text-white/70 text-sm">Destinations</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SEARCH CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:justify-self-end"
          >
            <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-7 w-full max-w-lg border border-white/60">
              <h3 className="text-xl font-bold text-gray-900">
                Find Your Perfect Tour ✨
              </h3>
              <p className="mt-1 text-gray-500 text-sm">
                Search packages by destination, date & people.
              </p>

              <div className="mt-6 space-y-4">
                {/* Destination */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Destination
                  </label>
                  <div className="mt-2 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
                    <FaMapMarkedAlt className="text-pink-500" />
                    <input
                      type="text"
                      placeholder="e.g. Goa, Manali, Dubai..."
                      className="w-full bg-transparent outline-none text-gray-800"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Travel Date
                  </label>
                  <div className="mt-2 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
                    <input
                      type="date"
                      className="w-full bg-transparent outline-none text-gray-800"
                    />
                  </div>
                </div>

                {/* People */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    People
                  </label>
                  <div className="mt-2 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
                    <select className="w-full bg-transparent outline-none text-gray-800">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full mt-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  <FiSearch size={20} />
                  Search Tours
                </button>
              </div>

              <p className="mt-4 text-xs text-gray-500 text-center">
                💡 Tip: Book early to get discounts!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
