import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Languages } from 'lucide-react';

// Placeholder gallery images — user will upload new photos for this section.
const galleryImages = [
  'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg',
  'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-2.jpg',
  'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-3.jpg',
  'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-4.jpg',
];

const stats = [
  { icon: MapPin, value: '15+', label: 'Years guiding Poland' },
  { icon: Star, value: '4.9', label: 'Average traveler rating' },
  { icon: Languages, value: '6', label: 'Languages spoken in-house' },
];

const WhyUsSection = () => {
  return (
    <section
      className="relative bg-[#0f4f47] py-24 overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* Subtle decorative plane */}
      <img
        src="https://greencontinenttours.com/GCT-asset/airPlane/plane.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-10 right-20 w-24 opacity-15"
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Editorial copy */}
          <div className="text-white max-w-xl">
            {/* Eyebrow */}
            <p
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-5 border border-[#4dd4ac]/40 px-3 py-1.5 rounded-full"
              data-testid="why-us-eyebrow"
            >
              Based in Krakow · Trusted Worldwide
            </p>

            <h1
              id="why-us-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15]"
            >
              Real Poland, planned by people who actually live here.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-5">
              We're a small Krakow team designing private tours, small-group journeys,
              and family trips for travelers who'd rather skip the 50-seat coach and the
              microphone. Think sunrise in the Tatras before the crowds, the right
              pierogi spot in Kazimierz, and the corners of Warsaw most tour buses
              never bother with.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-10">
              One real human plans your trip from start to finish — paired with
              hand-picked guides, premium stays, and the kind of insider tips you'd
              only get over coffee with a local.
            </p>

            {/* Trust signals */}
            <ul
              className="grid grid-cols-3 gap-4 mb-10 border-t border-white/15 pt-6"
              data-testid="why-us-stats"
            >
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label} className="flex flex-col">
                    <Icon className="w-5 h-5 text-[#4dd4ac] mb-2" aria-hidden="true" />
                    <span className="text-2xl font-bold leading-none mb-1">
                      {s.value}
                    </span>
                    <span className="text-xs text-gray-300 leading-snug">
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                data-testid="why-us-services-cta"
                className="inline-block bg-[#4dd4ac] text-[#0f4f47] px-7 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                See How We Plan Trips
              </Link>
              <Link
                to="/contact"
                data-testid="why-us-contact-cta"
                className="inline-block border border-white/40 text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0f4f47] transition-all duration-300"
              >
                Talk to a Local Planner
              </Link>
            </div>
          </div>

          {/* Right — Photo collage (user will upload new images here) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((img, index) => (
                <figure
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
                  style={{ marginTop: index % 2 === 0 ? '0' : '2.5rem' }}
                  data-testid={`why-us-photo-${index}`}
                >
                  <img
                    src={img}
                    alt={`Green Continent Tours travelers exploring Poland and Europe — photo ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </figure>
              ))}
            </div>

            {/* Decorative ring */}
            <div
              className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-64 border-4 border-dashed border-[#4dd4ac]/30 rounded-full pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
