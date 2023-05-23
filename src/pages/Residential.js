import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import ImageLeftContentRight from '../components/ImageLeftContentRight.js';
import ImageRightContentLeft from '../components/ImageRightContentLeft.js';
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
          <button>
            <Link to="/claim">{residentialContent.residentialSplash[0].buttonText}</Link>
          </button>
        </div>
      </div>
      {/* Passing the contentText as a prop is currently WIP */}
      <ImageLeftContentRight contentText={residentialContent.contentOne} />
      <ImageRightContentLeft contentText={residentialContent.contentTwo} />
      <ImageLeftContentRight contentText={residentialContent.contentThree} />
      <Footer />
    </div>
  );
}
