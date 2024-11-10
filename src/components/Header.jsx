import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // Scroll to section after navigation
  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to home page if not already on it
      navigate("/", { replace: true });
    }
    // Wait for the navigation to complete, then scroll to section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    // Only close the menu if it's currently open
    if (isOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <header
      className={`fixed text-white h-[80px] top-0 w-full z-[1000] flex justify-between items-center px-[20px] md:px-[100px] transition-colors duration-300 ${
        scrolled ? "bg-[#2D1039]/70 backdrop-blur-md" : ""
      }`}
    >
      <div
        onClick={() => handleScrollToSection("aboutus")}
        className="text-[24px] cursor-pointer font-bold z-[2000] bg-[#0054FA] flex items-center gap-2 p-2 rounded-xl"
      >
        <img
          src="/images/apeCoin.jpg"
          className="w-[36px] rounded-l-xl"
          alt=""
        />
        <div className="text-white">D00dle Apes</div>
      </div>

      <div className="hidden md:flex text-[16px] space-x-[40px] font-bold">
        <button onClick={() => handleScrollToSection("aboutus")}>
          About Us
        </button>
        <button onClick={() => handleScrollToSection("team")}>Team</button>
        <button onClick={() => handleScrollToSection("faq")}>F.A.Q</button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/D00dleApes"
        >
          Contact Us
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://magiceden.io/"
        >
          Mint
        </a>
      </div>

      <div className="hidden md:flex">
        <Link to="/wl-checker">
          <div className="bg-gradient-to-tr from-[#1E58FC] via-[#D914E4] to-[#F10419] min-w-[240px] rounded-[50px] min-h-[60px] text-[20px] font-bold text-white flex items-center justify-center">
            WhiteList Checker
          </div>
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          className="z-[2000]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          className="fixed w-full h-full top-0 inset-0 bg-black bg-opacity-90 text-white z-[1500] flex flex-col items-center justify-center space-y-8 text-[20px] font-bold"
        >
          <button onClick={() => handleScrollToSection("aboutus")}>
            About Us
          </button>
          <button onClick={() => handleScrollToSection("team")}>Team</button>
          <button onClick={() => handleScrollToSection("faq")}>F.A.Q</button>
          <a
            onClick={toggleMenu}
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/D00dleApes"
          >
            Contact Us
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://magiceden.io/"
          >
            Mint
          </a>
          <Link onClick={toggleMenu} to="/wl-checker">
            <div className="bg-gradient-to-tr from-[#1E58FC] via-[#D914E4] to-[#F10419] min-w-[200px] rounded-[50px] min-h-[50px] text-[18px] font-bold text-white flex items-center justify-center">
              WhiteList Checker
            </div>
          </Link>
        </motion.div>
      )}
    </header>
  );
}
