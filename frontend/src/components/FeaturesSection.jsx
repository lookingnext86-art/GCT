import React from 'react';

const features = [
  {
    title: 'Affordable European Tour Packages',
    description: 'Our travel agency offers an extensive selection of budget-friendly hotels, accommodations, and tour packages across Europe. From luxury stays to economical options, we provide competitive pricing on all vacation packages to Poland and throughout Europe. Every tour package includes carefully selected hotels and activities, ensuring exceptional value without compromising quality or experience.',
    image: 'https://greencontinenttours.com/GCT-asset/info/first.jpg',
    borderColor: 'border-l-[#4dd4ac]',
    bgColor: 'bg-[#4dd4ac]/10',
    alt: 'Affordable European vacation packages and budget travel options'
  },
  {
    title: 'Premium Quality Tour Services',
    description: 'As a leading tour operator in Krakow, we guarantee top-tier travel services for your European vacation. Our comprehensive packages include premium hotels, professional tour guides, expertly curated activities, and seamless logistics. Experience Poland and Europe with confidence, knowing every detail is managed by experienced travel professionals dedicated to your satisfaction.',
    image: 'https://greencontinenttours.com/GCT-asset/info/second.jpg',
    borderColor: 'border-l-[#ff69b4]',
    bgColor: 'bg-[#ff69b4]/10',
    alt: 'High-quality tour operator services in Krakow Poland'
  },
  {
    title: 'Sustainable & Eco-Friendly Tourism',
    description: 'Green Continent Tours is committed to environmentally responsible travel throughout Poland and Europe. Our sustainable tourism practices minimize environmental impact through low-emission transportation, eco-friendly accommodations, and carbon footprint reduction initiatives. We preserve local heritage, support communities, and promote authentic cultural experiences while protecting natural resources for future generations.',
    image: 'https://greencontinenttours.com/GCT-asset/info/third.jpg',
    borderColor: 'border-l-[#4a9eff]',
    bgColor: 'bg-[#4a9eff]/10',
    alt: 'Sustainable eco-friendly tourism in Poland and Europe'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
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
                  <h2 className="text-4xl font-bold mb-6 text-[#0f4f47]">
                    {feature.title}
                  </h2>
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