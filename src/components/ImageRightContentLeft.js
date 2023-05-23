import React from 'react';
import '../styles/secondary-pages.css';
import { Link } from 'react-router-dom';
import content from '../content.json';

export default function ImageRightContentLeft() {
  return (
    <div className="secondary-content-container">
      <div className="left-column-text">
        <div className="left-column-content">
          <h2>Our Residential Property Process</h2>
          <p>Pellentesque elit eget gravida cum sociis natoque penatibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Aliquam purus sit amet luctus venenatis lectus magna. Id volutpat lacus laoreet non. Facilisis mauris sit amet massa vitae tortor.</p>
          <p>Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Quisque id diam vel quam. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Egestas fringilla phasellus faucibus scelerisque.</p>
          <button>
            <Link to={content.splash.buttonLink}>Submit a Claim</Link>
          </button>
        </div>
      </div>
      <div className="right-column-image">
        <img src={process.env.PUBLIC_URL + '/images/residential.jpg'} alt="Residential" />
      </div>
    </div>
  );
}
