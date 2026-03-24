import { motion } from "framer-motion";
import { FaCalendarAlt, FaUserEdit, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Top 10 Places to Visit in India",
    desc: "Explore the most beautiful destinations in India for your next trip.",
    date: "Jan 2026",
    author: "Admin",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "How to Plan a Budget Trip",
    desc: "Learn smart ways to save money while traveling without compromise.",
    date: "Dec 2025",
    author: "TraveLand Team",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Best Honeymoon Destinations",
    desc: "Romantic places around the world for couples and honeymoon trips.",
    date: "Nov 2025",
    author: "Admin",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Dubai Travel Guide 2026",
    desc: "Complete guide for Dubai trip – places, budget, hotels, and tips.",
    date: "Oct 2025",
    author: "TraveLand Team",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Things to Carry While Traveling",
    desc: "Packing checklist – essentials you must carry for a smooth journey.",
    date: "Sep 2025",
    author: "Admin",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Why Travel Is Good for Mental Health",
    desc: "Travel reduces stress and improves happiness. Know the reasons!",
    date: "Aug 2025",
    author: "TraveLand Team",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gray-50">
      {/* Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
            alt="blog banner"
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
            Travel Blog ✍️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/85 max-w-2xl"
          >
            Read our latest travel guides, tips, and destination stories for your
            next journey.
          </motion.p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-pink-600 font-semibold">Latest Articles</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Travel Tips & Guides
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Improve your travel experience by reading our blogs and travel guides.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-pink-600" />
                    {item.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaUserEdit className="text-pink-600" />
                    {item.author}
                  </p>
                </div>

                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-pink-600 hover:text-red-600 transition"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-14">
        <div className="rounded-3xl overflow-hidden bg-gray-950">
          <div className="p-10 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Want Personalized Tour Plan?
              </h3>
              <p className="mt-2 text-white/70 max-w-xl">
                Contact us for custom tour packages & best deals for your journey.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow hover:shadow-xl hover:scale-105 transition text-center"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
