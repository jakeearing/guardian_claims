import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import WhatWeDo from '../components/WhatWeDo.js';
import '../styles/secondary-pages.css'
import { Link } from 'react-router-dom';
import content from '../content.json';

export default function Commercial() {
  const commercialContent = content.commercial;
  return (
    <div className="secondary-container">
      <Header />
      <div className="secondary-splash-container">
        <div className="secondary-splash-wrapper">
          <p>{commercialContent.commercialSplash[0].heading}</p>
          <p>{commercialContent.commercialSplash[0].paragraph}</p>
          <button>
            <Link to={commercialContent.commercialSplash[0].buttonLink}>{commercialContent.commercialSplash[0].buttonText}</Link>
          </button>
        </div>
      </div>
      <div className="secondary-content-container">
        <div className="left-column-image">
          <img src={process.env.PUBLIC_URL + `/images/${commercialContent.contentOne[0].image}`} alt="Commercial" />
        </div>
        <div className="right-column-text">
          <div className="right-column-content">
            <h2>{commercialContent.contentOne[0].heading}</h2>
            <p>{commercialContent.contentOne[0].paragraphOne}</p>
            <p>{commercialContent.contentOne[0].paragraphTwo}</p>
            <button>
              <Link to={commercialContent.contentOne[0].buttonLink}>{commercialContent.contentOne[0].buttonText}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="secondary-content-container">
        <div className="left-column-text">
          <div className="left-column-content">
            <h2>{commercialContent.contentTwo[0].heading}</h2>
            <p>{commercialContent.contentTwo[0].paragraphOne}</p>
            <p>{commercialContent.contentTwo[0].paragraphTwo}</p>
            <button>
              <Link to={commercialContent.contentOne[0].buttonLink}>{commercialContent.contentOne[0].buttonText}</Link>
            </button>
          </div>
        </div>
        <div className="right-column-image">
          <img src={process.env.PUBLIC_URL + `/images/${commercialContent.contentTwo[0].image}`} alt="Commercial" />
        </div>
      </div>
      <div className="secondary-content-container">
        <div className="left-column-image">
          <img src={process.env.PUBLIC_URL + `/images/${commercialContent.contentThree[0].image}`} alt="Commercial" />
        </div>
        <div className="right-column-text">
          <div className="right-column-content">
            <h2>{commercialContent.contentThree[0].heading}</h2>
            <p>{commercialContent.contentThree[0].paragraphOne}</p>
            <p>{commercialContent.contentThree[0].paragraphTwo}</p>
            <button>
              <Link to={commercialContent.contentThree[0].buttonLink}>{commercialContent.contentThree[0].buttonText}</Link>
            </button>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <Footer />
    </div>
  );
}
