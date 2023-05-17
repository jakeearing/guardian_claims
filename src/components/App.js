import React from 'react';
import Home from './Home';
import Claims from './ClaimPage';
import About from './About';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/claim" element={<Claims />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

