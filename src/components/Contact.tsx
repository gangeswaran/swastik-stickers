import React from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
  "service_o9als98",        // Your Service ID
  "template_z3kil66",   // Your Template ID
  e.currentTarget,
  "AIC7ttTEQOYaMvVQh"         // Your EmailJS Public Key
)

      .then(
        () => {
          alert("Message sent successfully!");
          e.currentTarget.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get in touch with us for custom label solutions tailored to your needs.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="How can we help you?"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-amber-400 focus:border-amber-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold shadow-sm transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-amber-400 mb-6">Contact Information</h3>

          <p className="mb-4">
            <span className="font-semibold">Business Name:</span> Swastik Sticker
          </p>
          <p className="mb-4">
            <span className="font-semibold">Address:</span> 69A, Bharathi Nagar, Chandrapuram East, Tirupur – 641604
          </p>
          <p className="mb-4">
            <span className="font-semibold">Phone:</span> +91 93444 56612 | +91 86956 05083
          </p>
          <p className="mb-4">
            <span className="font-semibold">Email:</span> swastiksticker69a@gmail.com
          </p>
          <p className="mb-6">
            <span className="font-semibold">Working Hours:</span> Mon-Sat: 9:00 AM – 7:00 PM
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+919344456612"
              className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm transition-transform hover:scale-105"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919344456612"
              className="bg-amber-300 hover:bg-amber-400 text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm transition-transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
