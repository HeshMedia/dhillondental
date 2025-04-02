import Link from 'next/link';

const services = [
  {
    title: 'Dental Implants',
    slug: 'dental-implants',
    icon: '/dental-implan-white.svg',
  },
  {
    title: 'Smile Makeover',
    slug: 'smile-makeover',
    icon: '/dental-implan-white.svg',
  },
  {
    title: 'Braces & Aligners',
    slug: 'braces-aligners',
    icon: '/dental-implan-white.svg',
  },
  {
    title: 'Teeth Whitening',
    slug: 'teeth-whitening',
    icon: '/dental-implan-white.svg',
  },
  {
    title: 'Root Canal Treatment',
    slug: 'root-canal-treatment',
    icon: '/dental-implan-white.svg',
  },
  {
    title: 'Full Mouth Rehabilitation',
    slug: 'full-mouth-rehabilitation',
    icon: '/dental-implan-white.svg',
  },
  {
    title: 'Crowns & Bridges',
    slug: 'crowns-bridges',
    icon: '/dental-implan-white.svg',
  },
  {
    title: 'Teeth Extractions',
    slug: 'teeth-extractions',
    icon: '/dental-implan-white.svg',
  },
  {
    title: 'Pediatric Dentistry',
    slug: 'pediatric-dentistry',
    icon: '/dental-implan-white.svg',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa]">
      <div className="bg-[#0e2a47] py-12 relative overflow-hidden">
        <h1 className="text-4xl font-bold text-white text-center">Our Services</h1>

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

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative"
          >
            <div className="absolute -top-4 left-4 bg-[#0e2a47] p-2">
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className="w-6 h-6"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h2>
              <p className="text-sm text-gray-600">Durable and natural-looking solutions to restore missing teeth.</p>
              <p className="text-sm text-blue-500 mt-2 font-medium">Read More</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}