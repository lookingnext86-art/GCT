import React, { useEffect } from 'react';
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

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE =
  'Hello, I would like to plan a family summer trip to Poland (10-day itinerary).';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1607427293702-036933bbf746?auto=format&fit=crop&w=2400&q=80';
const MID_IMAGE =
  'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/dklii7oz_wawel-royal-castle-krakow-poland.jpg';

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
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Family Summer in Poland: Relaxed 10-Day Itinerary | Green Continent Tours';
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
    const meta1 = setMeta(
      'description',
      'Discover a relaxed 10-day family itinerary through Poland including Krakow, Zakopane, Warsaw, and the Tatra Mountains with Green Continent Tours.'
    );
    const meta2 = setMeta(
      'og:title',
      'Family Summer in Poland: Relaxed 10-Day Itinerary',
      'property'
    );
    const meta3 = setMeta(
      'og:description',
      'A practical family-friendly route through Krakow, Zakopane, and Poland’s best summer highlights — designed by Green Continent Tours.',
      'property'
    );
    const meta4 = setMeta('og:image', HERO_IMAGE, 'property');
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
                alt="Family overlooking the Tatra Mountains in Zakopane Poland during summer — Green Continent Tours"
                title="Family Summer in Poland — Tatra Mountains"
                width="2400"
                height="1300"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
                fetchpriority="high"
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

              <div className="absolute inset-0 flex items-end pb-12 md:pb-16 lg:pb-20">
                <div className="container mx-auto px-5 md:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl text-white">
                    {/* Back link */}
                    <Link
                      to="/travel-guide"
                      className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-white/85 hover:text-[#4dd4ac] mb-5 transition-colors"
                      data-testid="back-to-travel-guide"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      Travel Guide
                    </Link>

                    {/* Category */}
                    <span
                      className="inline-block bg-[#0f4f47] text-[#4dd4ac] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full mb-4"
                    >
                      Family Travel
                    </span>

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
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-white/80">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime="2026-05-22">May 22, 2026</time>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        13 min read
                      </span>
                      <span className="inline-flex items-center gap-1.5">
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
                        alt="Wawel Royal Castle in Krakow Poland — premium family travel itinerary"
                        title="Wawel Castle, Krakow"
                        width="2000"
                        height="1100"
                        className="w-full h-auto block"
                        loading="lazy"
                        decoding="async"
                        style={{ filter: 'saturate(0.92) contrast(1.03)' }}
                      />
                    </div>
                    <figcaption className="mt-3 text-[12.5px] text-gray-400 italic text-center">
                      Wawel Royal Castle, Krakow — a highlight of the Polish family itinerary.
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
              backgroundImage:
                'radial-gradient(circle, #4dd4ac 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="container mx-auto px-5 md:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <p className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4 border border-[#4dd4ac]/40 px-3.5 py-1.5 rounded-full">
                Start Your Adventure
              </p>
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 tracking-tight leading-tight"
              >
                Ready to Plan Your Poland Family Journey?
              </h2>
              <p className="text-base md:text-lg text-gray-100/85 font-light mb-9 max-w-xl mx-auto">
                Tell us about your family and we’ll craft a tailored Polish summer itinerary.
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
          headline:
            'Family Summer in Poland: A Relaxed 10-Day Travel Itinerary',
          description:
            'Discover a relaxed 10-day family itinerary through Poland including Krakow, Zakopane, Warsaw, and the Tatra Mountains with Green Continent Tours.',
          image: HERO_IMAGE,
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
              url: 'https://greencontinenttours.com/GCT-asset/logo.svg',
            },
          },
        })}
      </script>
    </div>
  );
};

export default FamilySummerItinerary;
