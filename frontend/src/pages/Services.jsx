import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive travel services for exploring Krakow, Poland, and Europe. Your complete tour operator solution.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;