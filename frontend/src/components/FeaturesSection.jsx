import React from 'react';

const features = [
  {
    title: 'Affordable Poland Tour Packages from GCC Countries',
    description: 'Specialized Poland tour packages designed for Saudi Arabia and Gulf travelers at competitive prices. Our travel agency offers budget-friendly Krakow tours, Zakopane mountain trips, and Warsaw city packages from GCC with quality hotels, halal meal options, and comfortable transportation. Direct flights from Riyadh, Jeddah, Dubai, and other Gulf cities make Poland easily accessible for your holiday.',
    image: 'https://greencontinenttours.com/GCT-asset/info/first.jpg',
    borderColor: 'border-l-[#4dd4ac]',
    bgColor: 'bg-[#4dd4ac]/10',
    alt: 'Affordable Poland tour packages for Saudi tourists'
  },
  {
    title: 'Premium Poland Tours with Arabic-Speaking Guides',
    description: 'As a leading Poland travel agency for GCC tourists, we provide exceptional Krakow tours, Zakopane experiences, and Warsaw packages with Arabic-speaking guides who understand Gulf culture. Our Poland holiday packages include halal restaurants, prayer facilities, and Muslim-friendly accommodations. Every tour is customized for Saudi Arabian and GCC families seeking authentic European experiences.',
    image: 'https://greencontinenttours.com/GCT-asset/info/second.jpg',
    borderColor: 'border-l-[#ff69b4]',
    bgColor: 'bg-[#ff69b4]/10',
    alt: 'Premium Poland tours for GCC tourists with Arabic guides'
  },
  {
    title: 'Custom Poland Holiday Packages for Gulf Families',
    description: 'Create your perfect Poland vacation with our custom tour packages from Saudi Arabia and GCC. Whether you want Krakow cultural tours, Zakopane ski holidays, Warsaw shopping trips, or multi-city Poland packages - we design itineraries matching Gulf traveler preferences. Halal dining, family-friendly activities, and flexible schedules make our Poland tours ideal for Saudi and GCC families.',
    image: 'https://greencontinenttours.com/GCT-asset/info/third.jpg',
    borderColor: 'border-l-[#4a9eff]',
    bgColor: 'bg-[#4a9eff]/10',
    alt: 'Custom Poland holiday packages for Saudi families'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-4">
            Why Saudi & GCC Tourists Choose Our Poland Travel Agency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized Poland tour packages for Saudi Arabia and Gulf travelers with Arabic support, halal options, and cultural understanding
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