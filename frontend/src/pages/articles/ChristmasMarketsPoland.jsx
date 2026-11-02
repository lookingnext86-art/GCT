import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Ticket, Users, Home, Coffee, Phone, Mail, Building2 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import {
  h2, h3, body, TermList, Callout, ArticleHero, OverviewBar, FaqList, ContinueReading, TocAside, WhatsAppCta, articleJsonLd,
} from '../../components/article/ArticleParts';

const SLUG = 'christmas-markets-poland';
const SITE = 'https://www.greencontinenttours.com';
const TITLE = 'Christmas Markets in Poland 2026 — Kraków, Wrocław, Gdańsk & Warsaw Guide';
const DESCRIPTION =
  'Plan your Poland Christmas market trip: 2026 dates, what to eat, itineraries and winter day trips from Kraków, with private tours by Green Continent Tours.';
const HERO_IMAGE = `/images/articles/${SLUG}/christmas-market-poland-festive-stall.webp`;
const DATE = '2026-06-24';
const WHATSAPP_URL = `https://wa.me/48537482798?text=${encodeURIComponent(
  'Hello, I would like to plan a Christmas market trip to Poland.'
)}`;

const overview = [
  { label: 'Season', value: 'Late Nov – Early Jan', icon: CalendarDays },
  { label: 'Cities', value: 'Kraków, Wrocław, Gdańsk, Warsaw', icon: MapPin },
  { label: 'Entry', value: 'Free', icon: Ticket },
  { label: 'Ideal For', value: 'Families & Groups', icon: Users },
  { label: 'Best Base', value: 'Kraków', icon: Home },
  { label: 'Must-Try', value: 'Grzaniec & Oscypek', icon: Coffee },
];

const glance = [
  ['Kraków', 'Main Market Square (Rynek Główny)', 'Opens 27 November 2026, closing early January 2027'],
  ['Wrocław', 'Market Square and Plac Solny', '20 November 2026 to early January 2027'],
  ['Gdańsk', 'Targ Węglowy (Coal Market)', '20 November to 23 December 2026'],
  ['Warsaw', 'Old Town and Plac Centralny', 'About 20 November 2026 to early January 2027'],
];

const cities = [
  {
    id: 'krakow',
    title: '1. Kraków — The Classic Polish Christmas',
    paras: [
      'Kraków is the first stop for most visitors, and for good reason. The market fills Rynek Główny, one of the largest medieval squares in Europe, with the Cloth Hall, St. Mary’s Basilica and its famous trumpet call as the backdrop. Entry is free and the stalls stay busy well into the evening.',
    ],
    groups: [
      ['What makes it special', [
        ['Handmade crafts', 'ornaments, wooden toys, candles, woollen gloves and local jewellery.'],
        ['Szopki', 'Kraków’s unique Nativity cribs, inspired by the city’s architecture and listed by UNESCO as intangible heritage. The annual competition takes place on the first Thursday of December, and the winning cribs are later displayed at the Kraków Museum.'],
        ['Live music and lights', 'carol concerts, choirs and a festive programme throughout the season.'],
      ]],
      ['What to eat and drink', [
        ['Grzaniec', 'hot mulled wine — or try hot mead.'],
        ['Oscypek', 'smoked mountain sheep’s cheese, grilled and served with cranberry sauce.'],
        ['Pierogi, bigos and grilled sausages', 'the hearty classics of Polish winter food.'],
        ['Obwarzanek', 'Kraków’s traditional ring-shaped bread.'],
        ['Piernik and makowiec', 'gingerbread and poppy seed roll, the sweet taste of a Polish Christmas.'],
      ]],
    ],
    tip: 'The square is calmest on weekday mornings and early afternoons. Weekend evenings in December are very crowded, so plan your visit around them.',
  },
  {
    id: 'wroclaw',
    title: '2. Wrocław — The Most Colourful Market',
    paras: [
      'Many travellers say Wrocław has the prettiest setting of all. The market spreads across the Rynek, Plac Solny and the surrounding streets, framed by pastel townhouses. It is usually a little calmer and more relaxed than Kraków — a great choice for families.',
    ],
    groups: [
      ['Don’t miss', [
        ['The ceramic boot-shaped mug', 'redesigned every year, for your hot chocolate or mulled wine.'],
        ['Wrocław’s bronze gnomes (krasnale)', 'hidden all around the Old Town — children love hunting for them.'],
        ['The ice rink and festive stage', 'skating, concerts and a lively seasonal programme.'],
      ]],
    ],
    after: 'Wrocław is also one of the longest-running markets in Poland, so it is a good option if you are travelling in early January.',
  },
  {
    id: 'gdansk',
    title: '3. Gdańsk — Baltic Charm',
    paras: [
      'Gdańsk offers something different: Hanseatic merchant houses, a Baltic breeze and a market on Targ Węglowy, right next to the Old Town. Look for amber jewellery — one of the city’s most famous local products — along with hand-carved wooden gifts and warming regional food.',
      'Because the market closes on 23 December, it suits early-season trips. Combine it with a stroll along Mariacka Street and the Long Market and, if you have time, a visit to Sopot and Gdynia on the coast.',
    ],
  },
  {
    id: 'warsaw',
    title: '4. Warsaw — Capital Energy',
    paras: [
      'Warsaw mixes a rebuilt, UNESCO-listed Old Town with modern city life. The Old Town market, the lights around the Royal Castle and the larger market beneath the Palace of Culture and Science make it the most urban of the four. With extra time, don’t miss the winter light displays at Wilanów Palace, which usually run through the holiday season.',
    ],
  },
];

const dayTrips = [
  ['Wieliczka Salt Mine', 'a UNESCO site deep underground, so the weather doesn’t matter — one of the best winter activities in Poland.'],
  ['Auschwitz-Birkenau Memorial and Museum', 'open all year, but visits must be booked in advance; dress very warmly for the outdoor sections.'],
  ['Zakopane and the Tatra Mountains', 'wooden mountain architecture, snowy views and regional food. Allow a full day.'],
  ['Ojców National Park', 'a short drive from Kraków for a quiet, snowy walk among limestone cliffs.'],
];

const tips = [
  ['Weather', 'expect temperatures around or below freezing. Pack thermal layers, waterproof boots, gloves and a hat — the squares are cold even when the sun is out.'],
  ['Money', 'many stalls accept cards, but carrying some Polish złoty in cash is useful for small purchases.'],
  ['Booking', 'December weekends sell out early, especially hotels near the Old Town. Book accommodation and group transport well in advance.'],
  ['Getting around', 'Poland’s trains are fast and comfortable — Kraków to Warsaw takes roughly 2.5 hours. Private transfers and minibuses are the easiest option for families and groups with luggage.'],
];

const faqs = [
  ['When is the best time to visit the Christmas markets in Poland?', 'The end of November and the first half of December offer the best balance: all the markets are open and the crowds are smaller than in the days just before Christmas.'],
  ['Is Kraków or Wrocław better for Christmas?', 'Kraków has more grandeur, history and day-trip options. Wrocław feels more relaxed, colourful and budget-friendly. Many travellers do both.'],
  ['Are the markets open on Christmas Eve and Christmas Day?', 'Most markets close on or before 24 December, although Kraków and Wrocław may continue in a reduced form. Many shops, restaurants and attractions are closed from 24 to 26 December, so plan these days carefully.'],
  ['Is entry to the markets free?', 'Yes. Entry to the main markets is free — you only pay for food, drinks and purchases.'],
  ['Can Green Continent Tours organise a Christmas market trip for my group?', 'Yes. We arrange private transport, licensed multilingual guides, hotels, tickets and complete itineraries for families, schools and groups, in English, Polish, Arabic, Spanish and German.'],
];

const toc = [
  { id: 'at-a-glance', title: 'Markets at a glance' },
  ...cities.map((c) => ({ id: c.id, title: c.title.replace(/^\d\. /, '') })),
  { id: 'day-trips', title: 'Winter day trips' },
  { id: 'itineraries', title: 'Sample itineraries' },
  { id: 'practical-tips', title: 'Winter travel tips' },
  { id: 'faq', title: 'FAQ' },
  { id: 'plan-your-trip', title: 'Plan your trip' },
];

const P = ({ children }) => <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">{children}</p>;
const inlineLink = 'text-[#0f4f47] font-semibold underline decoration-[#4dd4ac] underline-offset-4';

const Intro = () => (
  <>
    <div className={body}>
      <p className="text-lg md:text-xl text-[#0f4f47] font-light leading-relaxed">
        When the first snow settles on the rooftops of Poland’s old towns and the squares fill with lights, wooden stalls and the smell of mulled wine, the country becomes one of Europe’s most atmospheric winter destinations.
      </p>
      <p>Poland’s Christmas markets are warm, generous and still wonderfully authentic, with handmade crafts, regional food and traditions that go back centuries. This guide covers the 2026 season: where to go, what to eat, how to plan your days and how to combine the markets with the best winter day trips from Kraków.</p>
    </div>
    <Callout label="Good to know">Dates are announced by each city every autumn and can change slightly. The dates below were the latest published at the time of writing — please confirm them before you book.</Callout>
    <section id="at-a-glance" className="mt-14 scroll-mt-28">
      <h2 className={h2}>Poland’s Christmas Markets 2026 at a Glance</h2>
      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(15,79,71,0.08)]">
        <table className="w-full min-w-[520px] text-left text-[14px]" data-testid="markets-table">
          <thead className="bg-[#0f4f47] text-white">
            <tr>{['City', 'Main location', 'Expected dates 2026'].map((t) => <th key={t} scope="col" className="px-4 md:px-5 py-3.5 text-[11px] font-semibold tracking-[0.18em] uppercase">{t}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {glance.map(([city, loc, dates]) => (
              <tr key={city} className="bg-white even:bg-[#f4f7f6]">
                <th scope="row" className="px-4 md:px-5 py-4 font-bold text-[#0f4f47] align-top">{city}</th>
                <td className="px-4 md:px-5 py-4 text-gray-600 font-light align-top">{loc}</td>
                <td className="px-4 md:px-5 py-4 text-gray-600 font-light align-top">{dates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </>
);

const CitySection = ({ city }) => (
  <section id={city.id} className="mt-16 lg:mt-20 scroll-mt-28" data-testid={`city-${city.id}`}>
    <h2 className={h2}>{city.title}</h2>
    <div className={body}>{city.paras.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}</div>
    {city.groups?.map(([title, items]) => (
      <div key={title} className="mt-8">
        <h3 className={h3}>{title}</h3>
        <TermList items={items} />
      </div>
    ))}
    {city.after && <P>{city.after}</P>}
    {city.tip && <Callout>{city.tip}</Callout>}
  </section>
);

const Planning = () => (
  <>
    <section id="day-trips" className="mt-16 lg:mt-20 scroll-mt-28">
      <h2 className={h2}>Winter Day Trips from Kraków</h2>
      <P>Kraków is the best base for combining the markets with other highlights — and winter is a quieter time to visit the region’s most important sites.</P>
      <TermList items={dayTrips} />
    </section>
    <section id="itineraries" className="mt-16 lg:mt-20 scroll-mt-28">
      <h2 className={h2}>Sample Christmas Itineraries</h2>
      <div className="space-y-10">
        <div>
          <h3 className={h3}>3 days in Kraków</h3>
          <TermList items={[
            ['Day 1', 'Old Town, Main Square, Cloth Hall and St. Mary’s Basilica, then an evening at the market.'],
            ['Day 2', 'Wieliczka Salt Mine in the morning, Kazimierz — the old Jewish quarter — in the afternoon.'],
            ['Day 3', 'Wawel Castle and Cathedral, then a final market visit and some gift shopping.'],
          ]} />
          <P>Want more detail? Read our full <Link to="/travel-guide/3-days-in-krakow-itinerary" className={inlineLink}>3-day Kraków itinerary</Link>.</P>
        </div>
        <div>
          <h3 className={h3}>5 days: Kraków and Wrocław</h3>
          <TermList items={[
            ['Days 1–3', 'as above, with Auschwitz-Birkenau as an alternative to Wieliczka.'],
            ['Day 4', 'train or private transfer to Wrocław (about 3.5 hours), with an evening at the market.'],
            ['Day 5', 'gnome hunt, Ostrów Tumski and the Racławice Panorama before departure.'],
          ]} />
        </div>
      </div>
    </section>
    <section id="practical-tips" className="mt-16 lg:mt-20 scroll-mt-28">
      <h2 className={h2}>Practical Tips for Winter Travel in Poland</h2>
      <TermList items={tips} />
      <TermList items={[
        ['Food preferences', <>traditional market food often contains pork. Vegetarian and fish options exist, and Muslim travellers will find more guidance in our <Link to="/travel-guide/halal-tourism" className={inlineLink}>Halal Food Guide for Kraków</Link>.</>],
        ['Safety', <>markets are crowded, so keep valuables in front pockets and read our guide to <Link to="/travel-guide/avoid-mistakes" className={inlineLink}>common tourist mistakes in Poland</Link>.</>],
      ]} />
    </section>
  </>
);

const PlanTrip = () => (
  <section id="plan-your-trip" className="mt-16 lg:mt-20 scroll-mt-28">
    <h2 className={h2}>Plan Your Christmas Trip to Poland with Green Continent Tours</h2>
    <P>A winter trip works best when the details are handled for you: the right hotel near the square, tickets for Wieliczka or Auschwitz-Birkenau, warm private transport and a guide who knows the quietest hours in each market.</P>
    <div className="mt-6 bg-[#f4f7f6] rounded-2xl p-6 md:p-7">
      <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-4">Contact us for a custom Christmas itinerary</p>
      <ul className="space-y-3 text-[15px] text-[#0f4f47]">
        <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#4dd4ac]" aria-hidden="true" /><a href="tel:+48537482798" className="font-semibold hover:text-[#1a6b5f]" data-testid="article-phone-link">+48 537 482 798</a><span className="text-gray-500 font-light">(phone / WhatsApp)</span></li>
        <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#4dd4ac]" aria-hidden="true" /><a href="mailto:info@greencontinenttours.com" className="font-semibold hover:text-[#1a6b5f]" data-testid="article-email-link">info@greencontinenttours.com</a></li>
        <li className="flex items-center gap-3"><Building2 className="w-4 h-4 text-[#4dd4ac]" aria-hidden="true" /><span className="font-light text-gray-600">Nowohucka 46, Kraków 31-580, Poland</span></li>
      </ul>
    </div>
  </section>
);

const ChristmasMarketsPoland = () => (
  <div className="min-h-screen bg-white">
    <SEO
      path={`/travel-guide/${SLUG}`}
      title="Christmas Markets in Poland 2026: Kraków, Gdańsk & More"
      description={DESCRIPTION}
      image={`${SITE}${HERO_IMAGE}`}
    />
    <Header />
    <main>
      <article>
        <ArticleHero
          image={HERO_IMAGE}
          alt="Wooden Christmas market stall glowing with fairy lights, handmade ornaments and festive gifts — Christmas markets in Poland 2026 guide"
          imageTitle="Christmas Markets in Poland 2026"
          width="1600"
          height="1000"
          objectPosition="center 45%"
          category="Winter Travel"
          title="Christmas Markets in Poland 2026 — Kraków, Wrocław, Gdańsk & Warsaw Guide"
          subtitle="Where to go, what to eat and how to plan the perfect festive trip — with the best winter day trips from Kraków."
          dateISO={DATE}
          dateLabel="June 24, 2026"
          readTime="11 min read"
        />
        <OverviewBar items={overview} />
        <section className="bg-white py-16 lg:py-20" aria-label="Article content">
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_240px] gap-10 lg:gap-16 max-w-6xl mx-auto">
              <div className="max-w-3xl min-w-0">
                <Intro />
                {cities.map((c) => <CitySection key={c.id} city={c} />)}
                <Planning />
                <FaqList title="Frequently Asked Questions" faqs={faqs} />
                <PlanTrip />
                <ContinueReading links={[
                  ['/travel-guide/3-days-in-krakow-itinerary', '3 days in Kraków: the perfect itinerary'],
                  ['/travel-guide/hidden-gems', 'Hidden gems in Poland tourists miss'],
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
      {JSON.stringify(articleJsonLd({ title: TITLE, description: DESCRIPTION, image: `${SITE}${HERO_IMAGE}`, date: DATE, url: `${SITE}/travel-guide/${SLUG}`, faqs }))}
    </script>
  </div>
);

export default ChristmasMarketsPoland;
