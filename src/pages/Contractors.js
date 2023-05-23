import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import WhatWeDo from '../components/secondary-pages/WhatWeDo.js';
import TestimonialsContractors from '../components/secondary-pages/TestimonialsContractors.js';
import '../styles/secondary-pages.css'
import { Link } from 'react-router-dom';
import content from '../content.json';

export default function Contractors() {
  const contractorContent = content.contractor;
  return (
    <div className="secondary-container">
      <Header />
      <div className="secondary-splash-container">
        <div className="secondary-splash-wrapper">
          <p>{contractorContent.contractorSplash[0].heading}</p>
          <p>{contractorContent.contractorSplash[0].paragraph}</p>
          <button>
            <Link to={contractorContent.contractorSplash[0].buttonLink}>{contractorContent.contractorSplash[0].buttonText}</Link>
          </button>
        </div>
      </div>
      <div className="secondary-content-container">
        <div className="left-column-image">
          <img src={process.env.PUBLIC_URL + `/images/${contractorContent.contentOne[0].image}`} alt="Contractor" />
        </div>
        <div className="right-column-text">
          <div className="right-column-content">
            <h2>{contractorContent.contentOne[0].heading}</h2>
            <p>{contractorContent.contentOne[0].paragraphOne}</p>
            <p>{contractorContent.contentOne[0].paragraphTwo}</p>
            <button>
              <Link to={contractorContent.contentOne[0].buttonLink}>{contractorContent.contentOne[0].buttonText}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="secondary-content-container">
        <div className="left-column-text">
          <div className="left-column-content">
            <h2>{contractorContent.contentTwo[0].heading}</h2>
            <p>{contractorContent.contentTwo[0].paragraphOne}</p>
            <p>{contractorContent.contentTwo[0].paragraphTwo}</p>
            <button>
              <Link to={contractorContent.contentOne[0].buttonLink}>{contractorContent.contentOne[0].buttonText}</Link>
            </button>
          </div>
        </div>
        <div className="right-column-image">
          <img src={process.env.PUBLIC_URL + `/images/${contractorContent.contentTwo[0].image}`} alt="Contractor" />
        </div>
      </div>
      <div className="secondary-content-container">
        <div className="left-column-image">
          <img src={process.env.PUBLIC_URL + `/images/${contractorContent.contentThree[0].image}`} alt="Contractor" />
        </div>
        <div className="right-column-text">
          <div className="right-column-content">
            <h2>{contractorContent.contentThree[0].heading}</h2>
            <p>{contractorContent.contentThree[0].paragraphOne}</p>
            <p>{contractorContent.contentThree[0].paragraphTwo}</p>
            <button>
              <Link to={contractorContent.contentThree[0].buttonLink}>{contractorContent.contentThree[0].buttonText}</Link>
            </button>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <TestimonialsContractors />
      <Footer />
    </div>
  );
}
