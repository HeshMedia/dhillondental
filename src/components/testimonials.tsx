export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text and Testimonial */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Testimonials</h3>
            <h2 className="text-5xl md:text-6xl font-bold text-[#031B35] mb-8 leading-tight">
              What Our Patients <br /> Say About Us
            </h2>

            {/* Quote and Text */}
            <div className="relative pl-2">
              <div className="text-7xl text-[#B0D5FF] font-serif leading-none mb-4">“</div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
              The team at Dhillon Dental Studio is amazing! They made me feel comfortable and explained everything in detail. Highly recommended!
              </p>
              {/* No patient avatar/name as not present in image */}
            </div>
          </div>

          {/* Right Section - Decorative Block with Background Image */}
          <div
            className="relative w-full h-[28rem] bg-[#031B35]"
            style={{ backgroundImage: 'url(/what-our-patient-say-crop.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* { Top right cyan block } */}
            {<div className="absolute top-0 right-0 w-20 h-20 bg-[#009FE3]"></div> }
            {/* { Below cyan block - white */} 
            { <div className="absolute top-20 right-0 w-20 h-20 bg-[#F3F4F6]"></div> }
            {/* Bottom left light blue block */}
             <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#B0D5FF]"></div> 
          </div>
        </div>
      </div>
    </section>
  );
}
