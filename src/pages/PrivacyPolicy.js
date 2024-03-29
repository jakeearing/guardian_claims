import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import content from '../content.json';
import '../styles/terms-privacy.css';

export default function PrivacyPolicy() {
  const privacyPolicyContent = content.privacyPolicy;

  return (
    <div>
      <Header />
      <div className="container">
        <div className="terms-privacy-container">
          <div className="terms-privacy-content">
            <h1>{privacyPolicyContent.title}</h1>
            <p>{privacyPolicyContent.content}</p>
            <ol>
              {privacyPolicyContent.sections.map((section, index) => (
                <li key={index}>
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet, subIndex) => (
                        <li key={subIndex}>
                          <p>{bullet.content}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.subParagraphs && (
                    <div>
                      {section.subParagraphs.map((subParagraph, subIndex) => (
                        <p key={subIndex}>{subParagraph.content}</p>
                      ))}
                    </div>
                  )}
                                    {section.subBullets && (
                    <ul>
                      {section.subBullets.map((subBullet, subIndex) => (
                        <li key={subIndex}>
                          <p>{subBullet.content}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
            <div className="contact-info">
              <div className="contact-section">
                {content.contactUsTermsPrivacy.mailingAddress.map((info, index) => (
                  <p key={index}>{info}</p>
                ))}
              </div>
              <div className="contact-section">
                {content.contactUsTermsPrivacy.emailAddress.map((info, index) => (
                  <p key={index}>{info}</p>
                ))}
              </div>
              <div className="contact-section">
                {content.contactUsTermsPrivacy.phoneNumber.map((info, index) => (
                  <p key={index}>{info}</p>
                ))}
              </div>
              <div className="contact-section">
                <p>{content.contactUsTermsPrivacy.effectiveDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
