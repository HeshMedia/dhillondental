import React from 'react';
import {doctors} from '@/lib/data/doctorData';


const Doctor = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="bg-[#0e2a47] py-16 relative overflow-hidden">
        <h1 className="text-5xl font-bold text-white text-center">Meet Our Expert Dentists</h1>
        <div className="absolute bottom-0 right-0">
          <div className="w-8 h-8 bg-[#A4D4F2] absolute bottom-0 right-16" />
          <div className="w-8 h-8 bg-white absolute bottom-0 right-0" />
          <div className="w-8 h-8 bg-[#f8f8f8] absolute bottom-0 right-8" />
          <div className="w-8 h-8 bg-[#009FE3] absolute bottom-8 right-0" />
          <div className="w-8 h-8 bg-gray-600 absolute bottom-16 right-0 opacity-50" />
          <div className="w-8 h-8 bg-gray-600 absolute bottom-8 right-8 opacity-50" />
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="flex flex-col gap-20 px-6 md:px-24 py-16">
        {doctors.map((doc, index) => (
          <div
            key={doc.name}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center justify-between gap-10`}
          >
            {/* Text Section */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3170] mb-2">{doc.name}</h2>
              <p className="text-black font-medium mb-4">{doc.title}</p>
              <p className="text-gray-800 leading-7 text-justify">{doc.bio}</p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 relative flex justify-center">
              <div className="relative">
                {/* Blue Background Square */}
                <div className="absolute -top-6 -right-6 w-full h-full bg-[#A4D4F2] z-0"></div>
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="relative z-10 object-cover shadow-md w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
