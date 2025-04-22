"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if the user is on a mobile device
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const phoneNumber = '+917009427538';
  const message = encodeURIComponent('Hi! I visited your website and would like to book an appointment.');

  const handleWhatsappClick = () => {
    const whatsappURL = isMobile
      ? `https://wa.me/${phoneNumber}?text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: "url('/dpp.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      <div className="container py-24 relative z-10">
        <div className="max-w-2xl">
          {/* Heading and Subheading with reduced animation delay */}
          <motion.h2
            className="text-lg font-medium mb-2 drop-shadow-lg"
            initial={{ opacity: 0, x: -20 }}  
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }} 
          >
            Dhillon Dental Studio
          </motion.h2>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-xl"
            initial={{ opacity: 0, x: -20 }}  
            whileInView={{ opacity: 1, x: 0 }}     
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Your Smile, <br /> Our Priority
          </motion.h1>
          <motion.p
            className="text-lg mb-8 opacity-95 drop-shadow-md"
            initial={{ opacity: 0, x: -20 }}  
            whileInView={{ opacity: 1, x: 0 }}    
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Dhillon Dental Studio is a trusted family dental practice dedicated to providing
            high-quality care. With years of experience and a strong patient base, we are committed
            to ensuring healthy and beautiful smiles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}  
            whileInView={{ opacity: 1, x: 0 }}     
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              className="bg-[#00395D] hover:bg-[#BCE7F5] text-white hover:text-[#031B35] p-4 font-medium"
              onClick={handleWhatsappClick}
            >
              Make Appointment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements with reduced animation delays */}
      <div className="absolute bottom-0 right-0 z-10">
        <motion.div
          className="w-16 h-16 bg-[#A4D4F2] absolute bottom-0 right-32"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.div
          className="w-16 h-16 bg-white absolute bottom-0 right-0"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        />
        <motion.div
          className="w-16 h-16 bg-[#f8f8f8] absolute bottom-0 right-16"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div
          className="w-16 h-16 bg-[#009FE3] absolute bottom-16 right-0"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.div
          className="w-16 h-16 bg-gray-600 absolute bottom-32 right-0 opacity-50"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.div
          className="w-16 h-16 bg-gray-600 absolute bottom-16 right-16 opacity-50"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        />
      </div>
    </section>
  );
}
