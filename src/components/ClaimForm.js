import React, { useState } from 'react';
import '../styles/claim-form.css';
import content from '../content.json';

export default function ClaimForm() {
  const [claimType, setClaimType] = useState('');
  const [claimStatus, setClaimStatus] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleClaimTypeChange = (event) => {
    setClaimType(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleClaimStatusChange = (event) => {
    setClaimStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      formType: 'default',
      claimType,
      claimStatus,
      zipCode,
      firstName: event.target.elements['first-name'].value,
      lastName: event.target.elements['last-name'].value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
    };

    fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully! We\'ll get back to you in 24-48 hours.');
          console.log('Email sent!');
        } else {
          console.log('Error sending email');
        }
      })
      .catch((error) => {
        console.log('Error sending email', error);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="first-name">First Name:</label>
              <input type="text" id="first-name" required />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="last-name">Last Name:</label>
              <input type="text" id="last-name" required />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" required />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" required />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="zip-code">Zip Code:</label>
              <input
                type="text"
                id="zip-code"
                value={zipCode}
                onChange={handleZipCodeChange} required
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="claim-type">Type of Claim:</label>
              <select
                id="claim-type"
                value={claimType}
                onChange={handleClaimTypeChange} required
              >
                <option value="">Select Claim Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="other">Other</option>
                <option value="marine-aviation">Marine/Aviation</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="claim-status">What is your claim status?</label>
              <select
                id="claim-status"
                value={claimStatus}
                onChange={handleClaimStatusChange} required
              >
                <option value="">Select Claim Status</option>
                <option value="open">I have an open claim</option>
                <option value="notFiled">I have not filed a claim</option>
                <option value="denied">I have a denied claim</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <button className="form-button" type="submit">Submit</button>
            </div>
          </div>
        </div>

      </form>
      <p>{content.claims.rightColumnText}</p>
    </div>
  );
}
