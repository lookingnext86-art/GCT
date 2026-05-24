import React from 'react';

const goals = [
  'Your Complete Travel Partner: Based in Krakow, we are your one-stop solution for exploring Poland and Europe. We specialize in city tours, Auschwitz-Birkenau visits, Salt Mine trips, mountain excursions, and multi-day adventures. From historic streets to beautiful beaches, we handle everything: hotels, transportation, guides, and authentic experiences.',
  'Local Experts Creating Memorable Experiences: Our team of passionate guides are dedicated to showcasing the best of Poland. With deep knowledge of history, culture, and hidden gems, we create personalized itineraries beyond typical tourist attractions. Experience authentic cuisine, explore neighborhoods, and discover countryside villages with our local expertise.',
  'Sustainable Tourism Preserving Heritage and Nature: We are committed to protecting natural beauty and cultural heritage. Our tours support local businesses, minimize environmental impact, use eco-friendly transportation, and educate travelers about conservation. We ensure treasures remain beautiful for future generations.',
  'Dedicated Support Throughout Your Journey: From first inquiry to final goodbye, we are with you every step. Our 24/7 customer service provides real-time support in multiple languages. We monitor all logistics to ensure smooth experiences. Whether you need recommendations, help with transportation, or itinerary adjustments, our team is ready to assist.'
];

const OurGoalsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title Image */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-6">
              Why Travelers Choose Our Krakow Tour Operator
            </h2>
            <img 
              src="https://greencontinenttours.com/GCT-asset/Our-Goals-title.png" 
              alt="Green Continent Tours - Krakow tour operator mission" 
              className="mx-auto max-w-md w-full"
              loading="lazy"
            />
          </div>

          {/* Main Description */}
          <div className="text-center mb-16">
            <p className="text-2xl font-bold text-[#0f4f47] mb-4">
              Your Gateway to Poland & Europe
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              For years, travelers worldwide have trusted us to discover Poland's magic. As a premier tour operator, we don't just show you Poland - we help you experience it like a local. From your first steps in the Main Square to unforgettable journeys through mountains, cities, and countryside, we deliver authentic experiences that turn first-time visitors into lifelong enthusiasts.
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

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] text-white p-12 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Explore Poland?
            </h3>
            <p className="text-xl mb-8">
              Join thousands of satisfied travelers. Book your tour today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#4dd4ac] text-[#0f4f47] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffd700] transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Tours
              </button>
              <button className="bg-white text-[#0f4f47] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </button>
            </div>
          </div>

          {/* GCT Banner */}
          <div className="mt-16">
            <a 
              href="https://www.gct.travel/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Book Krakow and Poland tours online"
            >
              <img 
                src="https://greencontinenttours.com/GCT-asset/info/GCT.jpg" 
                alt="Book your Krakow tours online - GCT Travel booking platform" 
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