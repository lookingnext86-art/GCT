import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OurGoalsSection from '../components/OurGoalsSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Green Continent Tours</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted tour operator in Krakow, dedicated to creating unforgettable Polish and European adventures
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <img 
                  src="https://greencontinenttours.com/GCT-asset/logo.svg" 
                  alt="Green Continent Tours" 
                  className="w-32 h-32 mx-auto mb-8"
                />
                <h2 className="text-4xl font-bold text-[#0f4f47] mb-6">Who We Are</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Green Continent Tours is a premier tour operator based in the heart of Krakow, Poland. We specialize in creating authentic, memorable travel experiences across Poland and Europe.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With years of experience and deep local knowledge, our passionate team of travel experts and certified guides help thousands of visitors each year discover the magic of Krakow, the beauty of Poland, and the wonders of European destinations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gradient-to-br from-[#0f4f47] to-[#1a6b5f] p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p>
                    To provide exceptional travel experiences that showcase Poland's rich history, stunning landscapes, and vibrant culture while maintaining sustainable and responsible tourism practices.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#4dd4ac] to-[#3bb896] p-8 rounded-2xl text-[#0f4f47]">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p>
                    To be the leading tour operator in Krakow, known for authentic experiences, exceptional service, and commitment to sustainable tourism that benefits both travelers and local communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <OurGoalsSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;