import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AppRoutes from "./routes/AppRoutes";
import Preloader from "./components/common/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400); // 1.4 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && <AppRoutes />}
    </>
  );
}
