import { useState } from "react";
import logo from "../assets/logo.png";
import bars from "../assets/bars.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = ["About", "How it works", "Roadmap"];

  return (
    <nav className="w-base pt-6 px-4 md:px-8 flex items-center justify-between relative z-50">
      <img
        src={logo}
        alt="Logo"
        width={180}
        height={36}
        onClick={scrollToTop}
        className="cursor-pointer transition-transform duration-300 hover:scale-105"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-poppins font-normal text-[16px] leading-[140%] tracking-normal text-center transition-colors duration-300">
        {navLinks.map((link) => (
          <li
            key={link}
            className="cursor-pointer hover:text-[#DCA685] transition-colors duration-300"
          >
            {link}
          </li>
        ))}
        <li className="border rounded-[35px] hover:bg-[#DCA685]/20 transition-all duration-300">
          <button className="w-[140px] h-[44px] flex items-center justify-center cursor-pointer">
            Let's talk
          </button>
        </li>
        <li className="cursor-pointer hover:text-[#DCA685] transition-colors duration-300 md:block hidden">
          <button className="z-[60]">
            <img src={bars} alt="Menu" width={28} height={12} />
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="block md:hidden z-[60]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <img src={bars} alt="Menu" width={28} height={12} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-sm text-white flex flex-col items-center gap-6 py-24 font-poppins font-normal text-[16px] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <li
            key={link}
            className="list-none cursor-pointer hover:text-[#DCA685] transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link}
          </li>
        ))}
        <li className="list-none border rounded-[35px] hover:bg-[#DCA685]/20 transition-all duration-300">
          <button className="w-[140px] h-[44px] flex items-center justify-center cursor-pointer">
            Let's talk
          </button>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
