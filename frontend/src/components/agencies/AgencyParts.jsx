import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink, MapPin, Award, Users, Languages, Heart, Utensils, Car, Headphones,
  Hotel, Bus, UserCheck, Ticket, GraduationCap, Briefcase, Route, Landmark, Castle, Sparkles,
  Wallet, ShieldCheck, Globe2, Flower2, Sun, Leaf, Snowflake,
} from 'lucide-react';
import { AGENCY_PORTAL_URL } from '../../lib/links';

export const WHATSAPP_URL = 'https://wa.me/48537482798?text=' + encodeURIComponent('Hello, we are a travel agency and would like to discuss a group program in Poland.');
export const p = 'text-[15.5px] md:text-base text-gray-600 leading-[1.8] font-light';
const eyebrow = 'text-[11px] font-semibold tracking-[0.3em] uppercase text-[#1a6b5f] mb-3';

export const Section = ({ id, label, title, intro, tint, children }) => (
  <section id={id} className={`${tint ? 'bg-[#f6faf9]' : 'bg-white'} py-16 lg:py-24 scroll-mt-24`} data-testid={`agencies-${id}`}>
    <div className="container mx-auto px-5 md:px-6 lg:px-8 max-w-6xl">
      <div className="max-w-3xl mb-10 lg:mb-12">
        {label && <p className={eyebrow}>{label}</p>}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f4f47] tracking-tight leading-tight">{title}</h2>
        {intro && <p className={`${p} mt-4`}>{intro}</p>}
      </div>
      {children}
    </div>
  </section>
);

export const IconCards = ({ items, cols = 'md:grid-cols-3' }) => (
  <ul className={`grid sm:grid-cols-2 ${cols} gap-5 lg:gap-6`}>
    {items.map(([Icon, title, text]) => (
      <li key={title} className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-7 shadow-[0_10px_30px_-20px_rgba(15,79,71,0.35)] hover:-translate-y-1 hover:border-[#4dd4ac]/50 transition-[transform,border-color] duration-300">
        <span className="w-11 h-11 rounded-xl bg-[#4dd4ac]/15 text-[#0f4f47] flex items-center justify-center mb-5"><Icon className="w-5 h-5" aria-hidden="true" /></span>
        <h3 className="text-lg font-bold text-[#0f4f47] tracking-tight leading-snug mb-2">{title}</h3>
        {text && <p className="text-[14.5px] text-gray-600 leading-[1.7] font-light">{text}</p>}
      </li>
    ))}
  </ul>
);

export const PortalButton = ({ testId, light }) => (
  <a href={AGENCY_PORTAL_URL} target="_blank" rel="noopener" data-testid={testId}
    className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-colors ${light ? 'border-2 border-white text-white hover:bg-white hover:text-[#0f4f47]' : 'bg-[#4dd4ac] text-[#0f4f47] hover:bg-[#0f4f47] hover:text-white'}`}>
    Agency Login / Register <ExternalLink className="w-4 h-4" aria-hidden="true" />
  </a>
);

export const ProgramButton = ({ testId }) => (
  <Link to="/contact" data-testid={testId}
    className="inline-flex items-center gap-2 bg-[#4dd4ac] text-[#0f4f47] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-colors">
    Request a Tailor-Made Program
  </Link>
);

export const STATS = [['Since 2015', 'Local expertise'], ['120+', 'Groups served'], ['2,400+', 'Travelers'], ['5.0', 'Rated on Google']];

export const WHY_PARTNER = [
  [Award, 'Local Expertise Since 2015', 'Kraków-based specialists with in-depth knowledge of Poland and Europe.'],
  [Users, 'Trusted by Travel Professionals', '120+ groups and 2,400+ travelers served.'],
  [Languages, 'Multilingual Licensed Guides', 'Multilingual licensed guides and professional support throughout your clients’ journey.'],
];

export const THOUGHTFUL = [
  [Heart, 'Your client’s story', 'Share your idea, and we’ll turn it into a program that feels made for them.'],
  [Utensils, 'Halal confirmed', 'Need halal? We confirm it with every restaurant, ahead of time.'],
  [Car, 'Smooth from arrival to farewell', 'We arrange every room, ride and transfer with care, so your guests can simply enjoy.'],
  [Headphones, 'Always here', 'Quick answers, a familiar voice, and one team beside you every step.'],
];

export const HANDLES = [
  [Hotel, 'Hotels and group accommodation', 'Hotel reservations for groups of every size, from city-centre hotels in Kraków and Warsaw to mountain stays in Zakopane.'],
  [Bus, 'Coaches and transfers', 'Airport transfers, coaches for touring days and private transport between cities.'],
  [UserCheck, 'Guides', 'Professional local guides for city tours, museums and memorial sites.'],
  [Ticket, 'Tickets', 'Entrance tickets for sights and museums, plus flight, train and bus tickets when your itinerary needs them.'],
  [GraduationCap, 'School trips', 'Educational programmes for schools and universities, with transport, guides, meals and accommodation arranged by one team.'],
  [Briefcase, 'Corporate travel and MICE', 'Meetings, incentives, conferences and company events in Kraków and across Poland.'],
  [Route, 'Full itineraries', 'Complete multi-day programmes across Poland and Central Europe, built around your clients.'],
];

export const WHY_POLAND = [
  [Landmark, 'Rich European history & UNESCO heritage'],
  [Castle, 'Charming medieval cities & royal castles'],
  [Sparkles, 'Authentic culture & unforgettable experiences'],
  [Wallet, 'Excellent value for a European holiday'],
  [ShieldCheck, 'Safe, welcoming & easy to explore'],
  [Globe2, 'Perfect for multi-country Central Europe tours'],
];

export const SEASONS = [
  [Flower2, 'Spring (Apr–May)', 'Blossoming parks, comfortable city touring.'],
  [Sun, 'Summer (Jun–Aug)', 'Mild weather, mountains, long evenings. Book early.'],
  [Leaf, 'Autumn (Sep–Oct)', 'Golden scenery and quieter sights.'],
  [Snowflake, 'Winter (Nov–Mar)', 'Christmas markets and snow in the Tatras.'],
];

export const PROGRAMS = [
  [MapPin, 'Kraków Essentials', '3 nights · First-time visitors', 'Old Town, Wawel Castle and the Wieliczka Salt Mine.'],
  [Route, 'Poland Discovery', '5 nights · Kraków & Warsaw', 'Two great cities, one story.'],
  [Globe2, 'Central Europe Journey', '8 nights · Warsaw, Kraków & Prague', 'Three cities, three characters, one journey.'],
];

export const STEPS = [
  ['Let us know your plans', 'Dates, group size and wishes.'],
  ['Get your proposal', 'Tailored itineraries and clear pricing.'],
  ['Confirm with ease', 'Simple booking and secure payment options.'],
  ['Travel stress-free', 'All documents ready before arrival.'],
  ['We’re by your side', 'One contact, local support.'],
  ['Grow together', 'Your feedback makes us better.'],
  ['Plans change. We get it.', ''],
  ['Flexible cancellations', 'Full refund whenever possible.'],
];

