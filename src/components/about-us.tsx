export default function AboutUs() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right side - Text and Features (comes first on mobile) */}
          <div className="order-1 md:order-2">
            <h3 className="text-sm font-medium text-gray-500 mb-2">About Us</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#031B35] mb-6 leading-tight">
              Your Trusted Partner <br /> For Dental Health
            </h2>
            <p className="text-gray-600 mb-8">
              At Dhillon Dental Studio, we are committed to providing expert, compassionate dental care for all ages.
              With years of experience, we ensure a comfortable and personalized approach to your oral health.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[#062E2E] p-3 rounded-md shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87m9-3a4 4 0 1 0-8 0m8 0a4 4 0 1 0-8 0m8 0v1a4 4 0 0 1-8 0v-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#031B35] mb-1">Expert Dental Solutions</h3>
                  <p className="text-gray-600 text-sm">
                    Professional care backed by experience and technology.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[#062E2E] p-3 rounded-md shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#031B35] mb-1">Dedicated & Trustworthy</h3>
                  <p className="text-gray-600 text-sm">
                    Reliable dental care with a patient-first approach.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left side - Image & Decoration (appears second on mobile) */}
          <div
            className="order-2 md:order-1 relative h-80 md:h-[38rem] w-full bg-[#031B35]"
            style={{ backgroundImage: 'url(/about.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#009FE3] absolute bottom-24 left-0" />
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white absolute bottom-0 left-0" />
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 absolute bottom-0 left-16 md:left-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
