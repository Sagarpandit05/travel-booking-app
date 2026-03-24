import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import BookingModal from "./BookingModal";

const packagesData = [
  {
    id: 1,
    title: "Goa Beach Escape",
    location: "Goa, India",
    days: "4 Days / 3 Nights",
    price: 12999,
    rating: 4.8,
    category: "Family",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Manali Adventure Trip",
    location: "Manali, India",
    days: "5 Days / 4 Nights",
    price: 18499,
    rating: 4.7,
    category: "Adventure",
    img: "https://images.unsplash.com/photo-1626621341517-bab3d8a4b3d1?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Dubai Luxury Tour",
    location: "Dubai, UAE",
    days: "6 Days / 5 Nights",
    price: 55999,
    rating: 4.9,
    category: "Luxury",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Kerala Backwater Stay",
    location: "Kerala, India",
    days: "4 Days / 3 Nights",
    price: 15999,
    rating: 4.6,
    category: "Honeymoon",
    img: "https://images.unsplash.com/photo-1600935926387-12f9f2548b43?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Rajasthan Heritage Tour",
    location: "Jaipur, India",
    days: "5 Days / 4 Nights",
    price: 21999,
    rating: 4.7,
    category: "Family",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Thailand Island Fun",
    location: "Phuket, Thailand",
    days: "6 Days / 5 Nights",
    price: 39999,
    rating: 4.8,
    category: "Adventure",
    img: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60b?q=80&w=1400&auto=format&fit=crop",
  },
];

const categories = ["All", "Family", "Adventure", "Honeymoon", "Luxury"];

export default function PackagesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const filteredPackages = useMemo(() => {
    return packagesData.filter((pkg) => {
      const matchCategory =
        activeCategory === "All" || pkg.category === activeCategory;

      const matchSearch =
        pkg.title.toLowerCase().includes(search.toLowerCase()) ||
        pkg.location.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="bg-gray-50">
      {/* Header Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop"
            alt="packages banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-white"
          >
            Tour Packages ✈️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/85 max-w-2xl"
          >
            Choose your next journey from premium travel packages with best
            pricing, best hotel stays & unforgettable destinations.
          </motion.p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by place or package..."
              className="w-full lg:max-w-md px-5 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
            />

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <FaStar className="text-yellow-400" />
                  {item.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-2 text-sm text-gray-600 space-y-2">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-pink-600" />
                    {item.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaClock className="text-pink-600" />
                    {item.days}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-lg font-extrabold text-gray-900">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <button
                    onClick={() => setSelectedPackage(item)}
                    className="px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow hover:shadow-lg hover:scale-105 transition"
                  >
                    Book Now
                  </button>
                </div>

                {/* Category Badge */}
                <div className="mt-5">
                  <span className="inline-flex px-4 py-2 rounded-full text-xs font-semibold bg-pink-50 text-pink-600">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <p className="mt-10 text-center text-gray-600">
            No packages found 😥 Try different search.
          </p>
        )}
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <BookingModal
            selectedPackage={selectedPackage}
            onClose={() => setSelectedPackage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
