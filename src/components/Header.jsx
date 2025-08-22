"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowBigRight } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tourist Destination", href: "#foreign-places" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg font-sans font-kumbh-sans text-black">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-500 tracking-wider">
          <a
            href="#home"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            Tours & Travel
          </a>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-8 text-black text-base sm:text-lg font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group scroll-smooth"
            >
              {item.name}
              <div className="absolute -bottom-2 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
            </a>
          ))}
        </nav>

        {/* Book Now Button */}
        <div className="hidden lg:flex items-center space-x-2 lg:space-x-4">
          <a
            href="#booking"
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-400 text-white rounded-full text-xs sm:text-sm md:text-base font-semibold shadow-md 
            hover:bg-orange-300 transition-colors duration-300 flex items-center justify-center space-x-1 sm:space-x-2"
          >
            <span>Book Now</span>
            <ArrowBigRight
              size={18}
              className="-rotate-45 transition-transform duration-300 text-white bg-black rounded-full p-0.5 sm:p-1"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-black hover:bg-gray-200 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transform origin-top transition-all duration-300 ease-in-out 
        ${
          isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-3 sm:space-y-4 text-black text-sm sm:text-base">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="w-full text-center py-2 hover:bg-gray-200 transition-colors duration-300 scroll-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Book Now */}
          <div className="w-full px-4 pb-3">
            <a
              href="#booking"
              className="w-full text-center px-6 py-2 bg-orange-400 text-white rounded-full text-base font-semibold shadow-md hover:bg-orange-300 transition-colors duration-300 flex items-center justify-center space-x-2 scroll-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Book Now</span>
              <ArrowBigRight
                size={20}
                className="-rotate-45 transition-transform duration-300 text-white bg-black rounded-full p-1"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
