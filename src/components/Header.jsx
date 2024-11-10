import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll when the menu is open
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Reset body scroll on unmount
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <header
      className={`fixed text-white h-[80px] top-0 w-full z-[1000] flex justify-between items-center px-[20px] md:px-[100px] transition-colors duration-300 ${
        scrolled ? "bg-[#2D1039]/70 backdrop-blur-md" : ""
      }`}
    >
      <div className="text-[24px] md:text-[36px] font-bold z-40">Logo</div>

      <div className="hidden md:flex text-[16px] space-x-[40px] font-bold">
        <Link to="/#aboutus">About Us</Link>
        <Link to="/#team">Team</Link>
        <Link to="/#faq">Faqs</Link>
        <Link target="_blank" to="https://x.com/@D00dlesApes">
          Contact Us
        </Link>
        <div className="opacity-50 inline-block">Mint</div>
      </div>

      <div className="hidden md:flex">
        <Link to="/wl-checker">
          <div className="bg-gradient-to-tr from-[#1E58FC] via-[#D914E4] to-[#F10419] min-w-[240px] rounded-[50px] min-h-[60px] text-[20px] font-bold text-white flex items-center justify-center">
            Check WishList Please
          </div>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center z-50">
        <button className="z-50" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          className="fixed inset-0 top-0 z-30  bg-black bg-opacity-90 text-white z-[1500] flex flex-col items-center justify-center space-y-8 text-[20px] font-bold"
        >
          <Link onClick={toggleMenu} to="/#aboutus">
            About Us
          </Link>
          <Link onClick={toggleMenu} to="/#team">
            Team
          </Link>
          <Link onClick={toggleMenu} to="/#faq">
            Faqs
          </Link>
          <Link
            onClick={toggleMenu}
            target="_blank"
            to="https://x.com/@D00dlesApes"
          >
            Contact Us
          </Link>
          <div className="opacity-50 inline-block">Mint</div>
          <Link onClick={toggleMenu} to="/wl-checker">
            <div className="bg-gradient-to-tr from-[#1E58FC] via-[#D914E4] to-[#F10419] min-w-[200px] rounded-[50px] min-h-[50px] text-[18px] font-bold text-white flex items-center justify-center">
              Check WishList Please
            </div>
          </Link>
        </motion.div>
      )}
    </header>
  );
}
