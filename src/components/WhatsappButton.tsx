// components/WhatsappButton.tsx
'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  const phoneNumber = '+917009427538 '; // 🔁 Replace with your actual WhatsApp number (no '+')
  const message = encodeURIComponent('Hi! I visited your website and would like to book an appointment.');

  const handleClick = () => {
    const whatsappURL = isMobile
      ? `https://wa.me/${phoneNumber}?text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={38} />
    </button>
  );
};

export default WhatsappButton;
