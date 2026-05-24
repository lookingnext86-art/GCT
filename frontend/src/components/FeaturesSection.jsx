import React from 'react';

const features = [
  {
    title: 'Affordable Poland Tour Packages for International Travelers',
    description: 'Discover unbeatable value with our Poland tour packages crafted for travelers from Europe, Asia, the Americas, and the Middle East. Enjoy budget-friendly Krakow city tours, Zakopane mountain escapes, and Warsaw cultural breaks with quality hotels, comfortable transportation, and expert local guides. Direct flights from major hubs make Poland easily accessible for your dream European holiday.',
    image: 'https://greencontinenttours.com/GCT-asset/info/first.jpg',
    borderColor: 'border-l-[#4dd4ac]',
    bgColor: 'bg-[#4dd4ac]/10',
    alt: 'Affordable Poland tour packages for international travelers'
  },
  {
    title: 'Premium Poland Tours with Multilingual Expert Guides',
    description: 'Our certified multilingual guides bring Poland to life in English, Polish, Arabic, German, Spanish, and more. Experience authentic Krakow tours, Auschwitz-Birkenau visits, Wieliczka Salt Mine, and curated Warsaw experiences. Every itinerary is designed for unforgettable cultural immersion, with attention to detail and storytelling that travelers from around the world genuinely appreciate.',
    image: 'https://greencontinenttours.com/GCT-asset/info/second.jpg',
    borderColor: 'border-l-[#ff69b4]',
    bgColor: 'bg-[#ff69b4]/10',
    alt: 'Premium Poland tours with multilingual expert guides'
  },
  {
    title: 'Custom Holiday Packages — Including Specialized Services for GCC & Saudi Guests',
    description: 'Build your perfect Poland and Europe vacation with fully customized itineraries. Families, couples, students, and corporate groups all find a tour that fits. We also offer a dedicated service segment for guests from Saudi Arabia and the GCC, with Arabic-speaking guides, halal dining options, and Muslim-friendly accommodations available on request — alongside our standard international packages.',
    image: 'https://greencontinenttours.com/GCT-asset/info/third.jpg',
    borderColor: 'border-l-[#4a9eff]',
    bgColor: 'bg-[#4a9eff]/10',
    alt: 'Custom Poland and Europe holiday packages for international travelers'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-4">
            Why Travelers Worldwide Choose Green Continent Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted Krakow-based tour operator crafting unforgettable Poland and Europe experiences for travelers from every corner of the globe
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
