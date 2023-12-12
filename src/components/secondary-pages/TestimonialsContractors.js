import React from 'react';
import '../../styles/testimonials.css';
import content from '../../content.json';

export default function TestimonialsContractors() {
  const testimonialContractorsData = content.testimonialsContractors;

  return (
    <div className="testimonials-container">
      <div className="testimonials-contractor-logo-wrapper">
        {testimonialContractorsData.logos.map((logo, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + `/images/contractor-testimonials/${logo}.png`}
              alt={`${logo}`}
              className={`${logo}`}
            />
        ))}
      </div>
    </div>
  );
}
