import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ===================================================================
// HERO BANNER — Malbork Castle, Poland
// ===================================================================
const HERO_IMAGE =
  'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/3itykgjh_Malbork%20castle%20Poland.jpg';

// ===================================================================
// EDITORIAL MASONRY GRID — 15 photos
// Each photo has a chosen `aspect` class so the masonry feels editorial
// (mix of tall, square, and landscape tiles). No labels are rendered.
// ===================================================================
const photos = [
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/cprhrwla_Krakow%20PL.png',
    alt: 'International tour group at Krakow Main Market Square with Town Hall Tower and Cloth Hall — premium Poland city tours by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/qgck4voh_krakow-old-town-tour-02.jpg',
    alt: 'Premium Poland tour group at Wawel Royal Castle in Krakow — historic Old Town walking tour by Green Continent Tours',
    aspect: 'aspect-[4/5]',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/iwhav0fg_poland-premium-travel-01.jpg',
    alt: 'Premium Europe tour group at Saint Pierre Cathedral in Geneva Switzerland — luxury multi-country journey by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/bncl0foi_krakow-city-experience-06.jpg',
    alt: 'Large family tour group at the Rhine Falls in Switzerland — multi-day Europe and Poland travel experience by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/59bb8fuj_poland-family-vacation-15.jpg',
    alt: 'Travelers at Warsaw Old Town Castle Square at sunset with Sigismund Column — premium Poland family vacation by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/eb14ybk4_krakow-historic-center-09.jpg',
    alt: 'Family tour group at Schönbrunn Palace in Vienna Austria — premium Central Europe travel experience by Green Continent Tours',
    aspect: 'aspect-[4/5]',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/rqo4b5lu_krakow-city-experience-16.jpg',
    alt: 'Travelers at the Hungarian Parliament building in Budapest — premium Poland and Central Europe tour by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/cvmp4f11_krakow-old-town-tour-12.jpg',
    alt: 'Scenic view of Lisbon Alfama district with red rooftops from a Portuguese miradouro — Poland and Europe travel experience by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/3naoktxo_zakopane-mountain-trip-13.jpg',
    alt: 'Cheerful tour group at Lauterbrunnen valley waterfall in the Swiss Alps — Zakopane and mountain tours extension by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/vkigqzos_poland-family-vacation-05.jpg',
    alt: 'Multi-generational family group at the Venice waterfront with gondolas — premium Poland and Italy family vacation by Green Continent Tours',
    aspect: 'aspect-[4/5]',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/88y72qrk_luxury-poland-tour-08.jpg',
    alt: 'Luxury tour group at the Dolder Grand Hotel in Zürich Switzerland — premium Poland and Europe travel experience by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/2iwinora_poland-travel-guide-10.jpg',
    alt: 'River cruise ship on the Danube in Vienna with St. Francis of Assisi Church — Poland and Central Europe travel guide by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/b0tf48hx_wawel-castle-view-04.jpg',
    alt: 'Travel group at an elegant evening venue with Mediterranean arches during a premium Poland and Europe tour by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/a15jhw24_zakopane-mountain-trip-03.jpg',
    alt: 'Tour group at the historic Düsseldorf Rathaus town hall with red flower boxes — premium Europe and Poland tours by Green Continent Tours',
    aspect: 'aspect-square',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/rrfs0od3_wawel-castle-view-14.jpg',
    alt: 'Lively travel group in a lush green botanical garden during a premium Poland and Europe nature tour by Green Continent Tours',
    aspect: 'aspect-square',
  },
];

// ===================================================================
// COMPONENT
// ===================================================================
const Gallery = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      'Real Journeys. Real Moments. — Travel Gallery | Green Continent Tours';
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
      'Real journeys, real moments — editorial travel gallery of premium private and group tours across Poland, Kraków, Zakopane, Warsaw, and beyond by Green Continent Tours.'
    );
    setMeta('og:title', 'Real Journeys. Real Moments. — Travel Gallery', 'property');
    setMeta(
      'og:description',
      'Memories from our amazing guests who traveled with us across Poland & beyond.',
      'property'
    );
    setMeta('og:image', HERO_IMAGE, 'property');
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a3a35]" data-testid="gallery-page">
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden" aria-labelledby="gallery-heading">
          <div className="relative h-[320px] md:h-[380px] lg:h-[440px] w-full">
            <img
              src={HERO_IMAGE}
              alt="Malbork Castle in Poland at golden hour reflecting on the Nogat River — premium Poland travel gallery by Green Continent Tours"
              title="Malbork Castle, Poland — Real Journeys, Real Moments"
              width="2400"
              height="1300"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              style={{ filter: 'saturate(0.95) contrast(1.05) brightness(0.85)' }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0a3a35]/85 via-[#0a3a35]/55 to-[#0a3a35]/40"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0a3a35]/30 via-transparent to-[#0a3a35]/80"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-5 md:px-6 lg:px-8 w-full">
                <div className="max-w-3xl text-white">
                  <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#4dd4ac] mb-4">
                    Our Gallery
                  </p>
                  <h1
                    id="gallery-heading"
                    className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold tracking-tight leading-[1.05] mb-4 drop-shadow-lg"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    Real Journeys.<br />Real Moments.
                  </h1>
                  <p className="text-sm md:text-base text-gray-100/90 font-light max-w-xl leading-relaxed drop-shadow">
                    Memories from our amazing guests who traveled with us across
                    Poland &amp; beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EDITORIAL MASONRY ===== */}
        <section
          className="bg-[#0a3a35] py-12 lg:py-16"
          aria-label="Editorial travel gallery"
        >
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div
                className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-5 [column-fill:_balance]"
                data-testid="masonry-grid"
              >
                {photos.map((photo, idx) => (
                  <figure
                    key={idx}
                    className={`mb-4 lg:mb-5 break-inside-avoid rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-[#4dd4ac]/40 shadow-[0_15px_35px_-20px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_50px_-20px_rgba(77,212,172,0.25)] transition-all duration-500 group ${photo.aspect}`}
                    data-testid={`masonry-photo-${idx + 1}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width="1200"
                      height="1200"
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[800ms] ease-out"
                      loading={idx < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                      style={{
                        filter:
                          'saturate(0.88) contrast(1.06) brightness(0.95)',
                      }}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== BOTTOM CTA STRIP ===== */}
        <section
          className="bg-[#0a3a35] border-t border-white/10"
          aria-label="Plan your trip CTA"
        >
          <div className="container mx-auto px-5 md:px-6 lg:px-8 py-10 lg:py-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#4dd4ac]/12 shrink-0">
                  <Camera className="w-5 h-5 text-[#4dd4ac]" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <div>
                  <p
                    className="text-xl md:text-[22px] font-semibold text-white leading-tight"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    Every photo tells a story.
                  </p>
                  <p className="text-[14.5px] text-white/65 font-light mt-1">
                    What will your story look like?
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                data-testid="gallery-start-journey"
                className="group inline-flex items-center justify-center gap-2.5 border border-[#4dd4ac]/50 text-[#4dd4ac] hover:bg-[#4dd4ac] hover:text-[#0f4f47] px-7 py-3.5 rounded-full font-semibold text-[12px] tracking-[0.25em] uppercase transition-all duration-300 w-fit"
              >
                Start Your Journey
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
