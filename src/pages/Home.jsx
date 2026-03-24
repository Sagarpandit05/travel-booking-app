import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Destinations from "../components/home/Destinations";
import Testimonials from "../components/home/Testimonials";
import GallerySection from "../components/gallery/GallerySection";
import AboutSection from "../components/about/AboutSection";
import About from "./About";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <GallerySection/>
      <About/>
    </>
  );
}
