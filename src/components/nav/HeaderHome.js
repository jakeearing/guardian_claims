import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from './logo-left.png';
import logoGrey from './logo-left-grey.png';
import '../../styles/header-home.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 768; // Check if the screen size is mobile

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = isScrolled ? logoGrey : logoWhite;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isScrolled ? 'header solid' : 'header transparent'}>
      <div className="header-content">
        <div className="logo">
          <li>
            <Link to="/">
              <img src={logoSrc} alt="Guardian Claim Logo" />
            </Link>
          </li>
        </div>
        {isMobile && (
          <>
            <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={isMenuOpen ? 'open' : ''}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/claim">Claims</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
              </ul>
            </nav>
          </>
        )}
        {!isMobile && (
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/claim">Claims</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
