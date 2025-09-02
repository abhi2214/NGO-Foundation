import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700">Contact Us</h1>
        <p className="mt-3 text-gray-600">
          We'd love to hear from you. Reach us anytime.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section - Contact Info */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Get in Touch</h2>
          <div className="space-y-5 text-gray-700">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500 text-xl" /> 
              <span>+91 7620086320</span>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 text-xl" /> 
              <span>info@suvidhafoundationedutech.org</span>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500 text-xl" /> 
              <span>Suvidha Foundation, Nagpur, Maharashtra, India</span>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Send a Message</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
