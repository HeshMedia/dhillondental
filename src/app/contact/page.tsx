"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

export default function ContactUsPage() {
  // Define state to track form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  
  // State to detect mobile device
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile device on client side
  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);
  
  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Format the message with form data
    const phoneNumber = '917009427538'; // Remove the + and space
    const message = encodeURIComponent(
      `📋 *Appointment Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*
      \n*Message:* ${formData.message}`
    );
    
    // Create WhatsApp URL
    const whatsappURL = isMobile
      ? `https://wa.me/${phoneNumber}?text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      
    // Open WhatsApp in new window
    window.open(whatsappURL, '_blank');
  };

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
            <p><strong>Phone:</strong> +91 7009427538 | 9876498799</p>
            <p><strong>Email:</strong> studiodhillondental@gmail.com</p>
            <p><strong>Address:</strong><span> </span>Shop no 45, Crown Plaza Market, Airport Road, Amritsar</p>
            <p><strong>Hours:</strong> Mon – Sat: 10:00 AM – 9:00 PM</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#0e2a47] mb-6">Book an Appointment</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009FE3]"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009FE3]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009FE3]"
            ></textarea>
           
            <button
              type="submit"
              className="bg-[#009FE3] hover:bg-[#007bbf] text-white font-medium px-6 py-3 rounded-md shadow-md transition duration-300 flex items-center justify-center gap-2"
            >
              <span>Book via WhatsApp</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
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
