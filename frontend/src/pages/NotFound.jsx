import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { RelatedGuides } from '../components/article/ArticleParts';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <SEO noindex path="/404" title="Page Not Found | Green Continent Tours" description="The page you are looking for does not exist. Explore private tours in Kraków and Poland with Green Continent Tours." />
      <Header />
      <main className="pt-40 pb-10 container mx-auto px-6 lg:px-8 max-w-3xl" data-testid="not-found-page">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">Error 404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f4f47] tracking-tight mb-5">Page not found</h1>
        <p className="text-gray-600 font-light leading-relaxed mb-8">
          This page may have moved or no longer exists. Start from our homepage, browse our travel services, or read our Poland travel guides.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/" data-testid="not-found-home-link" className="bg-[#0f4f47] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1a6b5f] transition-colors">Go to homepage</Link>
          <Link to="/services" data-testid="not-found-services-link" className="border-2 border-[#0f4f47] text-[#0f4f47] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0f4f47] hover:text-white transition-colors">Our services</Link>
        </div>
      </main>
      <RelatedGuides />
      <Footer />
    </div>
  );
}
