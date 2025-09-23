import React, { useState } from "react";
import logo from "../assets/Swastik-Symbol.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const productName = "your Labels";
  const message = `Hello, I want to order: ${productName}`;
  const encodedMessage = encodeURIComponent(message);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-300 to-amber-400 rounded-full shadow-sm">
            <img src={logo} alt="logo" className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            Swastik Sticker
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-amber-500 transition-colors">
            Home
          </a>
          <a href="#products" className="hover:text-amber-500 transition-colors">
            Products
          </a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Order Now Button */}
        <a
          href={`https://api.whatsapp.com/send?phone=919344456612&text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-amber-400 hover:bg-amber-500 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md transition-transform hover:scale-105"
        >
          Order Now
        </a>

        {/* Mobile Hamburger */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-amber-500"
          >
            Home
          </a>
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-amber-500"
          >
            Products
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-amber-500"
          >
            Contact
          </a>
          {/* Mobile “Order Now” button */}
          <a
            href={`https://api.whatsapp.com/send?phone=919344456612&text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md transition-transform hover:scale-105 text-center"
          >
            Order Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
