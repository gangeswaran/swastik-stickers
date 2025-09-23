import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-500 text-white py-16">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

    {/* Brand */}
    <div className="flex flex-col items-center md:items-start space-y-4">
      <h1 className="text-3xl font-bold tracking-wide text-white">Swastik Sticker</h1>
      <p className="text-white text-center md:text-left">
        Premium custom labels and stickers for your brand.
      </p>
    </div>

    {/* Contact Info */}
    <div className="flex flex-col space-y-3 text-white">
      <p><span className="font-semibold">Address:</span> 69A, Bharathi Nagar, Chandrapuram East, Tirupur – 641604</p>
      <p><span className="font-semibold">Phone:</span> +91 93444 56612 | +91 86956 05083</p>
      <p><span className="font-semibold">Email:</span> swastiksticker69a@gmail.com</p>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col items-center md:items-end gap-4">
      <a href="tel:+919344456612" className="flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
        Call Now
      </a>
      <a href="https://wa.me/919344456612" className="flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
        WhatsApp
      </a>
    </div>
  </div>

  <div className="border-t border-white/30 mt-12 pt-6 text-center text-white text-sm">
    © {new Date().getFullYear()} <span className="font-semibold">Swastik Sticker</span>, Tirupur. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
