import React from 'react';

const goals = [
  {
    number: 1,
    title: 'Specialized Poland Travel Agency for GCC',
    description: 'Complete Poland tour packages from Saudi Arabia and GCC countries. Krakow city tours, Zakopane mountain holidays, Warsaw trips with halal dining, Arabic guides, and Muslim-friendly services.'
  },
  {
    number: 2,
    title: 'Arabic-Speaking Expert Guides',
    description: 'Professional Arabic-speaking guides who understand Gulf culture. Experience authentic Poland tours with guides familiar with Saudi and GCC traveler preferences and requirements.'
  },
  {
    number: 3,
    title: 'Halal-Friendly Poland Packages',
    description: 'Muslim-friendly Poland holiday packages with halal restaurants, prayer facilities, and accommodations suitable for Saudi families. We understand Gulf cultural needs.'
  },
  {
    number: 4,
    title: 'Direct Support from Krakow',
    description: '24/7 Arabic and English support for GCC tourists. Our Krakow-based team ensures smooth Poland tour experiences from booking through your return home.'
  }
];

const OurGoalsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-6">
              Our Goals
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              As your trusted Poland travel agency for Saudi Arabia and GCC tourists, we specialize in creating exceptional Poland tour packages with Arabic support and halal-friendly options
            </p>
          </div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {goals.map((goal) => (
              <div 
                key={goal.number}
                className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-[#4dd4ac] text-[#0f4f47] w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    {goal.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {goal.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-100">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GCT Custom Banner Image - Full Width No Cropping */}
          <div className="mt-16">
            <a 
              href="https://www.gct.travel/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Sign up for B2B Online Hotel Reservation Portal"
              className="block"
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/jvzq92lz_Screenshot%202026-05-24%20at%209.26.56%E2%80%AFPM.png" 
                alt="GCT Booking Made Simple - Sign up for B2B Online Hotel Reservation Portal" 
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.01] animate-pulse-slow"
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