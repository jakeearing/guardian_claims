import React from 'react';
import { Link } from 'react-router-dom';
import ClaimForm from '../components/ClaimForm.js';
import Footer from '../components/nav/Footer.js';
import '../styles/claims.css';

import content from '../content.json';

export default function Claims() {
  return (
    <div>
      <div className="claims-form-wrapper">
        <div className="claims-form-splash">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={process.env.PUBLIC_URL + '/images/logos/logo-top.png'} alt="TrustPro Claims Logo" />
            </Link>
          </div>
          <div className="claims-splash-text">
            <p className="claims-header-one">{content.claims.headerOne}</p>
            <p className="claims-header-two">{content.claims.headerTwo}</p>
          </div>
        </div>
        <div className="claims-content-background">
          <div className="claims-content">
            <div className="left-column">
              <h2>{content.claims.leftColumnTitle}</h2>
              <h3><span className="thin">{content.claims.leftColumnText}</span></h3>
              <ul>
                {content.claims.leftColumnListItems.map((item, index) => (
                  <li key={index}>
                    <h3>{item.itemTitle}</h3>
                    <p>{item.itemText}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right-column">
              <div className="claims-form">
                <ClaimForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
