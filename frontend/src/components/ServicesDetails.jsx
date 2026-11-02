import React from 'react';
import { Link } from 'react-router-dom';

const link = 'text-[#0f4f47] font-semibold underline decoration-[#4dd4ac] underline-offset-4';

const BLOCKS = [
  {
    id: 'private-tours',
    title: 'Private tours in Kraków and across Poland',
    body: (
      <>
        Private, guided tours for couples, families and groups, planned around your dates and pace: Kraków Old Town,
        Wawel and Kazimierz, Auschwitz-Birkenau, the Wieliczka Salt Mine, Zakopane, Warsaw, Wrocław and Gdańsk. See a
        sample plan in our <Link to="/travel-guide/3-days-in-krakow-itinerary" className={link}>3 days in Kraków itinerary</Link>.
      </>
    ),
  },
  {
    id: 'halal-tours',
    title: 'Private halal and Muslim-friendly tours',
    body: (
      <>
        Halal meals, prayer breaks and family-friendly hotels built into every day of the trip. Read more about our{' '}
        <Link to="/travel-guide/halal-tourism" className={link}>private halal tours of Kraków</Link>.
      </>
    ),
  },
  {
    id: 'groups-schools',
    title: 'Group tours, school trips and educational travel',
    body: 'Complete programmes for private groups, schools and universities: transport, guides, entrance tickets, meals and accommodation arranged by one local team.',
  },
  {
    id: 'b2b-dmc',
    title: 'B2B services for tour operators and travel agencies',
    body: 'As a Kraków-based destination management company (DMC), we act as the local ground partner for agencies and tour operators: hotels, coaches, guides, tickets and full itineraries across Poland and Central Europe.',
  },
  {
    id: 'mice',
    title: 'Corporate travel, MICE and events',
    body: 'Meetings, incentives, conferences and company events in Kraków and Poland, with venue sourcing, group logistics and airport transfers.',
  },
  {
    id: 'transfers-bookings',
    title: 'Airport transfers, hotels and tickets',
    body: 'Private airport transfers in Kraków and across Poland, hotel reservations and flight, train and bus tickets for families, groups and business travellers.',
  },
];

export const ServicesDetails = () => (
  <section className="bg-white pb-20 lg:pb-24" aria-labelledby="services-details-heading" data-testid="services-details">
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
      <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">How we help</p>
      <h2 id="services-details-heading" className="text-3xl md:text-4xl font-bold text-[#0f4f47] tracking-tight mb-12">
        What our Kraków team can organise for you
      </h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {BLOCKS.map(({ id, title, body }) => (
          <div key={id} data-testid={`services-detail-${id}`}>
            <h3 className="text-xl md:text-[22px] font-bold text-[#0f4f47] tracking-tight leading-snug mb-3">{title}</h3>
            <p className="text-[15.5px] text-gray-600 leading-[1.8] font-light">{body}</p>
          </div>
        ))}
      </div>
      <p className="mt-14 text-[15.5px] text-gray-600 font-light">
        Tell us your dates and group size on our <Link to="/contact" className={link} data-testid="services-contact-link">contact page</Link> and
        we will send a custom itinerary and price.
      </p>
    </div>
  </section>
);
