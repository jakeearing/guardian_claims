import React, { useEffect } from 'react';
import '../styles/claim-types.css';
import content from '../content.json';

export default function ClaimTypes() {
  useEffect(() => {
    // Preload images
    content.claimTypes.claimCategories.forEach(category => {
      const img = new Image();
      img.src = process.env.PUBLIC_URL + `/images/claim-types/${category.image}`;
    });
  }, []);

  return (
    <div className="claim-types-wrapper">
      <h1>
        <span className="thin">{content.claimTypes.headingThin}</span>
        {content.claimTypes.headingBold}
      </h1>
      <h3>
        {content.claimTypes.description}
      </h3>
      <div className="claim-types-content">
        {content.claimTypes.claimCategories.map((category, index) => (
          <div className="claims-box" key={index}>
            <div className="image-wrapper">
              <img
                src={process.env.PUBLIC_URL + `/images/claim-types/${category.image}`}
                alt={category.title}
              />
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
