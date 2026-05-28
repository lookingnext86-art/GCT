import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPin,
  Utensils,
  Beef,
  Sparkles,
  Compass,
  Heart,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE =
  'Hello, I am visiting Krakow and would like recommendations for halal restaurants and Muslim-friendly travel planning.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ⬇️ Swap these two URLs when uploading new SEO-friendly photos.
const HERO_IMAGE =
  'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/o22h5kh9_Hala%20Food%20Krakow%20travel.jpg';
const MID_IMAGE =
  'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/o0eh0ibr_Halal%20food%20Krakow%20Poland.png';

const overviewItems = [
  { label: 'Topic', value: 'Halal Food Guide', icon: Utensils },
  { label: 'Reading', value: '12 min read', icon: Clock },
  { label: 'Restaurants', value: '8 Curated', icon: Beef },
  { label: 'Meat Shops', value: '3 Trusted', icon: MapPin },
  { label: 'Best Areas', value: 'Kazimierz · Old Town', icon: Compass },
  { label: 'Best For', value: 'Muslim Travelers', icon: Heart },
];

const halalAreas = [
  'Kazimierz District',
  'Around Starowiślna Street',
  'Old Town & Wawel Castle area',
  'Near Galeria Krakowska & the train station',
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

const muslimTips = [
  'Many halal restaurants are concentrated around Kazimierz and Old Town',
  'Prayer apps are useful for finding nearby prayer spaces',
  'Apartment stays are ideal for families wanting access to halal groceries',
  'Most halal restaurants also offer vegetarian options',
  'Most central halal spots are within walking distance of major sights',
  'English is widely spoken — ordering halal meals is easy for tourists',
];

const Section = ({ id, title, items }) => (
  <div id={id} className="mt-14 lg:mt-16">
    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-8">
      {title}
    </h2>
    <ol className="relative border-l-2 border-[#4dd4ac]/30 ml-3 space-y-10">
      {items.map((item) => (
        <li
          key={item.id}
          id={item.id}
          className="relative pl-7"
          data-testid={`halal-${item.id}`}
        >
          <span
            className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#4dd4ac] ring-4 ring-white shadow-sm"
            aria-hidden="true"
          />
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-1.5">
            {item.label}
          </p>
          <h3 className="text-xl md:text-[22px] font-bold text-[#0f4f47] tracking-tight leading-snug mb-2.5">
            {item.title}
          </h3>
          <p className="text-[15px] text-gray-600 leading-[1.8] font-light mb-3">
            {item.body}
          </p>
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0f4f47] hover:text-[#1a6b5f] transition-colors"
            data-testid={`halal-${item.id}-website`}
          >
            Visit website
            <span className="text-gray-400 font-normal">· {item.websiteLabel}</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ol>
  </div>
);

const HalalTourism = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      'Discover the Best Halal Food in Krakow | Green Continent Tours';
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
      'A complete Muslim-friendly food guide to Krakow — best halal restaurants (Turkish, Syrian, Pakistani, Indian), halal meat shops, and travel tips for visitors to Poland.'
    );
    setMeta(
      'og:title',
      'Discover the Best Halal Food in Krakow',
      'property'
    );
    setMeta(
      'og:description',
      'Discover the best halal restaurants and Muslim-friendly food spots in Krakow, Poland — curated by Green Continent Tours.',
      'property'
    );
    setMeta('og:image', HERO_IMAGE, 'property');
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <article>
          <header
            className="relative overflow-hidden"
            data-testid="article-hero"
            aria-labelledby="article-heading"
          >
            <div className="relative h-[460px] md:h-[560px] lg:h-[640px] w-full">
              <img
                src={HERO_IMAGE}
                alt="Premium halal food platter in Krakow Poland — grilled kebab, saffron rice, and fresh salad — Muslim-friendly food guide by Green Continent Tours"
                title="Discover the Best Halal Food in Krakow"
                width="2400"
                height="1300"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#0a3a35]/55 via-[#0a3a35]/35 to-[#0a3a35]/85"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#0a3a35]/55 via-transparent to-transparent"
                aria-hidden="true"
              />

              <div className="absolute inset-0 flex items-end pb-20 md:pb-24 lg:pb-28">
                <div className="container mx-auto px-5 md:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl text-white">
                    <div>
                      <Link
                        to="/travel-guide"
                        className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-white/85 hover:text-[#4dd4ac] transition-colors"
                        data-testid="back-to-travel-guide"
                      >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        Travel Guide
                      </Link>
                    </div>

                    <div className="mt-7 md:mt-8">
                      <span className="inline-block bg-[#0f4f47] text-[#4dd4ac] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">
                        Krakow
                      </span>
                    </div>

                    <h1
                      id="article-heading"
                      className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.08] mb-4 mt-5 drop-shadow-lg"
                    >
                      Discover the Best Halal Food in Krakow
                    </h1>

                    <p className="text-base md:text-lg text-gray-100/95 font-light max-w-2xl leading-relaxed mb-6 drop-shadow">
                      From authentic Turkish kebabs and Pakistani curries to Syrian shawarma
                      and trusted halal butcher shops — a curated guide for Muslim visitors
                      to Krakow, Poland.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-8 md:gap-x-10 gap-y-2.5 text-[12.5px] text-white/80">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime="2026-05-18">May 18, 2026</time>
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        12 min read
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <User className="w-3.5 h-3.5" aria-hidden="true" />
                        Green Continent Tours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* ===== OVERVIEW BAR ===== */}
          <section
            className="relative bg-white -mt-12 md:-mt-16 lg:-mt-20 z-10"
            aria-label="Article overview"
            data-testid="overview-bar"
          >
            <div className="container mx-auto px-5 md:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-[0_30px_60px_-25px_rgba(15,79,71,0.25)] p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
                  {overviewItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="text-center md:text-left">
                        <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#4dd4ac]/10 mb-2 md:mb-3">
                          <Icon className="w-4 h-4 text-[#0f4f47]" strokeWidth={1.7} aria-hidden="true" />
                        </div>
                        <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm md:text-[15px] font-bold text-[#0f4f47] leading-tight">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ===== MAIN ARTICLE LAYOUT ===== */}
          <section className="bg-white py-16 lg:py-20" aria-label="Article content">
            <div className="container mx-auto px-5 md:px-6 lg:px-8">
              <div className="grid lg:grid-cols-[1fr_240px] gap-10 lg:gap-16 max-w-6xl mx-auto">
                {/* ARTICLE BODY */}
                <div className="max-w-3xl">
                  {/* Intro */}
                  <div className="prose-content space-y-5 text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">
                    <p className="text-lg md:text-xl text-[#0f4f47] font-light leading-relaxed">
                      Krakow may be famous for its historic streets, royal castles, and
                      charming cafés — but in recent years, it has also become one of the
                      most Muslim-friendly cities in Poland for halal food.
                    </p>
                    <p>
                      From authentic Turkish kebabs and Pakistani curries to Syrian shawarma
                      and halal butcher shops, travelers visiting Krakow today can easily
                      find quality halal meals across the city. Most halal restaurants are
                      located around Kazimierz, Old Town, and Starowiślna Street, making
                      them easy to reach while exploring the city’s main attractions.
                    </p>
                    <p>
                      Whether you are visiting Krakow for a weekend or planning a longer
                      Poland trip, this guide covers some of the best halal restaurants,
                      halal meat shops, and useful tips for Muslim travelers.
                    </p>
                  </div>

                  {/* Where to find */}
                  <div id="where-to-find" className="mt-14 lg:mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-4">
                      Where to Find Halal Food in Krakow
                    </h2>
                    <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light mb-6">
                      The best halal food areas in Krakow are:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-4">
                      {halalAreas.map((area) => (
                        <li
                          key={area}
                          className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed"
                        >
                          <MapPin
                            className="mt-1 w-4 h-4 text-[#4dd4ac] shrink-0"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[15px] text-gray-600 leading-[1.8] font-light">
                      Many halal restaurants are within walking distance of Krakow’s main
                      tourist attractions, making it easy to combine sightseeing with dining.
                    </p>
                  </div>

                  {/* Turkish & Middle Eastern */}
                  <Section
                    id="turkish-middle-eastern"
                    title="Turkish & Middle Eastern Halal Restaurants"
                    items={turkishMiddleEastern}
                  />

                  {/* Mid-article image */}
                  <figure className="my-14 lg:my-16">
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-25px_rgba(15,79,71,0.3)]">
                      <img
                        src={MID_IMAGE}
                        alt="Freshly grilled halal chicken shawarma wrap in front of a HALAL certified Krakow restaurant — best halal food in Krakow Muslim-friendly guide by Green Continent Tours"
                        title="Halal chicken shawarma wrap — Krakow, Poland"
                        width="2000"
                        height="900"
                        className="w-full h-[320px] md:h-[460px] lg:h-[560px] object-cover block"
                        loading="lazy"
                        decoding="async"
                        style={{ filter: 'saturate(0.95) contrast(1.04)', objectPosition: 'center 50%' }}
                      />
                    </div>
                    <figcaption className="mt-3 text-[12.5px] text-gray-400 italic text-center">
                      Authentic halal chicken shawarma wraps are a Krakow favourite — easy to find around Kazimierz and Old Town.
                    </figcaption>
                  </figure>

                  {/* Pakistani & Indian */}
                  <Section
                    id="pakistani-indian"
                    title="Pakistani & Indian Halal Restaurants"
                    items={pakistaniIndian}
                  />

                  {/* Meat Shops */}
                  <Section
                    id="meat-shops"
                    title="Halal Meat Shops in Krakow"
                    items={meatShops}
                  />

                  {/* Travel tips */}
                  <div id="muslim-tips" className="mt-14 lg:mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-4">
                      Muslim-Friendly Travel Tips in Krakow
                    </h2>
                    <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light mb-6">
                      Krakow is generally welcoming for Muslim travelers. While the city has
                      a relatively small Muslim population compared to larger European
                      capitals, halal food availability has improved significantly over the
                      last few years.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {muslimTips.map((tip) => (
                        <li
                          key={tip}
                          className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed"
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4dd4ac] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Final thoughts */}
                  <div id="final-thoughts" className="mt-14 lg:mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-4">
                      Final Thoughts
                    </h2>
                    <div className="space-y-5 text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">
                      <p>
                        Krakow is no longer difficult for Muslim travelers when it comes to
                        halal food. Whether you are searching for authentic Pakistani
                        biryani, Turkish kebabs, Syrian shawarma, or halal grocery shopping,
                        the city now offers plenty of excellent choices.
                      </p>
                      <p>
                        The best part is that many halal restaurants are located close to
                        Krakow’s main attractions, allowing visitors to explore the city
                        comfortably without worrying about finding suitable meals.
                      </p>
                      <p>
                        For travelers visiting Poland for the first time, Krakow remains one
                        of the easiest and most enjoyable cities for halal dining.
                      </p>
                    </div>
                  </div>

                  {/* Internal links */}
                  <div className="mt-14 pt-8 border-t border-gray-100">
                    <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-3">
                      Continue Reading
                    </p>
                    <ul className="space-y-2 text-[15px]">
                      <li>
                        <Link
                          to="/travel-guide/family-summer-poland-itinerary"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          Family Summer in Poland — Relaxed 10-Day Itinerary
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/travel-guide/hidden-gems"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          15 Hidden Gems in Poland Most Tourists Miss
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/travel-guide/avoid-mistakes"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          What to Avoid in Poland — 10 Common Tourist Mistakes
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          Contact our Krakow team
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* STICKY TABLE OF CONTENTS */}
                <aside
                  className="hidden lg:block self-start sticky top-28"
                  aria-label="Table of contents"
                  data-testid="article-toc"
                >
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(15,79,71,0.08)]">
                    <p className="text-[10.5px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">
                      In This Guide
                    </p>
                    <nav>
                      <ul className="space-y-3 text-[13px] text-gray-500 font-light">
                        <li>
                          <a href="#where-to-find" className="hover:text-[#0f4f47] hover:font-semibold transition-colors">
                            <span className="text-[#0f4f47] font-semibold">·</span> Where to Find Halal Food
                          </a>
                        </li>
                        <li className="pt-2 border-t border-gray-100">
                          <p className="text-[#0f4f47] font-semibold text-[11.5px] uppercase tracking-wider mb-2">
                            Turkish &amp; Middle Eastern
                          </p>
                          <ul className="space-y-1.5">
                            {turkishMiddleEastern.map((r, i) => (
                              <li key={r.id}>
                                <a
                                  href={`#${r.id}`}
                                  className="hover:text-[#0f4f47] hover:font-semibold transition-colors"
                                >
                                  <span className="text-[#0f4f47] font-semibold">{i + 1}.</span>{' '}
                                  {r.title.split(' #')[0]}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="pt-2 border-t border-gray-100">
                          <p className="text-[#0f4f47] font-semibold text-[11.5px] uppercase tracking-wider mb-2">
                            Pakistani &amp; Indian
                          </p>
                          <ul className="space-y-1.5">
                            {pakistaniIndian.map((r, i) => (
                              <li key={r.id}>
                                <a
                                  href={`#${r.id}`}
                                  className="hover:text-[#0f4f47] hover:font-semibold transition-colors"
                                >
                                  <span className="text-[#0f4f47] font-semibold">{i + 4}.</span>{' '}
                                  {r.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="pt-2 border-t border-gray-100">
                          <p className="text-[#0f4f47] font-semibold text-[11.5px] uppercase tracking-wider mb-2">
                            Halal Meat Shops
                          </p>
                          <ul className="space-y-1.5">
                            {meatShops.map((s) => (
                              <li key={s.id}>
                                <a
                                  href={`#${s.id}`}
                                  className="hover:text-[#0f4f47] hover:font-semibold transition-colors"
                                >
                                  {s.title.replace(/^O'Farm Meat — /, "O'Farm — ")}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="pt-2 border-t border-gray-100 space-y-1.5">
                          <a href="#muslim-tips" className="block hover:text-[#0f4f47] hover:font-semibold transition-colors">
                            Muslim-Friendly Travel Tips
                          </a>
                          <a href="#final-thoughts" className="block hover:text-[#0f4f47] hover:font-semibold transition-colors">
                            Final Thoughts
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </article>

        {/* ===== FINAL CTA ===== */}
        <section
          className="relative bg-[#0f4f47] overflow-hidden py-16 lg:py-20"
          aria-labelledby="cta-heading"
          data-testid="article-cta"
        >
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: 'radial-gradient(circle, #4dd4ac 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="container mx-auto px-5 md:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <p className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4 border border-[#4dd4ac]/40 px-3.5 py-1.5 rounded-full">
                Muslim-Friendly Travel
              </p>
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 tracking-tight leading-tight"
              >
                Plan a Halal-Friendly Trip to Krakow &amp; Poland
              </h2>
              <p className="text-base md:text-lg text-gray-100/85 font-light mb-9 max-w-xl mx-auto">
                Our local Krakow team can arrange halal-friendly hotels, restaurant
                reservations, prayer logistics, and private city tours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="article-whatsapp-cta"
                  className="group inline-flex items-center justify-center gap-2.5 bg-[#4dd4ac] text-[#0f4f47] px-7 py-3.5 rounded-full font-bold text-[14px] tracking-wide shadow-[0_10px_30px_-10px_rgba(77,212,172,0.6)] hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Inquiry
                </a>
                <Link
                  to="/contact"
                  data-testid="article-contact-cta"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-[14px] tracking-wide hover:bg-white hover:text-[#0f4f47] transition-all duration-300"
                >
                  Custom Trip Request
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Article JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Discover the Best Halal Food in Krakow',
          description:
            'A complete Muslim-friendly food guide to Krakow — best halal restaurants (Turkish, Syrian, Pakistani, Indian), halal meat shops, and travel tips for visitors to Poland.',
          image: HERO_IMAGE,
          datePublished: '2026-05-18',
          author: { '@type': 'Organization', name: 'Green Continent Tours' },
          publisher: {
            '@type': 'Organization',
            name: 'Green Continent Tours',
            logo: {
              '@type': 'ImageObject',
              url: 'https://greencontinenttours.com/GCT-asset/logo.svg',
            },
          },
        })}
      </script>

      {/* ItemList JSON-LD — boosts Google search visibility for "halal food krakow" */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Best Halal Restaurants and Meat Shops in Krakow',
          itemListElement: [
            ...turkishMiddleEastern,
            ...pakistaniIndian,
            ...meatShops,
          ].map((r, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: r.title,
            url: r.website,
          })),
        })}
      </script>
    </div>
  );
};

export default HalalTourism;
