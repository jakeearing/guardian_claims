import React, { useState } from 'react';
import '../style/claimform.css';

export default function ClaimForm() {
    const [alreadyFiledClaim, setAlreadyFiledClaim] = useState('no');
    const [insuranceCompany, setInsuranceCompany] = useState('');
    const [claimType, setClaimType] = useState('');
    const [damageType, setDamageType] = useState('');
    const [dateOfLoss, setDateOfLoss] = useState('');
    const [description, setDescription] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [claimNumber, setClaimNumber] = useState('');
    const [adjusterOnSite, setAdjusterOnSite] = useState('no');
    const [claimDenied, setClaimDenied] = useState('no');
    const [lossMitigation, setLossMitigation] = useState('no');
    const [repairsStarted, setRepairsStarted] = useState('no');
    const [contractorSelected, setContractorSelected] = useState('no');

    const handleAlreadyFiledClaimChange = (event) => {
        setAlreadyFiledClaim(event.target.value);
    };

    const handleInsuranceCompanyChange = (event) => {
        setInsuranceCompany(event.target.value);
    };

    const handleClaimTypeChange = (event) => {
        setClaimType(event.target.value);
    };


    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };

    const handleDateOfLossChange = (event) => {
        setDateOfLoss(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDamageTypeChange = (event) => {
        setDamageType(event.target.value);
    };

    const handleClaimNumberChange = (event) => {
        setClaimNumber(event.target.value);
    };

    const handleAdjusterOnSiteChange = (event) => {
        setAdjusterOnSite(event.target.value);
    };

    const handleClaimDeniedChange = (event) => {
        setClaimDenied(event.target.value);
    };

    const handleLossMitigationChange = (event) => {
        setLossMitigation(event.target.value);
    };

    const handleRepairsStartedChange = (event) => {
        setRepairsStarted(event.target.value);
    };

    const handleContractorSelectedChange = (event) => {
        setContractorSelected(event.target.value);
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
                    <label htmlFor="damage-type">What kind of damage?</label>
                    <select id="damage-type" value={damageType} onChange={handleDamageTypeChange}>
                        <option value="">Select damage type</option>
                        <option value="hail">Hail damage</option>
                        <option value="wind">Wind damage</option>
                        <option value="water">Water damage</option>
                        <option value="auto-accident">Auto accident</option>
                        <option value="loss-of-income">Loss of income</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="insurance-company">Insurance Company:</label>
                    <input type="text" id="insurance-company" value={insuranceCompany} onChange={handleInsuranceCompanyChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="date-of-loss">When did the loss occur?</label>
                    <input type="date" id="date-of-loss" value={dateOfLoss} onChange={handleDateOfLossChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="already-filed-claim">Have you already filed a claim?</label>
                    <select id="already-filed-claim" value={alreadyFiledClaim} onChange={handleAlreadyFiledClaimChange}>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>

                {alreadyFiledClaim === 'yes' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="claim-number">What is your claim number?</label>
                            <input type="text" id="claim-number" value={claimNumber} onChange={handleClaimNumberChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="adjuster-on-site">Has an adjuster been on site?</label>
                            <select id="adjuster-on-site" value={adjusterOnSite} onChange={handleAdjusterOnSiteChange}>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="claim-denied">Has your claim been denied?</label>
                            <select id="claim-denied" value={claimDenied} onChange={handleClaimDeniedChange}>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="loss-mitigation">Has loss mitigation begun?</label>
                            <select id="loss-mitigation" value={lossMitigation} onChange={handleLossMitigationChange}>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="repairs-started">Have you started repairs?</label>
                            <select id="repairs-started" value={repairsStarted} onChange={handleRepairsStartedChange}>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contractor-selected">Have you selected a contractor?</label>
                            <select id="contractor-selected" value={contractorSelected} onChange={handleContractorSelectedChange}>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                        </div>
                    </>
                )}

                <div className="form-group description">
                    <label htmlFor="description" class="above">Description of claim</label>
                    <textarea id="description" value={description} onChange={handleDescriptionChange} />
                </div>

                <div class="form-group fileUpload">
                    <label for="fileUpload">Upload Files</label>
                    <input type="file" id="fileUpload" name="fileUpload" multiple/>
                </div>

                <div className="submitButton">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    </div>
    )
}