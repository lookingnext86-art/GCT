import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Crown,
  ArrowRight,
  ArrowUpRight,
  LayoutGrid,
  Camera,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ===================================================================
// HERO BANNER — Malbork Castle (Poland)
// ===================================================================
const HERO_IMAGE =
  'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/3itykgjh_Malbork%20castle%20Poland.jpg';

// ===================================================================
// TRAVEL STORIES
// Replace `images: [main, top, bottom]` with real photos when ready.
// Each story uses a 3-photo collage:
//   - LEFT (tall main image)
//   - RIGHT-TOP (smaller)
//   - RIGHT-BOTTOM (smaller)
// ===================================================================
const stories = [
  {
    id: 'summer-family-dubai',
    icon: Users,
    title: 'Summer Family from Dubai',
    description:
      'A beautiful family exploring Kraków’s Old Town and the breathtaking Tatra Mountains with private guides.',
    images: [
      // Replace with real photos
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg',
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-2.jpg',
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-3.jpg',
    ],
    imageAlts: [
      'Dubai family in Krakow Main Market Square — premium family tour Poland by Green Continent Tours',
      'Family at Morskie Oko lake in Tatra Mountains Zakopane Poland — private family tour',
      'Dubai family dining in traditional Polish restaurant in Krakow Old Town',
    ],
  },
  {
    id: 'friends-zakopane',
    icon: Users,
    title: 'Friends Trip to Zakopane',
    description:
      'Good friends, stunning views, and unforgettable moments in the heart of the Polish mountains.',
    images: [
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-4.jpg',
      'https://greencontinenttours.com/GCT-asset/Slider/Slider-1.jpg',
      'https://greencontinenttours.com/GCT-asset/Slider/Slider-2.jpg',
    ],
    imageAlts: [
      'Friends group photo in Tatra Mountains near Zakopane Poland — group tour by Green Continent Tours',
      'Friends riding cable car in Zakopane Poland with panoramic mountain views',
      'Group of travelers at a wooden mountain lodge in Zakopane during a private tour',
    ],
  },
  {
    id: 'iranian-family-krakow',
    icon: Users,
    title: 'Iranian Family Exploring Kraków',
    description:
      'Discovering history, culture, and the beauty of Poland together — a tailored Krakow family experience.',
    images: [
      'https://greencontinenttours.com/GCT-asset/Slider/Slider-4.jpg',
      'https://greencontinenttours.com/GCT-asset/info/first.jpg',
      'https://greencontinenttours.com/GCT-asset/info/second.jpg',
    ],
    imageAlts: [
      'Iranian family at Krakow Main Market Square with Adam Mickiewicz monument — family tour Poland',
      'Family enjoying halal dining in a traditional Krakow restaurant during their Poland trip',
      'Iranian family visiting Wawel Royal Castle in Krakow Poland — premium family tour',
    ],
  },
  {
    id: 'private-poland-journey',
    icon: Crown,
    title: 'Private Poland Journey',
    description:
      'A private journey across Poland designed with care, comfort, and unforgettable moments at every stop.',
    images: [
      'https://greencontinenttours.com/GCT-asset/info/third.jpg',
      'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg',
      'https://greencontinenttours.com/GCT-asset/Slider/Slider-1.jpg',
    ],
    imageAlts: [
      'Private group with luxury vehicle on a scenic Polish countryside road — premium private tour',
      'Private travel guests enjoying coffee in an elegant Krakow café',
      'Premium private tour group exploring a historic Polish city street',
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
        {/* ===== HERO ===== */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="gallery-heading"
        >
          <div className="relative h-[420px] md:h-[520px] lg:h-[600px] w-full">
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
            {/* Cinematic overlays */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0a3a35]/85 via-[#0a3a35]/55 to-[#0a3a35]/40"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0a3a35]/30 via-transparent to-[#0a3a35]/80"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex items-center pb-8">
              <div className="container mx-auto px-5 md:px-6 lg:px-8 w-full">
                <div className="max-w-3xl text-white">
                  <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#4dd4ac] mb-6">
                    Our Gallery
                  </p>
                  <h1
                    id="gallery-heading"
                    className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.05] mb-6 drop-shadow-lg"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    Real Journeys.<br />Real Moments.
                  </h1>
                  <p className="text-base md:text-lg text-gray-100/90 font-light max-w-xl leading-relaxed drop-shadow">
                    Memories from our amazing guests who traveled with us across
                    Poland &amp; beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STORIES GRID ===== */}
        <section className="bg-[#0a3a35] py-16 lg:py-20" aria-label="Travel stories">
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Section heading row */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 lg:mb-14">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#4dd4ac]">
                      Travel Stories
                    </p>
                    <span className="hidden md:inline-block w-12 h-px bg-[#4dd4ac]/50" />
                  </div>
                  <p className="text-base text-white/65 font-light max-w-xl leading-relaxed">
                    Real guests. Real experiences. Real memories.
                  </p>
                </div>
                <div
                  className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-white/70 border border-white/15 rounded-full px-4 py-2.5"
                  data-testid="gallery-photo-count"
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-[#4dd4ac]" aria-hidden="true" />
                  {stories.length} {stories.length === 1 ? 'Story' : 'Stories'}
                </div>
              </div>

              {/* Stories list */}
              <div className="space-y-6 lg:space-y-7">
                {stories.map((story) => {
                    const Icon = story.icon;
                    return (
                      <article
                        key={story.id}
                        className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] gap-px bg-white/10 rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-[#4dd4ac]/40 transition-all duration-300"
                        data-testid={`story-${story.id}`}
                      >
                        {/* TEXT COLUMN */}
                        <div className="bg-[#0a3a35] p-7 lg:p-8 flex flex-col justify-between">
                          <div>
                            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#4dd4ac]/12 mb-5">
                              <Icon className="w-4 h-4 text-[#4dd4ac]" strokeWidth={1.8} aria-hidden="true" />
                            </span>
                            <h3
                              className="text-[22px] md:text-[24px] font-semibold text-white tracking-tight leading-tight mb-4"
                              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                            >
                              {story.title}
                            </h3>
                            <p className="text-[14.5px] text-white/70 font-light leading-[1.75]">
                              {story.description}
                            </p>
                          </div>
                          <Link
                            to="/contact"
                            data-testid={`story-${story.id}-cta`}
                            className="group/btn inline-flex items-center gap-2 mt-7 text-[12px] font-semibold tracking-[0.2em] uppercase text-[#4dd4ac] hover:text-white transition-colors w-fit"
                          >
                            View Story
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                          </Link>
                        </div>

                        {/* PHOTO COLLAGE COLUMN — main + top-right + bottom-right */}
                        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[280px] overflow-hidden bg-[#0a3a35]">
                          <img
                            src={story.images[0]}
                            alt={story.imageAlts[0]}
                            className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                            loading="lazy"
                            decoding="async"
                            style={{ filter: 'saturate(0.92) contrast(1.04)' }}
                          />
                        </div>
                        <div className="grid grid-rows-2 gap-px bg-white/10">
                          <div className="relative overflow-hidden bg-[#0a3a35]">
                            <img
                              src={story.images[1]}
                              alt={story.imageAlts[1]}
                              className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                              loading="lazy"
                              decoding="async"
                              style={{ filter: 'saturate(0.92) contrast(1.04)' }}
                            />
                          </div>
                          <div className="relative overflow-hidden bg-[#0a3a35]">
                            <img
                              src={story.images[2]}
                              alt={story.imageAlts[2]}
                              className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                              loading="lazy"
                              decoding="async"
                              style={{ filter: 'saturate(0.92) contrast(1.04)' }}
                            />
                          </div>
                        </div>
                      </article>
                    );
                  })}
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
