import React from 'react';
import { Link } from 'react-router-dom';
import ContractorForm from '../components/ContractorForm.js';
import '../styles/claims.css';
import content from '../content.json';

export default function ClaimsContractors() {
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
          </div>
          <div className="right-column">
            <div className="claims-form">
              <ContractorForm />
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
