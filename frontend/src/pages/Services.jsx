import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      'Travel Services in Poland & Europe | Group, Family, School & Corporate Travel — Green Continent Tours';
    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
      return el;
    };
    setMeta(
      'description',
      'Premium journeys from Krakow: private group programs, airport transfers, school trips, MICE & corporate events, flight/train/bus ticketing, hotel reservations, and custom itineraries across Poland and Europe.'
    );
    setMeta(
      'og:title',
      'Travel Services in Poland & Europe — Green Continent Tours',
      'property'
    );
    setMeta(
      'og:description',
      'Group, family, school, and corporate travel services across Poland and Europe — designed and operated by a Krakow-based team.',
      'property'
    );
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ServicesSection useH1={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
