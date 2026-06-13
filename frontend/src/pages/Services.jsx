import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO
        path="/services"
        title="Travel Services in Poland & Europe – Green Continent Tours Krakow"
        description="Private group tours, airport transfers, school trips, MICE & corporate travel, hotel reservations and custom itineraries across Poland and Europe."
      />
      <Header />
      <main className="pt-20">
        <ServicesSection useH1={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
