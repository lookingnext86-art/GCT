import React from 'react';
import { Link } from 'react-router-dom';
import { ImageIcon, ArrowRight } from 'lucide-react';

/**
 * Hero / Why Us section.
 * Image grid uses clean placeholders only.
 * The user will upload real photos later for each of the 4 slots below.
 */
const imageSlots = [
  { id: 'families', label: 'Families' },
  { id: 'group-travel', label: 'Group Travel' },
  { id: 'poland-destinations', label: 'Poland Destinations' },
  { id: 'premium-experiences', label: 'Premium Experiences' },
];

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
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
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

            <Link
              to="/contact"
              data-testid="plan-trip-cta"
              className="group inline-flex items-center gap-3 bg-[#4dd4ac] text-[#0f4f47] px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              Plan Your Poland Trip
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT — Clean photo placeholder grid (4 slots, staggered) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              {imageSlots.map((slot, index) => (
                <figure
                  key={slot.id}
                  data-testid={`hero-photo-slot-${slot.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm aspect-[3/4] flex flex-col items-center justify-center transition-all duration-500 hover:border-[#4dd4ac]/40 hover:bg-white/[0.07]"
                  style={{ marginTop: index % 2 === 0 ? '0' : '2.5rem' }}
                >
                  <div className="flex flex-col items-center text-center px-6">
                    <div className="w-14 h-14 rounded-full bg-[#4dd4ac]/10 border border-[#4dd4ac]/30 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                      <ImageIcon
                        className="w-6 h-6 text-[#4dd4ac]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <figcaption className="text-white/90 text-sm md:text-base font-medium tracking-wide">
                      {slot.label}
                    </figcaption>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-2">
                      Photo coming soon
                    </span>
                  </div>
                </figure>
              ))}
            </div>

            {/* Subtle decorative ring */}
            <div
              className="absolute -right-10 top-1/2 -translate-y-1/2 w-72 h-72 border border-dashed border-[#4dd4ac]/20 rounded-full pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
