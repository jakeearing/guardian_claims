import React from 'react';
import '../../styles/testimonials.css';
import content from '../../content.json';

export default function TestimonialsContractors() {
  const testimonialContractorsData = content.testimonialsContractors;

  return (
    <div className="testimonials-container">
      <div className="testimonial-icon-container">
        <img src={process.env.PUBLIC_URL + `/images/svg-icons/${testimonialContractorsData.icon}`} alt="Testimonial Icon" className="testimonial-icon" />
        <p className="testimonial-icon-text"><span className="thin">Testimonials</span></p>
      </div>
      <h2 className="testimonial-heading">{testimonialContractorsData.heading}</h2>
      <p className="testimonial-text">{testimonialContractorsData.text}</p>
      <p className="testimonial-author">{testimonialContractorsData.author}</p>
      <p className="testimonial-company"><span className="bold">{testimonialContractorsData.company}</span></p>
    </div>
  );
}
