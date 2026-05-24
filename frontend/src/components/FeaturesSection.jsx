import React from 'react';

const features = [
  {
    title: 'Private & Group Tours Across Poland',
    description: 'Choose the way you want to experience Poland — intimate private tours for couples and families, or small-group experiences for friends and travel companions. From Krakow\'s Old Town to Zakopane\'s Tatra peaks and Warsaw\'s elegant boulevards, every journey is led by expert local guides, with premium hotels, comfortable transport, and unhurried pacing built in.',
    image: 'https://greencontinenttours.com/GCT-asset/info/first.jpg',
    borderColor: 'border-l-[#4dd4ac]',
    bgColor: 'bg-[#4dd4ac]/10',
    alt: 'Private and group tours in Poland with Green Continent Tours'
  },
  {
    title: 'Family Travel Designed Around You',
    description: 'Travel with kids, parents, and grandparents in mind. Our family-friendly itineraries balance Krakow\'s history, Zakopane\'s mountain adventures, and Warsaw\'s parks and museums — with flexible schedules, child-friendly stops, and accommodations chosen for comfort, safety, and space. Memorable moments without the logistics stress.',
    image: 'https://greencontinenttours.com/GCT-asset/info/second.jpg',
    borderColor: 'border-l-[#ff69b4]',
    bgColor: 'bg-[#ff69b4]/10',
    alt: 'Family travel and family-friendly Poland tours'
  },
  {
    title: 'Custom Itineraries — Culture, Nature & Comfort',
    description: 'Tell us how you love to travel, and we\'ll build it. Cultural deep-dives through UNESCO sites and Polish history, outdoor escapes in the Tatra Mountains and lake districts, or a relaxed mix of both. Each custom itinerary blends authentic experiences with premium comfort — and includes specialized services on request, including options for GCC and Saudi guests.',
    image: 'https://greencontinenttours.com/GCT-asset/info/third.jpg',
    borderColor: 'border-l-[#4a9eff]',
    bgColor: 'bg-[#4a9eff]/10',
    alt: 'Custom Poland travel itineraries combining culture, nature and comfort'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-4">
            Premium Poland Travel, Tailored to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A modern Krakow-based travel agency crafting private tours, group experiences, and family journeys across Poland — for travelers from every corner of the world
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {features.map((feature, index) => (
            <article 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative group">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={feature.image} 
                    alt={feature.alt}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Decorative Dots */}
                <div className={`absolute ${index % 2 === 0 ? '-right-8' : '-left-8'} -bottom-8`} aria-hidden="true">
                  <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-30">
                    {[...Array(49)].map((_, i) => (
                      <circle 
                        key={i}
                        cx={(i % 7) * 12 + 6} 
                        cy={Math.floor(i / 7) * 12 + 6} 
                        r="2" 
                        fill={feature.borderColor.includes('4dd4ac') ? '#4dd4ac' : feature.borderColor.includes('ff69b4') ? '#ff69b4' : '#4a9eff'}
                      />
                    ))}
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className={`border-l-8 ${feature.borderColor} ${feature.bgColor} p-8 rounded-r-2xl`}>
                  <h3 className="text-3xl font-bold mb-6 text-[#0f4f47]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
