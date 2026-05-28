import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  MapPin,
  Wallet,
  Compass,
  Sparkles,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE =
  'Hello, I would like advice on planning a safe and smooth trip to Poland.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ⬇️ Replace these two image URLs when you upload the new SEO-friendly photos.
const HERO_IMAGE =
  'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/gj6l8ol7_premium-poland-travel-agency-euro-banner.png';
const MID_IMAGE =
  'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/tx0j5hj2_krakow-currency-exchange-tourist-scam-warning.jpg';

const overviewItems = [
  { label: 'Topic', value: 'Travel Safety', icon: ShieldCheck },
  { label: 'Reading', value: '10 min read', icon: Clock },
  { label: 'Best For', value: 'First-time Visitors', icon: Compass },
  { label: 'Regions', value: 'Krakow · Warsaw · Zakopane', icon: MapPin },
  { label: 'Currency', value: 'Polish Złoty (PLN)', icon: Wallet },
  { label: 'Travel Style', value: 'Confident & Smart', icon: Sparkles },
];

const mistakes = [
  {
    id: 'mistake-1',
    label: 'Mistake 1',
    title: 'Taking Random Taxis from Airports or Train Stations',
    body:
      'Avoid unmarked taxis or drivers approaching you directly at stations and airports. In tourist cities, some unofficial taxis may overcharge visitors.',
    tip:
      'Use official taxi ranks, trusted taxi apps, or transport arranged by your hotel or tour operator. Always check the price before entering, or make sure the meter is running.',
  },
  {
    id: 'mistake-2',
    label: 'Mistake 2',
    title: 'Exchanging Money at Bad “Kantor” Exchange Offices',
    body:
      'Poland uses the Polish złoty (PLN), not the euro. Some exchange offices in tourist areas may advertise attractive rates but include poor exchange differences or hidden conditions.',
    tip:
      'Compare rates carefully before handing over cash. Avoid exchanging money in a rush near airports, train stations, or the main square.',
  },
  {
    id: 'mistake-3',
    label: 'Mistake 3',
    title: 'Assuming Everywhere Accepts Euros',
    body:
      'Some tourist places may accept euros, but the exchange rate is usually not good. Paying in Polish złoty is almost always better.',
    tip: 'Use card payments or withdraw PLN from trusted bank ATMs.',
  },
  {
    id: 'mistake-4',
    label: 'Mistake 4',
    title: 'Not Validating Public Transport Tickets',
    body:
      'In cities like Krakow and Warsaw, buying a ticket is not always enough. Many tickets must be validated after boarding trams or buses. Ticket inspectors can issue fines if your ticket is not activated correctly.',
    tip:
      'Validate paper tickets immediately and keep digital tickets ready on your phone.',
  },
  {
    id: 'mistake-5',
    label: 'Mistake 5',
    title: 'Leaving Bags Open in Crowded Areas',
    body:
      'Pickpocketing can happen in busy tourist places, train stations, public transport, markets, and nightlife areas. It is not everywhere, but crowded places are always higher risk.',
    tip:
      'Keep your phone, wallet, passport, and valuables secure, especially in crowded areas.',
  },
  {
    id: 'mistake-6',
    label: 'Mistake 6',
    title: 'Buying Attraction Tickets from Unofficial Sellers',
    body:
      'For popular attractions, avoid random people selling “skip-the-line” tickets outside entrances. Some tickets may be overpriced, invalid, or unnecessary.',
    tip:
      'Buy tickets from official websites, official ticket offices, or trusted travel providers.',
  },
  {
    id: 'mistake-7',
    label: 'Mistake 7',
    title: 'Falling for “Free” Street Offers',
    body:
      'In some tourist areas, people may offer free bracelets, flowers, souvenirs, club invitations, or “special deals,” then pressure you to pay afterward.',
    tip: 'If you did not ask for it, politely refuse and continue walking.',
  },
  {
    id: 'mistake-8',
    label: 'Mistake 8',
    title: 'Choosing Restaurants Only on the Main Square',
    body:
      'Restaurants directly on major tourist squares can be convenient, but they are often more expensive and not always the best quality.',
    tip:
      'Walk a few streets away from the main square for better prices, more authentic food, and a more local atmosphere.',
  },
  {
    id: 'mistake-9',
    label: 'Mistake 9',
    title: 'Underestimating Travel Times in Poland',
    body:
      'Poland may look simple on the map, but travel between cities, mountain regions, and countryside destinations can take longer than expected. Zakopane traffic, weekends, and winter conditions can slow things down significantly.',
    tip:
      'Do not overload your itinerary. Leave room for relaxed travel and unexpected delays.',
  },
  {
    id: 'mistake-10',
    label: 'Mistake 10',
    title: 'Trying to Plan Everything Alone When Traveling as a Group or Family',
    body:
      'Poland is easy to visit independently, but group and family travel can become stressful with transport, hotels, restaurants, guides, luggage, and timing.',
    tip:
      'For families, private groups, and multi-city trips, working with a local travel organizer can make the journey smoother and more enjoyable.',
  },
];

const confidenceReasons = [
  'Generally safe and welcoming country',
  'Reliable trains, trams, and buses in major cities',
  'Card payments accepted almost everywhere',
  'Affordable compared to Western Europe',
  'Friendly locals and growing English fluency',
  'Excellent food, coffee, and nightlife scenes',
  'World-class history, castles, and nature',
];

const AvoidMistakes = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      'What to Avoid in Poland: 10 Common Tourist Mistakes & Scams | Green Continent Tours';
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
      'Avoid common tourist mistakes and scams in Poland — taxi traps, money exchange tips, pickpocketing, and smart travel advice for Krakow, Warsaw, and Zakopane.'
    );
    setMeta(
      'og:title',
      'What to Avoid in Poland: 10 Common Tourist Mistakes & Scams',
      'property'
    );
    setMeta(
      'og:description',
      'A practical safety guide for travelers visiting Poland — avoid overpaying, save time, and travel with confidence across Krakow, Warsaw, and Zakopane.',
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
                alt="Euro banknotes — 50, 100 and 200 Euros — on marble surface representing money exchange and tourist scams to avoid in Poland — Green Continent Tours travel safety guide"
                title="Euro money exchange — Avoid Tourist Mistakes & Scams in Poland"
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
                        Poland Tips
                      </span>
                    </div>

                    <h1
                      id="article-heading"
                      className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.08] mb-4 drop-shadow-lg"
                    >
                      What to Avoid in Poland: 10 Common Tourist Mistakes &amp; Scams
                    </h1>

                    <p className="text-base md:text-lg text-gray-100/95 font-light max-w-2xl leading-relaxed mb-6 drop-shadow">
                      A practical safety guide to help you travel smarter in Krakow,
                      Warsaw, Zakopane, and beyond — without overpaying or wasting time.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-8 md:gap-x-10 gap-y-2.5 text-[12.5px] text-white/80">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime="2026-05-10">May 10, 2026</time>
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        10 min read
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
                      Poland is one of Europe’s most rewarding countries to visit — safe,
                      beautiful, full of history, and still more affordable than many Western
                      European destinations. But like any popular travel destination, tourists
                      can still make simple mistakes or run into small scams.
                    </p>
                    <p>
                      This guide is not meant to scare you. Poland is generally a safe country
                      for travelers. The goal is simply to help you avoid overpaying, wasting
                      time, or feeling uncomfortable during your trip — especially in busy areas
                      such as Krakow, Warsaw, Zakopane, train stations, airports, and nightlife
                      districts.
                    </p>
                  </div>

                  {/* Mistakes timeline */}
                  <div id="mistakes" className="mt-14 lg:mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-8">
                      The 10 Most Common Tourist Mistakes
                    </h2>

                    <ol className="relative border-l-2 border-[#4dd4ac]/30 ml-3 space-y-10">
                      {mistakes.map((m) => (
                        <li
                          key={m.id}
                          id={m.id}
                          className="relative pl-7"
                          data-testid={`mistake-${m.id}`}
                        >
                          <span
                            className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#4dd4ac] ring-4 ring-white shadow-sm"
                            aria-hidden="true"
                          />
                          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-1.5">
                            {m.label}
                          </p>
                          <h3 className="text-xl md:text-[22px] font-bold text-[#0f4f47] tracking-tight leading-snug mb-2.5">
                            {m.title}
                          </h3>
                          <p className="text-[15px] text-gray-600 leading-[1.8] font-light">
                            {m.body}
                          </p>
                          <div className="mt-4 flex gap-3 items-start bg-[#4dd4ac]/8 border-l-2 border-[#4dd4ac] rounded-r-md px-4 py-3">
                            <ShieldCheck
                              className="w-4 h-4 text-[#0f4f47] mt-0.5 shrink-0"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                            <p className="text-[14px] text-[#0f4f47] leading-[1.7]">
                              <span className="font-bold">Tip: </span>
                              <span className="font-light">{m.tip}</span>
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Mid-article image */}
                  <figure className="my-14 lg:my-16">
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-25px_rgba(15,79,71,0.3)]">
                      <img
                        src={MID_IMAGE}
                        alt="Tourist standing in front of a Kantor currency exchange office in Krakow Poland — warning about bad exchange rate scams for travelers"
                        title="Krakow Kantor currency exchange — tourist scam warning"
                        width="2000"
                        height="900"
                        className="w-full h-[280px] md:h-[380px] lg:h-[460px] object-cover block"
                        loading="lazy"
                        decoding="async"
                        style={{ filter: 'saturate(0.95) contrast(1.04)', objectPosition: 'center 18%' }}
                      />
                    </div>
                    <figcaption className="mt-3 text-[12.5px] text-gray-400 italic text-center">
                      Always compare “Kantor” exchange rates carefully — a common tourist mistake in Krakow and across Poland.
                    </figcaption>
                  </figure>

                  {/* Enjoy Poland with confidence */}
                  <div id="confidence" className="mt-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-4">
                      Enjoy Poland with Confidence
                    </h2>
                    <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light mb-6">
                      Poland is a safe and welcoming country, and most visitors have a smooth
                      and memorable experience. By avoiding these common tourist mistakes, you
                      can enjoy Krakow, Warsaw, Zakopane, Gdansk, Wroclaw, and the rest of
                      Poland with more confidence, less stress, and better value. Whether you
                      are planning a private tour, a family holiday, or a group journey across
                      Poland and Central Europe, careful planning makes all the difference.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {confidenceReasons.map((reason) => (
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
                          to="/travel-guide/family-summer-poland-itinerary"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          Family Summer in Poland — Relaxed 10-Day Itinerary
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          Explore our Krakow &amp; Poland tours
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
                        {mistakes.map((m, idx) => (
                          <li key={m.id}>
                            <a
                              href={`#${m.id}`}
                              className="hover:text-[#0f4f47] hover:font-semibold transition-colors"
                            >
                              <span className="text-[#0f4f47] font-semibold">
                                {idx + 1}.
                              </span>{' '}
                              {m.title}
                            </a>
                          </li>
                        ))}
                        <li className="pt-2 border-t border-gray-100">
                          <a
                            href="#confidence"
                            className="hover:text-[#0f4f47] hover:font-semibold transition-colors"
                          >
                            Enjoy Poland with Confidence
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
                Travel Smarter
              </p>
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 tracking-tight leading-tight"
              >
                Plan a Smooth, Stress-Free Trip to Poland
              </h2>
              <p className="text-base md:text-lg text-gray-100/85 font-light mb-9 max-w-xl mx-auto">
                Let our local Krakow team handle transport, hotels, and logistics — so you
                can travel safely and enjoy every moment.
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
            'What to Avoid in Poland: 10 Common Tourist Mistakes & Scams',
          description:
            'Avoid common tourist mistakes and scams in Poland — taxi traps, money exchange tips, pickpocketing, and smart travel advice for Krakow, Warsaw, and Zakopane.',
          image: HERO_IMAGE,
          datePublished: '2026-05-10',
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

export default AvoidMistakes;
