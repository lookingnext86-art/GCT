import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import { ServicesDetails } from '../components/ServicesDetails';
import SEO from '../components/SEO';

const SITE = 'https://www.greencontinenttours.com';
const SERVICES = [
  'Private tours in Kraków and across Poland',
  'Private halal and Muslim-friendly tours',
  'Group tours, school trips and educational travel',
  'Corporate travel, MICE and events',
  'Airport transfers, hotel reservations and ticketing',
];

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Travel services by Green Continent Tours',
  itemListElement: SERVICES.map((name, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name,
      areaServed: ['Kraków', 'Poland', 'Central Europe'],
      provider: { '@type': 'TravelAgency', '@id': `${SITE}/#organization`, name: 'Green Continent Tours' },
    },
  })),
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO
        path="/services"
        title="Travel Services in Kraków & Poland | Green Continent Tours"
        description="Private and group tours, halal tours, school trips, MICE, airport transfers and B2B DMC services in Kraków and across Poland from a local tour operator."
      />
      <Header />
      <main className="pt-20">
        <ServicesSection useH1={true} />
        <ServicesDetails />
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(servicesJsonLd)}</script>
    </div>
  );
};

export default Services;
