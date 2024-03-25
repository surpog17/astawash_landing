import Navbar from "./Components/NavBar";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import HomePage from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Apps from "./Pages/Apps";
import Cars from "./Pages/Home/Cars";
import Partners from "./Pages/Home/Partners";
import Pricing from "./Pages/Pricing";
import Testimonial from "./Pages/Testimonial";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Ui/Footer";
export default function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isNightMode, setNightMode] = useState(false);
  const toggleMode = () => {
    setNightMode(!isNightMode);
    setTheme(isNightMode ? "light" : "dark"); // Adjust this based on your theme handling logic
  };
  return (
    <div>
      <Navbar />
      <HomePage />
      <Cars />
      <Partners />
      <AboutUs />
      <Apps />
      <Pricing />
      <Testimonial />
      <ContactUs />
      <Footer />

      {showScrollButton && (
        <button
          title="Scroll UP"
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 border-2 border-black bg-transparent hover:bg-black text-black hover:text-white p-2 rounded-full transition duration-1000 ease-in-out z-[100]"
          style={{ mixBlendMode: "screen" }}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
