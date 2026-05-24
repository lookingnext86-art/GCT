import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Clock, Calendar } from 'lucide-react';

const travelGuides = [
  {
    title: 'Complete Guide to Visiting Krakow',
    description: 'Everything you need to know about visiting Krakow - from must-see attractions to local tips and hidden gems.',
    image: 'https://greencontinenttours.com/GCT-asset/Slider/Slider-1.jpg',
    readTime: '10 min read',
    category: 'City Guide'
  },
  {
    title: 'Auschwitz-Birkenau Memorial Visit Guide',
    description: 'Essential information for visiting this important historical site with respect and understanding.',
    image: 'https://greencontinenttours.com/GCT-asset/Slider/Slider-2.jpg',
    readTime: '8 min read',
    category: 'Historical Sites'
  },
  {
    title: 'Best Time to Visit Poland',
    description: 'Discover the ideal seasons for visiting Poland and what to expect throughout the year.',
    image: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg',
    readTime: '6 min read',
    category: 'Travel Tips'
  },
  {
    title: 'Zakopane & Tatra Mountains Guide',
    description: 'Explore Poland\'s winter capital and stunning mountain landscapes in the Tatra National Park.',
    image: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-4.jpg',
    readTime: '12 min read',
    category: 'Nature & Adventure'
  },
  {
    title: 'Polish Cuisine: What to Try in Krakow',
    description: 'A food lover\'s guide to traditional Polish dishes and the best restaurants in Krakow.',
    image: 'https://greencontinenttours.com/GCT-asset/info/first.jpg',
    readTime: '7 min read',
    category: 'Food & Culture'
  },
  {
    title: 'Day Trips from Krakow',
    description: 'Top destinations within easy reach of Krakow including Wieliczka Salt Mine and Wadowice.',
    image: 'https://greencontinenttours.com/GCT-asset/info/second.jpg',
    readTime: '9 min read',
    category: 'Day Trips'
  }
];

const TravelGuide = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Travel Guide</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert guides and insider tips for exploring Krakow, Poland, and European destinations
            </p>
          </div>
        </section>

        {/* Travel Guides Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {travelGuides.map((guide, index) => (
                  <article 
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#4dd4ac] text-[#0f4f47] px-3 py-1 rounded-full text-sm font-bold">
                          {guide.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#0f4f47] mb-3 group-hover:text-[#1a6b5f] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {guide.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {guide.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Coming Soon */}
              <div className="mt-16 text-center bg-white p-12 rounded-2xl shadow-lg">
                <Calendar className="w-16 h-16 text-[#0f4f47] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-[#0f4f47] mb-4">More Guides Coming Soon</h2>
                <p className="text-xl text-gray-600 mb-6">
                  We're constantly adding new travel guides and tips to help you plan the perfect Polish adventure.
                </p>
                <button className="bg-[#0f4f47] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1a6b5f] transition-colors">
                  Subscribe for Updates
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TravelGuide;