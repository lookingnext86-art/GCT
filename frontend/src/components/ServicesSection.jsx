import React from 'react';

const services = [
  {
    title: 'Group travel arrangement',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Group%20travel%20arrangement.png'
  },
  {
    title: 'Airport transfers',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Airport%20transfers.png'
  },
  {
    title: 'Conferences and MICE',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Conferences%20and%20MICE.png'
  },
  {
    title: 'City tours',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/City%20tours.png'
  },
  {
    title: 'Tour guide services',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Tour%20guide%20services.png'
  },
  {
    title: 'School & University tours',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/School%20&%20University%20tours.png'
  },
  {
    title: 'Travel Consultation',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Travel%20Consultation.png'
  },
  {
    title: 'Tailor made special tours',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Tailor%20made%20special%20tours.png'
  },
  {
    title: 'Cruise bookings',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Cruise%20bookings.png'
  },
  {
    title: 'Hotel & accommodation bookings',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Hotel%20&%20accommodation%20bookings.png'
  },
  {
    title: 'Air tickets, bus & Train reservations',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Air%20tickets,%20bus%20&%20Train%20reservations.png'
  },
  {
    title: 'Tailor Made tours',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Tailor%20Made%20tours.png'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Plane */}
      <img 
        src="https://greencontinenttours.com/GCT-asset/second-plane.svg" 
        alt="" 
        className="absolute top-10 right-10 w-32 opacity-10"
      />

      {/* Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <img 
          src="https://greencontinenttours.com/GCT-asset/logo.svg" 
          alt="" 
          className="w-96 h-96"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <img 
            src="https://greencontinenttours.com/GCT-asset/our-services.png" 
            alt="Our Services" 
            className="mx-auto max-w-md w-full mb-4"
          />
          <div className="flex items-center justify-center gap-4 mt-8">
            <img 
              src="https://greencontinenttours.com/GCT-asset/logo.svg" 
              alt="Green Continent Tours" 
              className="h-16 w-16"
            />
            <img 
              src="https://greencontinenttours.com/GCT-asset/logoText.svg" 
              alt="Your unique travel partner" 
              className="h-10"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-12 h-12 object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#0f4f47] leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <img 
            src="https://greencontinenttours.com/GCT-asset/logo.svg" 
            alt="Green Continent Tours" 
            className="h-16 w-16"
          />
          <img 
            src="https://greencontinenttours.com/GCT-asset/logoText.svg" 
            alt="Your unique travel partner" 
            className="h-10"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;