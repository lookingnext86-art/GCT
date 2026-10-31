import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  Compass,
  MapPin,
  Sparkles,
  Mountain,
  Castle,
  Trees,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE =
  'Hello, I would like to plan a hidden-gems trip across Poland — off the beaten path.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ⬇️ Swap these two URLs when uploading new SEO-friendly photos.
const HERO_IMAGE = '/images/articles/hidden-gems/poland-hidden-gems-secret-castles.webp';
const MID_IMAGE = '/images/articles/hidden-gems/off-the-beaten-path-poland-travel.webp';

const overviewItems = [
  { label: 'Topic', value: 'Off-the-Beaten-Path', icon: Compass },
  { label: 'Reading', value: '15 min read', icon: Clock },
  { label: 'Hidden Places', value: '15 Destinations', icon: MapPin },
  { label: 'Regions', value: 'All Across Poland', icon: Mountain },
  { label: 'Best For', value: 'Curious Travelers', icon: Sparkles },
  { label: 'Travel Style', value: 'Slow & Authentic', icon: Trees },
];

const gems = [
  {
    id: 'lanckorona',
    label: 'Gem 1',
    title: 'Lanckorona',
    body:
      'A quiet hilltop village just outside Kraków, Lanckorona feels frozen in time. Wooden cottages line the narrow streets, artists sell handmade crafts from tiny studios, and old cafés overlook rolling green hills. It is the perfect escape from city crowds.',
  },
  {
    id: 'moszna-palace',
    label: 'Gem 2',
    title: 'Pałac w Mosznej',
    body:
      'Often called Poland’s fairy-tale castle, Moszna Palace looks straight out of a fantasy movie. With 99 towers and dramatic architecture, it remains surprisingly overlooked by international tourists. The gardens surrounding the palace are especially beautiful during spring.',
  },
  {
    id: 'crooked-forest',
    label: 'Gem 3',
    title: 'Krzywy Las (The Crooked Forest)',
    body:
      'Near the German border lies one of Poland’s strangest natural mysteries — a forest where hundreds of pine trees curve sharply near the base before growing upward again. No one fully knows why they were shaped this way.',
  },
  {
    id: 'sandomierz',
    label: 'Gem 4',
    title: 'Sandomierz',
    body:
      'This peaceful medieval town sits above the Vistula River and offers beautiful old streets without the crowds of Kraków. Underground tunnels run beneath the town square, adding even more mystery to its atmosphere.',
  },
  {
    id: 'bledne-skaly',
    label: 'Gem 5',
    title: 'Błędne Skały',
    body:
      'Hidden in the Stołowe Mountains, this maze of giant rock formations creates one of Poland’s most magical hiking experiences. Narrow stone corridors and towering cliffs make visitors feel like they have stepped into another world.',
  },
  {
    id: 'chelm-tunnels',
    label: 'Gem 6',
    title: 'Chełm Chalk Tunnels',
    body:
      'Beneath the quiet eastern town of Chełm lies a fascinating network of underground chalk tunnels. The tunnels date back centuries and are filled with local legends, hidden chambers, and unusual acoustics.',
  },
  {
    id: 'zalipie',
    label: 'Gem 7',
    title: 'Zalipie',
    body:
      'This tiny village is famous for its hand-painted floral houses. Nearly every home, fence, barn, and even doghouse is decorated with colorful flower patterns — a tradition started by local women generations ago.',
  },
  {
    id: 'ksiaz-castle',
    label: 'Gem 8',
    title: 'Książ Castle',
    body:
      'Hidden among forests in Lower Silesia, Książ Castle combines dramatic architecture with dark history. Beneath the castle are mysterious tunnels connected to secret Nazi projects during World War II.',
  },
  {
    id: 'hel-peninsula',
    label: 'Gem 9',
    title: 'Hel Peninsula',
    body:
      'Stretching into the Baltic Sea, the Hel Peninsula offers peaceful beaches, quiet fishing villages, and fresh sea air far from Poland’s busier tourist resorts. Summer sunsets here are unforgettable.',
  },
  {
    id: 'ojcow',
    label: 'Gem 10',
    title: 'Ojców National Park',
    body:
      'Only a short drive from Kraków, Ojców National Park remains surprisingly unknown to many tourists. Limestone cliffs, hidden caves, forest trails, and medieval castle ruins create a perfect day trip into nature.',
  },
  {
    id: 'tykocin',
    label: 'Gem 11',
    title: 'Tykocin',
    body:
      'Tykocin is one of Poland’s most atmospheric small towns. Wooden houses, cobbled streets, and deep Jewish history give the town a calm and reflective feeling rarely found in modern Europe.',
  },
  {
    id: 'wigry-lake',
    label: 'Gem 12',
    title: 'Wigry Lake',
    body:
      'Located in northeastern Poland, Wigry Lake is surrounded by untouched forests and peaceful landscapes. The area is ideal for kayaking, cycling, or simply disconnecting from busy city life.',
  },
  {
    id: 'czocha-castle',
    label: 'Gem 13',
    title: 'Zamek Czocha',
    body:
      'Czocha Castle is full of secret passages, hidden rooms, and old legends. Unlike Poland’s more famous castles, it still feels mysterious and unexplored — especially during evening tours.',
  },
  {
    id: 'bieszczady',
    label: 'Gem 14',
    title: 'Bieszczady Mountains',
    body:
      'The Bieszczady region is Poland’s wildest mountain escape. Empty hiking trails, wooden churches, remote villages, and rolling green hills make it one of the country’s most peaceful destinations.',
  },
  {
    id: 'nikiszowiec',
    label: 'Gem 15',
    title: 'Nikiszowiec',
    body:
      'This historic workers’ district in Katowice has transformed into one of Poland’s coolest hidden neighborhoods. Red-brick buildings, artistic cafés, and local galleries give it a completely different atmosphere from the rest of the city.',
  },
];

const whyHiddenReasons = [
  'Fewer crowds, more authentic moments',
  'Fairy-tale castles and medieval villages',
  'Untouched mountain and lake landscapes',
  'Rich local culture and folk traditions',
  'Mysterious tunnels, forests, and legends',
  'Slow travel pace far from the tourist trail',
  'Unforgettable photography opportunities',
];

const HiddenGems = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        path="/travel-guide/hidden-gems"
        image={`https://www.greencontinenttours.com${HERO_IMAGE}`}
        title="Hidden Gems in Poland – 15 Secret Places Tourists Often Miss"
        description="A local's list of 15 hidden gems in Poland — castles, lakes, small towns and off-the-beaten-path spots most international tourists never see."
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
                alt="Hidden gems in Poland — secret castles, painted villages, and off-the-beaten-path destinations by Green Continent Tours"
                title="15 Hidden Gems in Poland — Secret Places Tourists Miss"
                width="2400"
                height="1300"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
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
                      className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.08] mb-4 mt-5 drop-shadow-lg"
                    >
                      Hidden Gems in Poland: 15 Secret Places Tourists Miss
                    </h1>

                    <p className="text-base md:text-lg text-gray-100/95 font-light max-w-2xl leading-relaxed mb-6 drop-shadow">
                      Forgotten castles, painted villages, mysterious forests, and quiet
                      mountain valleys — discover the Poland most travelers never see.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-8 md:gap-x-10 gap-y-2.5 text-[12.5px] text-white/80">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime="2026-05-15">May 15, 2026</time>
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        15 min read
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
                      Poland is famous for places like Kraków, Warsaw, and Zakopane — but the
                      country’s real magic often hides far from the usual tourist routes.
                    </p>
                    <p>
                      Beyond the crowded old towns and famous landmarks, you’ll find forgotten
                      castles, painted villages, mysterious forests, and peaceful mountain
                      valleys that many visitors never discover. Here are 15 hidden gems in
                      Poland that deserve a place on your travel list.
                    </p>
                  </div>

                  {/* Gems timeline */}
                  <div id="gems" className="mt-14 lg:mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-8">
                      15 Hidden Gems in Poland
                    </h2>

                    <ol className="relative border-l-2 border-[#4dd4ac]/30 ml-3 space-y-10">
                      {gems.slice(0, 13).map((gem) => (
                        <li
                          key={gem.id}
                          id={gem.id}
                          className="relative pl-7"
                          data-testid={`gem-${gem.id}`}
                        >
                          <span
                            className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#4dd4ac] ring-4 ring-white shadow-sm"
                            aria-hidden="true"
                          />
                          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-1.5">
                            {gem.label}
                          </p>
                          <h3 className="text-xl md:text-[22px] font-bold text-[#0f4f47] tracking-tight leading-snug mb-2.5">
                            {gem.title}
                          </h3>
                          <p className="text-[15px] text-gray-600 leading-[1.8] font-light">
                            {gem.body}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Mid-article image (Czocha castle vibe — placed right after Gem 13: Czocha) */}
                  <figure className="my-14 lg:my-16">
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-25px_rgba(15,79,71,0.3)]">
                      <img
                        src={MID_IMAGE}
                        alt="Czocha Castle in Lower Silesia Poland with red tiled roofs and stone bridge — hidden gems off-the-beaten-path travel guide"
                        title="Czocha Castle — a hidden gem of Lower Silesia, Poland"
                        width="2000"
                        height="900"
                        className="w-full h-[280px] md:h-[380px] lg:h-[460px] object-cover block"
                        loading="lazy"
                        decoding="async"
                        style={{ filter: 'saturate(0.95) contrast(1.04)', objectPosition: 'center 38%' }}
                      />
                    </div>
                    <figcaption className="mt-3 text-[12.5px] text-gray-400 italic text-center">
                      Czocha Castle — a mysterious fortress hidden in the forests of Lower Silesia, Poland.
                    </figcaption>
                  </figure>

                  {/* Remaining gems (14–15) — continue the timeline */}
                  <div id="more-gems">
                    <ol className="relative border-l-2 border-[#4dd4ac]/30 ml-3 space-y-10">
                      {gems.slice(13).map((gem) => (
                        <li
                          key={gem.id}
                          id={gem.id}
                          className="relative pl-7"
                          data-testid={`gem-${gem.id}`}
                        >
                          <span
                            className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#4dd4ac] ring-4 ring-white shadow-sm"
                            aria-hidden="true"
                          />
                          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-1.5">
                            {gem.label}
                          </p>
                          <h3 className="text-xl md:text-[22px] font-bold text-[#0f4f47] tracking-tight leading-snug mb-2.5">
                            {gem.title}
                          </h3>
                          <p className="text-[15px] text-gray-600 leading-[1.8] font-light">
                            {gem.body}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Why visit Poland’s hidden gems */}
                  <div id="why-hidden" className="mt-14 lg:mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-4">
                      The Other Side of Poland
                    </h2>
                    <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light mb-6">
                      Poland’s most unforgettable places are often the ones missing from
                      guidebooks. Whether you’re exploring hidden castles, painted villages,
                      or quiet mountain valleys, these lesser-known destinations reveal a side
                      of Poland that most tourists never experience.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {whyHiddenReasons.map((reason) => (
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
                          to="/travel-guide/avoid-mistakes"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          What to Avoid in Poland — 10 Common Tourist Mistakes
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5"
                        >
                          Explore our Poland tours
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
                        {gems.map((g, idx) => (
                          <li key={g.id}>
                            <a
                              href={`#${g.id}`}
                              className="hover:text-[#0f4f47] hover:font-semibold transition-colors"
                            >
                              <span className="text-[#0f4f47] font-semibold">
                                {idx + 1}.
                              </span>{' '}
                              {g.title}
                            </a>
                          </li>
                        ))}
                        <li className="pt-2 border-t border-gray-100">
                          <a
                            href="#why-hidden"
                            className="hover:text-[#0f4f47] hover:font-semibold transition-colors"
                          >
                            The Other Side of Poland
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
          headline: 'Hidden Gems in Poland: 15 Secret Places Tourists Miss',
          description:
            'Discover 15 hidden gems in Poland — secret castles, painted villages, mysterious forests, and off-the-beaten-path destinations far from Kraków and Warsaw.',
          image: `https://www.greencontinenttours.com${HERO_IMAGE}`,
          datePublished: '2026-05-15',
          author: { '@type': 'Organization', name: 'Green Continent Tours' },
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

export default HiddenGems;
