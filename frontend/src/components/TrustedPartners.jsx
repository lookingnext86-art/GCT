import React from 'react';

/**
 * Trusted Partners strip — sits between Reviews and Footer.
 * Uses the user-provided logo composite image, cropped to the
 * inner white logo strip so the glossy blue framing is hidden.
 */
const TrustedPartners = () => {
  return (
    <section
      className="bg-white py-12 lg:py-14 border-t border-gray-100"
      aria-labelledby="trusted-partners-heading"
      data-testid="trusted-partners-section"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-gray-200" aria-hidden="true" />
            <h2
              id="trusted-partners-heading"
              className="text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-[#0f4f47]/80 whitespace-nowrap"
            >
              In Partnership With
            </h2>
            <span className="h-px w-10 bg-gray-200" aria-hidden="true" />
          </div>

          {/* Logos strip — image is cropped via aspect-ratio + object-cover
              so the blue glossy frame from the source image is hidden. */}
          <div className="relative w-full overflow-hidden" data-testid="partners-logos">
            <div className="relative w-full" style={{ aspectRatio: '12 / 1.2' }}>
              <img
                src="https://customer-assets.emergentagent.com/job_site-rebuild-54/artifacts/mt8u4ehk_Screenshot%202026-05-25%20165342.png"
                alt="Trusted partners: Hotelbeds, Didatravel, Accor, GIATA, Paximum, RezLive, Restel, Viator, Travco, TBO.com"
                className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{ objectPosition: 'center 50%' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
