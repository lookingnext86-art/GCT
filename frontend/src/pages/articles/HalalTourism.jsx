import React from 'react';
import { ExternalLink, Clock, Utensils, Users, Car, Languages, Moon } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import {
  h2, h3, body, TermList, ArticleHero, OverviewBar, FaqList, ContinueReading, TocAside, WhatsAppCta, articleJsonLd,
} from '../../components/article/ArticleParts';

const SITE = 'https://www.greencontinenttours.com';
const PATH = '/travel-guide/halal-tourism';
const TITLE = 'Private Halal & Muslim-Friendly Tours of Krakow';
const DESCRIPTION =
  'Book a private halal tour of Krakow: licensed English-speaking guides, halal meals, prayer breaks, private transport. Custom itineraries for families and groups.';
const WHATSAPP_URL = `https://wa.me/48537482798?text=${encodeURIComponent(
  'Hello, I would like to book a private halal tour of Krakow.'
)}`;
const HERO_IMAGE = '/images/articles/halal-food/halal-food-krakow-restaurant.webp';
const MID_IMAGE = '/images/articles/halal-food/muslim-friendly-dining-krakow.webp';
const DATE = '2026-05-18';
const MODIFIED = '2026-06-25';

const overviewItems = [
  { label: 'Tour Type', value: 'Private Only', icon: Users },
  { label: 'Meals', value: 'Halal Confirmed', icon: Utensils },
  { label: 'Prayer', value: 'Breaks Planned', icon: Moon },
  { label: 'Transport', value: 'Private Vehicle', icon: Car },
  { label: 'Guides', value: 'Licensed, English', icon: Languages },
  { label: 'Duration', value: 'Half Day to 10 Days', icon: Clock },
];

const turkishMiddleEastern = [
  {
    id: 'ottamam',
    label: 'Restaurant 1',
    title: 'OTTAMAM #toniejestkebab',
    body:
      'A premium Turkish street food restaurant known for modern kebabs, quality meat, and stylish interiors near Krakow Old Town.',
    website: 'https://ottamam.pl',
    websiteLabel: 'ottamam.pl',
  },
  {
    id: 'abu-dhabi-oriental',
    label: 'Restaurant 2',
    title: 'Restauracja Abu Dhabi Oriental',
    body:
      'Popular for Arabic grills, hummus, shawarma, and authentic Middle Eastern dishes in central Krakow.',
    website: 'https://www.facebook.com/abudhabi.krakow',
    websiteLabel: 'facebook.com/abudhabi.krakow',
  },
  {
    id: 'jamra-syrian',
    label: 'Restaurant 3',
    title: 'Jamra Syrian Food',
    body:
      'One of the favourite Syrian restaurants in Krakow, especially known for shawarma and late-night halal meals.',
    website: 'https://www.facebook.com/jamrakrakow',
    websiteLabel: 'facebook.com/jamrakrakow',
  },
];

const pakistaniIndian = [
  {
    id: 'zayka',
    label: 'Restaurant 4',
    title: 'Zayka Indian Restaurant',
    body:
      'One of Krakow’s best-known halal Indian restaurants, serving authentic biryani, curries, naan, and grilled dishes.',
    website: 'https://www.zayka.pl',
    websiteLabel: 'zayka.pl',
  },
  {
    id: 'habibi',
    label: 'Restaurant 5',
    title: 'Habibi Restaurant',
    body:
      'Pakistani and Indian halal restaurant popular among Muslim travelers and international students.',
    website: 'https://www.facebook.com/habibikrakow',
    websiteLabel: 'facebook.com/habibikrakow',
  },
  {
    id: 'masala-madness',
    label: 'Restaurant 6',
    title: 'Masala Madness — Indian Street Food',
    body:
      'Modern halal Indian street food with a more casual and trendy atmosphere.',
    website: 'https://masalamadness.pl',
    websiteLabel: 'masalamadness.pl',
  },
  {
    id: 'tandoori-flame',
    label: 'Restaurant 7',
    title: 'Tandoori Flame',
    body:
      'Family-friendly halal Indian restaurant with classic curries and tandoori dishes.',
    website: 'https://tandooriflame.pl',
    websiteLabel: 'tandooriflame.pl',
  },
  {
    id: 'bharat-flame',
    label: 'Restaurant 8',
    title: 'Bharat Flame Indian Restaurant',
    body:
      'Elegant halal Indian restaurant near Wawel Castle, ideal for family dinners and tourists staying in Old Town.',
    website: 'https://bharatflame.pl',
    websiteLabel: 'bharatflame.pl',
  },
];

const meatShops = [
  {
    id: 'm-eats',
    label: 'Meat Shop 1',
    title: 'M-Eats Halal Meat Shop',
    body:
      'One of the most popular halal meat suppliers in Krakow for fresh halal chicken, beef, and grocery products.',
    website: 'https://www.facebook.com/meatskrakow',
    websiteLabel: 'facebook.com/meatskrakow',
  },
  {
    id: 'ofarm-kleparz',
    label: 'Meat Shop 2',
    title: "O'Farm Meat — Stary Kleparz",
    body:
      'Located inside Krakow’s historic Stary Kleparz market, offering halal meat and premium fresh products.',
    website: 'https://ofarm.pl',
    websiteLabel: 'ofarm.pl',
  },
  {
    id: 'ofarm-imbramowski',
    label: 'Meat Shop 3',
    title: "O'Farm Meat — Plac Imbramowski",
    body:
      'Another trusted halal meat location outside the city center with fresh meat and grocery options.',
    website: 'https://ofarm.pl',
    websiteLabel: 'ofarm.pl',
  },
];

const tours = [
  ['Krakow Old Town and Kazimierz', 'Half or full day', 'Main Square, St. Mary’s Basilica, Wawel Hill, Kazimierz district', 'Halal lunch confirmed in advance, prayer break planned'],
  ['Auschwitz-Birkenau Memorial', 'Full day', 'Guided visit with transport from your hotel', 'Halal meal arranged before or after the visit, prayer time agreed with your guide'],
  ['Wieliczka Salt Mine', 'Half day', 'Underground chambers and chapels of the UNESCO-listed mine', 'Halal meal arranged nearby, easy to combine with a city tour'],
  ['Zakopane and the Tatra Mountains', 'Full day', 'Mountain scenery, Krupówki Street, countryside views', 'Halal meal planned in advance, flexible stops for prayer'],
  ['Multi-day Poland tour', '3 to 10 days', 'Krakow, Warsaw, Gdańsk, Wrocław and more', 'Halal meals and Muslim-friendly hotels planned for the whole route'],
  ['Central Europe extension', 'Custom', 'Vienna, Prague, Budapest', 'Same halal planning carried across borders'],
];

const whyPrivate = [
  ['Halal is confirmed before you arrive', 'we check each meal stop in advance, so you are not relying on online listings that may be out of date.'],
  ['Prayer fits the day', 'we plan stops around prayer times and agree quiet breaks with you.'],
  ['One team handles everything', 'guide, vehicle, tickets, hotel and meals come from a single Krakow-based agency.'],
  ['Your group, your pace', 'private tours suit couples, families with children, elderly parents and groups of friends.'],
];

const included = [
  ['Licensed guide', 'speaking English, Polish, Spanish or German.'],
  ['Private vehicle', 'from your hotel or the airport: car, minibus or coach depending on group size.'],
  ['Halal meals', 'arranged in advance for every meal on the itinerary.'],
  ['Prayer breaks', 'built into the schedule, with times agreed before the tour starts.'],
  ['Entrance tickets and reservations', 'for sites such as Wawel, Auschwitz-Birkenau and Wieliczka.'],
  ['Hotel booking', 'in Muslim-friendly accommodation on request.'],
  ['A flexible plan', 'that you can change before and during the tour.'],
];

const faqs = [
  ['Can I book a private halal tour of Krakow for just my family?', 'Yes. All our tours are private, so it is only your family or group with your own guide and vehicle.'],
  ['Is halal food guaranteed on the tour?', 'We arrange halal meals in advance and confirm them before the tour. Tell us your requirements when you book, and we will plan around them.'],
  ['Do you provide an Arabic-speaking guide?', 'Our private tours are guided in English. Our office team speaks Arabic, so we can plan and confirm everything with you in Arabic.'],
  ['Can we pray during the tour?', 'Yes. We agree prayer times with you at the start and plan stops around them.'],
  ['Can you arrange a halal tour of Auschwitz-Birkenau or Wieliczka Salt Mine?', 'Yes. We handle tickets, transport and halal meals for both, and they combine easily with a Krakow city tour.'],
  ['Can you plan a longer trip beyond Krakow?', 'Yes. We organise multi-day tours across Poland and into Vienna, Prague and Budapest, with the same halal planning throughout.'],
  ['How far in advance should I book?', 'As early as you can, especially for summer and holiday periods, so that guides, vehicles and meals are confirmed.'],
];

const toc = [
  { id: 'your-private-halal-tour', title: 'Your private halal tour' },
  { id: 'halal-tours-from-krakow', title: 'Halal tours we offer' },
  { id: 'whats-included', title: 'What is included' },
  { id: 'halal-food-and-prayer', title: 'Halal food and prayer' },
  { id: 'halal-restaurants', title: 'Halal restaurants we use' },
  { id: 'faq', title: 'FAQ' },
];

const Place = ({ item }) => (
  <li id={item.id} className="relative pl-7" data-testid={`halal-${item.id}`}>
    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#4dd4ac] ring-4 ring-white shadow-sm" aria-hidden="true" />
    <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-1.5">{item.label}</p>
    <h5 className="text-lg md:text-xl font-bold text-[#0f4f47] tracking-tight leading-snug mb-2">{item.title}</h5>
    <p className="text-[15px] text-gray-600 leading-[1.8] font-light mb-3">{item.body}</p>
    <a href={item.website} target="_blank" rel="noopener noreferrer nofollow" data-testid={`halal-${item.id}-website`}
      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0f4f47] hover:text-[#1a6b5f] transition-colors">
      Visit website <span className="text-gray-400 font-normal">· {item.websiteLabel}</span>
      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
    </a>
  </li>
);

const PlaceGroup = ({ title, items }) => (
  <div className="mt-10">
    <h4 className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#0f4f47] mb-6">{title}</h4>
    <ol className="relative border-l-2 border-[#4dd4ac]/30 ml-3 space-y-9">
      {items.map((item) => <Place key={item.id} item={item} />)}
    </ol>
  </div>
);

const ToursTable = () => (
  <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(15,79,71,0.08)]">
    <table className="w-full min-w-[640px] text-left text-[14px]" data-testid="halal-tours-table">
      <thead className="bg-[#0f4f47] text-white">
        <tr>{['Tour', 'Duration', 'What you see', 'Halal and prayer arrangements'].map((t) => <th key={t} scope="col" className="px-4 py-3.5 text-[11px] font-semibold tracking-[0.15em] uppercase">{t}</th>)}</tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {tours.map(([tour, dur, see, halal], i) => (
          <tr key={tour} className="bg-white even:bg-[#f4f7f6]">
            <th scope="row" className="px-4 py-4 font-bold text-[#0f4f47] align-top"><span className="text-[#4dd4ac] mr-1.5">{i + 1}.</span>{tour}</th>
            <td className="px-4 py-4 text-gray-600 font-light align-top whitespace-nowrap">{dur}</td>
            <td className="px-4 py-4 text-gray-600 font-light align-top">{see}</td>
            <td className="px-4 py-4 text-gray-600 font-light align-top">{halal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Intro = () => (
  <section id="your-private-halal-tour" className="scroll-mt-28">
    <h2 className={h2}>Your private halal tour of Krakow, planned around your faith and your family</h2>
    <div className={body}>
      <p className="text-lg md:text-xl text-[#0f4f47] font-light leading-relaxed">
        Green Continent Tours designs private halal and Muslim-friendly tours of Krakow, with licensed English-speaking guides, halal meals, prayer breaks and private transport arranged for you.
      </p>
      <p>You do not have to hunt for halal restaurants, check opening hours or worry about where to pray. We build the whole day around your needs.</p>
      <p>Krakow is one of Poland’s most welcoming cities for visitors, and a private tour is the most comfortable way to see it. Your guide sets the pace, your meals are confirmed halal in advance, and your prayer times shape the schedule instead of interrupting it.</p>
    </div>
    <h3 className={`${h3} mt-10`}>Why book a private halal tour instead of searching for halal food yourself?</h3>
    <TermList items={whyPrivate} />
  </section>
);

const Offer = () => (
  <>
    <section id="halal-tours-from-krakow" className="mt-16 lg:mt-20 scroll-mt-28">
      <h2 className={h2}>Private halal tours we offer from Krakow</h2>
      <ToursTable />
      <p className="mt-5 text-[15.5px] text-gray-600 leading-[1.85] font-light">We will adjust any tour for families with young children, elderly guests or visitors with limited mobility.</p>
    </section>
    <section id="whats-included" className="mt-16 lg:mt-20 scroll-mt-28">
      <h2 className={h2}>What is included in a Muslim-friendly private tour</h2>
      <TermList items={included} />
    </section>
  </>
);

const FoodAndPrayer = ({ groups }) => (
  <section id="halal-food-and-prayer" className="mt-16 lg:mt-20 scroll-mt-28">
    <h2 className={h2}>Halal food and prayer on your Krakow tour</h2>
    <div className={body}>
      <p>Halal dining is part of every private tour we run, not a separate search you have to do yourself. Before you arrive, tell us your preferences: halal only, vegetarian or seafood options, allergies, and any dietary needs for children. We then choose meal stops that fit your route, so you do not lose time travelling across the city for lunch.</p>
    </div>
    <figure className="my-10 rounded-2xl overflow-hidden">
      <img src={MID_IMAGE} alt="Muslim-friendly halal dining in Krakow arranged on a private halal tour by Green Continent Tours" width="1536" height="1024" loading="lazy" decoding="async" className="w-full h-[300px] md:h-[420px] object-cover" />
    </figure>
    <div id="halal-restaurants" className="scroll-mt-28">
      <h3 className={h3}>Halal restaurants we use on our tours</h3>
      {groups.map(([title, items]) => <PlaceGroup key={title} title={title} items={items} />)}
    </div>
    <p className="mt-10 text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">For prayer, your guide will agree the timing with you at the start of the day and plan stops accordingly. We can adjust the order of sights so that prayer times fall at natural breaks, and we can plan indoor stops in colder months.</p>
  </section>
);

const HalalTourism = () => (
  <div className="min-h-screen bg-white">
    <SEO path={PATH} image={`${SITE}${HERO_IMAGE}`} title="Private Halal Tours of Krakow | Green Continent Tours" description={DESCRIPTION} />
    <Header />
    <main>
      <article>
        <ArticleHero
          image={HERO_IMAGE}
          alt="Private halal and Muslim-friendly tour of Krakow with halal dining arranged by Green Continent Tours"
          imageTitle="Private Halal Tours of Krakow"
          width="2560"
          height="1708"
          objectPosition="center 50%"
          category="Krakow"
          title={TITLE}
          subtitle="Licensed English-speaking guides, confirmed halal meals, prayer breaks and private transport — a private halal tour of Krakow built around your family."
          dateISO={MODIFIED}
          dateLabel="Updated June 25, 2026"
          readTime="7 min read"
        />
        <OverviewBar items={overviewItems} />
        <section className="bg-white py-16 lg:py-20" aria-label="Article content">
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_240px] gap-10 lg:gap-16 max-w-6xl mx-auto">
              <div className="max-w-3xl min-w-0">
                <Intro />
                <Offer />
                <FoodAndPrayer groups={[
                  ['Turkish & Middle Eastern', turkishMiddleEastern],
                  ['Pakistani & Indian', pakistaniIndian],
                  ['Halal meat shops', meatShops],
                ]} />
                <FaqList title="Frequently asked questions" faqs={faqs} />
                <ContinueReading links={[
                  ['/travel-guide/3-days-in-krakow-itinerary', '3 days in Kraków: the perfect itinerary'],
                  ['/travel-guide/avoid-mistakes', 'Tourist mistakes & scams to avoid in Poland'],
                  ['/services', 'Explore our private Poland tours'],
                  ['/contact', 'Contact our Krakow team'],
                ]} />
              </div>
              <TocAside items={toc} />
            </div>
          </div>
        </section>
      </article>
      <WhatsAppCta url={WHATSAPP_URL} />
    </main>
    <Footer />
    <script type="application/ld+json">
      {JSON.stringify([
        ...articleJsonLd({ title: TITLE, description: DESCRIPTION, image: `${SITE}${HERO_IMAGE}`, date: DATE, url: `${SITE}${PATH}`, faqs }).map((d) => (d['@type'] === 'Article' ? { ...d, dateModified: MODIFIED, keywords: 'private halal tour Krakow, Muslim-friendly tour Krakow, halal tour Poland, halal Auschwitz tour, halal Wieliczka tour' } : d)),
      ])}
    </script>
  </div>
);

export default HalalTourism;
