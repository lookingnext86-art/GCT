import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE = 'https://www.greencontinenttours.com';

/**
 * SEO component — renders per-page <title>, meta description, and a
 * self-referencing canonical pointing to the www + https domain.
 *
 * Pass `path` WITHOUT a trailing slash for sub-pages, or '/' for home.
 * Example: <SEO title="..." description="..." path="/about" />
 */
const SEO = ({ title, description, path = '/', image }) => {
  const url = path === '/' ? `${SITE}/` : `${SITE}${path}`;
  const ogImage =
    image ||
    'https://www.greencontinenttours.com/images/gallery/hero/malbork-castle.webp';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
