import React from 'react';

const features = [
  {
    title: 'Best Tours of Krakow & Poland at Affordable Prices',
    description: 'Explore Krakow\'s Old Town, Wawel Castle, Kazimierz Jewish Quarter, Auschwitz-Birkenau, Wieliczka Salt Mine, and Zakopane at unbeatable prices. Our Krakow-based tour operator offers budget-friendly day trips, multi-day Poland tours, and European vacation packages. From the Tatra Mountains to the Baltic Coast, discover Poland without breaking the bank. We provide quality hotels, professional local guides, and comfortable transportation for all tours departing from Krakow.',
    image: 'https://greencontinenttours.com/GCT-asset/info/first.jpg',
    borderColor: 'border-l-[#4dd4ac]',
    bgColor: 'bg-[#4dd4ac]/10',
    alt: 'Affordable Krakow tours and Poland travel packages'
  },
  {
    title: 'Premium Guided Tours of Krakow & European Destinations',
    description: 'As Krakow\'s leading tour operator, we deliver exceptional experiences across Poland and Europe. Our certified multilingual guides bring Krakow\'s 1000-year history to life, from medieval Main Square to Schindler\'s Factory. Explore Poland\'s UNESCO sites, charming villages, and natural wonders. Extend your journey to Prague, Vienna, Budapest, Berlin, and beyond. Every tour includes premium accommodations, skip-the-line tickets, authentic Polish cuisine experiences, and expert local insights for an unforgettable Polish adventure.',
    image: 'https://greencontinenttours.com/GCT-asset/info/second.jpg',
    borderColor: 'border-l-[#ff69b4]',
    bgColor: 'bg-[#ff69b4]/10',
    alt: 'Premium guided tours from Krakow tour operator'
  },
  {
    title: 'Eco-Friendly Tours Celebrating Poland\'s Natural Beauty',
    description: 'Discover Poland responsibly with our sustainable tourism practices. From Krakow, explore the pristine Tatra National Park, Białowieża Forest, Bieszczady Mountains, and Baltic beaches with minimal environmental impact. Our eco-friendly tours use low-emission vehicles, support local Polish communities, preserve cultural heritage, and protect Poland\'s stunning landscapes. Experience authentic Polish traditions, stay in eco-certified accommodations, and travel knowing you\'re helping preserve Poland\'s natural wonders for future generations.',
    image: 'https://greencontinenttours.com/GCT-asset/info/third.jpg',
    borderColor: 'border-l-[#4a9eff]',
    bgColor: 'bg-[#4a9eff]/10',
    alt: 'Sustainable eco-tourism in Poland and Krakow'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-4">
            Why Choose Our Krakow Tour Operator for Your Polish Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Poland from Krakow with local experts who are passionate about sharing our beautiful country with travelers worldwide
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