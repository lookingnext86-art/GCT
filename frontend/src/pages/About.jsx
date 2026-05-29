import React, { useEffect } from 'react';
import {
  Award,
  MapPin,
  Users,
  Handshake,
  Clock,
  Compass,
  Sparkles,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HERO_IMAGE =
  'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/gugyxbts_Wawel%20Castle%20Krakow%20Poland.jpg';

const stats = [
  { value: '12+', label: 'Years of Experience', icon: Award },
  { value: '50+', label: 'Destinations', icon: MapPin },
  { value: '160+', label: 'Groups Served', icon: Users },
  { value: '50+', label: 'Trusted Partners', icon: Handshake },
  { value: '24/7', label: 'Local Support', icon: Clock },
];

const About = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'About Green Continent Tours | Krakow Travel Company';
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
      'Green Continent Tours is a Krakow-based company designing group, family, school, and corporate journeys across Poland and Europe — transport, licensed guides, hotels, tickets, and custom itineraries.'
    );
    setMeta('og:title', 'About Green Continent Tours | Krakow Travel Company', 'property');
    setMeta(
      'og:description',
      'Krakow-based premium agency for group, family, school, and corporate journeys across Poland and Europe.',
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

      <main className="pt-20">
        {/* ===== HERO ===== */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="about-heading"
        >
          <div className="relative h-[420px] md:h-[520px] lg:h-[580px] overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="Krakow-based agency for group, family, school, and corporate journeys across Poland and Europe — Wawel Royal Castle and the Vistula River, Krakow"
              title="Wawel Royal Castle — About Green Continent Tours"
              width="2400"
              height="1300"
              className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              style={{
                filter:
                  'saturate(0.85) contrast(1.10) brightness(0.92) sepia(0.06)',
              }}
            />
            {/* Film grain */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-overlay"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' seed='12'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                backgroundSize: '240px 240px',
              }}
            />
            {/* Cinematic warm split-tone */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-60"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,210,160,0.18) 0%, rgba(255,210,160,0) 45%, rgba(15,79,71,0) 55%, rgba(15,79,71,0.30) 100%)',
              }}
            />
            {/* Radial vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(ellipse 100% 75% at center, transparent 50%, rgba(8,28,26,0.55) 100%)',
              }}
            />
            {/* Brand overlay for heading legibility */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0a3a35]/55 via-[#0a3a35]/40 to-[#0a3a35]/85"
              aria-hidden="true"
            />

            <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
              <p className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-5 border border-[#4dd4ac]/40 bg-[#0f4f47]/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                About Us
              </p>
              <h1
                id="about-heading"
                className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 tracking-tight leading-[1.1] drop-shadow-lg max-w-4xl"
              >
                About Green Continent Tours
              </h1>
              <p className="text-base md:text-[17px] text-white/95 font-light leading-relaxed max-w-3xl mx-auto drop-shadow">
                A Krakow-based team crafting unforgettable journeys for groups,
                families, schools, and corporate visitors across Poland and Europe.
              </p>

              <div className="flex items-center gap-2 mt-7" aria-hidden="true">
                <span className="h-px w-12 bg-[#4dd4ac]/60" />
                <span className="w-2 h-2 rounded-full bg-[#4dd4ac]" />
                <span className="h-px w-12 bg-[#4dd4ac]/60" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHO WE ARE ===== */}
        <section className="bg-white py-14 lg:py-16" aria-label="Who we are">
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 lg:mb-12">
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-[2.4rem] font-bold text-[#0f4f47] tracking-tight leading-tight">
                  Your Trusted Travel Company in Krakow
                </h2>
                <span
                  className="block w-14 h-0.5 bg-[#4dd4ac] mx-auto mt-5 rounded-full"
                  aria-hidden="true"
                />
              </div>

              <div className="space-y-4 text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">
                <p>
                  Green Continent Tours began with a simple idea — helping
                  visitors experience Poland with comfort, confidence, and local
                  knowledge. Based in Krakow, our team designs and operates
                  premium journeys across Poland and Europe for families, school
                  groups, corporate clients, and international partners.
                </p>
                <p>
                  We handle private transport, licensed guides, hotel
                  reservations, entrance tickets, bus and train bookings, and
                  custom itinerary planning. Whether you are arriving as a
                  family, a school group, a corporate delegation, or a private
                  party exploring Europe, we take care of every detail from
                  arrival to departure.
                </p>
                <p>
                  We believe a great journey is about more than reaching a
                  destination. It is about discovering culture, creating
                  meaningful experiences, and making memories that last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MISSION & VISION ===== */}
        <section className="bg-white py-10 lg:py-12" aria-label="Our mission and vision">
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-7">
              {/* Mission */}
              <article className="relative bg-gradient-to-br from-[#0f4f47] to-[#0a3a35] text-white rounded-2xl p-8 lg:p-10 shadow-[0_20px_40px_-20px_rgba(15,79,71,0.4)] hover:shadow-[0_30px_55px_-20px_rgba(15,79,71,0.55)] hover:-translate-y-1 transition-all duration-500 overflow-hidden border border-[#4dd4ac]/15">
                {/* Soft mint glow */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#4dd4ac]/15 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                {/* Dot pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #4dd4ac 1px, transparent 1.2px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4dd4ac] mb-5 shadow-md">
                    <Compass className="w-5 h-5 text-[#0f4f47]" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <h3 className="text-[22px] md:text-[24px] font-bold text-white tracking-tight mb-4">
                    Our Mission
                  </h3>
                  <span
                    className="block w-10 h-px bg-[#4dd4ac] mb-5"
                    aria-hidden="true"
                  />
                  <p className="text-[15.5px] text-white/85 leading-[1.85] font-light">
                    To provide reliable, well-organized, and memorable travel
                    services in Poland and Europe, helping every guest enjoy a
                    smooth, authentic, and meaningful journey.
                  </p>
                </div>
              </article>

              {/* Vision */}
              <article className="relative bg-gradient-to-br from-[#0f4f47] to-[#0a3a35] text-white rounded-2xl p-8 lg:p-10 shadow-[0_20px_40px_-20px_rgba(15,79,71,0.4)] hover:shadow-[0_30px_55px_-20px_rgba(15,79,71,0.55)] hover:-translate-y-1 transition-all duration-500 overflow-hidden border border-[#4dd4ac]/15">
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#4dd4ac]/15 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #4dd4ac 1px, transparent 1.2px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4dd4ac] mb-5 shadow-md">
                    <Sparkles className="w-5 h-5 text-[#0f4f47]" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <h3 className="text-[22px] md:text-[24px] font-bold text-white tracking-tight mb-4">
                    Our Vision
                  </h3>
                  <span
                    className="block w-10 h-px bg-[#4dd4ac] mb-5"
                    aria-hidden="true"
                  />
                  <p className="text-[15.5px] text-white/85 leading-[1.85] font-light">
                    To be a trusted Krakow travel company known for local
                    expertise, warm hospitality, and professional service for
                    groups, families, schools, corporate clients, and travel
                    partners.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== TRUST / STATISTICS ===== */}
        <section
          className="bg-[#f5faf8] py-14 lg:py-16"
          aria-label="Why travel partners choose us"
        >
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 lg:mb-12">
                <h2 className="text-2xl md:text-[30px] font-bold text-[#0f4f47] tracking-tight leading-tight">
                  Why Travel Partners Choose Us
                </h2>
                <span
                  className="block w-12 h-0.5 bg-[#4dd4ac] mx-auto mt-5 rounded-full"
                  aria-hidden="true"
                />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-2 lg:gap-x-0 relative">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      data-testid={`stat-${idx}`}
                      className={[
                        'relative flex flex-col items-center text-center px-3',
                        // Vertical dividers on desktop only (between items)
                        idx < stats.length - 1
                          ? 'lg:after:content-[""] lg:after:absolute lg:after:top-2 lg:after:bottom-2 lg:after:right-0 lg:after:w-px lg:after:bg-[#0f4f47]/12'
                          : '',
                      ].join(' ')}
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#0f4f47]/15 text-[#0f4f47] mb-4">
                        <Icon className="w-[18px] h-[18px]" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      <p className="text-[32px] md:text-[38px] font-bold text-[#0f4f47] leading-none tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-[12px] md:text-[12.5px] tracking-[0.18em] uppercase text-gray-500 font-medium mt-3">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
