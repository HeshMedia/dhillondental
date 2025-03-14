export default function AboutUs() {
  return (
    <section className="py-20 pl-15 bg-white">
      <div className="container ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Decorative element */}
          <div className="relative h-[38rem] w-85 bg-[#031B35]">
            {/* Square 1 - Light Blue */}
            <div className="w-24 h-24 bg-[#009FE3] absolute bottom-24 left-0"></div>
            {/* Square 2 - White */}
            <div className="w-24 h-24 bg-white absolute bottom-0 left-0"></div>
            {/* Square 4 - */}
            <div className="w-24 h-24 bg-gray-300 absolute bottom-0 left-24"></div>
          </div>

          {/* Right side - Text and Features */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">About Us</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#031B35] mb-6 leading-tight">
              Your Trusted Partner <br /> For Dental Health
            </h2>
            <p className="text-gray-600 mb-8">
              Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor.
              Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada fringilla amet elit.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[#062E2E] p-3 rounded-md">
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
                  <h3 className="text-lg font-semibold text-[#031B35] mb-1">Dedicated & Trustworthy</h3>
                  <p className="text-gray-600 text-sm">
                    Purus turpis vivamus sem est blandit in at egestas.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[#062E2E] p-3 rounded-md">
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
                  <h3 className="text-lg font-semibold text-[#031B35] mb-1">Affordable Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    Purus turpis vivamus sem est blandit in at egestas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
