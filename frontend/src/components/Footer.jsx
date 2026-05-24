import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const address = "Nowohucka 46, Kraków 31-580, Poland";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Nowohucka+46+Kraków+31-580+Poland";
  
  return (
    <footer className="bg-[#0f4f47] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title Image */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Visit Our Krakow Office - Your Gateway to Polish Adventures
            </h2>
            <img 
              src="https://greencontinenttours.com/GCT-asset/location-header.png" 
              alt="Contact our tour operator office in Krakow, Poland" 
              className="mx-auto max-w-xs w-full"
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                  <div>
                    <strong>Office Address:</strong><br />
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#4dd4ac] transition-colors underline"
                    >
                      {address}
                    </a>
                    <p className="text-sm mt-1 text-gray-300">Click to open in Google Maps</p>
                  </div>
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
                  Registered in Poland under NIP 6793123024
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 overflow-hidden">
              <h3 className="text-white text-xl font-bold mb-4 text-center">
                Find Us in Krakow
              </h3>
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.547839667!2d20.0276!3d50.0694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6d0e0e0e0d%3A0x0!2sNowohucka%2046%2C%2031-580%20Krak%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Green Continent Tours Office Location in Krakow"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#4dd4ac] text-[#0f4f47] px-6 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* SEO Tags - No Label */}
          <div className="mt-8 text-center text-white/60 text-sm">
            <p className="mb-2">
              Tour Operator Krakow | Travel Agency Poland | European Tours | Group Travel Poland | City Tours Krakow | Vacation Packages Europe | Hotel Bookings Poland | MICE Services | Sustainable Tourism
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