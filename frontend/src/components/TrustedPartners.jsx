import React from 'react';

/**
 * Trusted Partners — endless horizontal marquee strip (RateHawk-style).
 * Logos move in a smooth continuous loop. Pauses on hover.
 *
 * Add logos to the `partners` array below. Each entry:
 *   { name: 'Hotelbeds', src: '<url-to-transparent-png>' }
 */
const partners = [
  { name: 'Hotelbeds', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/iqnhp902_Screenshot%202026-05-25%20145114.png' },
  { name: 'Didatravel', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/y3nhl8vt_Screenshot%202026-05-25%20145138.png' },
  { name: 'Accor', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/bsyy37r8_Screenshot%202026-05-25%20145200.png' },
  { name: 'GIATA', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/4x8vagw4_Screenshot%202026-05-25%20145212.png' },
  { name: 'Paximum', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/letzvqj2_Screenshot%202026-05-25%20145240.png' },
  { name: 'RezLive', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/fxfmoi5j_Screenshot%202026-05-25%20145020.png' },
  { name: 'Restel', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/c85ugs83_Screenshot%202026-05-25%20145032.png' },
  { name: 'Viator', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/xf6hyquf_Screenshot%202026-05-25%20145041.png' },
  { name: 'Travco', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/1asnpbab_Screenshot%202026-05-25%20145055.png' },
  { name: 'TBO.com', src: 'https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/c7fimiuy_Screenshot%202026-05-25%20145100.png' },
];

const TrustedPartners = () => {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...partners, ...partners];

  return (
    <section
      className="bg-white py-8"
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
                    className="h-full w-auto max-h-10 md:max-h-12 object-contain"
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
