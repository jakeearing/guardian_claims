import React, { useState } from 'react';
import '../styles/claim-form.css';
import content from '../content.json';

export default function ContractorForm() {
  const [zipCode, setZipCode] = useState('');
  const [company, setCompany] = useState('');

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      formType: 'contractor',
      company,
      zipCode,
      firstName: event.target.elements['first-name'].value,
      lastName: event.target.elements['last-name'].value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
    };

    // Determine the API URL based on the environment
    const apiUrl = process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_URL_DEV_EMAIL
      : process.env.REACT_APP_API_URL_PROD_EMAIL;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert(content.formStatus.success);
          console.log('Email sent!');
        } else {
          alert(content.formStatus.fail);
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
        <h3>{content.claimsContractors.formText}</h3>
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
                onChange={handleZipCodeChange}
                required
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="company">Company Name:</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={handleCompanyChange}
                required
              />
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
