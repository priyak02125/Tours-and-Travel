"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Your message has been sent ");
  };

  return (
    <div id="contact" className="lg:py-16 lg:px-40">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions about our tours or services? Contact us anytime.
          </p>
          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              <Phone className="mr-3 text-blue-600" /> +91 00000 00000
            </p>
            <p className="flex items-center text-gray-700">
              <Mail className="mr-3 text-blue-600" /> support@tourwebsite.com
            </p>
            <p className="flex items-center text-gray-700">
              <MapPin className="mr-3 text-blue-600" />
              Saket, New Delhi, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition duration-300"
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
