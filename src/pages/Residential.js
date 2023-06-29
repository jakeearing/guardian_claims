import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import WhatWeDo from '../components/secondary-pages/WhatWeDo.js';
import TestimonialsResidential from '../components/secondary-pages/TestimonialsResidential.js';
import '../styles/secondary-pages.css'
import { Link } from 'react-router-dom';
import content from '../content.json';

export default function Residential() {
  const residentialContent = content.residential;
  return (
    <div className="secondary-container">
      <Header />
      <div className="secondary-splash-container">
        <div className="secondary-splash-wrapper">
          <p>{residentialContent.residentialSplash[0].heading}</p>
          <p>{residentialContent.residentialSplash[0].paragraph}</p>
          <Link to={residentialContent.residentialSplash[0].buttonLink}>
            <button>
              {residentialContent.residentialSplash[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
      <div className="secondary-content-container">
        <div className="left-column-image">
          <img src={process.env.PUBLIC_URL + `/images/content/${residentialContent.contentOne[0].image}`} alt="Residential" />
        </div>
        <div className="right-column-text">
          <div className="right-column-content">
            <h2>{residentialContent.contentOne[0].heading}</h2>
            <p>{residentialContent.contentOne[0].paragraphOne}</p>
            <p>{residentialContent.contentOne[0].paragraphTwo}</p>
          </div>
        </div>
      </div>
      <div className="secondary-content-container">
        <div className="left-column-text">
          <div className="left-column-content">
            <h2>{residentialContent.contentTwo[0].heading}</h2>
            <p>{residentialContent.contentTwo[0].paragraphOne}</p>
            <p>{residentialContent.contentTwo[0].paragraphTwo}</p>
          </div>
        </div>
        <div className="right-column-image">
          <img src={process.env.PUBLIC_URL + `/images/content/${residentialContent.contentTwo[0].image}`} alt="Residential" />
        </div>
      </div>
      <div className="secondary-content-container">
        <div className="left-column-image">
          <img src={process.env.PUBLIC_URL + `/images/content/${residentialContent.contentThree[0].image}`} alt="Residential" />
        </div>
        <div className="right-column-text">
          <div className="right-column-content">
            <h2>{residentialContent.contentThree[0].heading}</h2>
            <p>{residentialContent.contentThree[0].paragraphOne}</p>
            <p>{residentialContent.contentThree[0].paragraphTwo}</p>
            <Link to={residentialContent.contentThree[0].buttonLink}>
              <button>
                {residentialContent.contentThree[0].buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <TestimonialsResidential />
      <Footer />
    </div>
  );
}
