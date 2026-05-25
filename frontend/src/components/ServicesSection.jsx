import React from 'react';
import {
  PlaneTakeoff,
  Briefcase,
  Landmark,
  BadgeCheck,
  GraduationCap,
  Ticket,
} from 'lucide-react';

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE = 'Hello, I would like to plan a premium Poland journey.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// 6 most distinctive operational services (no overlap with hero / What We Do Best)
const services = [
  {
    title: 'Luxury Airport Transfers',
    description: 'Professional airport pickup and door-to-door transfer services across Krakow, Warsaw, and all major Polish airports.',
    icon: PlaneTakeoff,
    href: '/services',
    keywords: 'Krakow airport transfer',
  },
  {
    title: 'Conferences & MICE Services',
    description: 'Business travel, incentives, conferences, and corporate event planning tailored to your professional needs.',
    icon: Briefcase,
    href: '/services',
    keywords: 'MICE travel Poland',
  },
  {
    title: 'City Tours',
    description: 'Guided sightseeing experiences in Krakow, Warsaw, Wroclaw, and Gdansk — Old Towns, castles, and cultural landmarks.',
    icon: Landmark,
    href: '/services',
    keywords: 'Krakow city tours',
  },
  {
    title: 'Professional Tour Guides',
    description: 'Certified multilingual guides in English, Polish, Arabic, Spanish, and German — storytellers who bring Poland to life.',
    icon: BadgeCheck,
    href: '/services',
    keywords: 'multilingual tour guides Poland',
  },
  {
    title: 'School & University Tours',
    description: 'Educational travel programs and curated learning trips for students, schools, and academic groups across Europe.',
    icon: GraduationCap,
    href: '/services',
    keywords: 'educational travel Poland',
  },
  {
    title: 'Transportation Tickets',
    description: 'Flight, bus, and train reservations across Europe — the best routes, the right schedule, the best price.',
    icon: Ticket,
    href: '/services',
    keywords: 'Europe transportation booking',
  },
];

const ServicesSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="services-heading"
      data-testid="services-section"
    >
      {/* Poland-inspired photo banner header */}
      <div className="relative h-80 md:h-[420px] lg:h-[520px] overflow-hidden">
        {/* Background photo: Wawel Royal Castle, Krakow (UNESCO landmark) */}
        <img
          src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/5okkw764_Zo6mW4qyzVB5-5ywq6sG4Uw4To-XlMN2mXYZcLIr-pqbLPgWxMooE4tSRnu73NO9ppOOn-Uvw8p9zUNVH1Rz8FQbejMTazmoDl85kDml3IMWSaKJ7pDfbqkRZgGhb5Ydubc7eSX_eMJexRUW9ojMReRQJALbGM6x2F6uLUmyw59f-owmBKfWJ6Uw6CXvhT1c.jpeg"
          alt="Wawel Royal Castle Krakow Poland — Green Continent Tours travel services"
          title="Wawel Castle, Krakow — Poland Travel Services by Green Continent Tours"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Dark green gradient overlay for premium brand-matched look */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0f4f47]/55 via-[#0f4f47]/40 to-[#0f4f47]/70"
          aria-hidden="true"
        />
        {/* Subtle vignette to focus text */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,79,71,0.1),rgba(15,79,71,0.55))]"
          aria-hidden="true"
        />

        {/* Heading on top of banner */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-5 border border-[#4dd4ac]/40 bg-[#0f4f47]/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 tracking-tight leading-[1.1] drop-shadow-md"
          >
            Our Travel Services
          </h2>
          <p className="text-base md:text-lg text-white/95 font-light leading-relaxed max-w-3xl mx-auto drop-shadow">
            Premium Krakow-based travel agency offering private tours, family travel, MICE services, and custom itineraries
            across Poland — plus Auschwitz-Birkenau, the Wieliczka Salt Mine, and curated extensions to Prague, Vienna, and Budapest.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-2 mt-7" aria-hidden="true">
            <span className="h-px w-12 bg-[#4dd4ac]/60" />
            <span className="w-2 h-2 rounded-full bg-[#4dd4ac]" />
            <span className="h-px w-12 bg-[#4dd4ac]/60" />
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="container mx-auto px-6 lg:px-8 -mt-10 lg:-mt-16 pb-24 lg:pb-28 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  data-testid={`service-card-${index}`}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_-8px_rgba(15,79,71,0.06)] hover:shadow-[0_25px_50px_-20px_rgba(15,79,71,0.22)] hover:-translate-y-1.5 hover:border-[#4dd4ac]/30 transition-all duration-500 ease-out overflow-hidden flex flex-col items-center text-center"
                >
                  {/* Hover bloom */}
                  <div
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#4dd4ac]/0 group-hover:bg-[#4dd4ac]/[0.1] blur-3xl transition-all duration-700"
                    aria-hidden="true"
                  />

                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4dd4ac]/10 border border-[#4dd4ac]/25 group-hover:bg-[#4dd4ac]/20 group-hover:scale-105 transition-all duration-500">
                      <Icon
                        className="w-7 h-7 text-[#0f4f47]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-[22px] font-bold text-[#0f4f47] mb-3 tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  {/* Subtle accent line */}
                  <span
                    className="w-8 h-px bg-[#4dd4ac]/60 mb-4 group-hover:w-14 transition-all duration-500"
                    aria-hidden="true"
                  />

                  {/* Description */}
                  <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Compact CTA strip over Warsaw Old Town photo */}
      <div
        className="relative py-12 lg:py-14 overflow-hidden"
        data-testid="services-cta"
      >
        {/* Background photo: couple walking in Warsaw Old Town */}
        <img
          src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/vrkkd4wr_jTXM-k3FySg2s-kSEfSK_f0Uv6P9krGWgx8HjFrSfyC17oa_gE5GOhpbTF6wiUsgUbq10CLpeWHw6LY0EADOuiCjkSRmVVCx_rU5GNliKEarZdd2FXWBKGWLdLpU285g6N6RwSfd0u7eVZ29wyuYSvlXHAM6MQbeGovPERAlkEq_qZ1u2uuNXeKSMC6-OLJd.jpeg"
          alt="Couple walking through colorful Warsaw Old Town — premium Polish journey with Green Continent Tours"
          title="Plan your premium Polish journey — Warsaw Old Town"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Lighter green tint so the photo stays the hero */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0f4f47]/70 via-[#0f4f47]/45 to-[#0f4f47]/70"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="md:flex-1">
              <h3 className="text-2xl md:text-[30px] font-bold text-white tracking-tight leading-tight drop-shadow-md">
                Start Planning Your Premium Polish Journey
              </h3>
              <p className="text-sm md:text-[15px] text-white/85 font-light mt-1.5 drop-shadow">
                Built with you, by a local Krakow team.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="services-whatsapp-cta"
              aria-label="Plan your trip on WhatsApp"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#4dd4ac] text-[#0f4f47] px-7 py-3.5 min-h-[52px] rounded-full font-bold text-[14px] tracking-wide shadow-[0_10px_30px_-10px_rgba(77,212,172,0.7)] hover:bg-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Plan on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
