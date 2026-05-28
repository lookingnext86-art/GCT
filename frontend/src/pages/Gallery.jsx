import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ===================================================================
// HERO BANNER — Malbork Castle (Poland)
// ===================================================================
const HERO_IMAGE =
  'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/3itykgjh_Malbork%20castle%20Poland.jpg';

// ===================================================================
// PHOTO COLLAGES
// Each collage is a 3-photo triptych: [main (left, tall), top-right, bottom-right]
// Replace these with real photos when ready.
// ===================================================================
const collages = [
  {
    id: 'collage-1',
    images: [
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg',
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-2.jpg',
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-3.jpg',
    ],
    imageAlts: [
      'Family group photo on a Krakow Poland private tour with Green Continent Tours',
      'Travelers in Krakow Main Market Square during a premium Poland tour',
      'Group of guests enjoying a guided Krakow city walking tour',
    ],
  },
  {
    id: 'collage-2',
    images: [
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-4.jpg',
      'https://greencontinenttours.com/GCT-asset/Slider/Slider-1.jpg',
      'https://greencontinenttours.com/GCT-asset/Slider/Slider-2.jpg',
    ],
    imageAlts: [
      'Friends group on a Zakopane mountain tour in Poland by Green Continent Tours',
      'Travelers exploring the Tatra Mountains near Zakopane Poland',
      'Group of friends at a scenic mountain viewpoint in Poland',
    ],
  },
  {
    id: 'collage-3',
    images: [
      'https://greencontinenttours.com/GCT-asset/Slider/Slider-4.jpg',
      'https://greencontinenttours.com/GCT-asset/info/first.jpg',
      'https://greencontinenttours.com/GCT-asset/info/second.jpg',
    ],
    imageAlts: [
      'International family discovering historic Krakow with a private guide',
      'Travelers visiting Wawel Royal Castle in Krakow Poland',
      'Family enjoying a traditional Polish dinner in a Krakow restaurant',
    ],
  },
  {
    id: 'collage-4',
    images: [
      'https://greencontinenttours.com/GCT-asset/info/third.jpg',
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg',
      'https://greencontinenttours.com/GCT-asset/Slider/Slider-1.jpg',
    ],
    imageAlts: [
      'Private Poland journey with luxury vehicle and scenic Polish countryside',
      'Premium private tour guests in an elegant Krakow setting',
      'Private travel group enjoying a historic Polish street tour',
    ],
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
      'Real journeys, real moments — travel gallery of premium private and group tours across Poland, Kraków, Zakopane, and beyond by Green Continent Tours.'
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
        {/* ===== HERO (compact) ===== */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="gallery-heading"
        >
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

        {/* ===== COLLAGES (pure visual, no labels) ===== */}
        <section
          className="bg-[#0a3a35] py-12 lg:py-16"
          aria-label="Travel photo collages"
        >
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-5 lg:space-y-6">
              {collages.map((collage) => (
                <div
                  key={collage.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-[#4dd4ac]/40 transition-all duration-300"
                  data-testid={collage.id}
                >
                  {/* LEFT: main tall photo */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden bg-[#0a3a35] group">
                    <img
                      src={collage.images[0]}
                      alt={collage.imageAlts[0]}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                      style={{ filter: 'saturate(0.92) contrast(1.04)' }}
                    />
                  </div>

                  {/* RIGHT: two stacked photos */}
                  <div className="grid grid-rows-2 gap-px bg-white/10">
                    <div className="relative overflow-hidden bg-[#0a3a35] group">
                      <img
                        src={collage.images[1]}
                        alt={collage.imageAlts[1]}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                        style={{ filter: 'saturate(0.92) contrast(1.04)' }}
                      />
                    </div>
                    <div className="relative overflow-hidden bg-[#0a3a35] group">
                      <img
                        src={collage.images[2]}
                        alt={collage.imageAlts[2]}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                        style={{ filter: 'saturate(0.92) contrast(1.04)' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
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
