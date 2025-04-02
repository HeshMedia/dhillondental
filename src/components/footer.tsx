import Link from "next/link";
import { Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#031B35] text-white py-12">
        <div className="container grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-white">Dhillon</span>
              <span className="text-[#7AB5F5]">Dental Studio</span>
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
            At Dhillon Dental Studio, we are committed to providing high-quality dental care with a focus on patient comfort and long-lasting oral health. Our expert team uses advanced technology and personalized treatments to ensure you achieve a confident, healthy smile.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              <Link href="#" className="bg-[#08373A] p-2 rounded-sm hover:bg-[#7AB5F5] transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-[#08373A] p-2 rounded-sm hover:bg-[#7AB5F5] transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-[#08373A] p-2 rounded-sm hover:bg-[#7AB5F5] transition-colors">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/teeth-whitening" className="text-white/80 hover:text-white transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services/dental-filling" className="text-white/80 hover:text-white transition-colors">Dental Filling</Link></li>
              <li><Link href="/services/teeth-checkup" className="text-white/80 hover:text-white transition-colors">Teeth Checkup</Link></li>
              <li><Link href="/services/teeth-implants" className="text-white/80 hover:text-white transition-colors">Teeth Implants</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/resources/customer-stories" className="text-white/80 hover:text-white transition-colors">Customer Stories</Link></li>
              <li><Link href="/resources/help-center" className="text-white/80 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/resources/documentation" className="text-white/80 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/resources/blog" className="text-white/80 hover:text-white transition-colors">Blog & Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#B0D5FF] py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm text-[#062E2E]">
          <div>Copyright © 2023 Dhillon Dental Studio | Design by HeshMedia</div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/terms" className="hover:underline">Terms of Use</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
