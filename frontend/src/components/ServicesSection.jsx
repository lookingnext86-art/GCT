import React from 'react';
import { Users, Plane, Building2, Map, User, GraduationCap, MessageCircle, Sparkles, Ship, Hotel, Ticket, Route } from 'lucide-react';

const services = [
  {
    title: 'Group Travel Arrangements',
    description: 'Custom group tours across Poland and Europe',
    icon: Users
  },
  {
    title: 'Airport Transfers',
    description: 'Professional airport pickup and transfer services',
    icon: Plane
  },
  {
    title: 'Conferences & MICE Services',
    description: 'Business travel and corporate event planning',
    icon: Building2
  },
  {
    title: 'City Tours',
    description: 'Guided city tours and sightseeing experiences',
    icon: Map
  },
  {
    title: 'Professional Tour Guides',
    description: 'Certified multilingual tour guides in Poland',
    icon: User
  },
  {
    title: 'School & University Tours',
    description: 'Educational travel programs for students',
    icon: GraduationCap
  },
  {
    title: 'Travel Consultation',
    description: 'Expert travel advice and itinerary planning',
    icon: MessageCircle
  },
  {
    title: 'Tailor-Made Special Tours',
    description: 'Customized vacation packages and private tours',
    icon: Sparkles
  },
  {
    title: 'Cruise Bookings',
    description: 'European cruise reservations and packages',
    icon: Ship
  },
  {
    title: 'Hotel Accommodations',
    description: 'Hotels, hostels, and vacation rentals across Europe',
    icon: Hotel
  },
  {
    title: 'Transportation Tickets',
    description: 'Flight, bus, and train ticket reservations',
    icon: Ticket
  },
  {
    title: 'Custom European Tours',
    description: 'Personalized multi-country tour packages',
    icon: Route
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Title - Consistent Font & Centered */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-6">
            Our Travel Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
            Your trusted Krakow-based tour operator offering comprehensive travel services for exploring Poland and Europe.
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold text-[#0f4f47]">Popular Tours:</span> Auschwitz-Birkenau, Wieliczka Salt Mine, Zakopane & Tatra Mountains, Prague, Vienna, Budapest
          </p>
        </div>

        {/* Services Grid - Text Before Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0f4f47] mb-2 group-hover:text-[#1a6b5f] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-[#0f4f47] mb-4">
            Start Your Krakow Adventure Today!
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're visiting for a day or planning a comprehensive Poland tour, our local experts are ready to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;