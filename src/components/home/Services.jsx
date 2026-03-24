import { motion } from "framer-motion";
import { FaHotel, FaHeadset, FaRoute, FaWallet } from "react-icons/fa";

const services = [
  {
    title: "Hotel Booking",
    desc: "Best hotels with affordable pricing & premium experience.",
    icon: <FaHotel />,
  },
  {
    title: "Tour Guide",
    desc: "Expert guidance to explore places like a local traveler.",
    icon: <FaRoute />,
  },
  {
    title: "24/7 Support",
    desc: "Anytime assistance via call & WhatsApp support.",
    icon: <FaHeadset />,
  },
  {
    title: "Best Price",
    desc: "No hidden charges — enjoy trips in your budget.",
    icon: <FaWallet />,
  },
];

export default function Services() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-pink-600 font-semibold">Our Services</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            We Provide Best Travel Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Everything you need for a smooth, enjoyable and memorable trip.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all p-7 group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-pink-50 text-pink-600 text-2xl group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>

              <div className="mt-5 w-12 h-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
