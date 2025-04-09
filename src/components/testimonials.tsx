"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text and Testimonial */}
          <motion.div
            ref={ref}
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-sm font-medium text-gray-600 mb-2">Testimonials</h3>
            <h2 className="text-5xl md:text-6xl font-bold text-[#031B35] mb-8 leading-tight">
              What Our Patients <br /> Say About Us
            </h2>

            {/* Quote and Text */}
            <div className="relative pl-2">
              <div className="text-7xl text-[#B0D5FF] font-serif leading-none mb-4">“</div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                The team at Dhillon Dental Studio is amazing! They made me feel
                comfortable and explained everything in detail. Highly
                recommended!
              </p>
            </div>
          </motion.div>

          {/* Right Section - Decorative Block with Background Image */}
          <motion.div
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-full h-[28rem] bg-[#031B35]"
            style={{
              backgroundImage: "url(/review-sec.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Top right cyan block */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#009FE3]"></div>
            {/* Below cyan block - white */}
            <div className="absolute top-20 right-0 w-20 h-20 bg-[#F3F4F6]"></div>
            {/* Bottom left light blue block */}
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#B0D5FF]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
