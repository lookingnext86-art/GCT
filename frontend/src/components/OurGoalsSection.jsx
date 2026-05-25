import React from 'react';
import { Compass, UsersRound, Heart, Mountain } from 'lucide-react';

const goals = [
  {
    icon: Compass,
    title: 'Private Tours',
    description:
      'Private guides, private vehicles, and journeys shaped entirely around you.',
  },
  {
    icon: UsersRound,
    title: 'Small-Group Journeys',
    description:
      'Thoughtfully sized groups, premium stays, and an unhurried pace.',
  },
  {
    icon: Heart,
    title: 'Family & Custom Travel',
    description:
      'Multi-generational trips and bespoke itineraries built around your interests.',
  },
  {
    icon: Mountain,
    title: 'Culture, Nature & Comfort',
    description:
      'UNESCO heritage, alpine landscapes, and seamless premium logistics.',
  },
];

const OurGoalsSection = () => {
  return (
    <section className="py-24 lg:py-28 bg-white" aria-labelledby="what-we-do-best-heading">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">
              The Experience
            </p>
            <h2
              id="what-we-do-best-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f4f47] mb-5 tracking-tight leading-[1.1]"
            >
              What We Do Best
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed">
              Four ways we shape every Poland journey — from private escapes to
              custom multi-country itineraries.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <article
                  key={index}
                  data-testid={`what-we-do-card-${index}`}
                  className="group relative bg-white border border-gray-100 rounded-[20px] p-8 lg:p-9 shadow-[0_4px_20px_-8px_rgba(15,79,71,0.08)] hover:shadow-[0_30px_60px_-20px_rgba(15,79,71,0.25)] hover:-translate-y-2 hover:border-[#4dd4ac]/30 transition-all duration-500 ease-out overflow-hidden flex flex-col"
                >
                  {/* Subtle texture / pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
                    aria-hidden="true"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 20%, #0f4f47 0.5px, transparent 0.5px)`,
                      backgroundSize: '14px 14px',
                    }}
                  />

                  {/* Soft mint glow on hover */}
                  <div
                    className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#4dd4ac]/0 group-hover:bg-[#4dd4ac]/[0.12] blur-3xl transition-all duration-700"
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div className="relative mb-7">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] flex items-center justify-center shadow-md shadow-[#0f4f47]/20 group-hover:shadow-lg group-hover:shadow-[#0f4f47]/30 group-hover:scale-105 transition-all duration-500">
                      <Icon
                        className="w-6 h-6 text-[#4dd4ac]"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-[#0f4f47] mb-3 tracking-tight leading-tight">
                      {goal.title}
                    </h3>
                    <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                      {goal.description}
                    </p>

                    {/* Decorative bottom rule */}
                    <div className="mt-7 pt-5 border-t border-gray-100">
                      <span className="inline-block w-8 h-px bg-[#4dd4ac] group-hover:w-14 transition-all duration-500" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Optional CTA-style banner reference (keeps existing GCT banner functionality) */}
          <div className="mt-20">
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
