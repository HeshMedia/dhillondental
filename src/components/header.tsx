"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Menu, X } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-tertiary py-2">
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
              <span>dhillonddentalstudio@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center text-2xl font-bold text-primary">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
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
            <Link href="/services" className="hover:text-[#031B35] transition-colors">
              Services
            </Link>
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
            <Button className="bg-[#00395D] hover:bg-gray-800 text-white border-2 border-gray-800 font-medium">
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
            <Link href="/services" className="block hover:text-[#031B35] transition-colors">
              Services
            </Link>

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
