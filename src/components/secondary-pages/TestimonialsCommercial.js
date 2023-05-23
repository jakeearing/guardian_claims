import React from 'react';
import '../../styles/testimonials.css';
import content from '../../content.json';

export default function TestimonialsCommercial() {
  const testimonialCommercialData = content.testimonialsCommercial;

  return (
    <div className="testimonials-container">
      <div className="testimonial-icon-container">
        <img src={process.env.PUBLIC_URL + `/images/svg-icons/${testimonialCommercialData.icon}`} alt="Testimonial Icon" className="testimonial-icon" />
        <p className="testimonial-icon-text"><span className="thin">Testimonials</span></p>
      </div>
      <h2 className="testimonial-heading">{testimonialCommercialData.heading}</h2>
      <p className="testimonial-text">{testimonialCommercialData.text}</p>
      <p className="testimonial-author">{testimonialCommercialData.author}</p>
      <p className="testimonial-company"><span className="bold">{testimonialCommercialData.company}</span></p>
    </div>
  );
}
