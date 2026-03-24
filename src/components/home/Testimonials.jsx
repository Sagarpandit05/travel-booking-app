import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "Rahul Sharma",
        role: "Traveler",
        rating: 5,
        msg: "TraveLand made my Goa trip unforgettable! Booking was smooth and support was amazing.",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        name: "Priya Verma",
        role: "Customer",
        rating: 5,
        msg: "Best honeymoon experience ever! Kerala package was perfectly planned. Highly recommended ❤️",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 3,
        name: "Aman Khan",
        role: "Explorer",
        rating: 4,
        msg: "Dubai tour was premium and well organized. Hotels and transport were top class.",
        img: "https://randomuser.me/api/portraits/men/65.jpg",
      },
      {
        id: 4,
        name: "Sneha Patil",
        role: "Traveler",
        rating: 5,
        msg: "Amazing service! Everything was planned perfectly. Totally worth it. 👌",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const active = testimonials[index];

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={i < count ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-pink-600 font-semibold">Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Travelers Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Real reviews from our happy travelers around the world 🌍
          </p>
        </motion.div>

        {/* Slider */}
        <div className="mt-12 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative bg-gray-50 border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
              {/* Background blur circle */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-red-500/10 rounded-full blur-3xl" />

              <div className="relative p-8 sm:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.45 }}
                    className="grid md:grid-cols-[200px_1fr] gap-8 items-center"
                  >
                    {/* Profile */}
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                      <img
                        src={active.img}
                        alt={active.name}
                        className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow"
                      />

                      <div className="md:mt-3">
                        <h3 className="text-lg font-extrabold text-gray-900">
                          {active.name}
                        </h3>
                        <p className="text-sm text-gray-500">{active.role}</p>

                        <div className="mt-2 flex items-center gap-1">
                          {renderStars(active.rating)}
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <FaQuoteLeft className="text-pink-500 text-3xl" />
                      <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                        {active.msg}
                      </p>

                      <div className="mt-7 flex items-center gap-2">
                        <span className="w-10 h-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />
                        <span className="text-sm text-gray-500">
                          Verified Review
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="mt-10 flex items-center justify-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-3 rounded-full transition-all ${
                        i === index
                          ? "w-10 bg-gradient-to-r from-pink-500 to-red-500"
                          : "w-3 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
