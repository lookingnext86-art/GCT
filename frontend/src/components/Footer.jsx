import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f4f47] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title Image */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Contact Green Continent Tours - Your Travel Agency in Krakow
            </h2>
            <img 
              src="https://greencontinenttours.com/GCT-asset/location-header.png" 
              alt="Contact our tour operator office in Krakow, Poland" 
              className="mx-auto max-w-xs w-full"
              loading="lazy"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Green Continent Tours
            </h3>
            <p className="text-center text-lg mb-6">
              Professional Tour Operator & Travel Agency in Krakow, Poland
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#4dd4ac] flex-shrink-0 mt-1" aria-hidden="true" />
                <address className="text-lg not-italic">
                  <strong>Office Address:</strong><br />
                  Dąbska 11A/58, Kraków 31-572, Poland
                </address>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#4dd4ac] flex-shrink-0" aria-hidden="true" />
                <div>
                  <strong>Email:</strong><br />
                  <a 
                    href="mailto:info@greencontinenttours.com"
                    className="text-lg hover:text-[#4dd4ac] transition-colors"
                    aria-label="Send email to Green Continent Tours"
                  >
                    info@greencontinenttours.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#4dd4ac] flex-shrink-0" aria-hidden="true" />
                <div>
                  <strong>Phone / WhatsApp:</strong><br />
                  <a 
                    href="tel:+48537482798"
                    className="text-lg hover:text-[#4dd4ac] transition-colors"
                    aria-label="Call Green Continent Tours"
                  >
                    +48 537 482 798
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-center">
                <strong>Business Registration:</strong> NIP 6793123024<br />
                Licensed Tour Operator in Poland
              </p>
            </div>
          </div>

          {/* SEO Keywords Footer */}
          <div className="mt-8 text-center text-white/60 text-sm">
            <p className="mb-2">
              Keywords: Tour Operator Krakow | Travel Agency Poland | European Tours | Group Travel Poland | City Tours Krakow | Vacation Packages Europe | Hotel Bookings Poland | MICE Services | Sustainable Tourism
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6 text-white/80">
            <p className="text-sm">
              © {new Date().getFullYear()} Green Continent Tours - Premier Tour Operator & Travel Agency in Krakow, Poland. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;