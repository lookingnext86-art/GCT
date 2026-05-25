import React from 'react';
import { MessageCircle, MapPin, Plane } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Tell Us Your Dream',
    description:
      'Share where you want to go, who\u2019s traveling, and what comfort level you expect.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'We Design It',
    description:
      'A Krakow-based planner crafts a tailored itinerary with premium stays and trusted guides.',
  },
  {
    number: '03',
    icon: Plane,
    title: 'You Travel Comfortably',
    description:
      'Door-to-door support, smooth logistics, and 24/7 local help throughout your journey.',
  },
];

const OurGoalsSection = () => {
  return (
    <section
      className="py-24 lg:py-28 bg-gradient-to-b from-white to-[#f5faf8] relative overflow-hidden"
      aria-labelledby="how-we-plan-heading"
    >
      {/* Subtle decorative globe */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#4dd4ac]/[0.06] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20 lg:mb-24 max-w-2xl mx-auto">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">
              How It Works
            </p>
            <h2
              id="how-we-plan-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f4f47] mb-5 tracking-tight leading-[1.1]"
            >
              How We Plan Your Trip
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed">
              Three simple steps from idea to itinerary — no templates, no pressure.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Dotted flight-path line (desktop) */}
            <svg
              className="hidden lg:block absolute top-[42px] left-[16.66%] right-[16.66%] w-2/3 h-4 pointer-events-none"
              viewBox="0 0 800 16"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 0 8 Q 200 -10, 400 8 T 800 8"
                stroke="#0f4f47"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                fill="none"
                opacity="0.25"
              />
            </svg>

            <ol className="grid md:grid-cols-3 gap-12 lg:gap-10 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li
                    key={index}
                    data-testid={`process-step-${index}`}
                    className="group relative text-center"
                  >
                    {/* Step circle with icon */}
                    <div className="relative inline-flex items-center justify-center mb-8">
                      {/* Outer soft ring */}
                      <div
                        className="absolute inset-0 -m-3 rounded-full bg-[#4dd4ac]/0 group-hover:bg-[#4dd4ac]/10 transition-all duration-500"
                        aria-hidden="true"
                      />
                      <div className="relative w-[88px] h-[88px] rounded-full bg-white border border-[#0f4f47]/10 shadow-[0_15px_40px_-15px_rgba(15,79,71,0.25)] flex items-center justify-center group-hover:-translate-y-1 group-hover:shadow-[0_25px_50px_-15px_rgba(15,79,71,0.35)] transition-all duration-500">
                        <Icon
                          className="w-8 h-8 text-[#0f4f47] group-hover:text-[#1a6b5f] transition-colors duration-500"
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                      </div>
                      {/* Floating step number badge */}
                      <span
                        className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-[#0f4f47] text-[#4dd4ac] flex items-center justify-center text-[11px] font-bold tracking-wider shadow-md"
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-[22px] font-semibold text-[#0f4f47] mb-3 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] text-gray-500 font-light leading-relaxed max-w-[280px] mx-auto">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Existing GCT B2B banner */}
          <div className="mt-24">
            <a
              href="https://www.gct.travel/index.php"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sign up for B2B Online Hotel Reservation Portal"
              className="block group"
            >
              <img
                src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/jvzq92lz_Screenshot%202026-05-24%20at%209.26.56%E2%80%AFPM.png"
                alt="GCT Booking Made Simple — Sign up for B2B Online Hotel Reservation Portal"
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.005]"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoalsSection;
