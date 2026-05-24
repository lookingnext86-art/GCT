import React from 'react';

const goals = [
  'Be the one stop travel shop for our loyal B2B and individual customers. we will put together most of services which are being offered in travel and tourism market.',
  'Our employes always will consider themselves on same side of our customers, so that they can insure the high quality service',
  'In all our actions and offered products, we will keep sustainable and environmental friendly approach. this will remain one our highest responsibilities.',
  'Maintaining constant contact with our clients. throughout the trip, we will keep monitoring the services which has been offered to our client. doing so, we will insure about a smooth and trouble free experience with us.'
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
              alt="Our Goals" 
              className="mx-auto max-w-md w-full"
            />
          </div>

          {/* Main Description */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              From our side as your trusted tour and travel company, we have been trying to offer the best which we can over the past years. Only the best is good enough and only the best is what we want to be for our customers.
            </p>
          </div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <div 
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
              </div>
            ))}
          </div>

          {/* GCT Banner */}
          <div className="mt-16">
            <a href="https://www.gct.travel/index.php" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://greencontinenttours.com/GCT-asset/info/GCT.jpg" 
                alt="Green Continent Tours" 
                className="w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoalsSection;