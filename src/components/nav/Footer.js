import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/footer.css';
import content from '../../content.json';

export default function Footer() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="left-nav">
          <nav>
            <ul>
              <li><Link to="/">{content.footer.linkOneText}</Link></li>
              <li><Link to="/contractors">{content.footer.linkTwoText}</Link></li>
              <li><Link to="/residential">{content.footer.linkThreeText}</Link></li>
              <li><Link to="/contact-us">{content.footer.linkFourText}</Link></li>
              <li><Link to="/commercial">{content.footer.linkFiveText}</Link></li>
              <li><Link to="/about-us">{content.footer.linkSixText}</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-logo">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/images/logos/logo192.png'} alt="TrustPro Logo" />
          </Link>
        </div>
        <div className="copyright-right-nav">
          <div className="right-nav">
            <div className="social-media">
              <a href="https://www.facebook.com/TrustProClaims"><img src={process.env.PUBLIC_URL + "/images/svg-icons/social-media/facebook-logo.svg"} alt="Facebook Icon" /></a>
              <a href="https://www.linkedin.com/company/trustproclaims/about/"><img src={process.env.PUBLIC_URL + "/images/svg-icons/social-media/linkedin-logo.svg"} alt="Linkedin Icon" /></a>
            </div>
            <div className="terms">
              <Link to="/terms-of-use">{content.footer.linkSevenText}</Link>
              <Link to="/privacy-policy">{content.footer.linkEightText}</Link>
            </div>
          </div>
          <div className="copyright">
            <p>{content.footer.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
