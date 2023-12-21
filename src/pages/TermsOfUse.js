import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import '../styles/terms-privacy.css';
import content from '../content.json';

export default function TermsOfUse() {
  const termsOfUseContent = content.termsOfUse;

  return (
    <div>
      <Header />
      <div className="terms-privacy-container">
        <div className="terms-privacy-content">
          <h1>{termsOfUseContent.title}</h1>
          <p>{termsOfUseContent.content}</p>
          <ol>
            {termsOfUseContent.sections.map((section, index) => (
              <li key={index}>
                <h2>{section.title}</h2>
                {section.sections ? (
                  <ul>
                    {section.sections.map((subsection, subIndex) => (
                      <li key={subIndex}>
                        <h3>{subsection.title}</h3>
                        <p>{subsection.content}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
                {section.subParagraphs && (
                  <div>
                    {section.subParagraphs.map((subParagraph, subIndex) => (
                      <p key={subIndex}>{subParagraph.content}</p>
                    ))}
                  </div>
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
      <Footer />
    </div>
  );
}
