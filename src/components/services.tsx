"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section - Heading and Block */}
          <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-base font-medium text-[#062E2E] mb-2">
                Our Service
              </h3>
              <h2 className="text-6xl font-bold text-[#031B35] mb-6 leading-tight">
                Dental Services for <br /> Your Smile
              </h2>
              <p className="text-gray-600 mb-8">
                At Dhillon Dental Studio, we offer high-quality dental care to
                keep your smile healthy and bright. From routine checkups to
                advanced treatments, we are here to provide expert care in a
                comfortable setting.
              </p>
            </div>

            {/* Decorative Image Section */}
            <motion.div
              variants={fadeIn}
              className="relative w-full h-72 rounded-sm overflow-hidden shadow-md"
            >
              <Image
                src="/hh1.webp"
                alt="Consultation at Dhillon Dental Studio"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Section - Services List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col justify-between pt-10 space-y-8"
          >
            {/* Service 1 */}
            <Link href={"/services/dental-implants"}>
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="bg-[#062E2E] p-4 rounded-md flex items-center justify-center w-16 h-16">
                  <img
                    src="/dental-implan-white.svg"
                    alt="Dental Implant Icon"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#031B35] mb-1">
                    Dental Implants
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Durable and natural-looking solutions to restore missing
                    teeth.
                  </p>
                </div>
              </motion.div>
            </Link>
            <div className="h-px bg-gray-200 w-full"></div>

            {/* Service 2 */}
            <Link href={"/services/smile-makeover"}>
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="bg-[#062E2E] p-4 rounded-md flex items-center justify-center w-16 h-16">
                  <img
                    src="/dental-implan-white.svg"
                    alt="Dental Implant Icon"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#031B35] mb-1">
                  Smile Makeover
                  </h3>
                  <p className="text-gray-600 text-sm">
                  Achieve a stunning smile transformation with custom dental veneers.
                  </p>
                </div>
              </motion.div>
            </Link>
            <div className="h-px bg-gray-200 w-full"></div>

            {/* Service 3 */}
            <Link href={"/services/teeth-whitening"}>
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="bg-[#062E2E] p-4 rounded-md flex items-center justify-center w-16 h-16">
                  <img
                    src="/dental-implan-white.svg"
                    alt="Dental Implant Icon"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#031B35] mb-1">
                    Teeth Whitening
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enhance your smile with safe and effective teeth whitening
                    treatments.
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Button */}
            <Link href={"/services"}>
              <motion.div variants={fadeInUp}>
                <Button className="bg-[#031B35] text-white mt-4 self-start">
                  All Services
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
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
