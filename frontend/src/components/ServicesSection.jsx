import React from 'react';
import { Link } from 'react-router-dom';
import {
  UsersRound,
  PlaneTakeoff,
  Sparkles,
  BadgeCheck,
  GraduationCap,
  BedDouble,
  MapPinned,
  ArrowUpRight,
} from 'lucide-react';

const WHATSAPP_NUMBER = '48537482798';
const WHATSAPP_MESSAGE = 'Hello, I would like to plan a premium Poland journey.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const services = [
  {
    title: 'Private Group Tours',
    description: 'Curated private tours in Poland for friends, colleagues, and small groups — premium vehicles, expert guides.',
    icon: UsersRound,
    href: '/services',
    keywords: 'private tours in Poland',
  },
  {
    title: 'Luxury Airport Transfers',
    description: 'Door-to-door premium transfers across Krakow, Warsaw, and major Polish airports — punctual and seamless.',
    icon: PlaneTakeoff,
    href: '/services',
    keywords: 'Krakow airport transfer',
  },
  {
    title: 'Tailor-Made Journeys',
    description: 'Bespoke itineraries crafted around your interests, pace, and budget — designed by a local Krakow team.',
    icon: Sparkles,
    href: '/services',
    keywords: 'Poland travel agency',
  },
  {
    title: 'Professional Tour Guides',
    description: 'Certified multilingual guides in English, Polish, Arabic, Spanish, and German — storytellers, not script readers.',
    icon: BadgeCheck,
    href: '/services',
    keywords: 'Krakow tours',
  },
  {
    title: 'Family & Educational Travel',
    description: 'Family-friendly itineraries and curated school programs across Poland — safe, flexible, and meaningful.',
    icon: GraduationCap,
    href: '/services',
    keywords: 'family travel Poland',
  },
  {
    title: 'Transportation & Hotel Booking',
    description: 'Handpicked hotels and reliable transport — flights, trains, and chauffeur services across Europe.',
    icon: BedDouble,
    href: '/services',
    keywords: 'hotel booking Poland',
  },
  {
    title: 'Poland & Europe Tours',
    description: 'Multi-city journeys spanning Krakow, Warsaw, Prague, Vienna, and Budapest — comfortably paced.',
    icon: MapPinned,
    href: '/services',
    keywords: 'group tours Europe',
  },
];

const ServicesSection = () => {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-[#f5faf8] to-white"
      aria-labelledby="services-heading"
      data-testid="services-section"
    >
      {/* Subtle Poland-inspired backdrop — soft mountains + Krakow spires silhouette */}
      <div className="absolute inset-x-0 top-0 h-72 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f4f47" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1440" height="320" fill="url(#skyFade)" />
          {/* Tatra mountain silhouette */}
          <path
            d="M0 220 L120 150 L210 200 L320 110 L420 180 L520 130 L620 210 L720 140 L820 200 L920 120 L1020 190 L1120 150 L1230 220 L1330 170 L1440 210 L1440 320 L0 320 Z"
            fill="#0f4f47"
            opacity="0.05"
          />
          {/* Krakow Old Town spires */}
          <g opacity="0.06" fill="#0f4f47">
            <rect x="640" y="180" width="14" height="100" />
            <polygon points="640,180 647,160 654,180" />
            <rect x="680" y="170" width="18" height="110" />
            <polygon points="680,170 689,145 698,170" />
            <rect x="730" y="190" width="12" height="90" />
            <polygon points="730,190 736,170 742,190" />
          </g>
        </svg>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-[#4dd4ac]/[0.06] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
            <p className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-5 border border-[#4dd4ac]/40 px-3.5 py-1.5 rounded-full">
              Our Services
            </p>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-[#0f4f47] mb-5 tracking-tight leading-[1.1]"
            >
              Premium Travel Services Across Poland
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
              From private tours in Krakow to multi-country European itineraries — every service is crafted by a local team that knows Poland inside out.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.href}
                  data-testid={`service-card-${index}`}
                  aria-label={`${service.title} — learn more about ${service.keywords}`}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-8 lg:p-9 shadow-[0_4px_20px_-8px_rgba(15,79,71,0.06)] hover:shadow-[0_25px_50px_-20px_rgba(15,79,71,0.22)] hover:-translate-y-1.5 hover:border-[#4dd4ac]/30 transition-all duration-500 ease-out overflow-hidden flex flex-col"
                >
                  {/* Hover bloom */}
                  <div
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#4dd4ac]/0 group-hover:bg-[#4dd4ac]/[0.1] blur-3xl transition-all duration-700"
                    aria-hidden="true"
                  />

                  {/* Icon circle */}
                  <div className="relative mb-7">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4dd4ac]/10 border border-[#4dd4ac]/25 group-hover:bg-[#4dd4ac]/20 group-hover:scale-105 transition-all duration-500">
                      <Icon
                        className="w-6 h-6 text-[#0f4f47]"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-[#0f4f47] mb-3 tracking-tight leading-snug group-hover:text-[#1a6b5f] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mt-auto flex items-center text-[13px] font-semibold text-[#0f4f47]/80 tracking-wide group-hover:text-[#0f4f47]">
                      <span>Learn more</span>
                      <ArrowUpRight
                        className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Premium CTA */}
          <div
            className="mt-20 lg:mt-24 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] px-8 md:px-14 py-14 md:py-16 text-center shadow-[0_30px_70px_-25px_rgba(15,79,71,0.5)]"
            data-testid="services-cta"
          >
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 30%, #4dd4ac 1px, transparent 1px), radial-gradient(circle at 80% 70%, #4dd4ac 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#4dd4ac]/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">
                Ready When You Are
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 tracking-tight leading-[1.1]">
                Plan Your Premium Poland Journey
              </h3>
              <p className="text-base md:text-lg text-gray-100/90 font-light mb-9 leading-relaxed">
                Tell us how you love to travel and we&apos;ll craft an itinerary that feels nothing like a template — from Krakow to the Tatras and beyond.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="services-whatsapp-cta"
                aria-label="Start planning your premium Poland trip on WhatsApp"
                className="group inline-flex items-center justify-center gap-3 bg-[#4dd4ac] text-[#0f4f47] px-9 py-4 min-h-[56px] rounded-full font-bold text-[15px] tracking-wide shadow-[0_10px_40px_-10px_rgba(77,212,172,0.7)] hover:bg-white hover:shadow-[0_20px_50px_-10px_rgba(77,212,172,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat with Us on WhatsApp
              </a>

              <p className="text-xs text-white/60 mt-5 tracking-wide">
                Replies usually within minutes · Krakow office hours &amp; beyond
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
