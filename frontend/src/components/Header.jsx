import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AGENCY_PORTAL_URL } from '../lib/links';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f4f47]/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/GCT-asset/logo.svg" 
              alt="Green Continent Tours" 
              width="48"
              height="48"
              className="h-12 w-12"
            />
            <img 
              src="/GCT-asset/logoText.svg" 
              alt="Your unique travel partner" 
              width="274"
              height="32"
              className="h-8 hidden sm:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            <Link to="/" className="text-white/90 hover:text-[#4dd4ac] transition-colors text-[13px] font-medium tracking-wide">
              Home
            </Link>
            <Link to="/about" className="text-white/90 hover:text-[#4dd4ac] transition-colors text-[13px] font-medium tracking-wide">
              About Us
            </Link>
            <Link to="/gallery" className="text-white/90 hover:text-[#4dd4ac] transition-colors text-[13px] font-medium tracking-wide">
              Gallery
            </Link>
            <Link to="/travel-guide" className="text-white/90 hover:text-[#4dd4ac] transition-colors text-[13px] font-medium tracking-wide">
              Travel Guide
            </Link>
            <Link to="/services" className="text-white/90 hover:text-[#4dd4ac] transition-colors text-[13px] font-medium tracking-wide">
              Services
            </Link>
            <Link to="/for-travel-agencies" data-testid="nav-for-travel-agencies" className="text-white/90 hover:text-[#4dd4ac] transition-colors text-[13px] font-medium tracking-wide">
              For Travel Agencies
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-[#4dd4ac] transition-colors text-[13px] font-medium tracking-wide">
              Contact Us
            </Link>
            <a href={AGENCY_PORTAL_URL} target="_blank" rel="noopener" data-testid="nav-agency-login" className="ml-2 bg-[#4dd4ac] text-[#0f4f47] px-6 py-2.5 rounded-full text-[13px] font-bold tracking-wide hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
              Agency Login
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
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
            <Link to="/about" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              About Us
            </Link>
            <Link to="/gallery" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Gallery
            </Link>
            <Link to="/travel-guide" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Travel Guide
            </Link>
            <Link to="/services" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Services
            </Link>
            <Link to="/for-travel-agencies" data-testid="mobile-nav-for-travel-agencies" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              For Travel Agencies
            </Link>
            <Link to="/contact" className="text-white hover:text-[#ffd700] transition-colors text-sm font-medium">
              Contact Us
            </Link>
            <a href={AGENCY_PORTAL_URL} target="_blank" rel="noopener" data-testid="mobile-nav-agency-login" className="bg-white text-[#0f4f47] px-6 py-2 rounded-full font-semibold w-fit">
              Agency Login
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;