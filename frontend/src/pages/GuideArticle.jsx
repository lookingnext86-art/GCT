import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RelatedGuides } from '../components/article/ArticleParts';
import SEO from '../components/SEO';
import '../styles/guide-prose.css';

const SITE = 'https://www.greencontinenttours.com';
const API = process.env.REACT_APP_BACKEND_URL;
const WHATSAPP_URL = `https://wa.me/48537482798?text=${encodeURIComponent('Hello, I would like help planning my Poland trip.')}`;

const ArticleHero = ({ a }) => (
  <header className="relative overflow-hidden" data-testid="guide-article-hero">
    <div className="relative min-h-[480px] md:min-h-[560px] lg:min-h-[620px] w-full flex items-end">
      <img src={a.image} alt={a.imageAlt} title={a.title} width="1600" height="1000" loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a3a35]/55 via-[#0a3a35]/35 to-[#0a3a35]/85" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a3a35]/55 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative z-10 w-full pt-32 pb-14 md:pb-20">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <Link to="/travel-guide" data-testid="back-to-travel-guide" className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-white/85 hover:text-[#4dd4ac] transition-colors">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Travel Guide
            </Link>
            <div className="mt-7">
              <span className="inline-block bg-[#0f4f47] text-[#4dd4ac] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">{a.categoryLabel}</span>
            </div>
            <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold tracking-tight leading-[1.08] mb-4 mt-5 drop-shadow-lg" data-testid="guide-article-title">{a.title}</h1>
            <p className="text-base md:text-lg text-gray-100/95 font-light max-w-2xl leading-relaxed mb-6 drop-shadow">{a.excerpt}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2.5 text-[12.5px] text-white/80">
              <span className="inline-flex items-center gap-2"><Calendar className="w-3.5 h-3.5" aria-hidden="true" /><time dateTime={a.dateISO}>{a.date}</time></span>
              <span className="inline-flex items-center gap-2"><Clock className="w-3.5 h-3.5" aria-hidden="true" />{a.readTime}</span>
              <span className="inline-flex items-center gap-2"><User className="w-3.5 h-3.5" aria-hidden="true" />{a.author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Toc = ({ toc }) => (
  <aside className="hidden lg:block self-start sticky top-28" aria-label="Table of contents" data-testid="guide-article-toc">
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(15,79,71,0.08)]">
      <p className="text-[10.5px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">In This Guide</p>
      <ul className="space-y-3 text-[13px] text-gray-500 font-light">
        {toc.map((t) => (
          <li key={t.id}><a href={`#${t.id}`} className="hover:text-[#0f4f47] transition-colors">{t.title}</a></li>
        ))}
      </ul>
    </div>
  </aside>
);

const GuideArticle = () => {
  const { slug } = useParams();
  const [a, setA] = useState(null);

  useEffect(() => {
    setA(null);
    fetch(`${API}/api/public/articles/${encodeURIComponent(slug)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setA({ ...d, image: `${API}${d.image}` }))
      .catch(() => setA(false));
  }, [slug]);

  if (a === false) return <NotFound />;
  if (!a) return <div className="min-h-screen bg-white" data-testid="guide-article-loading" />;

  return (
    <div className="min-h-screen bg-white">
      <SEO path={a.href} title={a.metaTitle} description={a.metaDescription} image={a.image} />
      <Header />
      <main>
        <article data-testid="guide-article">
          <ArticleHero a={a} />
          <section className="bg-white py-14 lg:py-20" aria-label="Article content">
            <div className="container mx-auto px-5 md:px-6 lg:px-8">
              <div className="grid lg:grid-cols-[1fr_240px] gap-10 lg:gap-16 max-w-6xl mx-auto">
                <div className="max-w-3xl min-w-0">
                  <div className="guide-prose" data-testid="guide-article-body" dangerouslySetInnerHTML={{ __html: a.html }} />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="article-whatsapp-cta"
                    className="group mt-12 flex items-center justify-between gap-4 bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] text-white px-6 py-5 rounded-2xl shadow-[0_15px_40px_-15px_rgba(15,79,71,0.4)] transition-transform duration-300 hover:-translate-y-0.5">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-0.5">Plan Your Trip</p>
                      <p className="text-[15px] font-semibold">Chat with our Krakow team on WhatsApp</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#4dd4ac] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
                {a.toc?.length > 0 && <Toc toc={a.toc} />}
              </div>
            </div>
          </section>
        </article>
      </main>
      <RelatedGuides />
      <Footer />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: a.title,
          description: a.metaDescription,
          image: a.image,
          datePublished: a.dateISO,
          dateModified: a.updatedISO,
          keywords: (a.keywords || []).join(', '),
          mainEntityOfPage: `${SITE}${a.href}`,
          author: { '@type': 'Organization', name: 'Green Continent Tours' },
          publisher: { '@type': 'Organization', name: 'Green Continent Tours', logo: { '@type': 'ImageObject', url: `${SITE}/GCT-asset/logo-512.png` } },
        })}
      </script>
    </div>
  );
};

export default GuideArticle;
