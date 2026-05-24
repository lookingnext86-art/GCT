import React from 'react';

const features = [
  {
    title: 'Affordable Tours & Travel Packages',
    description: 'Explore Old Town, Wawel Castle, Jewish Quarter, Auschwitz-Birkenau, Salt Mine, and Zakopane at unbeatable prices. We offer budget-friendly day trips, multi-day tours, and European vacation packages. From Tatra Mountains to Baltic Coast, discover Poland without breaking the bank with quality hotels, professional guides, and comfortable transportation.',
    image: 'https://greencontinenttours.com/GCT-asset/info/first.jpg',
    borderColor: 'border-l-[#4dd4ac]',
    bgColor: 'bg-[#4dd4ac]/10',
    alt: 'Affordable travel packages and budget tours'
  },
  {
    title: 'Premium Quality Guided Tours',
    description: 'As a leading tour operator, we deliver exceptional experiences across Poland and Europe. Our certified multilingual guides bring 1000 years of history to life. Explore UNESCO sites, charming villages, and natural wonders. Extend your journey to Prague, Vienna, Budapest, Berlin and beyond with premium accommodations, skip-the-line tickets, authentic cuisine, and expert local insights.',
    image: 'https://greencontinenttours.com/GCT-asset/info/second.jpg',
    borderColor: 'border-l-[#ff69b4]',
    bgColor: 'bg-[#ff69b4]/10',
    alt: 'Premium guided tour services'
  },
  {
    title: 'Eco-Friendly & Sustainable Tourism',
    description: 'Discover Poland responsibly with our sustainable practices. Explore pristine Tatra National Park, Białowieża Forest, Bieszczady Mountains, and Baltic beaches with minimal environmental impact. Our eco-tours use low-emission vehicles, support local communities, preserve cultural heritage, and protect natural landscapes. Experience authentic traditions while helping preserve wonders for future generations.',
    image: 'https://greencontinenttours.com/GCT-asset/info/third.jpg',
    borderColor: 'border-l-[#4a9eff]',
    bgColor: 'bg-[#4a9eff]/10',
    alt: 'Sustainable eco-tourism in Poland'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4f47] mb-4">
            Why Choose Our Tour Operator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Poland with local experts passionate about sharing our beautiful country with travelers worldwide
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