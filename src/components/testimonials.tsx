"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GoogleReviews from "./google-reviews";

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
          <div className="space-y-6">
            <motion.div
              ref={ref}
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3 className="text-sm font-medium text-gray-600 mb-2">Testimonials</h3>
              <h2 className="text-5xl md:text-4xl font-bold text-[#031B35] mb-8 leading-tight">
                What Our Patients <br /> Say About Us
              </h2>
            </motion.div>

            {/* Google Reviews Component */}
            <motion.div 
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
            >
              <GoogleReviews className="p-0 transform scale-90 origin-top-left" />
            </motion.div>
          </div>

          {/* Right Section - Decorative Block with Background Image */}
          <motion.div
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-full h-[28rem] bg-[#031B35] rounded-lg overflow-hidden shadow-xl"
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
