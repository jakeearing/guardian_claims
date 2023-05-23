import React from 'react';
import '../../styles/testimonials.css';
import content from '../../content.json';

export default function TestimonialsResidential() {
  const testimonialResidentialData = content.testimonialsResidential;

  return (
    <div className="testimonials-container">
      <div className="testimonial-icon-container">
        <img src={process.env.PUBLIC_URL + `/images/svg-icons/${testimonialResidentialData.icon}`} alt="Testimonial Icon" className="testimonial-icon" />
        <p className="testimonial-icon-text"><span className="thin">Testimonials</span></p>
      </div>
      <h2 className="testimonial-heading">{testimonialResidentialData.heading}</h2>
      <p className="testimonial-text">{testimonialResidentialData.text}</p>
      <p className="testimonial-author">{testimonialResidentialData.author}</p>
      <p className="testimonial-company"><span className="bold">{testimonialResidentialData.company}</span></p>
    </div>
  );
}
