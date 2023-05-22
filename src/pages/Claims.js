import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/nav/Footer.js';
import ClaimForm from '../components/ClaimForm.js';
import '../styles/claims.css'
import content from '../content.json';

export default function Claims() {
  return (
    <div>
      <div className="claims-form-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/images/logos/logo-top.png'} alt="Guardian Claim Logo" />
          </Link>
        </div>
        <div className="claims-content">
          <div className="left-column">
            <h3><span className="thin">Mattis ullamcorper velit sed ullamcorper. Libero nunc consequat interdum varius sit amet mattis vulputate. Accumsan tortor posuere ac ut consequat semper. Et tortor at risus viverra adipiscing at in tellus integer. Ultrices dui sapien eget mi proin. Tincidunt vitae semper quis lectus nulla at. Luctus accumsan tortor posuere ac ut consequat. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Tortor dignissim convallis aenean et tortor at risus. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Ultrices sagittis orci a scelerisque purus semper eget. Amet purus gravida quis blandit turpis.</span></h3>
          </div>
          <div className="right-column">
            <div className="claims-form">
              <ClaimForm />
            </div>
          </div>
        </div>
        <h3 className="last-h3">
          <span className="thin">Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Vel facilisis volutpat est velit egestas. Pharetra massa massa ultricies mi quis. Placerat in egestas erat imperdiet sed euismod nisi. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Nec nam aliquam sem et tortor consequat id porta nibh.</span>
        </h3>
      </div>
      <Footer />
    </div>
  )
}
