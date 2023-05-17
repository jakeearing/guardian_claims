import React from 'react';
import Header from '../components/nav/HeaderHome.js';
import Footer from '../components/nav/Footer.js';
import Splash from '../components/Splash.js';
import ClaimSteps from '../components/ClaimSteps.js';
import ClaimTypes from '../components/ClaimTypes.js';
import '../styles/home.css'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="splash-container">
        <Splash />
      </div>
      <div className="claimsteps-container">
        <ClaimSteps />
      </div>
      <div className="claimtypes-container">
        <ClaimTypes />
      </div>
      <Footer />
    </div>
  );
}
