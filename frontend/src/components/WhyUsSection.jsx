import React from 'react';
import { ArrowRight, Globe2 } from 'lucide-react';

/**
 * Hero / Why Us section — premium DMC-style editorial layout.
 */
const imageSlots = [
  {
    id: 'private-groups',
    label: 'Private Groups',
    src: '/images/slots/private-groups.webp',
    alt: 'Private group on a Green Continent Tours travel experience',
  },
  {
    id: 'family-journeys',
    label: 'Family Journeys',
    src: '/images/slots/family-journeys.webp',
    alt: 'Family travelers enjoying an evening in a historic Krakow courtyard',
  },
  {
    id: 'poland-and-beyond',
    label: 'Poland & Beyond',
    src: '/images/slots/poland-and-beyond.webp',
    alt: 'Tour group at Krakow Main Market Square with the Cloth Hall and Town Hall Tower',
  },
  {
    id: 'premium-travel',
    label: 'Premium Travel',
    src: '/images/slots/premium-travel.webp',
    alt: 'VIP travelers on a premium Green Continent Tours experience in Geneva',
  },
];

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE = 'Hello, I would like to plan a trip to Poland.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Unified editorial color grade applied to every hero photo.
const heroImageFilter =
  'saturate(0.82) contrast(1.08) brightness(0.88) hue-rotate(-4deg)';

const WhyUsSection = () => {
  return (
    <section
      className="relative bg-[#0f4f47] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="why-us-heading"
      data-testid="why-us-section"
    >
      {/* Soft ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#4dd4ac]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-[#1a6b5f]/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-y-14 gap-x-10 lg:gap-x-16 items-center max-w-7xl mx-auto">
          {/* LEFT — Editorial copy */}
          <div className="text-white max-w-xl lg:pr-4">
            <p
              className="inline-block text-[11px] font-semibold tracking-[0.32em] uppercase text-[#4dd4ac] mb-7 border border-[#4dd4ac]/40 px-3.5 py-1.5 rounded-full"
              data-testid="why-us-eyebrow"
            >
              Based in Krakow · Trusted Worldwide
            </p>

            <h1
              id="why-us-heading"
              className="font-bold leading-[1.06] tracking-[-0.02em] mb-7 text-[2.4rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.6rem]"
            >
              Private, Group &amp; Family Tours{' '}
              <span className="text-[#4dd4ac] block sm:inline">Across Poland</span>
            </h1>

            <p className="text-base md:text-lg leading-[1.75] text-gray-100/95 mb-5 font-light max-w-lg">
              Discover Poland through carefully designed journeys for families,
              private travelers, and organized groups. From Krakow and Zakopane to
              Warsaw and beyond, we craft comfortable travel experiences with
              local knowledge, premium transport, and flexible planning.
            </p>

            <p
              className="text-sm md:text-[15px] text-[#4dd4ac] italic mb-10 font-light tracking-wide max-w-md"
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
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#4dd4ac] text-[#0f4f47] px-9 py-4 sm:py-[18px] min-h-[56px] rounded-full font-bold text-[15px] tracking-[0.02em] shadow-[0_10px_40px_-10px_rgba(77,212,172,0.6)] hover:bg-white hover:shadow-[0_20px_50px_-10px_rgba(77,212,172,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out overflow-hidden"
            >
              <span
                className="absolute inset-0 rounded-full bg-white/40 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 blur-xl"
                aria-hidden="true"
              />
              <span className="relative">Plan Your Poland Trip</span>
              <ArrowRight
                className="relative w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </a>

            {/* Trust signal */}
            <div
              className="flex items-center gap-2.5 mt-6 text-[13px] text-white/65 font-light tracking-wide"
              data-testid="why-us-trust-signal"
            >
              <Globe2 className="w-4 h-4 text-[#4dd4ac]" strokeWidth={1.75} aria-hidden="true" />
              <span>Trusted by travelers from 20+ countries</span>
            </div>
          </div>

          {/* RIGHT — Balanced 2×2 photo grid with unified color grading */}
          <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {imageSlots.map((slot) => (
                <figure
                  key={slot.id}
                  data-testid={`hero-photo-slot-${slot.id}`}
                  className="group relative overflow-hidden rounded-[18px] aspect-square shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:ring-[#4dd4ac]/40"
                >
                  <img
                    src={slot.src}
                    alt={slot.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    style={{ filter: heroImageFilter }}
                  />

                  {/* Warm-to-green tonal unification overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#0f4f47]/30 via-[#0f4f47]/10 to-[#1a6b5f]/35 mix-blend-multiply"
                    aria-hidden="true"
                  />
                  {/* Bottom gradient for caption legibility */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a3a35] via-[#0f4f47]/40 to-transparent"
                    aria-hidden="true"
                  />
                  {/* Subtle highlight on hover */}
                  <div
                    className="absolute inset-0 bg-[#4dd4ac]/0 group-hover:bg-[#4dd4ac]/[0.06] transition-colors duration-500"
                    aria-hidden="true"
                  />

                  {/* Caption */}
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 z-10">
                    <span className="block text-white text-base md:text-[17px] font-semibold tracking-tight leading-tight drop-shadow-md">
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
