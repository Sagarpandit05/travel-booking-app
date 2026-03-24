import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPlaneDeparture,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="p-2 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white shadow">
                <FaPlaneDeparture />
              </span>
              <span>
                Trave<span className="text-pink-500">Land</span>
              </span>
            </Link>

            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Explore the world with affordable and premium tour packages.
              Travel with comfort, safety, and unforgettable experiences.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition flex items-center justify-center"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link className="hover:text-pink-400 transition" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-400 transition" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-400 transition" to="/packages">
                  Packages
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-400 transition" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a className="hover:text-pink-400 transition" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-pink-400 transition" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="hover:text-pink-400 transition" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-pink-400 transition" href="#">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>📍 Indore, Madhya Pradesh</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ support@traveland.com</li>
            </ul>

            <div className="mt-6 p-5 rounded-3xl bg-white/5 border border-white/10">
              <p className="text-sm font-semibold">Newsletter</p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 rounded-2xl px-4 py-3 outline-none text-sm"
                />
                <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 font-semibold text-sm hover:opacity-95 transition">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} TraveLand. All rights reserved.</p>
          <p>
            Designed with <span className="text-pink-400">❤</span> by Sagar
          </p>
        </div>
      </div>
    </footer>
  );
}
