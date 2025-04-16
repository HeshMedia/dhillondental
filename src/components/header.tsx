"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] = useState(false)

  const services = [
    { name: 'Dental Implants', slug: 'dental-implants' },
    { name: 'Smile Makeover', slug: 'smile-makeover' },
    { name: 'Braces & Aligners', slug: 'braces-aligners' },
    { name: 'Teeth Whitening', slug: 'teeth-whitening' },
    { name: 'Root Canal Treatment', slug: 'root-canal-treatment' },
    { name: 'Full Mouth Rehabilitation', slug: 'full-mouth-rehabilitation' },
    { name: 'Crowns & Bridges', slug: 'crowns-bridges' },
    { name: 'Teeth Extractions', slug: 'teeth-extractions' },
    { name: 'Pediatric Dentistry', slug: 'pediatric-dentistry' }
  ]
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
    <header>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden sm:block bg-tertiary py-2">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Shop no 45, Crown Plaza Market, Airport Road, Amritsar</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>7009427538 | 9876498799</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>studiodhillondental@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Link href="https://www.instagram.com/dhillondentalstudio/" className="p-1 rounded-sm hover:bg-[#7AB5F5] transition-colors">
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.facebook.com/people/Dhillon-Dental-Studio/100088950354619/" className=" p-1 rounded-sm hover:bg-[#7AB5F5] transition-colors">
                <FaFacebookSquare className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center text-2xl font-bold text-primary">
            <img src="/logo.png" alt="Logo" className="h-10 w-8 mr-2" />
            DHILLON DENTAL STUDIO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#031B35] transition-colors">
              Home
            </Link>
            <Link href="/doctors" className="hover:text-[#031B35] transition-colors">
              Doctors
            </Link>
            <Link href="/about" className="hover:text-[#031B35] transition-colors">
              About Us
            </Link>
            
            {/* Services Dropdown - Desktop */}
            <div className="relative">
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center hover:text-[#031B35] transition-colors focus:outline-none"
              >
                Services {servicesDropdownOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-2 px-2 max-h-96 overflow-y-auto">
                    {services.map((service) => (
                      <Link 
                        key={service.slug}
                        href={`/services/${service.slug}`} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#B0D5FF] hover:text-[#031B35] rounded-md"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link 
                      href="/services" 
                      className="block px-4 py-2 text-sm font-medium text-[#031B35] hover:bg-[#B0D5FF] mt-1 border-t border-gray-100 rounded-md"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/contact" className="hover:text-[#031B35] transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* CTA Button */}
         
          <div className="hidden md:block">
          <Link href="/contact">
            <Button  onClick={handleWhatsappClick} className= "bg-[#00395D] hover:bg-gray-800 text-white border-2 border-gray-800 font-medium">
              Get Started
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
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block hover:text-[#031B35] transition-colors">
              Home
            </Link>
            <Link href="/about" className="block hover:text-[#031B35] transition-colors">
              About Us
            </Link>
            
            {/* Services Dropdown - Mobile */}
            <div>
              <button
                onClick={() => setMobileServicesDropdownOpen(!mobileServicesDropdownOpen)}
                className="flex items-center w-full text-left hover:text-[#031B35] transition-colors focus:outline-none"
              >
                Services {mobileServicesDropdownOpen ? <ChevronUp className="ml-1 h-4 w-4 inline" /> : <ChevronDown className="ml-1 h-4 w-4 inline" />}
              </button>
              
              {mobileServicesDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <Link 
                      key={service.slug}
                      href={`/services/${service.slug}`} 
                      className="block py-1 text-sm hover:text-[#031B35]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link 
                    href="/services" 
                    className="block py-1 text-sm font-medium hover:text-[#031B35]"
                    onClick={() => setMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block hover:text-[#031B35] transition-colors">
              Contact Us
            </Link>
            <Link href="/contact">
            <Button className="w-full bg-[#00395D] hover:bg-gray-800 text-white border-2 border-gray-800 font-medium">
              Get Started
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
          </nav>
        )}
      </div>
    </header>
  )
}
