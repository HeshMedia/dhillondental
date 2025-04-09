"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Team() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-20 bg-[#031B35] text-white relative overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto">
        <motion.h3
          className="text-sm font-medium text-white/70 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Doctors
        </motion.h3>
        <motion.h2
          className="text-4xl font-bold mb-4 md:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Meet Our Expert Dental Team
        </motion.h2>
        <motion.p
          className="text-white/80 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          At Dhillon Dental Studio, our skilled and compassionate team is dedicated to providing top-quality dental care. With expertise in various dental specialties, we ensure the best treatment for every patient.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Doctor Card */}
          <motion.div
            className="bg-white overflow-hidden flex flex-col w-[300px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/dr-harpreet.jpg"
              alt="Dr Harinder Kaur"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Dr Harinder Kaur</h3>
              <p className="text-gray-500 text-sm">
                Committed to delivering advanced and gentle dental care with a focus on patient comfort.
              </p>
            </div>
          </motion.div>

          {/* Know More Button */}
          <motion.div
            className="flex justify-center md:self-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <Link href="/doctors">
              <Button variant="outline" className="text-[#031B35] border-white bg-white">
                Know More
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
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Squares */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 bg-[#009FE3]"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute top-6 right-6 w-12 h-12 bg-white/20"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-16 h-16 bg-[#009FE3]"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.7 }}
      />
    </section>
  );
}
