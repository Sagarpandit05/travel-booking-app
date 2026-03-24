import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import toast from "react-hot-toast";

export default function ContactSection() {
  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "Choose Topic",
    message: "",
  });

  // ✅ Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.message.trim() ||
      formData.topic === "Choose Topic"
    ) {
      toast.error("Please fill all required fields ❌", { icon: "⚠️" });
      return;
    }

    // ✅ Success Toast
    toast.success("Message Sent Successfully 🚀", {
      icon: <FaPaperPlane className="text-blue-500" />,
    });

    // ✅ Clear Form after submit
    setFormData({
      name: "",
      phone: "",
      email: "",
      topic: "Choose Topic",
      message: "",
    });
  };

  return (
    <section className="bg-gray-50">
      {/* Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2000&auto=format&fit=crop"
            alt="contact banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm"
          >
            Contact TraveLand
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl sm:text-5xl font-extrabold text-white"
          >
            Let’s Plan Your Next Trip ✈️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-white/85 max-w-2xl"
          >
            Have questions or need a custom travel package? Send us a message —
            our team will respond quickly.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-pink-600 font-semibold">Get In Touch</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              We’re Here to Help You 🌍
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Contact us anytime for inquiries, bookings, or custom tour plans.
              Our support team is available 24/7.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="mt-4 font-bold text-gray-900">Address</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Indore, Madhya Pradesh
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl">
                  <FaPhoneAlt />
                </div>
                <h3 className="mt-4 font-bold text-gray-900">Phone</h3>
                <p className="mt-1 text-sm text-gray-600">+91 98765 43210</p>
              </div>

              <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl">
                  <FaEnvelope />
                </div>
                <h3 className="mt-4 font-bold text-gray-900">Email</h3>
                <p className="mt-1 text-sm text-gray-600">
                  support@traveland.com
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl">
                  <FaClock />
                </div>
                <h3 className="mt-4 font-bold text-gray-900">Working Hours</h3>
                <p className="mt-1 text-sm text-gray-600">24/7 Available</p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <iframe
                title="Google Map"
                className="w-full h-[320px]"
                src="https://www.google.com/maps?q=Indore,%20Madhya%20Pradesh&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 shadow-sm rounded-3xl p-7 sm:p-8"
          >
            <h3 className="text-2xl font-extrabold text-gray-900">
              Send a Message 💬
            </h3>
            <p className="mt-2 text-gray-500 text-sm">
              We’ll contact you within 24 hours.
            </p>

            {/* ✅ FORM */}
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
                />

                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
                />
              </div>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
              />

              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
              >
                <option>Choose Topic</option>
                <option>Booking Inquiry</option>
                <option>Tour Packages</option>
                <option>Custom Trip Plan</option>
                <option>Other</option>
              </select>

              <textarea
                required
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
              ></textarea>

              <button
                type="submit"
                className="w-full mt-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow hover:shadow-xl hover:scale-[1.02] transition"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center pt-2">
                🔒 Your information is safe with us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
