import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Hero / Why Us section.
 * 4 photos in a balanced 2×2 grid. All images share unified CSS filters
 * for a consistent, premium editorial look.
 */
const imageSlots = [
  {
    id: 'families',
    label: 'Families',
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/swpialvc_Private%20group.png',
    alt: 'Families and private travelers boarding a flight on a Green Continent Tours trip to Poland',
  },
  {
    id: 'group-travel',
    label: 'Group Travel',
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/dld6hlqi_group%20travel.png',
    alt: 'International travel group enjoying an evening in a historic Krakow courtyard',
  },
  {
    id: 'poland-destinations',
    label: 'Poland Destinations',
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/swa9ivb7_Krakow%20PL.png',
    alt: 'Tour group at Krakow Main Market Square with St. Mary\'s Basilica and the Cloth Hall',
  },
  {
    id: 'premium-experiences',
    label: 'Premium Experiences',
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/bs7b1gmm_VIP%20tour.png',
    alt: 'VIP travelers on a premium tour outside the United Nations in Geneva',
  },
];

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE = 'Hello, I would like to plan a trip to Poland.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WhyUsSection = () => {
  return (
    <section
      className="relative bg-[#0f4f47] py-24 lg:py-32 overflow-hidden"
      aria-labelledby="why-us-heading"
      data-testid="why-us-section"
    >
      {/* Soft ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-[#4dd4ac]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-[#1a6b5f]/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-24 items-center">
          {/* LEFT — Editorial copy */}
          <div className="text-white max-w-xl">
            <p
              className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-8 border border-[#4dd4ac]/40 px-3.5 py-1.5 rounded-full"
              data-testid="why-us-eyebrow"
            >
              Based in Krakow · Trusted Worldwide
            </p>

            <h1
              id="why-us-heading"
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold mb-8 leading-[1.1] tracking-tight"
            >
              Private, Group &amp; Family Tours <br className="hidden md:block" />
              <span className="text-[#4dd4ac]">Across Poland</span>
            </h1>

            <p className="text-lg md:text-xl leading-[1.7] text-gray-100 mb-6 font-light">
              Discover Poland through carefully designed journeys for families,
              private travelers, and organized groups. From Krakow and Zakopane to
              Warsaw and beyond, we create comfortable travel experiences with
              local knowledge, premium transport, and flexible planning.
            </p>

            <p
              className="text-sm md:text-base text-[#4dd4ac]/90 italic mb-12 font-light tracking-wide"
              data-testid="why-us-support-line"
            >
              Custom itineraries, trusted local support, and smooth travel across Poland.
            </p>

            {/* Single primary CTA — opens WhatsApp directly */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="plan-trip-cta"
              aria-label="Plan your Poland trip on WhatsApp"
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#4dd4ac] text-[#0f4f47] px-8 py-5 sm:py-4 min-h-[56px] rounded-full font-bold text-base tracking-wide shadow-lg shadow-[#4dd4ac]/20 hover:bg-white hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out overflow-hidden"
            >
              <span
                className="absolute inset-0 rounded-full bg-white/40 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 blur-xl"
                aria-hidden="true"
              />
              <span className="relative">Plan Your Poland Trip</span>
              <ArrowRight
                className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* RIGHT — Balanced 2×2 photo grid with unified styling */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {imageSlots.map((slot) => (
                <figure
                  key={slot.id}
                  data-testid={`hero-photo-slot-${slot.id}`}
                  className="group relative overflow-hidden rounded-2xl aspect-square shadow-xl shadow-black/30 ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <img
                    src={slot.src}
                    alt={slot.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      filter: 'saturate(0.95) contrast(1.05) brightness(0.92)',
                    }}
                  />
                  {/* Unified tonal overlay for matching style */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0f4f47]/70 via-[#0f4f47]/10 to-transparent mix-blend-multiply"
                    aria-hidden="true"
                  />
                  {/* Subtle green tint to unify all photos */}
                  <div
                    className="absolute inset-0 bg-[#0f4f47]/15"
                    aria-hidden="true"
                  />
                  {/* Hover bloom */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#4dd4ac]/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  {/* Caption */}
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 z-10">
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-[#4dd4ac] mb-1.5">
                      Green Continent Tours
                    </span>
                    <span className="block text-white text-base md:text-lg font-semibold tracking-wide drop-shadow-md">
                      {slot.label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
