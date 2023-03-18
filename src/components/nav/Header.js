import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
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
          <img src="logo.png" alt="Logo" />
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

export default Header;
