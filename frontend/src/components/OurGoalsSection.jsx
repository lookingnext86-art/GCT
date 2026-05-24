import React from 'react';

const goals = [
  {
    number: 1,
    title: 'One-Stop Travel Solution',
    description: 'Complete tour packages across Poland and Europe with hotels, transportation, guides, and authentic experiences all handled for you.'
  },
  {
    number: 2,
    title: 'Local Expert Guides',
    description: 'Passionate local guides with deep knowledge of Polish history, culture, and hidden gems creating personalized, authentic experiences.'
  },
  {
    number: 3,
    title: 'Sustainable Tourism',
    description: 'Environmentally responsible tours that support local communities, preserve cultural heritage, and protect natural beauty.'
  },
  {
    number: 4,
    title: '24/7 Customer Support',
    description: 'Dedicated multilingual support team monitoring your journey from booking to completion, ensuring smooth, worry-free travel.'
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
              As your trusted tour operator in Krakow, we are committed to delivering exceptional Polish travel experiences through four core principles
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

          {/* GCT Banner - Full Width, Shorter Height */}
          <div className="mt-16">
            <a 
              href="https://www.gct.travel/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Book Krakow and Poland tours online"
              className="block"
            >
              <img 
                src="https://greencontinenttours.com/GCT-asset/info/GCT.jpg" 
                alt="Book your Krakow tours online - GCT Travel booking platform" 
                className="w-full max-h-72 object-contain rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.01] animate-pulse-slow"
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