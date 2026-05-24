import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with our team to plan your perfect Krakow and Poland adventure
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-[#0f4f47] mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4f47]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4f47]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4f47]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4f47]"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0f4f47] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#1a6b5f] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] p-8 rounded-2xl shadow-xl text-white">
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-[#4dd4ac] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Office Address</h3>
                        <p>Nowohucka 46, Kraków 31-580, Poland</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-[#4dd4ac] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phone / WhatsApp</h3>
                        <a href="tel:+48537482798" className="hover:text-[#4dd4ac]">+48 537 482 798</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#4dd4ac] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <a href="mailto:info@greencontinenttours.com" className="hover:text-[#4dd4ac]">info@greencontinenttours.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.547839667!2d20.0276!3d50.0694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6d0e0e0e0d%3A0x0!2sNowohucka%2046%2C%2031-580%20Krak%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Green Continent Tours Office Location"
                  ></iframe>
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