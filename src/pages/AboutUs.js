import React from 'react';
import Header from '../components/nav/Header.js';
import Footer from '../components/nav/Footer.js';
import '../styles/simple-pages.css';
import content from '../content.json';

export default function AboutUs() {
  const { heading, whoWeAre, meetTheTeam } = content.about;
  const { heading: whoWeAreHeading, paragraphs: whoWeAreParagraphs } = whoWeAre;
  const { heading: meetTheTeamHeading, profiles } = meetTheTeam;

  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="content-text">
          <h1 className="about-header">{heading}</h1>
          <h2>{whoWeAreHeading}</h2>
          {whoWeAreParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="profile-section">
          <h2>{meetTheTeamHeading}</h2>
          <div className="profile-container">
            {profiles.map((profile, index) => (
              <div className="profile" key={index}>
                <img src={process.env.PUBLIC_URL + `/images/team-pictures/${profile.image}`} alt={profile.name} />
                <h2>{profile.name}</h2>
                <p>Phone: {profile.phone}</p>
                <p>Email: {profile.email}</p>
                <p>License Number: {profile.licenseNumber}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}