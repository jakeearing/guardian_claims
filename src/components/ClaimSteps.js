import React from 'react';
import '../styles/claim-steps.css'
import ClaimForm from './ClaimForm.js';
import { Link } from 'react-router-dom';
import content from '../content.json';

export default function ClaimSteps() {

    return (
        <div className="claim-steps-wrapper">
            <h1>{content.claimSteps.headingThinOne} <span className="bold">{content.claimSteps.headingBold}</span> 
            {content.claimSteps.headingThinTwo}</h1>
            <h3><span className="thin">{content.claimSteps.description}</span></h3>
            <div className="claim-steps-content">
                {content.claimSteps.boxes.map((box, index) => (
                    <div className="claim-step-box" key={index}>
                        <img src={process.env.PUBLIC_URL + `/images/content/${box.image}`} alt="intakeForm" />
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
