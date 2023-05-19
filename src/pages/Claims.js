import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import ClaimForm from '../components/ClaimForm.js';
import '../styles/claims.css'
import content from '../content.json';

export default function Claims() {
  return (
    <div>
      <Header />
      <div className="claims-form-wrapper">
      <div className="claims-form">
      <h1>{content.claims.heading}</h1>
      <ClaimForm />
      </div>
      </div>
      <Footer />
    </div>
  )
}

