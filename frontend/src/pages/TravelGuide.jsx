import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Clock, Calendar } from 'lucide-react';

const travelGuides = [
  {
    title: 'Halal Tourism in Krakow: Complete Muslim Travel Guide 2025',
    description: 'Discover Muslim-friendly restaurants, halal food options, prayer facilities, and Islamic heritage sites in Krakow. Your comprehensive guide to halal tourism in Poland.',
    image: 'https://greencontinenttours.com/GCT-asset/Slider/Slider-1.jpg',
    readTime: '12 min read',
    category: 'Halal Tourism',
    content: 'Find halal restaurants near Krakow Old Town, mosques for prayer times, Muslim-friendly hotels, and discover Islamic history in Poland. Includes halal dining options, prayer room locations, and tips for Muslim travelers visiting Krakow and Poland.'
  },
  {
    title: 'Hidden Gems in Poland: 15 Secret Places Tourists Miss',
    description: 'Explore Poland\'s best-kept secrets beyond Krakow and Warsaw. Discover charming medieval towns, pristine nature reserves, abandoned castles, and local favorites off the beaten path.',
    image: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-4.jpg',
    readTime: '15 min read',
    category: 'Hidden Gems',
    content: 'Uncover Kazimierz Dolny, Zalipie painted village, Bieszczady Mountains, Slowinski Sand Dunes, Moszna Castle, underground tourist routes in Wroclaw, and authentic Polish villages tourists never find. Local insider tips included.'
  },
  {
    title: 'What to Avoid in Poland: 10 Common Tourist Mistakes & Scams',
    description: 'Essential travel safety tips for Poland. Learn about common tourist traps, taxi scams in Krakow, overpriced restaurants, currency exchange fraud, and cultural mistakes to avoid.',
    image: 'https://greencontinenttours.com/GCT-asset/Slider/Slider-2.jpg',
    readTime: '10 min read',
    category: 'Travel Safety',
    content: 'Avoid Krakow taxi scams, overpriced tourist restaurants on Market Square, currency exchange traps, fake amber jewelry, pickpockets hotspots, and cultural faux pas. Save money and stay safe with local expert advice.'
  },
  {
    title: 'Best Group Tours in Poland: Corporate, School & Family Packages',
    description: 'Top-rated group tour packages from Krakow for 10-50+ people. Auschwitz tours, Zakopane trips, multi-day Poland itineraries, team building activities, and customized group travel solutions.',
    image: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg',
    readTime: '14 min read',
    category: 'Group Travel',
    content: 'Specialized group tours including Auschwitz-Birkenau memorial visits, Wieliczka Salt Mine expeditions, Zakopane mountain adventures, Warsaw day trips, European multi-country packages, corporate team building, school educational tours, and family reunion travel.'
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
              <div className="grid md:grid-cols-2 gap-8">
                {travelGuides.map((guide, index) => (
                  <article 
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#4dd4ac] text-[#0f4f47] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {guide.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4dd4ac] transition-colors">
                          {guide.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 text-base leading-relaxed">
                        {guide.description}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {guide.content}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {guide.readTime}
                        </div>
                        <button className="bg-[#0f4f47] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#1a6b5f] transition-colors">
                          Read Article
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* SEO Content Section */}
              <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-[#0f4f47] mb-6">
                  Expert Travel Guides for Krakow & Poland
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#0f4f47]">For Muslim Travelers</h3>
                    <p className="text-sm leading-relaxed">
                      Discover halal restaurants, prayer facilities, and Muslim-friendly accommodations throughout Poland. Our halal tourism guide helps you travel comfortably while maintaining your faith.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#0f4f47]">Off the Beaten Path</h3>
                    <p className="text-sm leading-relaxed">
                      Explore Poland's hidden treasures that most tourists never find. From secret castles to charming villages, discover authentic Polish experiences away from crowds.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#0f4f47]">Travel Smart & Safe</h3>
                    <p className="text-sm leading-relaxed">
                      Avoid common tourist traps, scams, and mistakes. Learn from local experts about what to watch out for in Krakow and Poland to save money and stay safe.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#0f4f47]">Group Travel Solutions</h3>
                    <p className="text-sm leading-relaxed">
                      Specialized group tour packages for families, schools, and corporate teams. Customized itineraries with group discounts and professional coordination.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="mt-16 text-center bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] p-12 rounded-2xl shadow-lg text-white">
                <Calendar className="w-16 h-16 text-[#4dd4ac] mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">More Travel Guides Coming Soon</h2>
                <p className="text-xl mb-6">
                  Subscribe to get the latest Poland travel tips, destination guides, and insider recommendations
                </p>
                <div className="flex justify-center gap-4">
                  <button className="bg-[#4dd4ac] text-[#0f4f47] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                    Subscribe for Updates
                  </button>
                  <button className="bg-white text-[#0f4f47] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                    Contact for Custom Guides
                  </button>
                </div>
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