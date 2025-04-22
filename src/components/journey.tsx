"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Journey() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h3 className="text-sm font-medium mb-2">How It Works</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Your Journey to a Healthy Smile Starts Here
          </h2>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
          {[
            {
              title: "Make Appointment",
              description:
                "Schedule your visit with ease and take the first step towards a healthier smile. Our team is here to assist you every step of the way.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              ),
            },
            {
              title: "Dental Treatment",
              description:
                "Receive expert treatment from our professional team in a comfortable and modern environment, using the latest technology and techniques.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M8 7V3m4 4V3m4 4V3" />
                </svg>
              ),
            },
            {
              title: "Smile & Confidence",
              description:
                "Walk away with a beautiful smile and the confidence to showcase it. We ensure that you leave our practice feeling happy and satisfied.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
              ),
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              variants={itemVariants}
            >
              <div className="bg-primary p-4 rounded-md w-12 h-12 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-muted-foreground mb-6">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Link href={"/contact"}>
            <Button onClick={handleWhatsappClick} className="bg-primary hover:bg-[#4e83be] text-white">
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
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
