// components/WhatsappButton.tsx
'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  // Initialize with null to avoid initial rendering with wrong position
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Immediately set the mobile state based on current window width
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
      
      // Detect iOS device
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsIOS(/iphone|ipad|ipod/.test(userAgent));

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Remove any spaces from phone number
  const phoneNumber = '+917009427538'.trim();
  const message = encodeURIComponent('Hi! I visited your website and would like to book an appointment.');

  const handleClick = () => {
    let whatsappURL;
    
    if (isMobile) {
      // For mobile devices
      whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    } else {
      // For desktop devices
      whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    }
    
    window.open(whatsappURL, '_blank');
  };

  // Don't render the button until we know the device type
  if (isMobile === null) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-10 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out ${
        isMobile ? 'right-8' : 'right-14'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={38} />
    </button>
  );
};

export default WhatsappButton;
