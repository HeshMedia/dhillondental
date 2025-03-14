import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Header() {
  return (
    <header>
      <div className="bg-tertiary py-2">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Jl Danau Bratan, Malang City, East Java 65139</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+62 864 6444 2222</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hi@happydental.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            HAPPY DENTAL
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#031B35] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#031B35] transition-colors">
              About Us
            </Link>
            <Link href="/services" className="hover:text-[#031B35] transition-colors">
              Services
            </Link>
            <Link href="/page" className="hover:text-[#031B35] transition-colors">
              Page
            </Link>
            <Link href="/contact" className="hover:text-[#031B35] transition-colors">
              Contact Us
            </Link>
          </nav>
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
        </div>
      </div>
    </header>
  )
}


