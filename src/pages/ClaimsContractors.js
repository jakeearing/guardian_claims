import React from 'react';
import { Link } from 'react-router-dom';
import ContractorForm from '../components/ContractorForm.js';
import Footer from '../components/nav/Footer.js';
import '../styles/claims.css';
import content from '../content.json';

export default function ClaimsContractors() {
  return (
    <div>
      <div className="claims-form-wrapper">
        <div className="claims-contractors-form-splash">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={process.env.PUBLIC_URL + '/images/logos/logo-top.png'} alt="TrustPro Claims Logo" />
            </Link>
          </div>
          <div className="claims-splash-text">
            <p className="claims-header-one">{content.claimsContractors.headerOne}</p>
            <p className="claims-header-two">{content.claimsContractors.headerTwo}</p>
          </div>
        </div>
        <div className="claims-content-background">
          <div className="claims-content">
            <div className="left-column">
              <h2>{content.claimsContractors.leftColumnTitle}</h2>
              <h3><span className="thin">{content.claimsContractors.leftColumnText}</span></h3>
              <ul>
                {content.claimsContractors.leftColumnListItems.map((item, index) => (
                  <li key={index}>
                    <h3>{item.itemTitle}</h3>
                    <p>{item.itemText}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right-column">
              <div className="claims-form">
                <ContractorForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
