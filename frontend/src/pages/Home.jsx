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
        title="Kraków Tour Operator & Private Poland Tours | Green Continent"
        description="Kraków-based tour operator and DMC: private tours of Kraków and Poland, halal tours, group and family trips, airport transfers and custom itineraries."
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
