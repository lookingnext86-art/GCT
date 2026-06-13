import React from 'react';
import {
  Users,
  Car,
  GraduationCap,
  Briefcase,
  TicketsPlane,
  BedDouble,
} from 'lucide-react';

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
          src="/images/contact/krakow-family-travel.webp"
          alt="Family travelers admiring Krakow Main Market Square with St. Mary's Basilica, Cloth Hall and horse carriage — premium Poland travel services by Green Continent Tours"
          title="Krakow Main Market Square — Premium Poland Travel Services"
          width="2400"
          height="1300"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{
            filter:
              'saturate(0.82) contrast(1.12) brightness(0.92) sepia(0.06)',
          }}
        />
        {/* Film grain to break the AI-smoothness */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-overlay"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' seed='9'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
            backgroundSize: '240px 240px',
          }}
        />
        {/* Filmic warm highlights + teal shadows split-tone */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-60"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,210,160,0.18) 0%, rgba(255,210,160,0) 45%, rgba(15,79,71,0) 55%, rgba(15,79,71,0.30) 100%)',
          }}
        />
        {/* Cinematic vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 100% 75% at center, transparent 50%, rgba(8,28,26,0.55) 100%)',
          }}
        />
        {/* Brand overlays — keeps the heading legible */}
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
            Tailored Travel Across Poland and Europe — for Groups,
            Families, Schools and Corporate Clients.
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
    </section>
  );
};

export default ServicesSection;
