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
      <div className="container mx-auto px-4">
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
              <h2 className="text-4xl lg:text-4xl font-bold text-[#031B35] mb-8 leading-tight">
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

          {/* Right Section - Image without decorative blocks */}
          <motion.div
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-full h-[16rem] md:h-[28rem] bg-[#031B35] rounded-lg overflow-hidden shadow-xl"
          >
            <div className="w-full h-full">
              <img 
                src="/review-sec.webp" 
                alt="Patient reviews" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
