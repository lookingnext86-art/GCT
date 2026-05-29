import React from 'react';
import {
  Users,
  Car,
  GraduationCap,
  Briefcase,
  TicketsPlane,
  BedDouble,
} from 'lucide-react';

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE = 'Hello, I would like to plan a premium Poland journey.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ====================================================================
// SERVICES — graphic-only cards (no photos), each with its own
// SEO-friendly title + supporting description.
// ====================================================================
const services = [
  {
    title: 'Group Tours in Poland & Europe',
    description:
      'Complete travel programs for families, private groups, tour operators and international visitors.',
    icon: Users,
  },
  {
    title: 'Airport Transfers & Private Transport',
    description:
      'Comfortable cars, minibuses and coaches for airport transfers, tours and group travel.',
    icon: Car,
  },
  {
    title: 'School Trips & Educational Travel',
    description:
      'Safe, organized travel services for schools, students and educational groups.',
    icon: GraduationCap,
  },
  {
    title: 'Corporate Travel & MICE',
    description:
      'Business travel, meetings, incentives, conferences and company event logistics.',
    icon: Briefcase,
  },
  {
    title: 'Flight, Train & Bus Ticketing',
    description:
      'Flight tickets, train reservations, bus tickets and travel connections for groups, families and corporate clients.',
    icon: TicketsPlane,
  },
  {
    title: 'Hotel Reservations',
    description:
      'Hotel bookings, group accommodation, carefully selected properties and complete stay arrangements.',
    icon: BedDouble,
  },
];

const ServicesSection = ({ useH1 = false }) => {
  const HeadingTag = useH1 ? 'h1' : 'h2';
  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="services-heading"
      data-testid="services-section"
    >
      {/* ===== HEADER BANNER ===== */}
      <div className="relative h-[440px] md:h-[520px] lg:h-[600px] overflow-hidden">
        <img
          src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/tyuxlyn9_krakow-family-travel-main-square.jpg"
          alt="Family travelers admiring Krakow Main Market Square with St. Mary's Basilica and Cloth Hall — premium Poland travel services by Green Continent Tours"
          title="Krakow Main Market Square — Premium Poland Travel Services"
          width="2400"
          height="1300"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a3a35]/55 via-[#0a3a35]/40 to-[#0a3a35]/82"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a3a35]/55 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-5 border border-[#4dd4ac]/40 bg-[#0f4f47]/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
            Our Services
          </p>
          <HeadingTag
            id="services-heading"
            className="text-3xl md:text-[2.6rem] lg:text-[3.1rem] font-bold text-white mb-5 tracking-tight leading-[1.12] drop-shadow-lg max-w-5xl"
          >
            Premium Travel Solutions for Groups, Families, Schools &amp;
            Corporate Clients Across Poland &amp; Europe.
          </HeadingTag>
          <p className="text-base md:text-[17px] text-white/95 font-light italic leading-relaxed max-w-3xl mx-auto drop-shadow">
            From first arrival to final departure, we handle every detail with
            care, precision and local expertise.
          </p>

          <div className="flex items-center gap-2 mt-7" aria-hidden="true">
            <span className="h-px w-12 bg-[#4dd4ac]/60" />
            <span className="w-2 h-2 rounded-full bg-[#4dd4ac]" />
            <span className="h-px w-12 bg-[#4dd4ac]/60" />
          </div>
        </div>
      </div>

      {/* ===== SERVICES GRID (graphic cards, no photos) ===== */}
      <div className="container mx-auto px-6 lg:px-8 -mt-14 lg:-mt-20 pb-24 lg:pb-28 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  data-testid={`service-card-${index}`}
                  className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_-8px_rgba(15,79,71,0.08)] hover:shadow-[0_30px_60px_-25px_rgba(15,79,71,0.28)] hover:-translate-y-1.5 hover:border-[#4dd4ac]/30 transition-all duration-500 ease-out flex flex-col"
                >
                  {/* Decorative graphic header */}
                  <div className="relative h-44 lg:h-48 overflow-hidden bg-gradient-to-br from-[#0f4f47] via-[#134d44] to-[#0a3a35]">
                    {/* Dot pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.18] pointer-events-none"
                      aria-hidden="true"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, #4dd4ac 1px, transparent 1.2px)',
                        backgroundSize: '22px 22px',
                      }}
                    />

                    {/* Soft mint glow blob — top-left */}
                    <div
                      className="absolute -top-12 -left-12 w-44 h-44 rounded-full opacity-30 blur-3xl pointer-events-none"
                      style={{ background: '#4dd4ac' }}
                      aria-hidden="true"
                    />
                    {/* Soft glow — bottom-right */}
                    <div
                      className="absolute -bottom-16 -right-10 w-52 h-52 rounded-full opacity-20 blur-3xl pointer-events-none"
                      style={{ background: '#4dd4ac' }}
                      aria-hidden="true"
                    />

                    {/* Decorative concentric ring behind icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="absolute w-44 h-44 rounded-full border border-[#4dd4ac]/15 group-hover:scale-110 transition-transform duration-700"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute w-32 h-32 rounded-full border border-[#4dd4ac]/25 group-hover:scale-110 transition-transform duration-700 delay-75"
                        aria-hidden="true"
                      />

                      {/* Main icon */}
                      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0a3a35] ring-1 ring-[#4dd4ac]/40 shadow-[0_15px_40px_-10px_rgba(77,212,172,0.35)] group-hover:bg-[#0f4f47] group-hover:scale-105 transition-all duration-500">
                        <Icon
                          className="w-9 h-9 text-[#4dd4ac]"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Number badge — top-right corner */}
                    <div className="absolute top-4 right-5 text-[60px] leading-none font-bold text-white/[0.06] select-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-7 lg:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-[22px] font-bold text-[#0f4f47] mb-3 tracking-tight leading-snug">
                      {service.title}
                    </h3>

                    <span
                      className="w-8 h-px bg-[#4dd4ac]/60 mb-4 group-hover:w-14 transition-all duration-500"
                      aria-hidden="true"
                    />

                    <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== COMPACT WHATSAPP CTA STRIP ===== */}
      <div
        className="relative py-12 lg:py-14 overflow-hidden"
        data-testid="services-cta"
      >
        <img
          src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/b8jiae77_warsaw-old-town-poland.jpg"
          alt="Couple walking through colorful Warsaw Old Town — premium Polish journey with Green Continent Tours"
          title="Plan your premium Polish journey — Warsaw Old Town"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
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
