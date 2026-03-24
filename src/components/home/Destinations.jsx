import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const places = [
  {
    name: "Goa Beach",
    price: "₹12,999",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Manali Hills",
    price: "₹18,499",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1626621341517-bab3d8a4b3d1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dubai City",
    price: "₹55,999",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Destinations() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4"
        >
          <div>
            <p className="text-pink-600 font-semibold">Top Destinations</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Popular Places to Visit
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl">
              Choose from trending locations curated for your next travel plan.
            </p>
          </div>

          <Link
            to="/packages"
            className="px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-pink-300 shadow-sm hover:shadow-md transition font-semibold text-gray-800"
          >
            View All Packages →
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <FaStar className="text-yellow-400" />
                  {item.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Starting from <span className="font-semibold">{item.price}</span>
                </p>

                <Link
                  to="/packages"
                  className="mt-5 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow hover:shadow-lg hover:scale-105 transition"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
