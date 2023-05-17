import React from 'react';
import '../styles/claimtypes.css';
import content from '../content.json';

export default function ClaimTypes() {
  return (
    <div className="claim-types-wrapper">
      {/* The h1 element below is currently not implemented in the json */}
      <h1><span className="thin">
        Your situation is unique,</span> We process all types of claims daily.
      </h1>
      <h3>{content.claimTypes.description}</h3>
      <div className="claim-types-content">
        {content.claimTypes.claimCategories.map((category, index) => (
          <div className="claims-box" key={index}>
            <div className="image-wrapper">
              <img src={process.env.PUBLIC_URL + `/images/content/${category.image}`} alt="intakeForm" />
              <div className="overlay">
                <h2>{category.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
