import React from 'react';

/**
 * Trusted Partners — endless horizontal marquee strip (RateHawk-style).
 * Logos move in a smooth continuous loop. Pauses on hover.
 *
 * Add logos to the `partners` array below. Each entry:
 *   { name: 'Hotelbeds', src: '<url-to-transparent-png>' }
 */
const partners = [
  // Logos will be added here one by one as the user uploads them.
  // Example:
  // { name: 'Hotelbeds', src: 'https://customer-assets.emergentagent.com/.../hotelbeds.png' },
];

const TrustedPartners = () => {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...partners, ...partners];

  return (
    <section
      className="bg-gradient-to-r from-[#f3faf8] via-white to-[#f3faf8] py-8"
      aria-labelledby="trusted-partners-heading"
      data-testid="trusted-partners-section"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Eyebrow label */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-10 bg-[#0f4f47]/15" aria-hidden="true" />
          <h2
            id="trusted-partners-heading"
            className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0f4f47]/80 whitespace-nowrap"
          >
            In Partnership With
          </h2>
          <span className="h-px w-10 bg-[#0f4f47]/15" aria-hidden="true" />
        </div>

        {/* Marquee container */}
        <div
          className="relative overflow-hidden marquee-mask"
          data-testid="partners-marquee"
        >
          {partners.length === 0 ? (
            <div className="h-12 flex items-center justify-center text-xs text-gray-400 italic">
              Logos will appear here once added.
            </div>
          ) : (
            <div className="flex items-center marquee-track gap-16">
              {loop.map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="shrink-0 flex items-center justify-center h-10 md:h-12"
                  data-testid={`partner-logo-${p.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <img
                    src={p.src}
                    alt={`${p.name} — Green Continent Tours partner`}
                    className="h-full w-auto max-h-10 md:max-h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
