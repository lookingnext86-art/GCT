import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, MapPin, Camera, Mountain } from 'lucide-react';

const HiddenGems = () => {
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
              Hidden Gems
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hidden Gems in Poland: 15 Secret Places Tourists Miss
            </h1>
            <p className="text-xl">15 min read · Updated May 2025</p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <img 
              src="https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-4.jpg" 
              alt="Hidden Polish landscapes" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl mb-12"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Beyond the well-known attractions of Krakow and Warsaw lies a Poland filled with medieval towns, pristine nature, and authentic villages that most tourists never discover. Here are 15 hidden gems you must visit.
              </p>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-4">
                Top 4 Hidden Gems Worth the Detour
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-[#4dd4ac]" />
                    <h3 className="text-xl font-bold">1. Kazimierz Dolny</h3>
                  </div>
                  <p>Charming Renaissance town on Vistula River with art galleries, cafes, and stunning sunsets. 2.5 hours from Krakow.</p>
                </div>

                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Camera className="w-6 h-6 text-[#4dd4ac]" />
                    <h3 className="text-xl font-bold">2. Zalipie - Painted Village</h3>
                  </div>
                  <p>Unique village where every house is covered in colorful floral paintings. Instagram paradise near Krakow.</p>
                </div>

                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Mountain className="w-6 h-6 text-[#4dd4ac]" />
                    <h3 className="text-xl font-bold">3. Bieszczady Mountains</h3>
                  </div>
                  <p>Wild, untouched mountain range in southeast Poland. Perfect for hiking, wildlife watching, and solitude.</p>
                </div>

                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-[#4dd4ac]" />
                    <h3 className="text-xl font-bold">4. Słowiński Sand Dunes</h3>
                  </div>
                  <p>Moving sand dunes on Baltic coast - Poland's desert! Słowiński National Park near Łeba.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">More Secret Destinations</h2>

              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">5. Moszna Castle</h3>
                  <p className="text-gray-700">Fairytale castle with 365 rooms and 99 spires. Less crowded than Wawel but equally stunning.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">6. Białowieża Forest</h3>
                  <p className="text-gray-700">Europe's last primeval forest, home to wild bison. UNESCO World Heritage Site.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">7. Toruń - Medieval Town</h3>
                  <p className="text-gray-700">Birthplace of Copernicus with perfectly preserved Gothic architecture and amazing gingerbread.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">8. Underground Wrocław</h3>
                  <p className="text-gray-700">Secret medieval cellars and passages beneath Wrocław's Market Square.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">9. Sandomierz</h3>
                  <p className="text-gray-700">Romantic hilltop town on Vistula River with underground tunnels and wine cellars.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">10. Karkonosze Mountains</h3>
                  <p className="text-gray-700">Mystical mountains with waterfalls, rock formations, and legends. Home to Śnieżka peak.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">11. Łańcut Castle</h3>
                  <p className="text-gray-700">Baroque palace with stunning gardens, rarely visited by international tourists.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">12. Hel Peninsula</h3>
                  <p className="text-gray-700">Narrow strip of land stretching into Baltic Sea. Perfect beaches, seal sanctuary.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">13. Kłodzko Fortress</h3>
                  <p className="text-gray-700">Massive underground fortress with 40km of tunnels. Polish Gibraltar.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">14. Ojców National Park</h3>
                  <p className="text-gray-700">Smallest but stunning national park near Krakow. Limestone cliffs, caves, and Pieskowa Skała Castle.</p>
                </div>

                <div className="border-l-4 border-[#4dd4ac] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#0f4f47] mb-2">15. Gdynia & Sopot</h3>
                  <p className="text-gray-700">Modern seaside cities overshadowed by Gdańsk, but equally charming with beaches and nightlife.</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Insider Tips</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Visit in spring (April-May) or autumn (September-October) for fewer crowds</li>
                  <li>• Rent a car to reach remote locations easily</li>
                  <li>• Learn basic Polish phrases - locals appreciate the effort</li>
                  <li>• Download offline maps as some areas have poor cell coverage</li>
                  <li>• Book accommodations in advance during summer weekends</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] text-white p-8 rounded-xl text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Want to Discover These Hidden Gems?</h3>
                <p className="mb-6">We organize custom tours to Poland's secret destinations</p>
                <button className="bg-white text-[#0f4f47] px-8 py-3 rounded-full font-bold hover:bg-[#4dd4ac] transition-colors">
                  Plan Your Adventure
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

export default HiddenGems;