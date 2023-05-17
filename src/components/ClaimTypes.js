import React from 'react';
import '../styles/claimtypes.css'

export default function ClaimTypes() {   
  return (
    <div className="claim-types-wrapper">
      <h1><span className="thin">Your situation is unique,</span> We process all types of claims daily.</h1>
      <h3>Minor damage, major losses, emergency services,
        and planned restoration projects</h3>
      <div className="claim-types-content">
        <div className="claims-box">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/content/waterflood.jpg'} alt="intakeForm" />
            <div className="overlay">
              <h2>Water & Flood</h2>
            </div>
          </div>
        </div>
        <div className="claims-box">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/content/waterflood.jpg'} alt="intakeForm" />
            <div className="overlay">
              <h2>Fire</h2>
            </div>
          </div>
        </div>
        <div className="claims-box">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/content/waterflood.jpg'} alt="intakeForm" />
            <div className="overlay">
              <h2>Earthquake</h2>
            </div>
          </div>
        </div>
        <div className="claims-box">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/content/waterflood.jpg'} alt="intakeForm" />
            <div className="overlay">
              <h2>Wildfire</h2>
            </div>
          </div>
        </div>
        <div className="claims-box">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/content/waterflood.jpg'} alt="intakeForm" />
            <div className="overlay">
              <h2>Collapse</h2>
            </div>
          </div>
        </div>
        <div className="claims-box">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/content/waterflood.jpg'} alt="intakeForm" />
            <div className="overlay">
              <h2>Hail & Snow</h2>
            </div>
          </div>
        </div>
        <div className="claims-box">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/content/waterflood.jpg'} alt="intakeForm" />
            <div className="overlay">
              <h2>Hurricane & Tornado</h2>
            </div>
          </div>
        </div>
        <div className="claims-box">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/content/waterflood.jpg'} alt="intakeForm" />
            <div className="overlay">
              <h2>Repair & Restoration</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

