// Import Button Component
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className=" text-white relative overflow-hidden "
      style={{
        backgroundImage: "url('/hero-re.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-24  relative z-10 h-full">
        <div className="max-w-2xl" >
          <h2 className="text-lg font-medium mb-2">Dhillon Dental Studio</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Smile, Our Priority.</h1>
          <p className="text-lg mb-8 opacity-90">
          Dhillon Dental Studio is a trusted family dental practice dedicated to providing high-quality care. With years of experience and a strong patient base, we are committed to ensuring healthy and beautiful smiles.
          </p>
            <Button className="bg-[#00395D] hover:bg-[#BCE7F5] text-white hover:text-[#031B35] p-4 font-medium">
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
