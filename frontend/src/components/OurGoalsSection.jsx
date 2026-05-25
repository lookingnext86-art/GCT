import React from 'react';
import { MessageCircle, MapPin, Plane } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Tell Us Your Dream',
    description:
      'Share where you want to go, who\u2019s traveling, and the comfort level you expect. A real human reads every message — no chatbots, no scripts.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'We Design It',
    description:
      'A Krakow-based planner crafts a tailored itinerary with premium stays, trusted guides, and the local detail only insiders know about.',
  },
  {
    number: '03',
    icon: Plane,
    title: 'You Travel Comfortably',
    description:
      'Door-to-door support, smooth logistics, and 24/7 local help throughout your journey — from arrival in Krakow to your flight home.',
  },
];

const OurGoalsSection = () => {
  return (
    <section
      className="py-28 lg:py-40 bg-gradient-to-b from-white to-[#f5faf8] relative overflow-hidden"
      aria-labelledby="how-we-plan-heading"
    >
      {/* Ambient glows */}
      <div
        className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#4dd4ac]/[0.08] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-[#0f4f47]/[0.05] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-24 lg:mb-32 max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#4dd4ac] mb-6">
              How It Works
            </p>
            <h2
              id="how-we-plan-heading"
              className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-[#0f4f47] mb-7 tracking-tight leading-[1.05]"
            >
              How We Plan Your Trip
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
              Three simple steps from idea to itinerary — no templates,
              no pressure, and never a 50-page brochure.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Decorative dotted flight path - desktop */}
            <svg
              className="hidden lg:block absolute top-[68px] left-[16.66%] right-[16.66%] w-2/3 h-8 pointer-events-none"
              viewBox="0 0 800 32"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 0 16 Q 200 -16, 400 16 T 800 16"
                stroke="#0f4f47"
                strokeWidth="2"
                strokeDasharray="5 8"
                fill="none"
                opacity="0.22"
              />
            </svg>

            <ol className="grid md:grid-cols-3 gap-16 lg:gap-12 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li
                    key={index}
                    data-testid={`process-step-${index}`}
                    className="group relative text-center px-2 lg:px-4"
                  >
                    {/* Step circle with icon */}
                    <div className="relative inline-flex items-center justify-center mb-10 lg:mb-12">
                      {/* Outer soft ring on hover */}
                      <div
                        className="absolute inset-0 -m-5 rounded-full bg-[#4dd4ac]/0 group-hover:bg-[#4dd4ac]/10 transition-all duration-700"
                        aria-hidden="true"
                      />
                      {/* Slow rotating decorative ring */}
                      <div
                        className="absolute inset-0 -m-3 rounded-full border border-dashed border-[#0f4f47]/15 group-hover:border-[#4dd4ac]/40 group-hover:rotate-45 transition-all duration-[1500ms]"
                        aria-hidden="true"
                      />

                      <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full bg-white border border-[#0f4f47]/10 shadow-[0_25px_60px_-20px_rgba(15,79,71,0.3)] flex items-center justify-center group-hover:-translate-y-2 group-hover:shadow-[0_40px_70px_-20px_rgba(15,79,71,0.45)] transition-all duration-500">
                        <Icon
                          className="w-14 h-14 lg:w-16 lg:h-16 text-[#0f4f47] group-hover:text-[#1a6b5f] transition-colors duration-500"
                          strokeWidth={1.3}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Floating step number badge */}
                      <span
                        className="absolute -top-2 -right-2 lg:-top-1 lg:-right-1 w-14 h-14 rounded-full bg-[#0f4f47] text-[#4dd4ac] flex items-center justify-center text-sm font-bold tracking-wider shadow-lg ring-4 ring-white"
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-[28px] font-semibold text-[#0f4f47] mb-5 tracking-tight leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-[17px] text-gray-500 font-light leading-[1.7] max-w-md mx-auto">
                      {step.description}
                    </p>

                    {/* Decorative thin underline */}
                    <div className="flex justify-center mt-8">
                      <span className="inline-block w-10 h-px bg-[#4dd4ac] group-hover:w-20 transition-all duration-500" />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* GCT B2B partner banner — slim ribbon-style */}
          <div className="mt-16 lg:mt-20">
            <a
              href="https://www.gct.travel/index.php"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sign up for GCT B2B Online Hotel Reservation Portal"
              className="group flex items-center justify-center"
              data-testid="gct-b2b-banner"
            >
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 w-full max-w-2xl aspect-[7/2]">
                <img
                  src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/8vg8bher_Screenshot%202026-05-25%20140311.png"
                  alt="GCT Booking Made Simple — Sign up for B2B Online Hotel Reservation Portal"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoalsSection;
