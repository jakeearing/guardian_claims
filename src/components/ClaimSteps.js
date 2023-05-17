import React from 'react';
import '../styles/claimsteps.css'
import ClaimForm from './ClaimForm.js';
import { Link } from 'react-router-dom';
import content from '../content.json';

export default function ClaimSteps() {

    return (
        <div className="wrapper">
            {/* The h1 element below is currently not implemented in the json */}
            <h1>At <span className="bold">GuardianClaims</span>, 
            we are here to help you navigate through the complicated 
            and confusing insurance claims process.</h1>
            <h3>{content.claimSteps.description}</h3>
            <div className="content">
                {content.claimSteps.boxes.map((box, index) => (
                    <div className="box" key={index}>
                        <img src={process.env.PUBLIC_URL + `/images/content/${box.image}`} alt="intakeForm" />
                        <h2>{box.title}</h2>
                        <p>{box.description}</p>
                        {index === 0 && (
                            <Link to={box.buttonLink}>
                                <button>{box.buttonText}</button>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            <h1><span className="bold">{content.claimSteps.contactHeading}</span></h1>
            <ClaimForm />
        </div>
    );
}
