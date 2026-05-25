import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const galleryImages = [
  { url: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-1.jpg', title: 'Swiss Alps Tour' },
  { url: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-2.jpg', title: 'Krakow Old Town' },
  { url: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-3.jpg', title: 'Paris Eiffel Tower' },
  { url: 'https://greencontinenttours.com/GCT-asset/Home-Gallery/slider-4.jpg', title: 'Mountain Adventure' },
  { url: 'https://greencontinenttours.com/GCT-asset/Slider/Slider-1.jpg', title: 'Historic Castle' },
  { url: 'https://greencontinenttours.com/GCT-asset/Slider/Slider-2.jpg', title: 'European Destination' },
  { url: 'https://greencontinenttours.com/GCT-asset/Slider/Slider-4.jpg', title: 'Scenic Views' },
  { url: 'https://greencontinenttours.com/GCT-asset/info/first.jpg', title: 'Travel Experience' },
  { url: 'https://greencontinenttours.com/GCT-asset/info/second.jpg', title: 'Quality Tours' },
  { url: 'https://greencontinenttours.com/GCT-asset/info/third.jpg', title: 'Nature & Heritage' }
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Travel Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore stunning destinations across Poland and Europe through our photo gallery. See where we can take you!
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-gray-50" aria-labelledby="gallery-grid-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-12 text-center">
              <h2
                id="gallery-grid-heading"
                className="text-3xl md:text-4xl font-bold text-[#0f4f47] mb-4"
              >
                Featured Destinations Across Poland &amp; Europe
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A curated look at the places, faces, and moments that make Green Continent Tours
                Krakow's trusted travel partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;