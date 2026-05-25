import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, Users, Building2, GraduationCap, Heart } from 'lucide-react';

const GroupTours = () => {
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
              Group Travel
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Best Group Tours in Poland: Corporate, School & Family Packages
            </h1>
            <p className="text-xl">14 min read · Updated May 2025</p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <img 
              src="https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg" 
              alt="Group tours in Poland" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl mb-12"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Planning a group trip to Poland? Whether for corporate team building, school education, or family reunion, we offer specialized group tour packages for 10-50+ people with professional coordination and group discounts.
              </p>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-4">Who Books Group Tours With Us</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-6 rounded-xl">
                  <Building2 className="w-10 h-10 text-[#4dd4ac] mb-3" />
                  <h3 className="text-xl font-bold mb-2">Corporate Groups</h3>
                  <p className="text-sm">Team building activities, business meetings, incentive travel</p>
                </div>
                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-6 rounded-xl">
                  <GraduationCap className="w-10 h-10 text-[#4dd4ac] mb-3" />
                  <h3 className="text-xl font-bold mb-2">School Groups</h3>
                  <p className="text-sm">Educational tours, historical site visits, cultural exchanges</p>
                </div>
                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-6 rounded-xl">
                  <Heart className="w-10 h-10 text-[#4dd4ac] mb-3" />
                  <h3 className="text-xl font-bold mb-2">Family Reunions</h3>
                  <p className="text-sm">Multi-generational trips, heritage tours, family gatherings</p>
                </div>
                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] text-white p-6 rounded-xl">
                  <Users className="w-10 h-10 text-[#4dd4ac] mb-3" />
                  <h3 className="text-xl font-bold mb-2">Social Clubs</h3>
                  <p className="text-sm">Retirement groups, hobby clubs, religious organizations</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">Most Popular Group Tours</h2>

              <div className="space-y-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#0f4f47] mb-3">1. Auschwitz-Birkenau Memorial Tour</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Duration:</strong> Full day (7-8 hours) | <strong>Group Size:</strong> 10-40 people
                  </p>
                  <p className="text-gray-700 mb-3">
                    Visit the largest Nazi concentration camp complex with professional historian guide. Essential educational experience for school groups and adult learners.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Licensed guide with group audio systems</li>
                    <li>Skip-the-line entrance tickets</li>
                    <li>Private transportation from Krakow</li>
                    <li>Lunch included</li>
                    <li><strong>From 180 PLN per person (groups 20+)</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#0f4f47] mb-3">2. Krakow City & Wieliczka Salt Mine</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Duration:</strong> Full day | <strong>Perfect for:</strong> First-time visitors
                  </p>
                  <p className="text-gray-700 mb-3">
                    Combine Krakow Old Town walking tour with UNESCO Salt Mine underground tour. Best introduction to Poland.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>3-hour Krakow Old Town walking tour</li>
                    <li>Salt Mine guided tour with skip-the-line</li>
                    <li>Traditional Polish lunch</li>
                    <li>All transportation included</li>
                    <li><strong>From 250 PLN per person (groups 15+)</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#0f4f47] mb-3">3. Zakopane & Tatra Mountains Adventure</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Duration:</strong> Full day | <strong>Activity Level:</strong> Moderate
                  </p>
                  <p className="text-gray-700 mb-3">
                    Mountain resort town with cable car to peaks, thermal springs, and traditional highland culture.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Scenic drive through Tatra Mountains</li>
                    <li>Gubalowka funicular ride</li>
                    <li>Krupowki Street walking tour</li>
                    <li>Optional thermal pools visit</li>
                    <li>Highland cheese tasting</li>
                    <li><strong>From 200 PLN per person (groups 15+)</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#0f4f47] mb-3">4. Warsaw Day Trip from Krakow</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Duration:</strong> 12-14 hours | <strong>Transportation:</strong> Private coach
                  </p>
                  <p className="text-gray-700 mb-3">
                    Poland's capital with reconstructed Old Town, Royal Castle, and WWII history.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>High-speed train or private coach</li>
                    <li>Old Town and Royal Route tour</li>
                    <li>Warsaw Uprising Museum or Palace of Culture</li>
                    <li>Lunch at traditional restaurant</li>
                    <li><strong>From 350 PLN per person (groups 20+)</strong></li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">Multi-Day Group Tours</h2>

              <div className="bg-[#4dd4ac]/10 border-l-4 border-[#4dd4ac] p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold mb-3">3-Day Poland Highlights</h3>
                <p className="text-gray-700 mb-2"><strong>Day 1:</strong> Krakow Old Town, Wawel Castle, Jewish Quarter</p>
                <p className="text-gray-700 mb-2"><strong>Day 2:</strong> Auschwitz-Birkenau, Wieliczka Salt Mine</p>
                <p className="text-gray-700 mb-2"><strong>Day 3:</strong> Zakopane & Tatra Mountains</p>
                <p className="font-bold text-[#0f4f47] mt-3">From 899 PLN per person (twin-sharing, 3-star hotels)</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold mb-3">5-Day Poland & Czech Republic</h3>
                <p className="text-gray-700 mb-2">Krakow (2 days) → Auschwitz → Częstochowa → Prague (2 days)</p>
                <p className="text-gray-700 mb-2">Perfect combination tour with medieval castles, historic cities, and cultural experiences</p>
                <p className="font-bold text-blue-700 mt-3">From 1,599 PLN per person (groups 15+)</p>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">Corporate Team Building Options</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-[#0f4f47] p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">🎯 Adventure Activities</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Rafting on Dunajec River</li>
                    <li>• Mountain hiking challenges</li>
                    <li>• Escape rooms in Krakow</li>
                    <li>• Quad biking adventures</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-[#0f4f47] p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">🍾 Cultural Experiences</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Polish cooking classes</li>
                    <li>• Vodka tasting sessions</li>
                    <li>• Traditional folk shows</li>
                    <li>• Pottery workshops</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">What's Included in Our Group Tours</h2>
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <ul className="space-y-3 text-gray-700">
                  <li>✓ <strong>Professional Tour Coordinator</strong> - Dedicated contact person</li>
                  <li>✓ <strong>Licensed Guides</strong> - Expert multilingual guides</li>
                  <li>✓ <strong>Private Transportation</strong> - Comfortable coaches with AC</li>
                  <li>✓ <strong>Skip-the-Line Tickets</strong> - No waiting at attractions</li>
                  <li>✓ <strong>Group Audio Systems</strong> - Hear guide clearly (20+ groups)</li>
                  <li>✓ <strong>Travel Insurance</strong> - Basic coverage included</li>
                  <li>✓ <strong>24/7 Support</strong> - Emergency contact during tour</li>
                  <li>✓ <strong>Flexible Itinerary</strong> - Customized to your needs</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">Group Discounts</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>10-14 people:</strong> 5% discount</li>
                  <li>• <strong>15-24 people:</strong> 10% discount</li>
                  <li>• <strong>25-39 people:</strong> 15% discount</li>
                  <li>• <strong>40+ people:</strong> 20% discount + 1 free coordinator place</li>
                  <li>• <strong>Early booking (3+ months):</strong> Additional 5% off</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] text-white p-8 rounded-xl text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Group Tour?</h3>
                <p className="mb-6">Contact us for custom quotes and detailed itineraries</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-white text-[#0f4f47] px-8 py-3 rounded-full font-bold hover:bg-[#4dd4ac] transition-colors">
                    Request Group Quote
                  </button>
                  <button className="bg-[#4dd4ac] text-[#0f4f47] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                    Download Group Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default GroupTours;