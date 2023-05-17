import React from 'react';
import Home from '../pages/Home';
import Claims from '../pages/Claims';
import About from '../pages/About';
import TermsOfUse from '../pages/TermsOfUse';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import ScrollToTop from '../components/ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/claim" element={<Claims />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}
