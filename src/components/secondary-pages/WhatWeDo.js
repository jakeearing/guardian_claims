import React from 'react';
import '../../styles/what-we-do.css';
import content from '../../content.json';

export default function WhatWeDo() {
  return (
    <div className="what-we-do-container">
      <h2 className="title">{content.whatWeDo.heading}</h2>
      <div className="icon-container">
        {content.whatWeDo.whatWeDoContent.map((item, index) => (
          <div className="icon-wrapper" key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/svg-icons/what-we-do/${item.icon}`}
              alt={`Icon ${index + 1}`}
              className="icon"
            />
            <p className="icon-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
