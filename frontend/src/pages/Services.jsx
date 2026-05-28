import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Single unified Hero + Services section (no duplicate H1) */}
        <ServicesSection useH1={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
