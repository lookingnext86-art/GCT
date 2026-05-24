import React from 'react';

const goals = [
  {
    number: 1,
    title: 'Private Tours, Crafted with Care',
    description: 'Travel on your own terms with private guides, private vehicles, and itineraries shaped around your interests. From cultural deep-dives in Krakow to wellness escapes in Zakopane, every detail is curated for comfort and intimacy.'
  },
  {
    number: 2,
    title: 'Group Tours That Feel Personal',
    description: 'Small-group experiences for friends, colleagues, and like-minded travelers. Thoughtfully sized groups, premium hotels, and an unhurried pace let you connect with Poland — and with each other — without ever feeling rushed.'
  },
  {
    number: 3,
    title: 'Family Travel & Custom Itineraries',
    description: 'Family-friendly journeys built around all generations, with flexible schedules, kid-approved stops, and bespoke itineraries combining Poland\'s culture, nature, and modern comforts — exactly the way your family loves to travel.'
  },
  {
    number: 4,
    title: 'Comfort, Culture & Nature in One Journey',
    description: 'UNESCO heritage, alpine landscapes, lake districts, and vibrant cities — all woven into seamless trips with premium transport, handpicked stays, and multilingual local experts available 24/7 from our Krakow base.'
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
              What We Do Best
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A premium Poland travel agency for international travelers — private tours, group experiences, family journeys, and fully custom itineraries across Krakow, Zakopane, Warsaw and beyond
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
