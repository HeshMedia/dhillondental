import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa]">
      {/* Banner */}
      <div className="bg-[#0e2a47] py-16 relative overflow-hidden">
        <h1 className="text-5xl font-bold text-white text-center">About Us</h1>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0">
          <div className="w-8 h-8 bg-[#A4D4F2] absolute bottom-0 right-16"></div>
          <div className="w-8 h-8 bg-white absolute bottom-0 right-0"></div>
          <div className="w-8 h-8 bg-[#f8f8f8] absolute bottom-0 right-8"></div>
          <div className="w-8 h-8 bg-[#009FE3] absolute bottom-8 right-0"></div>
          <div className="w-8 h-8 bg-gray-600 absolute bottom-16 right-0 opacity-50"></div>
          <div className="w-8 h-8 bg-gray-600 absolute bottom-8 right-8 opacity-50"></div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 animate-fade-in">
        <h2 className="text-3xl font-semibold mb-6 text-[#0e2a47]">Welcome to Dhillon Dental Studio</h2>
        <p className="mb-6 text-lg leading-relaxed">
          At <span className="font-semibold">Dhillon Dental Studio</span>, we believe that a confident smile begins with exceptional care. Our experienced team combines advanced technology with personalized attention to deliver high-quality dental solutions. From preventive checkups to full smile transformations, we’re here to support your journey every step of the way.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          We’ve created a warm, welcoming space where every patient feels comfortable and heard. Our goal is not just to treat your teeth, but to build trust, educate you on your oral health, and help you feel great about your smile. Because here, your comfort and confidence come first.
        </p>

        {/* Image Section
        <div className="my-12 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/testimonials-section.JPG"
            alt="Dhillon Dental Studio Team"
            width={1000}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div> */}

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#0e2a47]">Why Choose Us?</h3>
          <ul className="space-y-3">
            {[
              'Comprehensive care for all ages',
              'Advanced technology and techniques',
              'Warm, patient-first environment',
              'Highly experienced and compassionate team',
              'Customized smile design and treatment plans',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-[#009FE3] mt-1 w-5 h-5" />
                <span className="text-gray-700 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-[#0e2a47] mb-4">Ready to Transform Your Smile?</h3>
          <p className="text-lg text-gray-700 mb-6">Book your consultation with Dhillon Dental Studio and take the first step toward a healthier, more confident you.</p>
          <button className="bg-[#009FE3] hover:bg-[#007bbf] text-white text-lg px-8 py-3 rounded-full shadow-md transition-all duration-300">
            Book Your Visit
          </button>
        </div>
      </div>
    </div>
  );
}
