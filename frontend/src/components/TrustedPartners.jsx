import React from 'react';

/**
 * Trusted Partners — endless horizontal marquee strip (RateHawk-style).
 * Logos move in a smooth continuous loop. Pauses on hover.
 *
 * Add logos to the `partners` array below. Each entry:
 *   { name: 'Hotelbeds', src: '<url-to-transparent-png>' }
 */
const partners = [
  { name: 'Hotelbeds', src: '/images/partners/hotelbeds-travel-partner-logo.png', w: 436, h: 160, blend: true },
  { name: 'GIATA', src: '/images/partners/giata-travel-partner-logo.png', w: 202, h: 104 },
  { name: 'Accor', src: '/images/partners/accor-travel-partner-logo.png', w: 170, h: 118 },
  { name: 'Didatravel', src: '/images/partners/didatravel-travel-partner-logo.png', w: 168, h: 97 },
  { name: 'Paximum', src: '/images/partners/paximum-travel-partner-logo.jpg', w: 280, h: 160, blend: true },
  { name: 'TBO.com', src: '/images/partners/tbo-com-travel-partner-logo.png', w: 190, h: 94 },
  { name: 'Travco', src: '/images/partners/travco-travel-partner-logo.png', w: 165, h: 113 },
  { name: 'Viator', src: '/images/partners/viator-travel-partner-logo.png', w: 228, h: 141 },
  { name: 'Restel', src: '/images/partners/restel-travel-partner-logo.png', w: 163, h: 113 },
  { name: 'RezLive', src: '/images/partners/rezlive-travel-partner-logo.png', w: 144, h: 103 },
  { name: 'GCT Booking', src: '/images/partners/gct-booking-travel-partner-logo.png', w: 150, h: 67 },
  { name: 'RateHawk', src: '/images/partners/ratehawk-travel-partner-logo.png', w: 216, h: 160 },
];

const TrustedPartners = () => {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...partners, ...partners];

  return (
    <section
      className="bg-white py-12"
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
            <div className="flex items-center marquee-track gap-20">
              {loop.map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="shrink-0 flex items-center justify-center h-16 md:h-20"
                  data-testid={`partner-logo-${p.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <img
                    src={p.src}
                    alt={`${p.name} — official travel partner of Green Continent Tours, Krakow Poland`}
                    title={`${p.name} – Green Continent Tours Partner`}
                    width={p.w}
                    height={p.h}
                    className="h-full w-auto max-h-16 md:max-h-20 object-contain"
                    style={p.blend ? { mixBlendMode: 'multiply' } : undefined}
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
