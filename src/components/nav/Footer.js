import { Link } from 'react-router-dom';
import '../../style/footer.css';

function Footer() {    
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="left-nav">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/claim">Claims</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
            </ul>
          </nav>
        </div>
        <div className="right-nav">
          <div className="subscribe">
            <form>
              <input type="text" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
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

export default Footer;
