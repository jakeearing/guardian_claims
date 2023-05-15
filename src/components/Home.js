import React from 'react';
import Header from './nav/Header.js';
import Footer from './nav/Footer.js';
import ClaimTypes from './ClaimTypes.js';
import '../style/style.css'
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
      <div className="wrapper">
        <h2>If you are experiencing a loss, we understand how overwhelming and stressful the situation can be. That's why at Guardian Claims, we are here to help you navigate through the complicated and confusing insurance claims process.</h2>
        <p>
        Our services cover a wide range of losses, including hail/wind damage, water damage, fire damage, mold damage, loss of income, and more. We offer a FREE consultation to assess the extent of the damage and determine the best course of action.
        </p>
        <div className="content">
          <div className="box">
          <img src={process.env.PUBLIC_URL + '/images/image1.jpg'} alt="intakeForm" />
            <h2>Submit Our Intake Form</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/claim"><button>Get Started</button></Link>
          </div>
          <div className="box">
          <img src={process.env.PUBLIC_URL + '/images/image1.jpg'} alt="intakeForm" />
            <h2>We Guide You Through the Claims Process</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="box">
          <img src={process.env.PUBLIC_URL + '/images/image1.jpg'} alt="intakeForm" />
            <h2>Connect with Our Team</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      <ClaimTypes />
      </div>
      <Footer />
    </div>
  );
}
