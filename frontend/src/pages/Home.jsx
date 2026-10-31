import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import WhyUsSection from '../components/WhyUsSection';
import OurGoalsSection from '../components/OurGoalsSection';
import ServicesSection from '../components/ServicesSection';
import ReviewsSection from '../components/ReviewsSection';
import TrustedPartners from '../components/TrustedPartners';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO
        path="/"
        title="Krakow Travel Agency & Tour Operator | Green Continent Tours"
        description="Krakow-based travel agency and tour operator offering private tours, family trips, group travel, airport transfers, and custom Poland & Europe itineraries."
      />
      <Header />
      <main>
        <HeroSlider />
        <WhyUsSection />
        <OurGoalsSection />
        <ServicesSection />
        <ReviewsSection />
        <TrustedPartners />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
