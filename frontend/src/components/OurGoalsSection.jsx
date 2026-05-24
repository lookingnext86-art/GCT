import React from 'react';

const goals = [
  {
    number: 1,
    title: 'Authentic Poland Tour Packages for the World',
    description: 'Complete Poland and Europe tour packages welcoming travelers from every continent. Krakow city tours, Zakopane mountain holidays, Warsaw cultural trips, and multi-country European itineraries crafted by local Krakow experts.'
  },
  {
    number: 2,
    title: 'Multilingual Expert Guides',
    description: 'Certified, professional guides in English, Polish, Arabic, German, Spanish, and more. Our storytellers bring Poland\'s history, culture, and hidden gems to life for travelers of every background.'
  },
  {
    number: 3,
    title: 'Specialized Services for GCC & Saudi Guests',
    description: 'A dedicated service segment for guests from Saudi Arabia and the GCC — Arabic-speaking guides, halal dining options, prayer-friendly accommodations, and itineraries respectful of family and cultural needs, available on request.'
  },
  {
    number: 4,
    title: '24/7 Direct Support from Krakow',
    description: 'Around-the-clock multilingual support from our Krakow-based team. From your first booking question to the moment you fly home, we keep your Poland journey seamless.'
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
              A trusted Krakow tour operator delivering authentic Poland and Europe experiences for travelers from every corner of the world — with specialized care for every segment we serve
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
