import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// ⚡ Code-split below-the-fold routes — each becomes a separate JS bundle
// that loads only when the user navigates to that page. This dramatically
// reduces the initial JS payload (and improves PageSpeed Insights TBT/FCP).
const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const TravelGuide = lazy(() => import('./pages/TravelGuide'));
const HalalTourism = lazy(() => import('./pages/articles/HalalTourism'));
const HiddenGems = lazy(() => import('./pages/articles/HiddenGems'));
const AvoidMistakes = lazy(() => import('./pages/articles/AvoidMistakes'));
const FamilySummerItinerary = lazy(() =>
  import('./pages/articles/FamilySummerItinerary')
);

// Minimal full-screen loader — keeps brand feel during chunk fetch (≤200ms)
const RouteLoader = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-white"
    aria-label="Loading page"
  >
    <div
      className="w-10 h-10 rounded-full border-2 border-[#4dd4ac]/30 border-t-[#0f4f47] animate-spin"
      aria-hidden="true"
    />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteLoader />}>
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
            <Route
              path="/travel-guide/family-summer-poland-itinerary"
              element={<FamilySummerItinerary />}
            />
            {/* Deleted article redirect */}
            <Route
              path="/travel-guide/group-tours"
              element={<Navigate to="/services" replace />}
            />
            {/* Catch-all: redirect any unknown URL home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        {/* WhatsApp button visible on all pages */}
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
