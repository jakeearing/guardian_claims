import React from 'react';
import { Link } from 'react-router-dom';
import ClaimForm from '../components/ClaimForm.js';
import '../styles/claims.css';
import content from '../content.json';

export default function Claims() {
  return (
    <div>
      <div className="claims-form-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/images/logos/logo-top.png'} alt="Guardian Claim Logo" />
          </Link>
        </div>
        <div className="claims-content">
          <div className="left-column">
            <h3><span className="thin">{content.claims.leftColumnText}</span></h3>
            <h2>{content.claims.leftColumnListTitle}</h2>
            <ol>
              {content.claims.leftColumnListItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="right-column">
            <div className="claims-form">
              <ClaimForm />
            </div>
          </div>
        </div>
        <h3 className="last-h3">
          <span className="thin">{content.claims.lastSectionText}</span>
        </h3>
      </div>
    </div>
  );
}
