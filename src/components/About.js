import React from 'react';
import Header from './nav/Header.js';
import Footer from './nav/Footer.js';
import '../style/about.css'

export default function About() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="about-section">
          <h1>About Us</h1>
          <p>Founded by Josh Dalli and Phil Mascolo, Guardian Claims is a public adjusting firm based in Charlotte,
            NC serving North Carolina and South Carolina. With over 8 years of combined industry experience,
            we have witnessed the frustrations and disappointments that can come with filing an insurance claim.
          </p>
          <p>As licensed public adjusters, we have a deep understanding of the complex claims process,
            and have seen firsthand the tactics that insurance companies use to minimize payouts and deny claims.
            We know how to navigate these obstacles to ensure that our clients receive the compensation they deserve.
          </p>
          <p>
            At Guardian Claims, communication is key to a successful claims process. Our firm prioritizes transparency
            and open dialogue with clients from start to finish. We work closely with clients to understand the unique
            circumstances of their claim, and keep them informed every step of the way.
          </p>
          <p>
            Our team at Guardian Claims is committed to providing exceptional service, going above and beyond for clients.
            We understand that filing a claim can be a stressful and overwhelming experience, which is why we strive to make
            the process as easy and stress-free as possible. Whether dealing with property damage, a natural disaster,
            or any other type of insurance claim, clients can trust Guardian Claims to be their advocate and fight for their rights.
          </p>
          <p>
            Thank you for considering Guardian Claims for your public adjusting needs. We look forward to working with you!
          </p>
        </div>

        <div className="profile-section">
        <h1>Meet The Team</h1>
          <div className="profile-container">
            <div className="profile">
              <img src={process.env.PUBLIC_URL + '/images/team-pictures/josh-dalli.PNG'} alt="Josh Dalli" />
              <h2>Josh Dalli</h2>
              <p>Phone: 123-456-7890</p>
              <p>Email: josh.dalli@roofsitup.com</p>
              <p>License Number: XXXX-XXXX-XXXX-XXXX</p>
            </div>
            <div className="profile">
              <img src={process.env.PUBLIC_URL + '/images/team-pictures/phil-mascolo.PNG'} alt="Phil Mascolo" />
              <h2>Phil Mascolo</h2>
              <p>Phone: 123-456-7890</p>
              <p>Email: phil.mascolo@roofsitup.com</p>
              <p>License Number: XXXX-XXXX-XXXX-XXXX</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

