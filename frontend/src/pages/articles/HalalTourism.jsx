import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, MapPin, Utensils, Building } from 'lucide-react';

const HalalTourism = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] py-16 text-white">
          <div className="container mx-auto px-4">
            <Link to="/travel-guide" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Travel Guides
            </Link>
            <span className="inline-block bg-[#4dd4ac] text-[#0f4f47] px-4 py-2 rounded-full text-sm font-bold mb-4">
              Halal Tourism
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Halal Tourism in Krakow: Complete Muslim Travel Guide 2025
            </h1>
            <p className="text-xl">12 min read · Updated May 2025</p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <img 
              src="https://greencontinenttours.com/GCT-asset/Slider/Slider-1.jpg" 
              alt="Krakow Old Town" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl mb-12"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Krakow, Poland's cultural capital, is becoming increasingly welcoming to Muslim travelers. This comprehensive guide covers everything you need to know about halal tourism in Krakow, from halal restaurants to prayer facilities.
              </p>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-4 mt-4">Halal Restaurants in Krakow</h2>
              <div className="bg-[#4dd4ac]/10 border-l-4 border-[#4dd4ac] p-6 rounded-r-lg mb-8">
                <p className="text-2xl font-bold text-[#0f4f47] mb-3 flex items-center gap-2">
                  <Utensils className="w-6 h-6" />
                  Recommended Halal Spots
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Manzil Restaurant</strong> - ul. Miodowa 9, Old Town. Authentic Middle Eastern cuisine with halal certification.</li>
                  <li><strong>Istanbul Kebab</strong> - ul. Starowiślna 38. Turkish restaurant serving 100% halal meat.</li>
                  <li><strong>Sphinx Restaurant</strong> - Multiple locations. Egyptian cuisine with halal options.</li>
                  <li><strong>Anatolia Restaurant</strong> - ul. Dietla 41. Turkish and Mediterranean halal dishes.</li>
                  <li><strong>Beirut Hummus & Music Bar</strong> - ul. Starowiślna 17. Lebanese vegetarian options.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-4 mt-12">Prayer Facilities & Mosques</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Islamic Cultural Centre in Krakow
                </h3>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> ul. Wita Stwosza 32, Krakow</p>
                <p className="text-gray-700 mb-2"><strong>Prayer Times:</strong> 5 daily prayers available</p>
                <p className="text-gray-700"><strong>Facilities:</strong> Separate prayer rooms for men and women, wudu facilities</p>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-4 mt-12">Muslim-Friendly Hotels</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Hotels with Prayer Rooms
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Hotel Stary (5-star)</li>
                    <li>• Sheraton Grand Krakow</li>
                    <li>• Radisson Blu Hotel</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Halal Breakfast Options</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Apartments (self-catering)</li>
                    <li>• Hotels near halal restaurants</li>
                    <li>• Request halal meals in advance</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-4 mt-12">Islamic Heritage in Poland</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Poland has a rich Islamic history dating back to the 14th century. The Polish-Lithuanian Tatars settled in the region, leaving behind a unique cultural legacy.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                <li><strong>Tatar Mosques:</strong> Visit historic wooden mosques in Kruszyniany and Bohoniki</li>
                <li><strong>Tatar Museum:</strong> Learn about Islamic heritage in Poland</li>
                <li><strong>Tatarian Cemetery:</strong> Historical Muslim burial grounds</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-4 mt-12">Travel Tips for Muslim Visitors</h2>
              <div className="bg-[#0f4f47] text-white p-8 rounded-xl mb-8">
                <ul className="space-y-4">
                  <li>✓ <strong>Prayer Apps:</strong> Download Muslim Pro or Athan for accurate prayer times in Krakow</li>
                  <li>✓ <strong>Qibla Direction:</strong> Northeast (approximately 60° from North)</li>
                  <li>✓ <strong>Ramadan:</strong> Some halal restaurants offer iftar meals during Ramadan</li>
                  <li>✓ <strong>Halal Certification:</strong> Look for "Halal" signs or ask staff directly</li>
                  <li>✓ <strong>Language:</strong> Learn basic Polish phrases or use translation apps</li>
                  <li>✓ <strong>Modest Clothing:</strong> Poland is generally conservative, modest dress is respected</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-4 mt-12">Shopping for Halal Products</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Several supermarkets and shops in Krakow stock halal products:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                <li><strong>Middle Eastern Shops:</strong> ul. Miodowa, ul. Starowiślna areas</li>
                <li><strong>Tesco, Carrefour:</strong> Some branches have halal meat sections</li>
                <li><strong>Local Markets:</strong> Stary Kleparz market for fresh produce</li>
              </ul>

              <div className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] text-white p-8 rounded-xl text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Need Help Planning Your Halal-Friendly Trip?</h3>
                <p className="mb-6">Contact us for customized Muslim-friendly tour packages in Krakow and Poland</p>
                <button className="bg-white text-[#0f4f47] px-8 py-3 rounded-full font-bold hover:bg-[#4dd4ac] transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default HalalTourism;