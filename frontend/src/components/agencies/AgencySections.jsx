import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Mountain } from 'lucide-react';
import {
  Section, IconCards, PortalButton, ProgramButton, p, WHATSAPP_URL,
  STATS, WHY_PARTNER, THOUGHTFUL, HANDLES, WHY_POLAND, SEASONS, PROGRAMS, STEPS,
} from './AgencyParts';
import { PartnerInquiryForm } from '../PartnerInquiryForm';

const HERO_IMAGE = '/images/hero/krakow-market-960.webp';

export const Hero = () => (
  <header className="relative overflow-hidden bg-[#0f4f47] text-white" data-testid="agencies-hero">
    <img src={HERO_IMAGE} srcSet={`${HERO_IMAGE} 960w, /images/hero/krakow-market.webp 1800w`} sizes="100vw"
      alt="Kraków Main Market Square with St. Mary’s Basilica, where Green Continent Tours welcomes partner groups"
      width="1800" height="1350" fetchPriority="high" decoding="async"
      className="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f47] via-[#0f4f47]/85 to-[#0f4f47]/40" aria-hidden="true" />
    <div className="relative container mx-auto px-5 md:px-6 lg:px-8 max-w-6xl pt-36 pb-16 lg:pt-44 lg:pb-24">
      <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-5">For travel agencies & tour operators</p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 max-w-3xl">Your Incoming Tour Operator in Poland</h1>
      <p className="text-lg md:text-xl text-white font-medium mb-2 max-w-2xl">Your Trusted DMC Partner in Poland &amp; Central Europe.</p>
      <p className="text-base md:text-lg text-white/85 font-light leading-relaxed mb-9 max-w-2xl">Local expertise. Seamless travel programs. Reliable ground operations.</p>
      <div className="flex flex-wrap gap-4">
        <ProgramButton testId="agencies-hero-program-btn" />
        <PortalButton testId="agencies-hero-portal-btn" light />
      </div>
    </div>
  </header>
);

export const Stats = () => (
  <section className="bg-white border-b border-gray-100" aria-label="Green Continent Tours in numbers" data-testid="agencies-stats">
    <dl className="container mx-auto px-5 md:px-6 lg:px-8 max-w-6xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
      {STATS.map(([value, label]) => (
        <div key={label} className="py-8 lg:py-10 px-4 text-center">
          <dt className="sr-only">{label}</dt>
          <dd className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f4f47] tracking-tight whitespace-nowrap">{value}</dd>
          <dd className="text-[12px] font-semibold tracking-[0.18em] uppercase text-gray-500 mt-2">{label}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export const Portal = () => (
  <Section id="booking-portal" label="For registered agencies" title="Agency Booking Portal">
    <div className="bg-[#0f4f47] text-white rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      <div className="max-w-2xl">
        <p className="text-lg md:text-xl font-medium leading-relaxed mb-3">Registered travel agencies can book hotels online through our B2B booking portal.</p>
        <p className="text-white/80 font-light">The portal is for travel agencies only.</p>
      </div>
      <div className="shrink-0"><PortalButton testId="agencies-portal-button" /></div>
    </div>
  </Section>
);

export const WhyPartner = () => <Section id="why-partner" tint label="Why us" title="Why Partner With Us"><IconCards items={WHY_PARTNER} /></Section>;
export const Thoughtful = () => <Section id="thoughtful" label="Our approach" title="A More Thoughtful Way to Explore"><IconCards items={THOUGHTFUL} cols="lg:grid-cols-4" /></Section>;
export const Handles = () => (
  <Section id="what-we-handle" tint label="Ground services" title="What We Handle for Partners"
    intro="One local team takes care of every part of your group’s stay, so your agency has a single point of contact in Poland.">
    <IconCards items={HANDLES} cols="lg:grid-cols-4" />
  </Section>
);

export const WhyPoland = () => (
  <Section id="why-poland" label="Why Poland" title="Europe’s Most Rewarding Group Destination">
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {WHY_POLAND.map(([Icon, text]) => (
        <li key={text} className="flex items-center gap-4 bg-[#f6faf9] rounded-2xl px-5 py-5">
          <span className="w-10 h-10 shrink-0 rounded-full bg-white text-[#0f4f47] flex items-center justify-center shadow-sm"><Icon className="w-5 h-5" aria-hidden="true" /></span>
          <span className="text-[15px] font-semibold text-[#0f4f47] leading-snug">{text}</span>
        </li>
      ))}
    </ul>
  </Section>
);

export const Seasons = () => (
  <Section id="seasons" tint label="When to travel" title="A Destination for Every Season">
    <IconCards items={SEASONS} cols="lg:grid-cols-4" />
    <p className={`${p} mt-8`}>School and public-holiday periods fill quickly. Send requests early.</p>
  </Section>
);

const Featured = () => (
  <article className="mt-8 bg-[#0f4f47] text-white rounded-3xl p-8 md:p-10 lg:p-12" data-testid="agencies-featured-program">
    <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-3">Featured program</p>
    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Kraków + Zakopane, 5 nights</h3>
    <p className="text-white/75 mb-8">2 nights in Kraków, 3 nights in Zakopane</p>
    <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
      <div className="flex gap-4"><MapPin className="w-6 h-6 text-[#4dd4ac] shrink-0 mt-0.5" aria-hidden="true" /><p className="text-white/90 font-light leading-[1.8]"><strong className="font-semibold text-white">Kraków, 2 nights:</strong> warm airport welcome, Market Square, Wawel Hill, Old Town, Kazimierz and the Wieliczka Salt Mine.</p></div>
      <div className="flex gap-4"><Mountain className="w-6 h-6 text-[#4dd4ac] shrink-0 mt-0.5" aria-hidden="true" /><p className="text-white/90 font-light leading-[1.8]"><strong className="font-semibold text-white">Zakopane, 3 nights:</strong> Tatra views from the Gubałówka funicular, Morskie Oko lake, Krupówki evenings and thermal pools, then a private transfer to Kraków airport.</p></div>
    </div>
    <p className="mt-8 pt-6 border-t border-white/15 font-semibold">Your own driver throughout.</p>
  </article>
);

export const Programs = () => (
  <Section id="sample-programs" label="Sample programs" title="Three Ways to Fall in Love With Central Europe">
    <ul className="grid md:grid-cols-3 gap-5 lg:gap-6">
      {PROGRAMS.map(([Icon, title, meta, text]) => (
        <li key={title} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-[0_10px_30px_-20px_rgba(15,79,71,0.35)]">
          <span className="w-11 h-11 rounded-xl bg-[#4dd4ac]/15 text-[#0f4f47] flex items-center justify-center mb-5"><Icon className="w-5 h-5" aria-hidden="true" /></span>
          <h3 className="text-xl font-bold text-[#0f4f47] tracking-tight">{title}</h3>
          <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#1a6b5f] mt-1.5 mb-4">{meta}</p>
          <p className="text-[15px] text-gray-600 leading-[1.7] font-light">{text}</p>
        </li>
      ))}
    </ul>
    <p className={`${p} mt-8`}>Every program includes 4/5 star hotels with breakfast, private airport transfers, intercity transport, guided city tours and VAT.</p>
    <p className="mt-4 text-[15px] text-[#0f4f47] font-medium bg-[#f6faf9] border-l-4 border-[#4dd4ac] rounded-r-xl px-5 py-4" data-testid="agencies-tailor-made-note">
      These are sample programs for inspiration. Every program is tailor-made and priced individually for each request. We do not publish fixed rates.
    </p>
    <Featured />
  </Section>
);

export const HowWeWork = () => (
  <Section id="how-we-work" tint label="Step by step" title="How We Work">
    <ol className="grid md:grid-cols-2 gap-x-10 gap-y-5">
      {STEPS.map(([title, text], i) => (
        <li key={title} className="flex gap-5 items-start bg-white rounded-2xl p-5 border border-gray-100">
          <span className="w-10 h-10 shrink-0 rounded-full bg-[#0f4f47] text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
          <div className="pt-1.5"><h3 className="font-bold text-[#0f4f47] leading-snug">{title}</h3>{text && <p className="text-[14.5px] text-gray-600 font-light mt-1">{text}</p>}</div>
        </li>
      ))}
    </ol>
  </Section>
);

const ContactLine = ({ Icon, children }) => (
  <li className="flex items-start gap-3"><Icon className="w-5 h-5 text-[#4dd4ac] shrink-0 mt-0.5" aria-hidden="true" /><span>{children}</span></li>
);

export const PartnerContact = () => (
  <Section id="partner-inquiry" label="Contact" title="Let’s Build Your Tour Program Together" intro="Your clients are in good hands.">
    <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-start">
      <PartnerInquiryForm />
      <aside className="bg-[#0f4f47] text-white rounded-2xl p-7" data-testid="agencies-contact-card">
        <h3 className="text-xl font-bold mb-5">Green Continent Tours</h3>
        <ul className="space-y-4 text-[14.5px] text-white/90 font-light">
          <ContactLine Icon={MapPin}>Nowohucka 46, Kraków 31-580, Poland<br /><span className="text-white/70">Registered in Poland, NIP 6793123024</span></ContactLine>
          <ContactLine Icon={Mail}><a href="mailto:info@greencontinenttours.com" className="hover:text-[#4dd4ac]" data-testid="agencies-email-link">info@greencontinenttours.com</a></ContactLine>
          <ContactLine Icon={Phone}><a href="tel:+48537482798" className="hover:text-[#4dd4ac]" data-testid="agencies-phone-link">Phone &amp; WhatsApp: +48 537 482 798</a></ContactLine>
        </ul>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="agencies-whatsapp-btn"
          className="mt-7 inline-flex w-full justify-center items-center gap-2 bg-[#4dd4ac] text-[#0f4f47] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-colors">
          <MessageCircle className="w-4 h-4" aria-hidden="true" /> Chat on WhatsApp
        </a>
      </aside>
    </div>
  </Section>
);
