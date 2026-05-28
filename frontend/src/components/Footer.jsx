import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const address = 'Nowohucka 46, Kraków 31-580, Poland';
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Nowohucka+46+Kraków+31-580+Poland';
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f4f47] text-white" data-testid="site-footer">
      <div className="container mx-auto px-5 md:px-6 lg:px-8 py-10 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* MAIN GRID: brand | contact | map */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            {/* Brand + About */}
            <div className="md:col-span-4">
              <h3 className="text-xl font-bold tracking-tight mb-2">
                Green Continent Tours
              </h3>
              <p className="text-[13.5px] text-white/75 font-light leading-[1.7] mb-5">
                Tour operator &amp; travel agency based in Kraków — crafting premium
                private tours across Poland and Central Europe.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/GreenContinentTours"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[#4dd4ac] hover:text-[#0f4f47] transition-colors"
                  data-testid="footer-facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/green_continent_tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[#4dd4ac] hover:text-[#0f4f47] transition-colors"
                  data-testid="footer-instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/48537482798"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[#4dd4ac] hover:text-[#0f4f47] transition-colors"
                  data-testid="footer-whatsapp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <p className="text-[10.5px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-4">
                Contact
              </p>
              <ul className="space-y-3 text-[13.5px] text-white/85">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#4dd4ac] mt-0.5 shrink-0" aria-hidden="true" />
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4dd4ac] transition-colors leading-[1.55]"
                    data-testid="footer-address"
                  >
                    {address}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#4dd4ac] shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:info@greencontinenttours.com"
                    className="hover:text-[#4dd4ac] transition-colors"
                    data-testid="footer-email"
                  >
                    info@greencontinenttours.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#4dd4ac] shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+48537482798"
                    className="hover:text-[#4dd4ac] transition-colors"
                    data-testid="footer-phone"
                  >
                    +48 537 482 798
                  </a>
                </li>
              </ul>

              <p className="text-[10.5px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mt-7 mb-3">
                Explore
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[13px] text-white/80">
                <li><Link to="/" className="hover:text-[#4dd4ac] transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-[#4dd4ac] transition-colors">Services</Link></li>
                <li><Link to="/travel-guide" className="hover:text-[#4dd4ac] transition-colors">Travel Guide</Link></li>
                <li><Link to="/gallery" className="hover:text-[#4dd4ac] transition-colors">Gallery</Link></li>
                <li><Link to="/about" className="hover:text-[#4dd4ac] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#4dd4ac] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Mini map */}
            <div className="md:col-span-4">
              <p className="text-[10.5px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-3">
                Find Us in Kraków
              </p>
              <div className="rounded-xl overflow-hidden ring-1 ring-white/10 h-[180px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.547839667!2d20.0276!3d50.0694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6d0e0e0e0d%3A0x0!2sNowohucka%2046%2C%2031-580%20Krak%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Green Continent Tours Office Location in Krakow"
                />
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#4dd4ac] hover:text-white transition-colors"
                data-testid="footer-open-map"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* SEO keyword zone — three clean inline rows, premium magazine style */}
          <div className="mt-10 pt-6 border-t border-white/10 space-y-3 text-[11.5px] text-white/55 leading-[1.75]">
            <p>
              <span className="text-[#4dd4ac] font-semibold tracking-[0.18em] uppercase mr-2">Popular Destinations:</span>
              <span className="text-white/55 hover:[&_a]:text-[#4dd4ac]">
                <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Krakow Tours</a>
                {' · '}
                <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Warsaw Tours</a>
                {' · '}
                <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Gdansk Tours</a>
                {' · '}
                <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Wroclaw Tours</a>
                {' · '}
                <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Zakopane Tours</a>
                {' · '}
                <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Auschwitz Tours</a>
                {' · '}
                <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Wieliczka Salt Mine</a>
                {' · '}
                <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Tatra Mountains Tours</a>
              </span>
            </p>
            <p>
              <span className="text-[#4dd4ac] font-semibold tracking-[0.18em] uppercase mr-2">Travel Styles:</span>
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Private Tours Poland</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Group Tours Poland</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Family Tours Poland</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Luxury Travel Poland</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Multi-Day Poland Trips</a>
              {' · '}
              <a href="/travel-guide/halal-tourism" className="hover:text-[#4dd4ac] transition-colors">Muslim-Friendly Tours</a>
              {' · '}
              <a href="/contact" className="hover:text-[#4dd4ac] transition-colors">Custom Poland Itineraries</a>
            </p>
            <p>
              <span className="text-[#4dd4ac] font-semibold tracking-[0.18em] uppercase mr-2">Our Services:</span>
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Airport Transfers Krakow</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">City Tours</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Professional Tour Guides</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">MICE Services Poland</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Hotel Bookings Poland</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Transportation Tickets</a>
              {' · '}
              <a href="/contact" className="hover:text-[#4dd4ac] transition-colors">Visa Support</a>
              {' · '}
              <a href="/services" className="hover:text-[#4dd4ac] transition-colors">Central Europe Tours</a>
            </p>
          </div>

          {/* Bottom strip */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-white/55">
            <p>
              © {year} Green Continent Tours · Premier tour operator &amp; travel agency in Kraków, Poland · NIP 6793123024 · All rights reserved
            </p>
            <p className="md:text-right">
              Based in Kraków · Trusted worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
