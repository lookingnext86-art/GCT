import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const HERO_IMAGE = '/images/gallery/hero/malbork-castle.webp';
const WHATSAPP_URL =
  'https://wa.me/48537482798?text=' +
  encodeURIComponent('Hello, I would like to plan a trip to Poland with Green Continent Tours.');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // 2. Form processing & security states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // SEO & Meta-tag automation engine
  const handleSubmit = async (e) => {
      e.preventDefault();
      
      // SPAM CATCH: If a background bot triggers the hidden checkbox, block it silently
      const submissionData = new FormData(e.target);
      if (submissionData.get('botcheck') === 'on' || submissionData.get('botcheck') === 'true') {
        return;
      }

      setIsSubmitting(true);
      setStatusMessage('Sending your inquiry...');
      setIsSuccess(false);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: submissionData
        });

        const data = await response.json();

        if (data.success) {
          setIsSuccess(true);
          setStatusMessage('Thank you! Your message has been sent successfully to our team.');
          // Reset the inputs smoothly
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          setIsSuccess(false);
          setStatusMessage(data.message || 'Something went wrong. Please check inputs and try again.');
        }
      } catch (error) {
        setIsSuccess(false);
        setStatusMessage('Network error. Please check your internet connection or try again later.');
      } finally {
        setIsSubmitting(false);
      }
    };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white" data-testid="contact-page">
      <SEO
        path="/contact"
        title="Contact Green Continent Tours – Plan Your Krakow & Poland Trip"
        description="Contact Green Continent Tours in Krakow — call, WhatsApp or email to plan your Poland trip. Private tours, transfers, group travel and custom itineraries."
      />
      <Header />

      <main className="pt-20">
        {/* ===== HERO ===== */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="contact-heading"
        >
          <div className="relative h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="Malbork Castle in Poland at golden hour — contact Green Continent Tours, a Krakow travel company"
              title="Contact Green Continent Tours — Krakow, Poland"
              width="2400"
              height="1300"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{
                filter:
                  'saturate(0.85) contrast(1.10) brightness(0.92) sepia(0.06)',
              }}
            />
            {/* Film grain */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-overlay"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' seed='14'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                backgroundSize: '240px 240px',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-60"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,210,160,0.18) 0%, rgba(255,210,160,0) 45%, rgba(15,79,71,0) 55%, rgba(15,79,71,0.30) 100%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(ellipse 100% 75% at center, transparent 50%, rgba(8,28,26,0.55) 100%)',
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0a3a35]/55 via-[#0a3a35]/40 to-[#0a3a35]/85"
              aria-hidden="true"
            />

            <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
              <p className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-5 border border-[#4dd4ac]/40 bg-[#0f4f47]/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                Contact Us
              </p>
              <h1
                id="contact-heading"
                className="text-3xl md:text-5xl lg:text-[3.2rem] font-bold text-white mb-5 tracking-tight leading-[1.1] drop-shadow-lg max-w-4xl"
              >
                Let&apos;s Plan Your Polish Journey
              </h1>
              <p className="text-base md:text-[17px] text-white/95 font-light leading-relaxed max-w-3xl mx-auto drop-shadow">
                Reach our local Krakow team to plan group tours, family trips,
                school trips, MICE travel, airport transfers, hotels, and custom
                Poland itineraries across Europe.
              </p>

              <div className="flex items-center gap-2 mt-7" aria-hidden="true">
                <span className="h-px w-12 bg-[#4dd4ac]/60" />
                <span className="w-2 h-2 rounded-full bg-[#4dd4ac]" />
                <span className="h-px w-12 bg-[#4dd4ac]/60" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT BODY ===== */}
        <section className="py-14 lg:py-16 bg-white">
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {/* === Form === */}
              <div
                className="bg-white border border-gray-100 rounded-2xl p-7 md:p-9 shadow-[0_10px_40px_-20px_rgba(15,79,71,0.15)]"
                data-testid="contact-form-card"
              >
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-3">
                  Send a Message
                </p>
                <h2 className="text-2xl md:text-[28px] font-bold text-[#0f4f47] tracking-tight mb-2">
                  Tell us about your trip
                </h2>
                <p className="text-[14.5px] text-gray-500 font-light leading-relaxed mb-7">
                  Share a few details and our Krakow team will get back to you with a tailored plan.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                
                  <input type="hidden" name="access_key" value="7ad9491f-74c2-4199-8f2b-acc66677deaa" />
                
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div>
                    <label className="block text-[12px] font-semibold tracking-[0.15em] uppercase text-gray-600 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      data-testid="contact-name-input"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4dd4ac]/40 focus:border-[#4dd4ac] transition-all text-[15px]"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-semibold tracking-[0.15em] uppercase text-gray-600 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        data-testid="contact-email-input"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4dd4ac]/40 focus:border-[#4dd4ac] transition-all text-[15px]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold tracking-[0.15em] uppercase text-gray-600 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        data-testid="contact-phone-input"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4dd4ac]/40 focus:border-[#4dd4ac] transition-all text-[15px]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold tracking-[0.15em] uppercase text-gray-600 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      data-testid="contact-message-input"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4dd4ac]/40 focus:border-[#4dd4ac] transition-all text-[15px] resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    data-testid="contact-submit-btn"
                    className="group inline-flex items-center justify-center gap-2.5 bg-[#0f4f47] text-white px-7 py-3.5 rounded-full font-bold text-[13.5px] tracking-[0.05em] hover:bg-[#1a6b5f] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(15,79,71,0.5)]"
                  >
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
                {statusMessage && (
                  <div className={isSuccess ? "mt-2 text-green-600" : "mt-2 text-red-600"}>
                    {statusMessage}
                  </div>
                )}
              </div>

              {/* === Info column === */}
              <div className="space-y-6">
                {/* Premium info card */}
                <div className="relative bg-gradient-to-br from-[#0f4f47] to-[#0a3a35] text-white rounded-2xl p-7 md:p-9 overflow-hidden border border-[#4dd4ac]/15 shadow-[0_20px_40px_-20px_rgba(15,79,71,0.4)]">
                  <div
                    className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#4dd4ac]/15 blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, #4dd4ac 1px, transparent 1.2px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="relative">
                    <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-3">
                      Reach Us Directly
                    </p>
                    <h2 className="text-2xl md:text-[26px] font-bold tracking-tight mb-7">
                      Krakow Travel Office
                    </h2>

                    <ul className="space-y-5">
                      <li className="flex items-start gap-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4dd4ac]/12 ring-1 ring-[#4dd4ac]/30 shrink-0">
                          <MapPin className="w-4 h-4 text-[#4dd4ac]" strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <div className="text-[14.5px] leading-relaxed">
                          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4dd4ac]/80 mb-1">
                            Office
                          </p>
                          <p className="text-white/90 font-light">Nowohucka 46, Kraków 31-580, Poland</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4dd4ac]/12 ring-1 ring-[#4dd4ac]/30 shrink-0">
                          <Phone className="w-4 h-4 text-[#4dd4ac]" strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <div className="text-[14.5px] leading-relaxed">
                          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4dd4ac]/80 mb-1">
                            Phone / WhatsApp
                          </p>
                          <a
                            href="tel:+48537482798"
                            data-testid="contact-phone-link"
                            className="text-white/90 font-light hover:text-[#4dd4ac] transition-colors"
                          >
                            +48 537 482 798
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4dd4ac]/12 ring-1 ring-[#4dd4ac]/30 shrink-0">
                          <Mail className="w-4 h-4 text-[#4dd4ac]" strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <div className="text-[14.5px] leading-relaxed">
                          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4dd4ac]/80 mb-1">
                            Email
                          </p>
                          <a
                            href="mailto:info@greencontinenttours.com"
                            data-testid="contact-email-link"
                            className="text-white/90 font-light hover:text-[#4dd4ac] transition-colors"
                          >
                            info@greencontinenttours.com
                          </a>
                        </div>
                      </li>
                    </ul>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-whatsapp-cta"
                      className="group mt-8 inline-flex items-center gap-2 bg-[#4dd4ac] text-[#0f4f47] px-6 py-3 rounded-full font-bold text-[13px] tracking-wide shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div
                  className="relative rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-[0_10px_30px_-15px_rgba(15,79,71,0.15)] h-72"
                  data-testid="contact-map"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.547839667!2d20.0276!3d50.0694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6d0e0e0e0d%3A0x0!2sNowohucka%2046%2C%2031-580%20Krak%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Green Continent Tours Office Location in Krakow Poland"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
