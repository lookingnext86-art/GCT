import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f4f47]/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://greencontinenttours.com/GCT-asset/logo.svg" 
              alt="Green Continent Tours" 
              className="h-12 w-12"
            />
            <img 
              src="https://greencontinenttours.com/GCT-asset/logoText.svg" 
              alt="Your unique travel partner" 
              className="h-8 hidden sm:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Home
            </Link>
            <Link to="/itineraries" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Itineraries
            </Link>
            <Link to="/gallery" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Gallery
            </Link>
            <Link to="/services" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Contact Us
            </Link>
            <Link to="/about" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              About Us
            </Link>
            <button className="bg-white text-[#0f4f47] px-6 py-2 rounded-full font-semibold hover:bg-[#ffd700] transition-all duration-300">
              Register
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link to="/" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Home
            </Link>
            <Link to="/itineraries" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Itineraries
            </Link>
            <Link to="/gallery" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Gallery
            </Link>
            <Link to="/services" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Contact Us
            </Link>
            <Link to="/about" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              About Us
            </Link>
            <button className="bg-white text-[#0f4f47] px-6 py-2 rounded-full font-semibold w-fit">
              Register
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;