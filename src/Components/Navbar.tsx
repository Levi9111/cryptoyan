import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import bars from "../assets/bars.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { title: "About", id: "about" },
    { title: "How it works", id: "how-it-works" },
    { title: "Roadmap", id: "roadmap" },
  ];

  const handleNavClick = (id: string) => {
    const offset = id === "about" ? 100 : 0;
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 ${
        hasScrolled
          ? "bg-[#0e0e0e]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-base py-4 flex items-center justify-between">
        <img
          src={logo}
          alt="Logo"
          width={180}
          height={36}
          onClick={scrollToTop}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-poppins text-[16px] transition-colors duration-300">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="cursor-pointer hover:text-[#DCA685] transition-colors duration-300"
              onClick={() => handleNavClick(link.id)}
            >
              <span>{link.title}</span>
            </li>
          ))}

          <li>
            <button className="w-[140px] h-[44px] flex items-center justify-center border rounded-[35px] text-white hover:bg-[#DCA685]/20 hover:text-[#DCA685] transition-all duration-300 hover:scale-105 shadow-md uppercase">
              Let's talk
            </button>
          </li>

          <li className="cursor-pointer hover:text-[#DCA685] md:block hidden">
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-sm text-white flex flex-col items-center gap-6 py-24 font-poppins text-[16px] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="list-none cursor-pointer hover:text-[#DCA685] transition-colors duration-300"
            onClick={() => handleNavClick(link.id)}
          >
            <span>{link.title}</span>
          </li>
        ))}
        <li className="list-none">
          <button className="w-[140px] h-[44px] flex items-center justify-center border rounded-[35px] text-white hover:bg-[#DCA685]/20 hover:text-[#DCA685] transition-all duration-300 hover:scale-105 shadow-md">
            Let's talk
          </button>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
