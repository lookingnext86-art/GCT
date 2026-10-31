import React, { useEffect, useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';

/**
 * Hero triptych — 3 real photos:
 *  1) Krakow Main Market Square (St. Mary's Basilica)
 *  2) Tatra Mountains (Zakopane)
 *  3) Gdansk Old Town waterfront on the Motława River
 *
 * To swap any panel later, just replace its URL/alt in HERO_PANELS below.
 */
const HERO_PANELS = [
  {
    src: '/images/hero/krakow-market.webp',
    alt:
      'Krakow Main Market Square with St. Mary’s Basilica and horse carriages — historic Old Town Poland tours by Green Continent Tours',
    title: 'Krakow Old Town — Main Market Square',
    objectPosition: 'center 35%',
    mobileSrc: '/images/hero/krakow-market-mobile.webp',
  },
  {
    src: '/images/hero/zakopane.jpg',
    alt:
      'Tatra Mountains landscape near Zakopane Poland — hiking trails and rocky peaks for premium mountain tours by Green Continent Tours',
    title: 'Tatra Mountains — Zakopane, Poland',
    objectPosition: 'center 45%',
    mobileSrc: '/images/hero/zakopane-mobile.webp',
  },
  {
    src: '/images/hero/warsaw-old-town.webp',
    alt:
      'Warsaw Old Town Castle Square with colorful tenement houses and dramatic sky — historic Poland capital city tours by Green Continent Tours',
    title: 'Warsaw Old Town — Castle Square',
    objectPosition: 'center 55%',
  },
];

const MOBILE_QUERY = '(max-width: 767px)';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isMobile;
};

const HeroSlider = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className="relative w-full overflow-hidden mt-20 h-[calc(92vh-5rem)] min-h-[560px] max-h-[820px]"
      data-testid="hero-static"
    >
      {/* Social Media Icons - Left Side */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        <a
          href="https://www.facebook.com/GreenContinentTours"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook page"
          className="bg-white/85 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-md"
        >
          <Facebook className="w-5 h-5 text-[#0f4f47]" />
        </a>
        <a
          href="https://wa.me/48537482798"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="bg-white/85 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-md"
        >
          <svg className="w-5 h-5 text-[#0f4f47]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/green_continent_tours"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
          className="bg-white/85 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-md"
        >
          <Instagram className="w-5 h-5 text-[#0f4f47]" />
        </a>
      </div>

      {/* Triptych: 3 real photos side-by-side */}
      <div className="absolute inset-0 grid grid-cols-3 gap-[6px] bg-white">
        {HERO_PANELS.map((panel, idx) => (
          <div
            key={panel.title}
            className="relative overflow-hidden"
            data-testid={`hero-panel-${idx + 1}`}
          >
            <img
              src={isMobile && panel.mobileSrc ? panel.mobileSrc : panel.src}
              alt={panel.alt}
              title={panel.title}
              width="1280"
              height="1600"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: panel.objectPosition,
                filter:
                  'saturate(1.18) contrast(1.18) brightness(0.92)',
              }}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            {/* Cinematic vignette — dark top + bottom for that premium magazine feel */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(8,28,26,0.45) 0%, rgba(8,28,26,0.0) 28%, rgba(8,28,26,0.0) 60%, rgba(8,28,26,0.55) 100%)',
              }}
              aria-hidden="true"
            />
            {/* Whisper of brand teal in the shadows only — keeps natural color but ties to theme */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-40"
              style={{
                background:
                  'linear-gradient(180deg, rgba(15,79,71,0.0) 0%, rgba(15,79,71,0.0) 65%, rgba(15,79,71,0.35) 100%)',
              }}
              aria-hidden="true"
            />
            {/* Side edge darkening for cinematic frame */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 110% 95% at center, transparent 55%, rgba(8,28,26,0.40) 100%)',
              }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* Subtle dark gradient at bottom for visual transition into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f4f47]/40 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroSlider;
