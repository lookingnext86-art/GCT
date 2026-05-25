import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import TravelGuide from './pages/TravelGuide';
import HalalTourism from './pages/articles/HalalTourism';
import HiddenGems from './pages/articles/HiddenGems';
import AvoidMistakes from './pages/articles/AvoidMistakes';
import GroupTours from './pages/articles/GroupTours';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="/travel-guide/halal-tourism" element={<HalalTourism />} />
          <Route path="/travel-guide/hidden-gems" element={<HiddenGems />} />
          <Route path="/travel-guide/avoid-mistakes" element={<AvoidMistakes />} />
          <Route path="/travel-guide/group-tours" element={<GroupTours />} />
        </Routes>
        {/* WhatsApp button visible on all pages */}
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;