"use client";
import React from 'react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa]">
      {/* Banner */}
      <div className="bg-[#0e2a47] py-16 relative overflow-hidden">
        <h1 className="text-5xl font-bold text-white text-center">Contact Us</h1>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0">
          <div className="w-8 h-8 bg-[#A4D4F2] absolute bottom-0 right-16"></div>
          <div className="w-8 h-8 bg-white absolute bottom-0 right-0"></div>
          <div className="w-8 h-8 bg-[#f8f8f8] absolute bottom-0 right-8"></div>
          <div className="w-8 h-8 bg-[#009FE3] absolute bottom-8 right-0"></div>
          <div className="w-8 h-8 bg-gray-600 absolute bottom-16 right-0 opacity-50"></div>
          <div className="w-8 h-8 bg-gray-600 absolute bottom-8 right-8 opacity-50"></div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 text-gray-800 animate-fade-in">
        {/* Info Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#0e2a47]">Get in Touch</h2>
          <p className="mb-6 text-lg leading-relaxed">
            We'd love to hear from you! Whether you're ready to book an appointment or simply have a question about our services, our team is here to help.
          </p>
          <div className="space-y-4 text-lg">
            <p><strong>Phone:</strong> +91 7009427538</p>
            <p><strong>Email:</strong> dhillonddentalstudio@gmail.com</p>
            <p><strong>Address:</strong>Shop no 45, Crown Plaza Market, Airport Road, Amritsar</p>
            <p><strong>Hours:</strong> Mon – Sat: 9:00 AM – 7:00 PM</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#0e2a47] mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009FE3]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009FE3]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009FE3]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#009FE3] hover:bg-[#007bbf] text-white font-medium px-6 py-3 rounded-md shadow-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-semibold text-[#0e2a47] mb-4">Our Location</h3>
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.7029827845013!2d74.83967477507544!3d31.669344839767543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391965175deee46f%3A0xfd1a81c3575d7b02!2sDhillon%20Dental%20Studio!5e0!3m2!1sen!2sin!4v1743583716220!5m2!1sen!2sin"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            className="w-full h-[400px] border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
