import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";


export default function BookingModal({ selectedPackage, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b flex items-start justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900">
              Book: {selectedPackage.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Fill details to confirm booking ✅
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
              placeholder="Full Name"
            />
            <input
              className="px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
              placeholder="Phone Number"
            />
          </div>

          <input
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
            placeholder="Email Address"
            type="email"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="date"
              className="px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
            />
            <select className="px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
              <option>5+ People</option>
            </select>
          </div>

          <textarea
            rows="3"
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-pink-400"
            placeholder="Message (optional)"
          ></textarea>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow hover:shadow-xl transition"
              onClick={() => {
                toast.success("Booking Submitted Successfully ✅", {
                  icon: <FaCheckCircle className="text-green-500" />,
                });
                onClose();
              }}
            >
              Confirm Booking
            </button>

            <button
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Note: This is a demo booking form. Backend integration can be added.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
