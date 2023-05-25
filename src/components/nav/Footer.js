import { Link } from 'react-router-dom';
import '../../styles/footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="left-nav">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contractors">Contractors</Link></li>
              <li><Link to="/residential">Residential</Link></li>
              <li><Link to="/claim">Claims</Link></li>
              <li><Link to="/commercial">Commercial</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-logo">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/images/logos/logo192.png'} alt="GuardianClaims Logo" />
          </Link>
        </div>
        <div className="right-nav">
          <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=100090366134522"><img src={process.env.PUBLIC_URL + "/images/svg-icons/social-media/facebook-logo.svg"} alt="Facebook Icon" /></a>
            <a href="https://www.linkedin.com/company/guardianclaims/about/"><img src={process.env.PUBLIC_URL + "/images/svg-icons/social-media/linkedin-logo.svg"} alt="Linkedin Icon" /></a>
          </div>
          <div className="terms">
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
