import React from 'react';

const services = [
  {
    title: 'Group Travel Arrangements & Tour Packages',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Group%20travel%20arrangement.png',
    description: 'Custom group tours across Poland and Europe'
  },
  {
    title: 'Airport Transfer Services in Krakow',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Airport%20transfers.png',
    description: 'Professional airport pickup and transfer services'
  },
  {
    title: 'Conferences & MICE Services Poland',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Conferences%20and%20MICE.png',
    description: 'Business travel and corporate event planning'
  },
  {
    title: 'City Tours in Krakow & Poland',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/City%20tours.png',
    description: 'Guided city tours and sightseeing experiences'
  },
  {
    title: 'Professional Tour Guide Services',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Tour%20guide%20services.png',
    description: 'Certified multilingual tour guides in Poland'
  },
  {
    title: 'School & University Educational Tours',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/School%20&%20University%20tours.png',
    description: 'Educational travel programs for students'
  },
  {
    title: 'Travel Consultation & Planning',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Travel%20Consultation.png',
    description: 'Expert travel advice and itinerary planning'
  },
  {
    title: 'Tailor-Made Special Tours Europe',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Tailor%20made%20special%20tours.png',
    description: 'Customized vacation packages and private tours'
  },
  {
    title: 'Cruise Bookings & River Tours',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Cruise%20bookings.png',
    description: 'European cruise reservations and packages'
  },
  {
    title: 'Hotel & Accommodation Bookings Poland',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Hotel%20&%20accommodation%20bookings.png',
    description: 'Hotels, hostels, and vacation rentals across Europe'
  },
  {
    title: 'Flight, Bus & Train Ticket Reservations',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Air%20tickets,%20bus%20&%20Train%20reservations.png',
    description: 'Complete transportation booking services'
  },
  {
    title: 'Custom European Vacation Packages',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Tailor%20Made%20tours.png',
    description: 'Personalized multi-country tour packages'
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
        aria-hidden="true"
      />

      {/* Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" aria-hidden="true">
        <img 
          src="https://greencontinenttours.com/GCT-asset/logo.svg" 
          alt="" 
          className="w-96 h-96"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-6">
            Comprehensive Travel Services in Krakow, Poland
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            As a full-service tour operator and travel agency, Green Continent Tours offers complete travel solutions for individuals, groups, and businesses across Poland and Europe.
          </p>
          <img 
            src="https://greencontinenttours.com/GCT-asset/our-services.png" 
            alt="Green Continent Tours - Complete travel and tour services" 
            className="mx-auto max-w-md w-full mb-4"
            loading="lazy"
          />
          <div className="flex items-center justify-center gap-4 mt-8">
            <img 
              src="https://greencontinenttours.com/GCT-asset/logo.svg" 
              alt="Green Continent Tours logo" 
              className="h-16 w-16"
            />
            <img 
              src="https://greencontinenttours.com/GCT-asset/logoText.svg" 
              alt="Your unique travel partner tagline" 
              className="h-10"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-12 h-12 object-contain filter brightness-0 invert"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#0f4f47] leading-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <img 
            src="https://greencontinenttours.com/GCT-asset/logo.svg" 
            alt="Green Continent Tours - Tour operator in Krakow" 
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