import React from 'react';
import {
  UsersRound,
  PlaneTakeoff,
  Briefcase,
  Landmark,
  BadgeCheck,
  GraduationCap,
  Headphones,
  Gift,
  Ship,
  BedDouble,
  Ticket,
  Compass,
} from 'lucide-react';

const services = [
  {
    title: 'Group Travel Arrangements',
    description: 'Custom group tours across Poland and Europe for families, friends, and corporate teams.',
    icon: UsersRound,
  },
  {
    title: 'Airport Transfers',
    description: 'Professional airport pickup and door-to-door transfer services in Krakow and beyond.',
    icon: PlaneTakeoff,
  },
  {
    title: 'Conferences & MICE Services',
    description: 'Full-service business travel, incentives, conferences, and corporate event planning.',
    icon: Briefcase,
  },
  {
    title: 'City Tours',
    description: 'Guided city tours and curated sightseeing experiences across Krakow, Warsaw, and more.',
    icon: Landmark,
  },
  {
    title: 'Professional Tour Guides',
    description: 'Certified multilingual tour guides delivering authentic Polish stories and history.',
    icon: BadgeCheck,
  },
  {
    title: 'School & University Tours',
    description: 'Educational travel programs and curated learning trips for students of all ages.',
    icon: GraduationCap,
  },
  {
    title: 'Travel Consultation',
    description: 'Expert one-on-one travel advice and tailor-made itinerary planning for Europe.',
    icon: Headphones,
  },
  {
    title: 'Tailor-Made Special Tours',
    description: 'Bespoke vacation packages and private tours crafted around your interests.',
    icon: Gift,
  },
  {
    title: 'Cruise Bookings',
    description: 'European cruise reservations and curated sailing packages across the Baltic and Med.',
    icon: Ship,
  },
  {
    title: 'Hotel Accommodations',
    description: 'Handpicked hotels, boutique hostels, and vacation rentals across Poland and Europe.',
    icon: BedDouble,
  },
  {
    title: 'Transportation Tickets',
    description: 'Flight, bus, and train ticket reservations with the best routes and prices.',
    icon: Ticket,
  },
  {
    title: 'Custom European Tours',
    description: 'Personalized multi-country tour packages spanning Prague, Vienna, Budapest, and more.',
    icon: Compass,
  },
];

const ServicesSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      data-testid="services-section"
    >
      {/* Decorative Plane */}
      <img
        src="https://greencontinenttours.com/GCT-asset/second-plane.svg"
        alt=""
        className="absolute top-10 right-10 w-32 opacity-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-6">
            Our Travel Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your trusted Krakow-based tour operator offering comprehensive travel services for exploring Poland and Europe. Popular tours include Auschwitz-Birkenau, Wieliczka Salt Mine, Zakopane &amp; Tatra Mountains, Prague, Vienna, and Budapest.
          </p>
        </div>

        {/* Services Grid - Text FIRST, Icon at the bottom. Uniform alignment. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article
                key={index}
                data-testid={`service-card-${index}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group flex flex-col h-full overflow-hidden"
              >
                {/* Text Block (always on top, left-aligned, fixed structure) */}
                <div className="px-6 pt-6 pb-5 text-left flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[#0f4f47] mb-2 leading-snug group-hover:text-[#1a6b5f] transition-colors min-h-[3.5rem]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Icon Footer (below text, uniform across all cards) */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gradient-to-r from-[#f3faf8] to-white flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#0f4f47]/70">
                    Service
                  </span>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                    <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>
              </article>
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
