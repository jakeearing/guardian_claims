import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/headerhome.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'header solid' : 'header transparent'}>
      <div className="header-content">
        <div className="logo">
        <li><Link to="/">
        <img src={process.env.PUBLIC_URL + '/images/logos/logo-left.png'} alt="Guardian Claim Logo" />
        </Link></li>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/claim">Claims</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

