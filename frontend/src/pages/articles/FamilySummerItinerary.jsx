import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Sun,
  Users,
  Plane,
  MapPin,
  Sparkles,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE =
  'Hello, I would like to plan a family summer trip to Poland (10-day itinerary).';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const HERO_IMAGE = '/images/articles/family-summer-poland-itinerary/family-summer-vacation-krakow-poland.webp';
const MID_IMAGE = '/images/articles/family-summer-poland-itinerary/family-trip-zakopane-tatra-mountains.webp';

const overviewItems = [
  { label: 'Duration', value: '10 Days', icon: CalendarDays },
  { label: 'Best Season', value: 'June – September', icon: Sun },
  { label: 'Ideal For', value: 'Families & Groups', icon: Users },
  { label: 'Start City', value: 'Krakow', icon: MapPin },
  { label: 'Finish City', value: 'Warsaw', icon: Plane },
  { label: 'Travel Style', value: 'Relaxed Premium', icon: Sparkles },
];

const itinerary = [
  {
    id: 'day-1-3',
    label: 'Day 1–3',
    title: 'Discover Krakow',
    body: 'Explore Krakow’s Old Town, Wawel Castle, riverside walks, cafés, horse carriage rides, and family-friendly attractions. Optional experiences include the Wieliczka Salt Mine and Auschwitz tours.',
  },
  {
    id: 'day-4-5',
    label: 'Day 4–5',
    title: 'Zakopane & The Tatra Mountains',
    body: 'Cool mountain air, scenic lake views, cable cars, thermal spas, local markets, and relaxed family adventures in Poland’s most famous mountain destination.',
  },
  {
    id: 'day-6',
    label: 'Day 6',
    title: 'Dunajec River & Castles',
    body: 'Experience scenic rafting routes, traditional villages, mountain landscapes, and historic castles in southern Poland.',
  },
  {
    id: 'day-7-8',
    label: 'Day 7–8',
    title: 'Warsaw',
    body: 'Discover Poland’s modern capital with parks, museums, elegant boulevards, shopping areas, and family-friendly sightseeing.',
  },
  {
    id: 'day-9',
    label: 'Day 9',
    title: 'Family Leisure Day',
    body: 'Relax with spa options, cafés, shopping, boat cruises, or flexible free time before departure.',
  },
  {
    id: 'day-10',
    label: 'Day 10',
    title: 'Departure',
    body: 'Enjoy a final Polish breakfast and last moments before airport transfer and departure.',
  },
];

const familyReasons = [
  'Safe cities and roads',
  'Affordable luxury hotels',
  'Comfortable private transport',
  'Beautiful summer weather',
  'Rich history and culture',
  'Family-friendly attractions',
  'Less crowded than Western Europe',
];

const FamilySummerItinerary = () => {
  // SEO meta tags: update document head on mount
  return (
    <div className="min-h-screen bg-white">
      <SEO
        path="/travel-guide/family-summer-poland-itinerary"
        image={`https://www.greencontinenttours.com${HERO_IMAGE}`}
        title="Family Summer in Poland – Relaxed 10-Day Travel Itinerary"
        description="A relaxed 10-day family summer itinerary through Krakow, Zakopane and Warsaw — family hotels, easy pace, kid-friendly stops and practical tips."
      />
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
                alt="Wawel Royal Castle at sunset over the Vistula River in Krakow Poland — family summer 10-day travel itinerary — Green Continent Tours"
                title="Wawel Castle Sunset — Family Summer in Poland"
                width="2400"
                height="1300"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              {/* Cinematic dark overlays */}
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
                    {/* Back link */}
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

                    {/* Category */}
                    <div className="mt-7 md:mt-8">
                      <span className="inline-block bg-[#0f4f47] text-[#4dd4ac] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">
                        Family Travel
                      </span>
                    </div>

                    {/* H1 */}
                    <h1
                      id="article-heading"
                      className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.08] mb-4 drop-shadow-lg"
                    >
                      Family Summer in Poland: A Relaxed 10-Day Travel Itinerary
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-gray-100/95 font-light max-w-2xl leading-relaxed mb-6 drop-shadow">
                      A practical family-friendly route through Krakow, Zakopane,
                      and Poland’s best summer highlights.
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-x-8 md:gap-x-10 gap-y-2.5 text-[12.5px] text-white/80">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime="2026-05-22">May 22, 2026</time>
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        13 min read
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
            aria-label="Trip overview"
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
                      Poland is one of Europe’s most underrated family destinations during summer.
                      Safe cities, beautiful mountain scenery, family-friendly attractions, and
                      affordable travel make it ideal for families, private groups, and
                      multi-generation trips.
                    </p>
                    <p>
                      This relaxed 10-day itinerary combines Krakow’s history, Zakopane’s mountain
                      atmosphere, charming towns, castles, and easy-paced sightseeing designed for
                      families who want comfort without rushing.
                    </p>
                  </div>

                  {/* Itinerary timeline */}
                  <div id="itinerary" className="mt-14 lg:mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-8">
                      The 10-Day Family Itinerary
                    </h2>

                    <ol className="relative border-l-2 border-[#4dd4ac]/30 ml-3 space-y-10">
                      {itinerary.map((day) => (
                        <li
                          key={day.id}
                          id={day.id}
                          className="relative pl-7"
                          data-testid={`itinerary-${day.id}`}
                        >
                          <span
                            className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#4dd4ac] ring-4 ring-white shadow-sm"
                            aria-hidden="true"
                          />
                          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-1.5">
                            {day.label}
                          </p>
                          <h3 className="text-xl md:text-[22px] font-bold text-[#0f4f47] tracking-tight leading-snug mb-2.5">
                            {day.title}
                          </h3>
                          <p className="text-[15px] text-gray-600 leading-[1.8] font-light">
                            {day.body}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Mid-article image */}
                  <figure className="my-14 lg:my-16">
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-25px_rgba(15,79,71,0.3)]">
                      <img
                        src={MID_IMAGE}
                        alt="Family hiking at Morskie Oko lake in Zakopane Tatra Mountains Poland — premium family summer travel itinerary"
                        title="Family at Morskie Oko, Zakopane"
                        width="2000"
                        height="900"
                        className="w-full h-[280px] md:h-[380px] lg:h-[460px] object-cover block"
                        loading="lazy"
                        decoding="async"
                        style={{ filter: 'saturate(0.95) contrast(1.04)', objectPosition: 'center 62%' }}
                      />
                    </div>
                    <figcaption className="mt-3 text-[12.5px] text-gray-400 italic text-center">
                      Morskie Oko Lake, Tatra Mountains — a family favourite stop in the Polish summer itinerary.
                    </figcaption>
                  </figure>

                  {/* Why families love Poland */}
                  <div id="why-families" className="mt-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-6">
                      Why Families Love Poland in Summer
                    </h2>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {familyReasons.map((reason) => (
                        <li
                          key={reason}
                          className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed"
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4dd4ac] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Internal links */}
                  <div className="mt-14 pt-8 border-t border-gray-100">
                    <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-3">
                      Continue Reading
                    </p>
                    <ul className="space-y-2 text-[15px]">
                      <li>
                        <Link
                          to="/services"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          Explore our Krakow & Zakopane tours
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/travel-guide"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          Back to all travel guides
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
                        {itinerary.map((d) => (
                          <li key={d.id}>
                            <a
                              href={`#${d.id}`}
                              className="hover:text-[#0f4f47] hover:font-semibold transition-colors"
                            >
                              <span className="text-[#0f4f47] font-semibold">{d.label}:</span>{' '}
                              {d.title}
                            </a>
                          </li>
                        ))}
                        <li className="pt-2 border-t border-gray-100">
                          <a
                            href="#why-families"
                            className="hover:text-[#0f4f47] hover:font-semibold transition-colors"
                          >
                            Why families love Poland
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
        {/* ===== COMPACT WHATSAPP CTA ===== */}
        <section
          className="bg-white pt-2 pb-14 lg:pb-16"
          aria-label="WhatsApp inquiry"
          data-testid="article-cta"
        >
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="article-whatsapp-cta"
              className="group flex items-center justify-between gap-4 max-w-3xl mx-auto bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] hover:from-[#1a6b5f] hover:to-[#0f4f47] text-white pl-5 pr-5 py-4 md:pl-6 md:pr-7 md:py-5 rounded-2xl shadow-[0_15px_40px_-15px_rgba(15,79,71,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#4dd4ac] text-[#0f4f47] shrink-0 shadow-md">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-0.5">
                    Plan Your Trip
                  </p>
                  <p className="text-[14px] md:text-[15px] font-semibold leading-snug">
                    Chat with our Krakow team on WhatsApp
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#4dd4ac] shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Article JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline:
            'Family Summer in Poland: A Relaxed 10-Day Travel Itinerary',
          description:
            'Discover a relaxed 10-day family itinerary through Poland including Krakow, Zakopane, Warsaw, and the Tatra Mountains with Green Continent Tours.',
          image: `https://www.greencontinenttours.com${HERO_IMAGE}`,
          datePublished: '2026-05-22',
          author: {
            '@type': 'Organization',
            name: 'Green Continent Tours',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Green Continent Tours',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.greencontinenttours.com/GCT-asset/logo.svg',
            },
          },
        })}
      </script>
    </div>
  );
};

export default FamilySummerItinerary;
