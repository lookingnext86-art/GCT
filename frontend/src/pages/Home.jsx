import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import WhyUsSection from '../components/WhyUsSection';
import ReviewsSection from '../components/ReviewsSection';
import OurGoalsSection from '../components/OurGoalsSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <WhyUsSection />
        <OurGoalsSection />
        <ServicesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
