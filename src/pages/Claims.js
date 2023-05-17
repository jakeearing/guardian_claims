import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import ClaimForm from '../components/ClaimForm.js';
import '../styles/claims.css'

export default function Claims() {
  return (
    <div>
      <Header />
      <div className="claims-form">
      <h1>Fill out this form to get in touch about your claim!</h1>
      <ClaimForm />
      </div>
      <Footer />
    </div>
  )
}

