import React from 'react';
import '../styles/claimsteps.css'
import ClaimForm from './ClaimForm.js';
import { Link } from 'react-router-dom';

export default function ClaimSteps() {
    return (
        <div className="wrapper">
            <h1>At <span className="bold">GuardianClaims</span>, we are here to help you navigate through the complicated and confusing insurance claims process.</h1>
            <h3>
                Our services cover a wide range of losses, including hail/wind damage, water damage, fire damage, mold damage, loss of income, and more. We offer a FREE consultation to assess the extent of the damage and determine the best course of action.
            </h3>
            <div className="content">
                <div className="box">
                    <img src={process.env.PUBLIC_URL + '/images/content/image1.jpg'} alt="intakeForm" />
                    <h2>Submit Our Intake Form</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to="/claim"><button>Get Started</button></Link>
                </div>
                <div className="box">
                    <img src={process.env.PUBLIC_URL + '/images/content/image1.jpg'} alt="intakeForm" />
                    <h2>We Guide You Through the Claims Process</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="box">
                    <img src={process.env.PUBLIC_URL + '/images/content/image1.jpg'} alt="intakeForm" />
                    <h2>Connect with Our Team</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <h1><span className="bold">Contact us today!</span></h1>
            <ClaimForm />
        </div>
    );
}
