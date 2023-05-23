import React from 'react';
import '../../styles/what-we-do.css';
import content from '../../content.json';

export default function WhatWeDo() {
  return (
    <div className="what-we-do-container">
      <h2 className="title">{content.whatWeDo.heading}</h2>
      <div className="icon-container">
        <div className="icon-wrapper">
        <img src={process.env.PUBLIC_URL + `/images/svg-icons/what-we-do/${content.whatWeDo.iconOne}`} alt="Icon One"  className="icon" />
          <p className="icon-text">{content.whatWeDo.iconOneText}</p>
        </div>
        <div className="icon-wrapper">
        <img src={process.env.PUBLIC_URL + `/images/svg-icons/what-we-do/${content.whatWeDo.iconTwo}`} alt="Icon Two"  className="icon" />
          <p className="icon-text">{content.whatWeDo.iconTwoText}</p>
        </div>
        <div className="icon-wrapper">
        <img src={process.env.PUBLIC_URL + `/images/svg-icons/what-we-do/${content.whatWeDo.iconThree}`} alt="Icon Three"  className="icon" />
          <p className="icon-text">{content.whatWeDo.iconThreeText}</p>
        </div>
        <div className="icon-wrapper">
        <img src={process.env.PUBLIC_URL + `/images/svg-icons/what-we-do/${content.whatWeDo.iconFour}`} alt="Icon Four"  className="icon" />
          <p className="icon-text">{content.whatWeDo.iconFourText}</p>
        </div>
        <div className="icon-wrapper">
        <img src={process.env.PUBLIC_URL + `/images/svg-icons/what-we-do/${content.whatWeDo.iconFive}`} alt="Icon Five"  className="icon" />
          <p className="icon-text">{content.whatWeDo.iconFiveText}</p>
        </div>
      </div>
    </div>
  );
}
