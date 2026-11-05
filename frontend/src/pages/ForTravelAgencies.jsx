import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { FaqList } from '../components/article/ArticleParts';
import {
  Hero, Stats, Portal, WhyPartner, Thoughtful, Handles, WhyPoland, Seasons, Programs, HowWeWork, PartnerContact,
} from '../components/agencies/AgencySections';

const PATH = '/for-travel-agencies';

export const faqs = [
  ['Do you have fixed packages or price lists?', 'No. Every program is tailor-made and quoted on request, usually after the agency shares dates, group size and requirements.'],
  ['Who can use the agency booking portal?', 'The B2B booking portal is for travel agencies only. Registered travel agencies can book hotels online through the portal.'],
  ['Which destinations do you cover?', 'We are based in Kraków and organise group programs across Poland, including Kraków, Zakopane, Warsaw, Wrocław and Gdańsk, and across Central Europe.'],
  ['What can you arrange for our groups?', 'Hotels and group accommodation, coaches and transfers, guides, tickets, school trips, corporate travel and MICE, and full itineraries across Poland and Central Europe.'],
  ['Do you support groups during the trip?', 'Yes. Our Kraków team supports your group 24/7 while it is travelling.'],
];

const Faq = () => (
  <section className="bg-white pb-16 lg:pb-20" data-testid="agencies-faq">
    <div className="container mx-auto px-5 md:px-6 lg:px-8 max-w-4xl">
      <FaqList title="Frequently Asked Questions from Agencies" faqs={faqs} />
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <Link to="/contact" data-testid="agencies-request-program-btn"
          className="inline-flex items-center gap-2 bg-[#0f4f47] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#1a6b5f] transition-colors">
          Request a Tailor-Made Program
        </Link>
      </div>
    </div>
  </section>
);

export default function ForTravelAgencies() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        path={PATH}
        crumb="For Travel Agencies"
        title="Incoming Tour Operator & DMC in Poland for Travel Agencies | Green Continent Tours"
        description="Kraków-based DMC and incoming tour operator since 2015: hotels, coaches, guides, school trips, MICE and tailor-made group programs for travel agencies."
      />
      <Header />
      <main data-testid="for-travel-agencies-page">
        <Hero />
        <Stats />
        <Portal />
        <WhyPartner />
        <Thoughtful />
        <Handles />
        <WhyPoland />
        <Seasons />
        <Programs />
        <HowWeWork />
        <Faq />
        <div className="border-t border-gray-100" />
        <PartnerContact />
      </main>
      <Footer />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
        })}
      </script>
    </div>
  );
}
