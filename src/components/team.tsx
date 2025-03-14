import { Button } from "@/components/ui/button";

export default function Team() {
  return (
    <section className="py-20 pl-20 bg-[#031B35] text-white relative overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Section - Heading and Cards */}
          <div className="col-span-2">
            <h3 className="text-sm font-medium text-white/70 mb-2">Our Doctors</h3>
            <h2 className="text-4xl font-bold mb-6">Meet Our Expert Dental Team</h2>
            <p className="text-white/80 mb-12 max-w-2xl">
              Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus
              enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum.
            </p>

            {/* Team Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Doctor 1 */}
              <div className="bg-white overflow-hidden flex flex-col h-[32rem]"> 
                <div className="flex-1 bg-gray-400"></div> {/* Placeholder for image */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Dr. Carolyn</h3>
                  <p className="text-gray-500 text-sm">Dental Specialist</p>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="bg-white overflow-hidden flex flex-col h-[32rem]"> 
                <div className="flex-1 bg-gray-400"></div> {/* Placeholder for image */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Dr. Culpepper</h3>
                  <p className="text-gray-500 text-sm">Dental Specialist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Button */}
          <div className="flex justify-center items-center">
            <Button variant="outline" className="text-[#031B35] border-white bg-white">
              Know More
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
      </div>

      {/* Decorative Squares */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#009FE3]"></div>
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#009FE3]"></div>
    </section>
  );
}
