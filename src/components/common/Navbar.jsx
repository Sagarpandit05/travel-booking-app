import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPlaneDeparture } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <span className="p-2 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white shadow">
                <FaPlaneDeparture />
              </span>
              <span className="text-gray-900">
                Trave<span className="text-pink-600">Land</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium transition ${
                      isActive
                        ? "text-pink-600"
                        : "text-gray-700 hover:text-pink-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:flex">
              <Link
                to="/packages"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
            >
              <FiMenu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 font-bold text-lg"
                >
                  <span className="p-2 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white shadow">
                    <FaPlaneDeparture />
                  </span>
                  <span className="text-gray-900">
                    Trave<span className="text-pink-600">Land</span>
                  </span>
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
                >
                  <FiX size={22} />
                </button>
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl font-medium transition ${
                          isActive
                            ? "bg-pink-50 text-pink-600"
                            : "text-gray-700 hover:bg-gray-50"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  to="/packages"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md hover:shadow-xl transition"
                >
                  Book a Tour
                </Link>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  Explore the world with comfort ✈️
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
