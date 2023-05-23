import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Residential from '../pages/Residential';
import Commercial from '../pages/Commercial';
import Contractors from '../pages/Contractors';
import Claims from '../pages/Claims';
import About from '../pages/AboutUs';
import TermsOfUse from '../pages/TermsOfUse';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import ScrollToTop from '../components/ScrollToTop';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <img
      className={`scroll-to-top-button ${isVisible ? 'show' : ''}`}
      src={process.env.PUBLIC_URL + "/images/svg-icons/up-arrow.svg"}
      alt="Scroll to Top"
      onClick={scrollToTop}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/claim" element={<Claims />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <ScrollToTopButton />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
