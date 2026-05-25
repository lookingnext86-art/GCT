import React from 'react';
import { ImageIcon, ArrowRight } from 'lucide-react';

/**
 * Hero / Why Us section.
 * Image grid uses clean placeholders only — user uploads photos later.
 */
const imageSlots = [
  { id: 'families', label: 'Families' },
  { id: 'group-travel', label: 'Group Travel' },
  { id: 'poland-destinations', label: 'Poland Destinations' },
  { id: 'premium-experiences', label: 'Premium Experiences' },
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

          {/* RIGHT — Clean, balanced 2×2 photo placeholders */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {imageSlots.map((slot) => (
                <figure
                  key={slot.id}
                  data-testid={`hero-photo-slot-${slot.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm aspect-square flex flex-col items-center justify-center transition-all duration-500 hover:border-[#4dd4ac]/40 hover:bg-white/[0.07]"
                >
                  <div className="flex flex-col items-center text-center px-6">
                    <div className="w-12 h-12 rounded-full bg-[#4dd4ac]/10 border border-[#4dd4ac]/30 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                      <ImageIcon
                        className="w-5 h-5 text-[#4dd4ac]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <figcaption className="text-white/90 text-sm md:text-base font-medium tracking-wide">
                      {slot.label}
                    </figcaption>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-2">
                      Photo coming soon
                    </span>
                  </div>
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
