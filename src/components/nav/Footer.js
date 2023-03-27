import { Link } from 'react-router-dom';
import '../../style/footer.css';

function Header() {    
    return (
        <div class="footer">
            <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/claim">Claims</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
        </div>
    );
}

export default Header;