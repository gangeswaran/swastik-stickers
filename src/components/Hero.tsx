import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Landing-page.png";

const Hero: React.FC = () => {
  return (
 <section className="relative bg-white text-gray-800 overflow-hidden pt-24 md:pt-32">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16 px-6">
    {/* Left Content */}
    <motion.div
      className="flex-1 text-left"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text ">
        Elevate Your Brand with Timeless Labels
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-amber-500 mb-4">
        Custom Clothing Labels Crafted for Distinction
      </h2>

      <p className="text-lg md:text-xl text-gray-700/90 mb-6 leading-relaxed">
        Give your products the identity they deserve. From{" "}
        <span className="font-semibold text-amber-400">cotton</span>,{" "}
        <span className="font-semibold text-amber-400">satin</span>,{" "}
        <span className="font-semibold text-amber-400">woven</span> to premium finishes — our labels blend{" "}
        <span className="italic text-gray-800">elegance, durability, and precision</span>.  
        Designed to last, crafted to impress.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-start gap-4 mb-6">
        <a
          href="#contact"
          className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-sm transition-transform hover:scale-105"
        >
          Get Started With Us
        </a>
        <a
          href="#products"
          className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-8 py-3 rounded-full font-semibold shadow-sm transition-transform hover:scale-105"
        >
          View Products
        </a>
      </div>

      {/* Features */}
      <ul className="flex flex-wrap justify-start gap-6 text-lg font-medium text-gray-700">
        <li className="flex items-center gap-2">
          <span className="text-amber-500 text-xl">✓</span> Uncompromising Quality
        </li>
        <li className="flex items-center gap-2">
          <span className="text-amber-500 text-xl">✓</span> Bespoke Designs
        </li>
        <li className="flex items-center gap-2">
          <span className="text-amber-500 text-xl">✓</span> Reliable, Fast Delivery
        </li>
      </ul>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="flex-1 relative flex justify-center md:justify-end"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src={heroImage}
        alt="Premium Labels"
        className="w-full max-w-md md:max-w-lg rounded-2xl shadow-sm border border-gray-200"
      />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl"></div>
    </motion.div>

  </div>
</section>

  );
};

export default Hero;
