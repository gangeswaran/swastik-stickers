import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";;
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
