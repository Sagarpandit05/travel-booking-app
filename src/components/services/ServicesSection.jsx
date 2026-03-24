import { motion } from "framer-motion";
import {
  FaHotel,
  FaRoute,
  FaHeadset,
  FaWallet,
  FaPlaneDeparture,
  FaPassport,
  FaCarSide,
  FaRegSmileBeam,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Hotel Booking",
    desc: "Best hotels & stays with premium service at affordable rates.",
    icon: <FaHotel />,
  },
  {
    title: "Tour Guide",
    desc: "Professional guides to make your journey informative & safe.",
    icon: <FaRoute />,
  },
  {
    title: "24/7 Support",
    desc: "WhatsApp & call support anytime for your travel assistance.",
    icon: <FaHeadset />,
  },
  {
    title: "Best Price Deals",
    desc: "Transparent pricing with best offers and no hidden charges.",
    icon: <FaWallet />,
  },
  {
    title: "Flight Booking",
    desc: "Seamless flight booking for domestic & international trips.",
    icon: <FaPlaneDeparture />,
  },
  {
    title: "Visa Assistance",
    desc: "Complete visa assistance for hassle-free travel experience.",
    icon: <FaPassport />,
  },
  {
    title: "Cab & Transport",
    desc: "Comfortable cab & transport options for local travel.",
    icon: <FaCarSide />,
  },
  {
    title: "Custom Packages",
    desc: "Choose destinations & personalize your trip as per your budget.",
    icon: <FaRegSmileBeam />,
  },
];

const steps = [
  {
    title: "Choose Destination",
    desc: "Select the perfect destination from our popular packages.",
    number: "01",
  },
  {
    title: "Confirm Booking",
    desc: "Book your package with quick & simple booking process.",
    number: "02",
  },
  {
    title: "Enjoy Your Trip",
    desc: "Travel stress-free with premium services & best support.",
    number: "03",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50">
      {/* Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2000&auto=format&fit=crop"
            alt="services banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-white"
          >
            Our Services 🌍
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/85 max-w-2xl"
          >
            We provide complete travel solutions — tour packages, booking,
            transport and premium support for your journey.
          </motion.p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-pink-600 font-semibold">What We Offer</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Best Travel Services For You
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Everything you need to plan, book and enjoy your trip with peace of
            mind.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all p-7 group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-pink-50 text-pink-600 text-2xl group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-5 w-12 h-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-pink-600 font-semibold">How It Works</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Simple Booking Process
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Just 3 steps and your journey is ready 🚀
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gray-200 p-7 bg-gray-50 hover:shadow-lg transition"
              >
                <p className="text-4xl font-extrabold text-pink-600">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-pink-500 to-red-500">
          <div className="p-10 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Ready to Travel With Us?
              </h3>
              <p className="mt-2 text-white/85 max-w-xl">
                Book your tour package now and enjoy premium travel experience
                with best support.
              </p>
            </div>

            <div className="flex gap-3 flex-col sm:flex-row w-full sm:w-auto">
              <Link
                to="/packages"
                className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow hover:shadow-xl hover:scale-105 transition text-center"
              >
                Explore Packages
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-white/20 text-white font-semibold border border-white/30 hover:bg-white/30 transition text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
