import React, { useState } from 'react';
import '../style/claimform.css';
import Footer from './nav/Footer.js';

export default function ClaimForm() {
    const [claimType, setClaimType] = useState('');
    const [claimStatus, setclaimStatus] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleClaimTypeChange = (event) => {
        setClaimType(event.target.value);
    };

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };

    const handleclaimStatusChange = (event) => {
        setclaimStatus(event.target.value);
    };

    return (
        <div class="page-container">
            <p>Submit your claim for review!</p>
        <div class="form-container">
        
            <form>
                <div className="form-group">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name" />
                </div>

                <div className="form-group">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" />
                </div>

                <div className="form-group">
                    <label htmlFor="zip-code">Zip Code:</label>
                    <input type="text" id="zip-code" value={zipCode} onChange={handleZipCodeChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="claim-type">Type of Claim:</label>
                    <select id="claim-type" value={claimType} onChange={handleClaimTypeChange}>
                        <option value="">Select Claim Type</option>
                        <option value="home">Home</option>
                        <option value="business">Business</option>
                        <option value="auto">Auto</option>
                        <option value="marine-aviation">Marine/Aviation</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="claim-status">What is your claim status?</label>
                    <select id="claim-status" value={claimStatus} onChange={handleclaimStatusChange}>
                        <option value="">Select damage type</option>
                        <option value="hail">I have an open claim</option>
                        <option value="wind">I have not filed a claim</option>
                        <option value="water">I have a denied claim</option>
                    </select>
                </div>

                <div className="submitButton">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    </div>
    )
}