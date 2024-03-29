import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import '../styles/about.css';
import content from '../content.json';

export default function AboutUs() {
  const { heading, whoWeAre, meetTheTeam } = content.about;
  const { heading: whoWeAreHeading, paragraphs: whoWeAreParagraphs } = whoWeAre;
  const { heading: meetTheTeamHeading, profiles } = meetTheTeam;

  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="about-content-wrapper">
          <div className="about-content">
            <div className="content-text">
              <h1 className="about-header">{whoWeAreHeading}</h1>
              {whoWeAreParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="profile-section">
              <div className="profile-container">
                {profiles.map((profile, index) => (
                  <div className="profile" key={index}>
                    <img src={process.env.PUBLIC_URL + `/images/team-pictures/${profile.image}.jpg`} alt={profile.name} className="profile-picture" />
                    <div className="signatures">
                      <img src={process.env.PUBLIC_URL + `/images/about-signatures/${profile.image}.png`} alt={profile.name} />
                    </div>
                    <p><span className="bold"><a href={`tel:${profile.phone}`}>{profile.phone}</a></span></p>
                    <p><span className="bold"><a href={`mailto:${profile.email}`}>{profile.email}</a></span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
