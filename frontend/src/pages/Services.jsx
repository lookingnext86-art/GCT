import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section — Single H1 for this page */}
        <section
          className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] py-20 text-white"
          aria-labelledby="services-hero-heading"
        >
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1
              id="services-hero-heading"
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Travel Services in Krakow — Private, Group &amp; Custom Poland Tours
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              A premium Krakow-based travel agency offering airport transfers, guided city tours,
              family travel, MICE services, and tailor-made itineraries across Poland and Europe.
            </p>
          </div>
        </section>

        {/* Services Section (uses H2 for its title) */}
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
