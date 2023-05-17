import React from 'react';
import Header from './nav/Header.js';
import Footer from './nav/Footer.js';
import ClaimForm from './ClaimForm.js';
import '../style/claimpage.css'

export default function Claims() {
  return (
    <div>
      <Header />
      <div className="claims-form">
      <ClaimForm />
      </div>
      <Footer />
    </div>
  )
}

