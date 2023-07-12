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
            <h1>Terms of Use</h1>
            <p>{termsOfUseContent.sections[0].content}</p>
            <ol>
              {termsOfUseContent.sections.slice(1).map((section, index) => (
                <li key={index}>
                  <h2>{section.title}</h2>
                  {section.sections ? (
                    <ol>
                      {section.sections.map((subsection, subIndex) => (
                        <li key={subIndex}>
                          <h3>{subsection.title}</h3>
                          <p>{subsection.content}</p>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </li>
              ))}
            </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
