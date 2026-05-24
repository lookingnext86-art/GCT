import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f4f47] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title Image */}
          <div className="text-center mb-12">
            <img 
              src="https://greencontinenttours.com/GCT-asset/location-header.png" 
              alt="Location" 
              className="mx-auto max-w-xs w-full"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Green Continent Tours
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#4dd4ac] flex-shrink-0 mt-1" />
                <p className="text-lg">
                  Dąbska 11A/58، Kraków 31-572 Poland
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#4dd4ac] flex-shrink-0" />
                <a 
                  href="mailto:info@greencontinenttours.com"
                  className="text-lg hover:text-[#4dd4ac] transition-colors"
                >
                  info@greencontinenttours.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#4dd4ac] flex-shrink-0" />
                <a 
                  href="tel:+48537482798"
                  className="text-lg hover:text-[#4dd4ac] transition-colors"
                >
                  (+48) 537- 482 – 798
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <p className="text-sm">
                Registered in Poland under NIP 6793123024
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 text-white/80">
            <p className="text-sm">
              © {new Date().getFullYear()} Green Continent Tours. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;