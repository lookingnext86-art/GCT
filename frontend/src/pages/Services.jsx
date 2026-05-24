import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Services Section - No duplicate hero needed */}
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;