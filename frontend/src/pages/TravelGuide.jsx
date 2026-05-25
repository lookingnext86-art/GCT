import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE = 'Hello, I would like help planning my Poland trip.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const categories = [
  { id: 'all', label: 'All Articles' },
  { id: 'krakow', label: 'Krakow' },
  { id: 'family-travel', label: 'Family Travel' },
  { id: 'poland-tips', label: 'Poland Tips' },
  { id: 'winter-travel', label: 'Winter Travel' },
  { id: 'europe', label: 'Europe' },
];

const articles = [
  {
    slug: 'halal-tourism',
    href: '/travel-guide/halal-tourism',
    title: 'Halal Tourism in Krakow: A Complete Muslim Travel Guide',
    excerpt: 'Halal restaurants, prayer facilities, and Muslim-friendly hotels for travelers visiting Krakow and Poland.',
    image: 'https://greencontinenttours.com/GCT-asset/Slider/Slider-1.jpg',
    imageAlt: 'Krakow Old Town at sunset — halal tourism guide by Green Continent Tours',
    category: 'krakow',
    categoryLabel: 'Krakow',
    readTime: '12 min read',
    date: 'May 18, 2026',
    author: 'Green Continent Tours',
  },
  {
    slug: 'hidden-gems',
    href: '/travel-guide/hidden-gems',
    title: '15 Hidden Gems in Poland Most Tourists Miss',
    excerpt: 'Off-the-beaten-path castles, medieval villages, and pristine nature reserves — beyond Krakow and Warsaw.',
    image: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-4.jpg',
    imageAlt: 'Hidden gems in Poland — secret destinations beyond Krakow',
    category: 'poland-tips',
    categoryLabel: 'Poland Tips',
    readTime: '15 min read',
    date: 'May 15, 2026',
    author: 'Green Continent Tours',
  },
  {
    slug: 'avoid-mistakes',
    href: '/travel-guide/avoid-mistakes',
    title: '10 Tourist Mistakes & Scams to Avoid in Poland',
    excerpt: 'Common Krakow taxi scams, overpriced restaurants, and currency exchange traps — travel safely and save money.',
    image: 'https://greencontinenttours.com/GCT-asset/Slider/Slider-2.jpg',
    imageAlt: 'Krakow travel tips — avoid tourist mistakes and scams',
    category: 'poland-tips',
    categoryLabel: 'Poland Tips',
    readTime: '10 min read',
    date: 'May 10, 2026',
    author: 'Green Continent Tours',
  },
  {
    slug: 'group-tours',
    href: '/travel-guide/group-tours',
    title: 'Best Group Tours in Poland for Families & Corporate Teams',
    excerpt: 'Top-rated Krakow group tours, Auschwitz visits, Zakopane trips, and custom multi-day Poland itineraries.',
    image: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg',
    imageAlt: 'Family group tour in Poland — Krakow and Zakopane travel packages',
    category: 'family-travel',
    categoryLabel: 'Family Travel',
    readTime: '14 min read',
    date: 'May 5, 2026',
    author: 'Green Continent Tours',
  },
];

const TravelGuide = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const filteredArticles = useMemo(() => {
    const lower = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = activeCategory === 'all' || a.category === activeCategory;
      const matchesQuery =
        !lower ||
        a.title.toLowerCase().includes(lower) ||
        a.excerpt.toLowerCase().includes(lower) ||
        a.categoryLabel.toLowerCase().includes(lower);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* ===== HERO — full-width Wawel sunrise banner with overlay copy ===== */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="travel-guide-heading"
          data-testid="travel-guide-hero"
        >
          {/* Background photo */}
          <div className="relative h-[440px] md:h-[520px] lg:h-[580px] w-full">
            <img
              src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/6otte63q_krakow-wawel-castle-sunrise-travel-guide.png"
              alt="Krakow Wawel Castle at sunrise — Green Continent Tours Travel Guide"
              title="Travel Guide — Krakow, Wawel Castle at sunrise"
              width="2400"
              height="1200"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />

            {/* Premium tinted overlays for text readability + brand match */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0f4f47]/85 via-[#0f4f47]/55 to-[#0f4f47]/15"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 left-0 w-2/3 backdrop-blur-[2px] bg-gradient-to-r from-[#0a3a35]/40 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0f4f47]/15 via-transparent to-[#0f4f47]/30"
              aria-hidden="true"
            />

            {/* Copy */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white">
                  <p
                    className="text-[15px] md:text-base text-[#4dd4ac] mb-3 italic tracking-wide drop-shadow"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Travel Guide
                  </p>
                  <h1
                    id="travel-guide-heading"
                    className="text-4xl md:text-5xl lg:text-[3.6rem] font-bold tracking-tight leading-[1.05] mb-5 drop-shadow-lg"
                  >
                    Explore. Learn. <br />
                    Travel Better.
                  </h1>
                  <p className="text-base md:text-lg text-gray-100/95 font-light leading-relaxed mb-7 max-w-xl drop-shadow">
                    Local insights, practical tips and inspiration to help you
                    explore Poland and beyond with confidence.
                  </p>

                  {/* Search */}
                  <div className="relative max-w-md" data-testid="travel-search">
                    <Search
                      className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0f4f47]/60"
                      aria-hidden="true"
                    />
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search articles..."
                      aria-label="Search travel articles"
                      data-testid="travel-search-input"
                      className="w-full pl-14 pr-5 py-3.5 rounded-full bg-white/95 backdrop-blur-sm border border-white/40 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)] text-[15px] text-[#0f4f47] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4dd4ac] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ARTICLES + SIDEBAR ===== */}
        <section className="bg-white py-16 lg:py-20" aria-labelledby="articles-heading">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">
              {/* === MAIN COLUMN === */}
              <div>
                {/* Browse by Topic */}
                <div className="mb-8">
                  <h2
                    id="articles-heading"
                    className="text-2xl md:text-3xl font-bold text-[#0f4f47] mb-5 tracking-tight"
                  >
                    Browse by Topic
                  </h2>
                  <div className="flex flex-wrap gap-2.5" data-testid="category-filters">
                    {categories.map((cat) => {
                      const active = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setActiveCategory(cat.id)}
                          data-testid={`filter-${cat.id}`}
                          aria-pressed={active}
                          className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                            active
                              ? 'bg-[#0f4f47] text-white shadow-md'
                              : 'bg-white text-[#0f4f47] border border-gray-200 hover:border-[#4dd4ac] hover:text-[#1a6b5f]'
                          }`}
                        >
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Articles grid */}
                {filteredArticles.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-6 lg:gap-7" data-testid="articles-grid">
                    {filteredArticles.map((article) => (
                      <Link
                        key={article.slug}
                        to={article.href}
                        data-testid={`article-card-${article.slug}`}
                        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_-10px_rgba(15,79,71,0.1)] hover:shadow-[0_25px_50px_-20px_rgba(15,79,71,0.25)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
                      >
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.imageAlt}
                            title={article.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Category badge */}
                          <span className="absolute top-4 left-4 bg-[#0f4f47] text-[#4dd4ac] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full shadow-md">
                            {article.categoryLabel}
                          </span>
                          {/* Read time */}
                          <span className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            {article.readTime}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-lg md:text-[19px] font-bold text-[#0f4f47] tracking-tight leading-snug mb-2 group-hover:text-[#1a6b5f] transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-5 flex-1">
                            {article.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                              <time dateTime={article.date}>{article.date}</time>
                            </div>
                            <span className="text-[#0f4f47] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div
                    className="text-center py-16 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50"
                    data-testid="no-results"
                  >
                    <p className="text-[#0f4f47] font-semibold mb-1">No articles found</p>
                    <p className="text-sm text-gray-500">
                      Try a different topic or clear your search.
                    </p>
                  </div>
                )}
              </div>

              {/* === SIDEBAR === */}
              <aside className="space-y-6 lg:sticky lg:top-28 self-start" aria-label="Sidebar">
                {/* About Our Guides */}
                <div className="bg-gradient-to-br from-[#f5faf8] to-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0f4f47] mb-2 tracking-tight">
                    About Our Guides
                  </h3>
                  <div className="w-8 h-px bg-[#4dd4ac] mb-3" aria-hidden="true" />
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                    Our travel guides are written by Krakow-based experts who explore,
                    experience, and share only the most useful tips to make your trip
                    unforgettable.
                  </p>
                  <Link
                    to="/about"
                    data-testid="sidebar-about-link"
                    className="inline-flex items-center gap-1.5 text-sm text-[#0f4f47] hover:text-[#1a6b5f] font-semibold transition-colors"
                  >
                    Learn more about us
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>

                {/* Popular Articles */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0f4f47] mb-4 tracking-tight">
                    Popular Articles
                  </h3>
                  <ul className="space-y-4">
                    {articles.slice(0, 4).map((a) => (
                      <li key={a.slug}>
                        <Link
                          to={a.href}
                          className="flex gap-3 group"
                          data-testid={`sidebar-popular-${a.slug}`}
                        >
                          <img
                            src={a.image}
                            alt={a.imageAlt}
                            loading="lazy"
                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-semibold text-[#0f4f47] leading-snug line-clamp-2 group-hover:text-[#1a6b5f] transition-colors">
                              {a.title}
                            </p>
                            <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                              <Clock className="w-3 h-3" aria-hidden="true" />
                              {a.readTime}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Need Help CTA */}
                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] rounded-2xl p-6 text-white shadow-md">
                  <h3 className="text-lg font-bold mb-2 tracking-tight">
                    Need Help Planning Your Trip?
                  </h3>
                  <p className="text-[13px] text-gray-100/85 font-light leading-relaxed mb-5">
                    Our Krakow team is here to help you plan the perfect Polish journey.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="sidebar-whatsapp-cta"
                    aria-label="Chat with our team on WhatsApp"
                    className="inline-flex w-full items-center justify-center gap-2 bg-[#4dd4ac] text-[#0f4f47] px-5 py-3 rounded-full font-bold text-[13px] tracking-wide hover:bg-white transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ===== BOTTOM CTA ===== */}
        <section
          className="relative overflow-hidden py-16 lg:py-20"
          data-testid="travel-guide-bottom-cta"
          aria-labelledby="ready-to-explore-heading"
        >
          {/* Placeholder for user-supplied bottom banner photo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f4f47] via-[#1a6b5f] to-[#0f4f47]" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: 'radial-gradient(circle, #4dd4ac 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4 border border-[#4dd4ac]/40 px-3.5 py-1.5 rounded-full">
                Ready When You Are
              </p>
              <h2
                id="ready-to-explore-heading"
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-4 tracking-tight leading-tight"
              >
                Ready to Explore Poland?
              </h2>
              <p className="text-base md:text-lg text-gray-100/85 font-light mb-8 max-w-xl mx-auto">
                Let us design a personalized Polish itinerary for you — trusted by travelers worldwide.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="travel-guide-cta-btn"
                aria-label="Plan your Poland trip on WhatsApp"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#4dd4ac] text-[#0f4f47] px-8 py-4 rounded-full font-bold text-[15px] tracking-wide shadow-[0_15px_40px_-15px_rgba(77,212,172,0.7)] hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
              >
                Plan Your Trip
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TravelGuide;
