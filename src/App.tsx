import React from "react";
import { motion } from "framer-motion";
import taffeta from "./assets/taffetalabels.jpeg";
import satin from "./assets/Satin Labels.jpeg";
import cotton from "./assets/cotton-labels.jpeg";
import barcode from "./assets/barcode-stickers.jpeg";
import woven from "./assets/woven-labels.jpeg";
import sticker from "./assets/sticker-label.jpeg";
import carton from "./assets/carton-stickers.jpeg";
import logo from "./assets/Swastik-Symbol.png";
const productImages: Record<string, string> = {
  "Taffeta Labels": taffeta,
  "Satin Labels": satin,
  "Cotton Labels": cotton,
  "Barcode Stickers": barcode,
  "Woven Labels": woven,
  "Sticker Labels": sticker,
  "Carton Stickers": carton,
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow">
              <span className="text-2xl text-amber-500 font-extrabold"><img src={logo} alt="logo" /></span>
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Swastik Sticker
            </h1>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-800">
            <a href="#products" className="hover:text-amber-500 transition">Products</a>
            <a href="#about" className="hover:text-amber-500 transition">About</a>
          </nav>

          {/* CTA */}
          <a
            href="tel:+919344456612"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow transition-transform hover:scale-105"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-16 px-6 text-center overflow-hidden">
        <motion.div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
            Premium Labels & Stickers
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed font-light">
            Tiruppur’s trusted partner for{" "}
            <span className="font-semibold text-amber-300">labels & stickers</span> — 
            blending <span className="font-semibold">precision</span>,{" "}
            <span className="font-semibold">durability</span>, and{" "}
            <span className="font-semibold">elegance</span>.
          </p>

          <a
            href="#products"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-white px-10 py-4 rounded-full font-semibold shadow-md text-lg md:text-xl transition-transform transform hover:scale-105"
          >
            Explore Products
          </a>
        </motion.div>

        {/* Subtle Decorative Glows */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-amber-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-emerald-400/10 rounded-full blur-2xl"></div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Our Products
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.keys(productImages).map((item, i) => (
            <motion.div
              key={item}
              className="group bg-white/90 backdrop-blur-md rounded-xl shadow hover:shadow-lg hover:-translate-y-1 border border-gray-100 hover:border-amber-400/40 transition overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={productImages[item]}
                alt={item}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-5">
                <h4 className="text-xl font-semibold text-emerald-900">{item}</h4>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Durable, customizable & crafted with premium attention to detail.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="text-gray-800 py-16 px-6 text-center md:text-left">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            className="text-4xl font-extrabold mb-6 text-amber-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h3>
          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Based in Tiruppur,{" "}
            <span className="font-semibold text-amber-400">Swastik Sticker</span>{" "}
            is a leading provider of premium clothing labels and stickers. With
            years of expertise, we serve global textile & fashion brands with{" "}
            <span className="font-semibold text-amber-400">
              quality, reliability, and creativity
            </span>.
            Every product we deliver is designed to{" "}
            <span className="italic">elevate your brand identity</span>.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
<footer className="bg-gray-900 text-white text-center py-12 border-t-4 border-amber-500">
  <div className="max-w-6xl mx-auto space-y-4 text-lg text-gray-200">
    {/* Company Name */}
    <h1 className="text-2xl font-bold text-amber-400">Swastik Sticker</h1>

    {/* Contact Info */}
    <p>
      <span className="font-semibold">Address:</span> 69A, Bharathi Nagar, Chandrapuram East, Tirupur – 641604
    </p>
    <p>
      <span className="font-semibold">Phone:</span> +91 93444 56612 | +91 86956 05083
    </p>
    <p>
      <span className="font-semibold">Email:</span> swastiksticker69a@gmail.com
    </p>

    {/* Call-to-Action Buttons */}
    <div className="mt-6 flex justify-center gap-4 flex-wrap">
      <a
        href="tel:+919344456612"
        className="bg-white text-black px-6 py-2.5 rounded-lg font-semibold shadow hover:scale-105 transition-transform"
      >
        Call Now
      </a>
      <a
        href="https://wa.me/919344456612"
        className="bg-white text-black px-6 py-2.5 rounded-lg font-semibold shadow hover:scale-105 transition-transform"
      >
        WhatsApp
      </a>
    </div>
  </div>

  {/* Copyright */}
  <p className="text-sm mt-6 text-gray-400">
    © {new Date().getFullYear()} <span className="font-semibold text-amber-400">Swastik Sticker</span>, Tirupur. All rights reserved.
  </p>
</footer>


    </div>
  );
};

export default HomePage;
