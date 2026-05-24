import React from 'react';

const goals = [
  'Your Complete Krakow & Poland Travel Partner: Based in the heart of Krakow, Green Continent Tours is your one-stop solution for exploring Poland and Europe. We specialize in Krakow city tours, Auschwitz-Birkenau visits, Wieliczka Salt Mine trips, Zakopane mountain excursions, and multi-day tours across Poland. From the historic streets of Warsaw to the beaches of Gdańsk, from the castles of Małopolska to the mountains of southern Poland - we handle everything: hotels, transportation, guides, tickets, and authentic Polish experiences.',
  'Local Krakow Experts Creating Unforgettable Polish Experiences: Our team of passionate Krakow natives and experienced tour guides are dedicated to showcasing the best of Poland. With deep knowledge of Krakow\'s history, Polish culture, hidden gems, and local traditions, we create personalized itineraries that go beyond typical tourist attractions. Whether you want to taste authentic pierogi in a local restaurant, explore lesser-known Krakow neighborhoods, or discover Poland\'s countryside villages, our local expertise ensures authentic, memorable experiences.',
  'Sustainable Tourism Preserving Poland\'s Heritage & Nature: Green Continent Tours is committed to protecting Poland\'s incredible natural beauty and rich cultural heritage. From the medieval architecture of Krakow\'s Old Town to the pristine wilderness of Polish national parks, we operate responsibly. Our tours support local Polish businesses, minimize environmental impact, use eco-friendly transportation, and educate travelers about Polish history and conservation. We believe sustainable tourism ensures Poland\'s treasures remain beautiful for generations to come.',
  'Dedicated Support from Krakow Throughout Your Polish Journey: From your first inquiry to your final goodbye in Krakow, we\'re with you every step. Our 24/7 customer service team, based in Krakow, provides real-time support in multiple languages. We monitor weather, traffic, and all tour logistics to ensure smooth experiences across Poland. Whether you need restaurant recommendations in Krakow, help with Polish transportation, or adjustments to your itinerary, our local team is always ready to assist, making your Poland adventure stress-free and enjoyable.'
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
              Your Gateway to Krakow, Poland & Europe
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              For years, travelers from around the world have trusted Green Continent Tours to discover Krakow's magic and Poland's beauty. As a premier Krakow-based tour operator, we don't just show you Poland - we help you experience it like a local. From your first steps in Krakow's Main Square to unforgettable journeys through Polish mountains, cities, and countryside, we deliver only the best tours, authentic experiences, and passionate service that turns first-time visitors into lifelong Poland enthusiasts.
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
              Ready to Explore Krakow & Poland?
            </h3>
            <p className="text-xl mb-8">
              Join thousands of satisfied travelers who discovered Poland with us. Book your Krakow tour today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#4dd4ac] text-[#0f4f47] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffd700] transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Krakow Tours
              </button>
              <button className="bg-white text-[#0f4f47] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us in Krakow
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