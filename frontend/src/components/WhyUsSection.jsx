import React from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
  'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg',
  'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-2.jpg',
  'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-3.jpg',
  'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-4.jpg'
];

const WhyUsSection = () => {
  return (
    <section className="relative bg-[#0f4f47] py-20 overflow-hidden">
      {/* Decorative Plane */}
      <img 
        src="https://greencontinenttours.com/GCT-asset/airPlane/plane.svg" 
        alt="Travel plane decoration" 
        className="absolute top-10 right-20 w-24 opacity-20"
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Premium Poland Travel — Crafted by Krakow Locals, Designed for the World
            </h1>
            
            {/* Time to Travel Image */}
            <div className="relative mb-8">
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 border-4 border-dashed border-white/30 rounded-full" />
              <div className="text-center py-12">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="text-[#ffd700]">IT'S TIME TO</span>
                  <br />
                  <span className="font-cursive text-6xl md:text-7xl">TRAVEL</span>
                </h2>
              </div>
            </div>

            <p className="text-xl mb-4 leading-relaxed">
              A modern Poland travel agency specializing in private tours, small-group journeys, family travel, and fully custom itineraries — from Krakow's historic Old Town to Zakopane's mountains and Warsaw's vibrant culture.
            </p>
            
            <p className="text-lg mb-8 text-gray-200">
              Premium hotels, comfortable transport, multilingual expert guides, and thoughtful pacing — so every traveler, from every part of the world, can experience Poland the way it deserves to be seen.
            </p>

            <Link 
              to="/gallery"
              className="inline-block bg-white text-[#0f4f47] px-8 py-3 rounded-full font-semibold hover:bg-[#ffd700] transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="View our travel photo gallery"
            >
              Explore Our Tours
            </Link>

            {/* Decorative Dots */}
            <div className="mt-8">
              <svg width="120" height="40" viewBox="0 0 120 40" className="opacity-50" aria-hidden="true">
                {[...Array(30)].map((_, i) => (
                  <circle 
                    key={i}
                    cx={(i % 10) * 12 + 6} 
                    cy={Math.floor(i / 10) * 12 + 6} 
                    r="2" 
                    fill="#ff69b4"
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Right Gallery Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((img, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
                  style={{
                    marginTop: index % 2 === 0 ? '0' : '2rem'
                  }}
                >
                  <img 
                    src={img} 
                    alt={`Krakow and Poland tour destinations - Experience ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Decorative Dotted Line */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-64 border-4 border-dashed border-[#4dd4ac]/30 rounded-full" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;