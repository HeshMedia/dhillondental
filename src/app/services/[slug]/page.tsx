import Image from "next/image";

import { serviceDetails } from '@/lib/data/services';
import Link from "next/link";
import { TiTick } from "react-icons/ti";



export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {

  const service = serviceDetails[params.slug];

  if (!service) {
    return (
      <div className="p-12 text-center text-red-500">Service not found.</div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="bg-[#0e2a47] py-12 px-4 relative overflow-hidden">
        <h1 className="text-4xl font-bold text-white text-center">
          {service.title}
        </h1>

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

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Text Block */}
        <div>
          <p className="text-gray-700 text-base mb-6">{service.description}</p>

          <h2 className="text-xl font-bold text-[#0e2a47] mb-2">
            Why Choose {service.title}?
          </h2>
            <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
            {service.benefits.map((point: string, idx: number) => (
              <div key={idx}>
              <TiTick className="inline text-lg" /> {point}
              </div>
            ))}
            </ul>

          <h2 className="text-xl font-bold text-[#0e2a47] mb-2">
            {service.Sh}?
          </h2>

          <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
            {service.solutions.map((solution: string, idx: number) => (
              <li key={idx}>{solution}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-[#0e2a47] mb-2">
            {service.stepH}?
          </h2>

          <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
            {service.steps.map((step: string, idx: number) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
            <Link href={"/contact"}>
          <button className="bg-black text-white px-6 py-3 rounded-md mt-4 hover:bg-gray-800 transition">
            Make Appointment →
          </button>
          </Link>
        </div>

        {/* Right Image Block */}
        <div className="flex justify-center items-start">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
