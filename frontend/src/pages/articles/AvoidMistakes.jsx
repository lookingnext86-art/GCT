import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, AlertTriangle, ShieldAlert, DollarSign } from 'lucide-react';

const AvoidMistakes = () => {
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
              Travel Safety
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What to Avoid in Poland: 10 Common Tourist Mistakes & Scams
            </h1>
            <p className="text-xl">10 min read · Updated May 2025</p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <img 
              src="https://greencontinenttours.com/GCT-asset/Slider/Slider-2.jpg" 
              alt="Travel safely in Poland" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl mb-12"
            />

            <div className="prose prose-lg max-w-none">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Important Safety Notice
                </h3>
                <p className="text-gray-700">
                  Poland is generally a safe country for tourists, but being aware of common scams and mistakes will help you save money and have a better experience.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">1. Krakow Airport Taxi Scams</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-3 text-red-600 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  The Scam
                </h3>
                <p className="text-gray-700 mb-4">
                  Unofficial taxi drivers at Krakow Airport charge 10x normal rates (200-300 PLN instead of 30-50 PLN to city center).
                </p>
                <h3 className="font-bold text-lg mb-3 text-green-600">How to Avoid</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use official Taxi Stop at terminal exit (yellow signs)</li>
                  <li>Pre-book with Uber/Bolt (cheapest option)</li>
                  <li>Take airport bus 208/252 to city center (4 PLN)</li>
                  <li>Never accept rides from people approaching you inside terminal</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">2. Overpriced Restaurants on Market Square</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-3 text-red-600 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  The Problem
                </h3>
                <p className="text-gray-700 mb-4">
                  Restaurants directly on Krakow Market Square charge 2-3x normal prices. Tourist trap menus, mediocre food.
                </p>
                <h3 className="font-bold text-lg mb-3 text-green-600">Better Options</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Walk 2-3 streets away from Market Square for authentic restaurants</li>
                  <li>Try Kazimierz district for local favorites</li>
                  <li>Ask locals or hotel staff for recommendations</li>
                  <li>Check prices before sitting down</li>
                  <li>Typical good meal should cost 30-50 PLN, not 100+ PLN</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">3. Currency Exchange Scams</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
                <h3 className="font-bold text-lg mb-3">Common Tricks</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>⚠️ <strong>"0% Commission"</strong> signs with terrible exchange rates</li>
                  <li>⚠️ <strong>Kantor offices near tourist spots</strong> with rates 20-30% worse</li>
                  <li>⚠️ <strong>Hotels</strong> offering worst exchange rates</li>
                  <li>⚠️ <strong>ATMs asking "convert to your currency"</strong> - always decline!</li>
                </ul>
                <h3 className="font-bold text-lg mb-3 mt-4 text-green-600">Safe Options</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use ATMs at banks (PKO BP, Millennium Bank)</li>
                  <li>Always choose "local currency" (PLN) when paying</li>
                  <li>Compare exchange rates at multiple kantors</li>
                  <li>Avoid airport exchange offices</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">4. Fake Amber Jewelry</h2>
              <p className="text-gray-700 mb-4">
                Poland is famous for Baltic amber, but many "amber" souvenirs are plastic imitations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-red-600">❌ What to Avoid</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Street vendors with "too good" prices</li>
                    <li>• Perfect, flawless amber (real has imperfections)</li>
                    <li>• Very cheap large pieces</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-green-600">✓ Where to Buy Real Amber</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Certified shops with authenticity certificates</li>
                    <li>• Museums and galleries</li>
                    <li>• Reputable jewelry stores</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">5. Pickpockets in Crowded Areas</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5" />
                  High-Risk Areas
                </h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>⚠️ Krakow Market Square during peak hours</li>
                  <li>⚠️ Crowded trams and buses</li>
                  <li>⚠️ Warsaw Central Station</li>
                  <li>⚠️ Tourist attractions with large crowds</li>
                </ul>
                <h3 className="font-bold text-lg mb-3 text-green-600">Stay Safe</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use anti-theft backpack or money belt</li>
                  <li>Keep valuables in front pockets or inside jacket</li>
                  <li>Be extra alert in crowded transport</li>
                  <li>Don't display expensive jewelry or cameras</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-[#0f4f47] mb-6 mt-12">More Things to Avoid</h2>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-[#0f4f47] pl-4">
                  <h3 className="font-bold text-lg mb-2">6. Not Booking Auschwitz Tickets in Advance</h3>
                  <p className="text-gray-700">Tours sell out weeks ahead. Book online 2-3 months early, especially in summer.</p>
                </div>
                <div className="border-l-4 border-[#0f4f47] pl-4">
                  <h3 className="font-bold text-lg mb-2">7. Visiting Only in Peak Summer</h3>
                  <p className="text-gray-700">July-August is crowded and expensive. Visit May-June or September for better experience.</p>
                </div>
                <div className="border-l-4 border-[#0f4f47] pl-4">
                  <h3 className="font-bold text-lg mb-2">8. Ignoring Restaurant Service Charges</h3>
                  <p className="text-gray-700">Check if service is included. If not, 10% tip is standard. Cash tips preferred.</p>
                </div>
                <div className="border-l-4 border-[#0f4f47] pl-4">
                  <h3 className="font-bold text-lg mb-2">9. Not Trying Polish Food</h3>
                  <p className="text-gray-700">Don't miss pierogi, żurek, bigos! Avoid international chains - try milk bars (bar mleczny) for cheap authentic food.</p>
                </div>
                <div className="border-l-4 border-[#0f4f47] pl-4">
                  <h3 className="font-bold text-lg mb-2">10. Speaking Russian</h3>
                  <p className="text-gray-700">Due to history, Polish people appreciate English more than Russian. Learn basic Polish or use English.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] text-white p-8 rounded-xl text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Travel Smart with Local Experts</h3>
                <p className="mb-6">Book tours with us to avoid all tourist traps and scams</p>
                <button className="bg-white text-[#0f4f47] px-8 py-3 rounded-full font-bold hover:bg-[#4dd4ac] transition-colors">
                  Book Safe Tours
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

export default AvoidMistakes;