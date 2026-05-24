import React from 'react';

const services = [
  {
    title: 'Krakow Group Tours & Poland Travel Packages',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Group%20travel%20arrangement.png',
    description: 'Customized group tours in Krakow, Poland & Europe'
  },
  {
    title: 'Krakow Airport Transfers & Transportation',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Airport%20transfers.png',
    description: 'Professional pickup from Krakow Airport (KRK)'
  },
  {
    title: 'Krakow MICE & Corporate Event Services',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Conferences%20and%20MICE.png',
    description: 'Business meetings and conferences in Krakow'
  },
  {
    title: 'Krakow City Tours & Sightseeing',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/City%20tours.png',
    description: 'Old Town, Wawel Castle, Kazimierz guided tours'
  },
  {
    title: 'Professional Krakow Tour Guides',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Tour%20guide%20services.png',
    description: 'Licensed multilingual guides in Krakow & Poland'
  },
  {
    title: 'Educational Tours to Krakow & Auschwitz',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/School%20&%20University%20tours.png',
    description: 'Student tours, Auschwitz-Birkenau educational visits'
  },
  {
    title: 'Krakow Travel Consultation & Planning',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Travel%20Consultation.png',
    description: 'Expert advice for visiting Krakow and Poland'
  },
  {
    title: 'Custom Krakow & Poland Private Tours',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Tailor%20made%20special%20tours.png',
    description: 'Personalized Krakow itineraries and day trips'
  },
  {
    title: 'European River Cruise Bookings from Poland',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Cruise%20bookings.png',
    description: 'Danube, Vistula cruises and European packages'
  },
  {
    title: 'Krakow Hotels & Accommodation Bookings',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Hotel%20&%20accommodation%20bookings.png',
    description: 'Best hotels in Krakow Old Town and Poland'
  },
  {
    title: 'Poland Train, Bus & Flight Tickets',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Air%20tickets,%20bus%20&%20Train%20reservations.png',
    description: 'Transportation booking across Poland & Europe'
  },
  {
    title: 'Multi-Day Poland & Central Europe Tours',
    icon: 'https://greencontinenttours.com/GCT-asset/Services/Tailor%20Made%20tours.png',
    description: 'Krakow to Prague, Vienna, Budapest tour packages'
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
            Complete Krakow Tour Operator Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Your trusted Krakow-based tour operator offering comprehensive travel services for exploring Krakow, Poland, and Europe. From day trips to multi-week adventures, we handle every detail of your Polish journey.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            <strong>Popular Tours from Krakow:</strong> Auschwitz-Birkenau Memorial, Wieliczka Salt Mine, Zakopane & Tatra Mountains, Wadowice (Pope John Paul II Hometown), Prague, Vienna, Budapest
          </p>
          <img 
            src="https://greencontinenttours.com/GCT-asset/our-services.png" 
            alt="Green Continent Tours - Complete Krakow tour services" 
            className="mx-auto max-w-md w-full mb-4"
            loading="lazy"
          />
          <div className="flex items-center justify-center gap-4 mt-8">
            <img 
              src="https://greencontinenttours.com/GCT-asset/logo.svg" 
              alt="Green Continent Tours - Krakow tour operator logo" 
              className="h-16 w-16"
            />
            <img 
              src="https://greencontinenttours.com/GCT-asset/logoText.svg" 
              alt="Your unique travel partner in Krakow" 
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

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-[#0f4f47] mb-4">
            Start Your Krakow Adventure Today!
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're visiting Krakow for a day, a week, or planning a comprehensive Poland tour, our local experts are ready to create your perfect itinerary.
          </p>
          <div className="flex items-center justify-center gap-4">
            <img 
              src="https://greencontinenttours.com/GCT-asset/logo.svg" 
              alt="Green Continent Tours - Book Krakow tours" 
              className="h-16 w-16"
            />
            <img 
              src="https://greencontinenttours.com/GCT-asset/logoText.svg" 
              alt="Your unique travel partner in Krakow Poland" 
              className="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;