import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import ImageLeftContentRight from '../components/ImageLeftContentRight.js';
import ImageRightContentLeft from '../components/ImageRightContentLeft.js';
import WhatWeDo from '../components/WhatWeDo.js';
import '../styles/secondary-pages.css'
import { Link } from 'react-router-dom';
import content from '../content.json';

export default function Contractors() {
  const contractorSplash = content.contractor.contractorSplash[0];
  return (
    <div className="secondary-container">
      <Header />
      <div className="secondary-splash-container">
        <div className="secondary-splash-wrapper">
          <p>{contractorSplash.heading}</p>
          <p>{contractorSplash.paragraph}</p>
          <button>
            <Link to="/claim">{contractorSplash.buttonText}</Link>
          </button>
        </div>
      </div>
      <ImageLeftContentRight />
      <ImageRightContentLeft />
      <ImageLeftContentRight />
      <WhatWeDo />
      <Footer />
    </div>
  );
}
