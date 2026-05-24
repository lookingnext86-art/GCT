import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import TravelGuide from './pages/TravelGuide';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
        </Routes>
        {/* WhatsApp button visible on all pages */}
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;