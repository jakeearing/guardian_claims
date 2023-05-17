import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import ClaimSteps from '../components/ClaimSteps.js';
import ClaimTypes from '../components/ClaimTypes.js';
import '../styles/style.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div class="container">
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
      <div className="claimsteps-container">
        <ClaimSteps />
      </div>
      <div className="claimtypes-container">
        <ClaimTypes />
      </div>
      <Footer />
    </div>
  );
}
