import React from 'react';

const goals = [
  'Your One-Stop Travel Agency for European Tours: Green Continent Tours serves both B2B partners and individual travelers with comprehensive tour packages across Poland and Europe. We consolidate all essential travel services - from hotel bookings and transportation to guided tours and activity planning - making us your complete solution for European vacation planning.',
  'Customer-Focused Tour Operator Excellence: Our professional team operates as your trusted travel partner, ensuring premium service quality at every stage. With experienced tour guides and travel consultants, we prioritize your interests and guarantee smooth, worry-free travel experiences throughout Poland and European destinations.',
  'Committed to Sustainable Travel Practices: Environmental responsibility guides every tour package we offer. As an eco-conscious travel agency, we implement sustainable tourism practices, select environmentally friendly accommodations, and utilize low-emission transportation to minimize our carbon footprint while preserving Poland\'s natural beauty and cultural heritage.',
  'Continuous Support Throughout Your Journey: From initial booking to trip completion, Green Continent Tours maintains constant communication with our clients. Our 24/7 customer support monitors your tour experience, ensuring seamless service delivery. We proactively address any concerns, guaranteeing a trouble-free, memorable vacation across Poland and Europe.'
];

const OurGoalsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title Image */}
          <div className="text-center mb-12">
            <img 
              src="https://greencontinenttours.com/GCT-asset/Our-Goals-title.png" 
              alt="Green Continent Tours - Our Mission and Goals as Leading Tour Operator" 
              className="mx-auto max-w-md w-full"
              loading="lazy"
            />
          </div>

          {/* Main Description */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#0f4f47]">
              Your Trusted Tour Operator & Travel Agency in Krakow, Poland
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              For years, Green Continent Tours has been dedicated to delivering exceptional European travel experiences. As a premier tour operator in Krakow, we believe only the best service is good enough for our clients. We continuously strive to exceed expectations in every tour package, accommodation booking, and travel service we provide across Poland and Europe.
            </p>
          </div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <article 
                key={index}
                className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#4dd4ac] text-[#0f4f47] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-base leading-relaxed">
                    {goal}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* GCT Banner */}
          <div className="mt-16">
            <a 
              href="https://www.gct.travel/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit GCT Travel booking platform for tour reservations"
            >
              <img 
                src="https://greencontinenttours.com/GCT-asset/info/GCT.jpg" 
                alt="GCT Travel - Online booking platform for European tours and travel packages" 
                className="w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
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