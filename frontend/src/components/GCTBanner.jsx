import React from 'react';
import { Plane, MapPin, Phone } from 'lucide-react';

const GCTBanner = () => {
  return (
    <a 
      href="https://www.gct.travel/index.php" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative w-full h-72 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 animate-pulse-slow">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-dashed border-white rounded-full"></div>
        </div>

        {/* Plane Icon Animation */}
        <div className="absolute top-8 left-1/4 animate-bounce">
          <Plane className="w-12 h-12 text-white transform rotate-45" />
        </div>

        {/* Dotted Flight Path */}
        <svg className="absolute top-12 left-1/3 w-64 h-24 opacity-30" viewBox="0 0 200 50">
          <path d="M 0 25 Q 50 0, 100 25 T 200 25" stroke="white" strokeWidth="2" strokeDasharray="5,5" fill="none"/>
        </svg>

        {/* Main Content Container */}
        <div className="relative h-full flex items-center justify-between px-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 z-10">
            <div className="mb-4">
              <p className="text-6xl font-extrabold text-white drop-shadow-lg mb-2 leading-none">
                GCT
              </p>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span className="text-lg font-semibold">Green Continent Tours</span>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 inline-block mb-4">
              <p className="text-3xl font-bold text-white drop-shadow-md">
                BOOKING MADE SIMPLE
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+48 537 482 798</span>
              </div>
              <div className="bg-[#0f4f47] px-6 py-2 rounded-full font-bold hover:bg-[#1a6b5f] transition-colors">
                Book Now →
              </div>
            </div>
          </div>

          {/* Right Side - Decorative Element */}
          <div className="flex-shrink-0 relative">
            {/* Large Luggage Icon */}
            <div className="relative">
              <svg className="w-48 h-48 text-white opacity-20 group-hover:opacity-30 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/>
                <circle cx="9" cy="12" r="1"/>
                <circle cx="9" cy="15" r="1"/>
                <circle cx="15" cy="12" r="1"/>
                <circle cx="15" cy="15" r="1"/>
              </svg>
              
              {/* Passport/Ticket Icon */}
              <div className="absolute -top-6 -right-6 bg-white/30 backdrop-blur-sm rounded-lg p-3 transform rotate-12 group-hover:rotate-6 transition-transform">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                  <circle cx="10" cy="14" r="2"/>
                  <path d="M14 14h4v2h-4z"/>
                  <path d="M14 10h4v2h-4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" className="w-full h-12" preserveAspectRatio="none">
            <path d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z" fill="rgba(255,255,255,0.1)"/>
          </svg>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
    </a>
  );
};

export default GCTBanner;
