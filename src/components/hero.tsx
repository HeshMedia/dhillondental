// Import Button Component
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-[#031B35] text-white relative overflow-hidden">
      <div className="container py-24 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-lg font-medium mb-2">Happy Dental</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Smile, Our Priority.</h1>
          <p className="text-lg mb-8 opacity-90">
            Mauris risus adipiscing cursus consequat. Sit duis lobortis diam non. In in suspendisse quam in vestibulum
            diam scelerisque vulputate id. In tellus nibh volutpat dignissim.
          </p>
            <Button className="bg-[#00395D] hover:bg-[#BCE7F5] text-white hover:text-[#031B35] border-2 border-gray-800 font-medium">
            Make Appointment
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

      {/* Decorative Elements */}
<div className="absolute bottom-0 right-0">
  {/* Square 1 - Light Blue */}
  <div className="w-16 h-16 bg-[#A4D4F2] absolute bottom-0 right-32"></div>
  {/* Square 2 - White */}
  <div className="w-16 h-16 bg-white absolute bottom-0 right-0"></div>
  
  <div className="w-16 h-16 bg-[#f8f8f8] absolute bottom-0 right-16"></div>

  {/* Square 3 - Blue */}
  <div className="w-16 h-16 bg-[#009FE3] absolute bottom-16 right-0"></div>

  {/* Square 4 - Dark Blue Transparent */}
  <div className="w-16 h-16 bg-gray-600 absolute bottom-32 right-0"></div>

  {/* Square 5 - Grey Transparent */}
  <div className="w-16 h-16 bg-gray-600 absolute bottom-16 right-16"></div>
</div>

    </section>
  );
}
