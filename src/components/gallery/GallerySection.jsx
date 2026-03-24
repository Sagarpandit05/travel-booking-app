import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiDownload,
  FiHeart,
  FiShare2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

export default function GallerySection() {
  const images = useMemo(
    () => [
      {
        id: 1,
        title: "Goa Beach",
        category: "Beaches",
        src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Manali Mountains",
        category: "Mountains",
        src: "https://images.unsplash.com/photo-1626621341517-bab3d8a4b3d1?q=80&w=1400&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Dubai Skyline",
        category: "City",
        src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Kerala Backwaters",
        category: "Beaches",
        src: "https://images.unsplash.com/photo-1600935926387-12f9f2548b43?q=80&w=1400&auto=format&fit=crop",
      },
      {
        id: 5,
        title: "Rajasthan Forts",
        category: "City",
        src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1400&auto=format&fit=crop",
      },
      {
        id: 6,
        title: "Thailand Islands",
        category: "Beaches",
        src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60b?q=80&w=1400&auto=format&fit=crop",
      },
      {
        id: 7,
        title: "Himalayan View",
        category: "Mountains",
        src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1400&auto=format&fit=crop",
      },
      {
        id: 8,
        title: "New York Streets",
        category: "City",
        src: "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1400&auto=format&fit=crop",
      },
      {
        id: 9,
        title: "Beach Sunset",
        category: "Beaches",
        src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1400&auto=format&fit=crop",
      },
    ],
    []
  );

  const categories = ["All", "Beaches", "Mountains", "City"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImg, setActiveImg] = useState(null);

  // ✅ local history
  const [recentViewed, setRecentViewed] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // ✅ Load localStorage
  useEffect(() => {
    const savedRecent = JSON.parse(localStorage.getItem("recentGallery")) || [];
    setRecentViewed(savedRecent);

    const savedFav = JSON.parse(localStorage.getItem("galleryFav")) || [];
    setFavorites(savedFav);
  }, []);

  // ✅ Filtered images
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((img) => img.category === activeCategory);
  }, [activeCategory, images]);

  // ✅ Add to recent (no duplicates)
  const addToRecent = (img) => {
    setRecentViewed((prev) => {
      const filtered = prev.filter((item) => item.id !== img.id);
      const updated = [img, ...filtered].slice(0, 6);
      localStorage.setItem("recentGallery", JSON.stringify(updated));
      return updated;
    });
  };

  // ✅ Toggle favorite
  const toggleFavorite = (img) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === img.id);
      let updated;

      if (exists) {
        updated = prev.filter((item) => item.id !== img.id);
        toast("Removed from favorites 💔", { icon: "✅" });
      } else {
        updated = [img, ...prev].slice(0, 12);
        toast.success("Added to favorites ❤️", { icon: "❤️" });
      }

      localStorage.setItem("galleryFav", JSON.stringify(updated));
      return updated;
    });
  };

  // ✅ Check favorite
  const isFavorite = (img) => favorites.some((f) => f.id === img.id);

  // ✅ Open modal
  const openModal = (img) => {
    setActiveImg(img);
    addToRecent(img);
  };

  // ✅ Download Image
  const downloadImage = async (url, filename = "traveland-image.jpg") => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success("Download started ✅", { icon: <FiDownload /> });
    } catch (error) {
      toast.error("Download failed ❌", { icon: "⚠️" });
    }
  };

  // ✅ WhatsApp share
  const shareWhatsApp = (img) => {
    const text = `Check this amazing travel photo: ${img.title} 🌍✨\n${img.src}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast.success("Opening WhatsApp ✅", { icon: <FaWhatsapp /> });
  };

  // ✅ Copy Share Link
  const copyShareLink = async (img) => {
    try {
      await navigator.clipboard.writeText(img.src);
      toast.success("Link copied ✅", { icon: <FiShare2 /> });
    } catch (e) {
      toast.error("Copy failed ❌", { icon: "⚠️" });
    }
  };

  // ✅ Next / Prev in modal
  const currentIndex = activeImg
    ? filteredImages.findIndex((x) => x.id === activeImg.id)
    : -1;

  const goPrev = () => {
    if (currentIndex <= 0) return;
    openModal(filteredImages[currentIndex - 1]);
  };

  const goNext = () => {
    if (currentIndex === -1 || currentIndex >= filteredImages.length - 1) return;
    openModal(filteredImages[currentIndex + 1]);
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-pink-600 font-semibold">Gallery</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Travel Moments & Memories
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Beautiful destinations captured from our happy travelers ✨
          </p>
        </motion.div>

        {/* ✅ Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ Recently Viewed */}
        {recentViewed.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="text-xl font-extrabold text-gray-900">
                Recently Viewed 👀
              </h3>

              <button
                onClick={() => {
                  localStorage.removeItem("recentGallery");
                  setRecentViewed([]);
                  toast("History cleared ✅", { icon: "🧹" });
                }}
                className="text-sm font-semibold text-pink-600 hover:text-red-600 transition"
              >
                Clear History
              </button>
            </div>

            <div className="mt-5 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {recentViewed.map((img) => (
                <button
                  key={img.id}
                  onClick={() => openModal(img)}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition text-left"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-24 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                  <p className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white drop-shadow opacity-0 group-hover:opacity-100 transition">
                    {img.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Favorites */}
        {favorites.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="text-xl font-extrabold text-gray-900">
                Favorites ❤️
              </h3>

              <button
                onClick={() => {
                  localStorage.removeItem("galleryFav");
                  setFavorites([]);
                  toast("Favorites cleared ✅", { icon: "🧹" });
                }}
                className="text-sm font-semibold text-pink-600 hover:text-red-600 transition"
              >
                Clear Favorites
              </button>
            </div>

            <div className="mt-5 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {favorites.slice(0, 6).map((img) => (
                <button
                  key={img.id}
                  onClick={() => openModal(img)}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition text-left"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-24 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                  <p className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white drop-shadow opacity-0 group-hover:opacity-100 transition">
                    {img.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="relative group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Favorite Icon on card */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(img);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 shadow hover:bg-white transition"
                >
                  <FiHeart
                    className={isFavorite(img) ? "text-pink-600" : "text-gray-600"}
                    size={20}
                  />
                </button>

                {/* Text */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white font-bold text-lg">{img.title}</p>
                  <p className="text-white/80 text-sm">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ✅ Modal */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImg(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close btn */}
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/90 hover:bg-white transition shadow"
                onClick={() => setActiveImg(null)}
              >
                <FiX size={22} />
              </button>

              {/* ✅ Modal Favorite (single place) */}
              <button
                onClick={() => toggleFavorite(activeImg)}
                className="absolute top-4 right-16 z-10 p-2 rounded-xl bg-white/90 hover:bg-white transition shadow"
              >
                <FiHeart
                  className={isFavorite(activeImg) ? "text-pink-600" : "text-gray-600"}
                  size={22}
                />
              </button>

              {/* Prev/Next */}
              <button
                onClick={goPrev}
                disabled={currentIndex <= 0}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-xl bg-white/90 shadow hover:bg-white transition ${
                  currentIndex <= 0 ? "opacity-40 cursor-not-allowed" : ""
                }`}
              >
                <FiChevronLeft size={24} />
              </button>

              <button
                onClick={goNext}
                disabled={currentIndex >= filteredImages.length - 1}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-xl bg-white/90 shadow hover:bg-white transition ${
                  currentIndex >= filteredImages.length - 1
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                }`}
              >
                <FiChevronRight size={24} />
              </button>

              {/* Image */}
              <img
                src={activeImg.src}
                alt={activeImg.title}
                className="w-full h-[75vh] object-cover"
              />

              {/* Footer + Actions */}
              <div className="p-5 border-t bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900">
                    {activeImg.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Category: {activeImg.category}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* Download */}
                  <button
                    onClick={() =>
                      downloadImage(
                        activeImg.src,
                        `${activeImg.title.replaceAll(" ", "_")}.jpg`
                      )
                    }
                    className="px-5 py-3 rounded-full font-semibold shadow-sm transition border bg-white text-gray-800 border-gray-200 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <FiDownload />
                    Download
                  </button>

                  {/* WhatsApp */}
                  <button
                    onClick={() => shareWhatsApp(activeImg)}
                    className="px-5 py-3 rounded-full font-semibold shadow-sm transition bg-green-600 text-white hover:bg-green-700 flex items-center gap-2"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </button>

                  {/* Copy Link */}
                  <button
                    onClick={() => copyShareLink(activeImg)}
                    className="px-5 py-3 rounded-full font-semibold shadow-sm transition bg-gray-900 text-white hover:bg-black flex items-center gap-2"
                  >
                    <FiShare2 />
                    Copy Link
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
