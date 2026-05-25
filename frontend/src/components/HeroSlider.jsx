import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

/**
 * Static hero — single composite image showcasing
 * Zakopane mountains, Krakow Old Town, and Gdansk waterfront.
 */
const HeroSlider = () => {
  return (
    <div
      className="relative w-full overflow-hidden mt-20 h-[calc(85vh-5rem)]"
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

      {/* Single composite hero image: Krakow Old Town, Tatra Mountains, Gdansk waterfront */}
      <img
        src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/e3tlp9ys_poland-tour-tatra-krakow-gdansk-hero.png"
        alt="Poland tour highlights — Krakow Old Town, Tatra Mountains, and Gdansk waterfront by Green Continent Tours"
        title="Premium Poland Travel — Krakow, Tatra Mountains, Gdansk"
        width="1920"
        height="1080"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />

      {/* Subtle dark gradient at bottom for visual transition into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f4f47]/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroSlider;
