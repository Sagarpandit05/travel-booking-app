import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import PageWrapper from "../components/animation/PageWrapper";

import Home from "../pages/Home";
import About from "../pages/About";
import Packages from "../pages/Packages";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Gallery from "../pages/Gallery";
import ScrollToTopOnRouteChange from "../components/common/ScrollToTopOnRouteChange";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/packages"
          element={
            <PageWrapper>
              <Packages />
            </PageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <PageWrapper>
              <Services />
            </PageWrapper>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageWrapper>
              <Gallery/>
            </PageWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTopOnRouteChange />

      <AnimatedRoutes />

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
