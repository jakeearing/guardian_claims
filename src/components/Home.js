import React from 'react';
import Header from './nav/Header.js';
import Footer from './nav/Footer.js';
import ClaimTypes from './ClaimTypes.js';
import '../style/style.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Header />
        <div className="splash">
        <div className="container text-center">
          <p>Are you struggling with your insurance claim?</p>
          <p>With our simple intake process, getting started is easy. Just fill out the form, 
          and we will review your file to make sure you are a good fit for a Public Adjuster.
           From start to finish, we keep you informed and updated every step of the way.</p>
          <button><Link to="/claim">Get Guardian</Link></button>
          <p>Let Guardian Claims be your protector and defender against unjust insurance practices. We're here to shield your claim and fight for your right to fair compensation.</p>
        </div>
      </div>
      <div className="content">
      
      </div>
      <ClaimTypes />
      <Footer />
    </div>
  );
}
