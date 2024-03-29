import React, { useEffect } from 'react';
import '../styles/claim-steps.css';
import { Link } from 'react-router-dom';
import content from '../content.json';

export default function ClaimSteps() {
  useEffect(() => {
    // Preload images
    content.claimSteps.boxes.forEach(box => {
      const img = new Image();
      img.src = process.env.PUBLIC_URL + `/images/claim-steps/${box.image}`;
    });
  }, []);

  return (
    <div className="claim-steps-wrapper">
      <div className="claim-steps-text">
        <h1>
          {content.claimSteps.headingThinOne}{' '}
          <span className="bold">{content.claimSteps.headingBold}</span>{' '}
          {content.claimSteps.headingThinTwo}
        </h1>
        <h3>
          {content.claimSteps.description}
        </h3>
      </div>
      <div className="claim-steps-content">
        {content.claimSteps.boxes.map((box, index) => (
          <div className="claim-step-box" key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/claim-steps/${box.image}`}
              alt={box.title}
            />
            <h2>{box.title}</h2>
            <p>{box.description}</p>
            {/* Check index 0,1,2 to display which button */}
            {index === 0 && (
              <Link to={box.buttonLink}>
                <button>{box.buttonText}</button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
