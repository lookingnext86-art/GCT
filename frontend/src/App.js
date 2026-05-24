import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* WhatsApp button visible on all pages */}
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;