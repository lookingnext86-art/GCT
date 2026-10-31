import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Lightbulb } from 'lucide-react';

export const h2 = 'text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-6 scroll-mt-28';
export const h3 = 'text-xl md:text-[22px] font-bold text-[#0f4f47] tracking-tight leading-snug mb-3';
export const body = 'space-y-4 text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light';

const Dot = () => <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#4dd4ac] shrink-0" aria-hidden="true" />;

export const TermList = ({ items }) => (
  <ul className="space-y-3 my-5">
    {items.map(([term, desc]) => (
      <li key={term} className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed">
        <Dot />
        <span>{desc ? <><strong className="font-semibold text-[#0f4f47]">{term}</strong> — {desc}</> : term}</span>
      </li>
    ))}
  </ul>
);

export const Callout = ({ label = 'Local tip', children }) => (
  <aside className="my-6 flex gap-4 bg-[#4dd4ac]/10 border-l-[3px] border-[#4dd4ac] rounded-r-2xl px-5 py-4">
    <Lightbulb className="w-5 h-5 text-[#0f4f47] shrink-0 mt-0.5" strokeWidth={1.8} aria-hidden="true" />
    <p className="text-[14.5px] text-[#0f4f47] leading-relaxed"><span className="font-bold">{label}: </span>{children}</p>
  </aside>
);

export const ArticleHero = ({ image, alt, imageTitle, width, height, objectPosition, category, title, subtitle, dateISO, dateLabel, readTime }) => (
  <header className="relative overflow-hidden" data-testid="article-hero" aria-labelledby="article-heading">
    <div className="relative min-h-[520px] md:min-h-[580px] lg:min-h-[640px] w-full flex items-end">
      <img src={image} alt={alt} title={imageTitle} width={width} height={height} className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }} loading="eager" fetchPriority="high" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a3a35]/55 via-[#0a3a35]/35 to-[#0a3a35]/85" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a3a35]/55 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative z-10 w-full pt-32 pb-20 md:pb-24 lg:pb-28">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <Link to="/travel-guide" className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-white/85 hover:text-[#4dd4ac] transition-colors" data-testid="back-to-travel-guide">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Travel Guide
            </Link>
            <div className="mt-7 md:mt-8">
              <span className="inline-block bg-[#0f4f47] text-[#4dd4ac] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">{category}</span>
            </div>
            <h1 id="article-heading" className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold tracking-tight leading-[1.08] mb-4 mt-5 drop-shadow-lg">{title}</h1>
            <p className="text-base md:text-lg text-gray-100/95 font-light max-w-2xl leading-relaxed mb-6 drop-shadow">{subtitle}</p>
            <div className="flex flex-wrap items-center gap-x-8 md:gap-x-10 gap-y-2.5 text-[12.5px] text-white/80">
              <span className="inline-flex items-center gap-2"><Calendar className="w-3.5 h-3.5" aria-hidden="true" /><time dateTime={dateISO}>{dateLabel}</time></span>
              <span className="inline-flex items-center gap-2"><Clock className="w-3.5 h-3.5" aria-hidden="true" />{readTime}</span>
              <span className="inline-flex items-center gap-2"><User className="w-3.5 h-3.5" aria-hidden="true" />Green Continent Tours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export const OverviewBar = ({ items }) => (
  <section className="relative bg-white -mt-12 md:-mt-16 lg:-mt-20 z-10" aria-label="Trip overview" data-testid="overview-bar">
    <div className="container mx-auto px-5 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-[0_30px_60px_-25px_rgba(15,79,71,0.25)] p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
          {items.map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#4dd4ac]/10 mb-2 md:mb-3">
                <Icon className="w-4 h-4 text-[#0f4f47]" strokeWidth={1.7} aria-hidden="true" />
              </div>
              <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-0.5">{label}</p>
              <p className="text-sm md:text-[15px] font-bold text-[#0f4f47] leading-tight">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const FaqList = ({ title, faqs }) => (
  <section id="faq" className="mt-16 lg:mt-20 scroll-mt-28" data-testid="article-faq">
    <h2 className={h2}>{title}</h2>
    <div className="divide-y divide-gray-100 border-y border-gray-100">
      {faqs.map(([q, a]) => (
        <div key={q} className="py-6">
          <h3 className="text-lg font-bold text-[#0f4f47] tracking-tight mb-2">{q}</h3>
          <p className="text-[15px] text-gray-600 leading-[1.8] font-light">{a}</p>
        </div>
      ))}
    </div>
  </section>
);

export const ContinueReading = ({ links }) => (
  <div className="mt-14 pt-8 border-t border-gray-100">
    <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-3">Continue Reading</p>
    <ul className="space-y-2 text-[15px]">
      {links.map(([to, label]) => (
        <li key={to}>
          <Link to={to} className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5">
            {label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const TocAside = ({ items }) => (
  <aside className="hidden lg:block self-start sticky top-28" aria-label="Table of contents" data-testid="article-toc">
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(15,79,71,0.08)]">
      <p className="text-[10.5px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">In This Guide</p>
      <nav>
        <ul className="space-y-3 text-[13px] text-gray-500 font-light">
          {items.map((t) => (
            <li key={t.id}><a href={`#${t.id}`} className="hover:text-[#0f4f47] hover:font-semibold transition-colors">{t.title}</a></li>
          ))}
        </ul>
      </nav>
    </div>
  </aside>
);

export const WhatsAppCta = ({ url }) => (
  <section className="bg-white pt-2 pb-14 lg:pb-16" aria-label="WhatsApp inquiry" data-testid="article-cta">
    <div className="container mx-auto px-5 md:px-6 lg:px-8">
      <a href={url} target="_blank" rel="noopener noreferrer" data-testid="article-whatsapp-cta"
        className="group flex items-center justify-between gap-4 max-w-3xl mx-auto bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] hover:from-[#1a6b5f] hover:to-[#0f4f47] text-white pl-5 pr-5 py-4 md:pl-6 md:pr-7 md:py-5 rounded-2xl shadow-[0_15px_40px_-15px_rgba(15,79,71,0.4)] transition-all duration-300 hover:-translate-y-0.5">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-0.5">Plan Your Trip</p>
          <p className="text-[14px] md:text-[15px] font-semibold leading-snug">Chat with our Krakow team on WhatsApp</p>
        </div>
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#4dd4ac] shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    </div>
  </section>
);

export const articleJsonLd = ({ title, description, image, date, url, faqs }) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'Green Continent Tours' },
    publisher: {
      '@type': 'Organization',
      name: 'Green Continent Tours',
      logo: { '@type': 'ImageObject', url: 'https://www.greencontinenttours.com/GCT-asset/logo.svg' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
];
