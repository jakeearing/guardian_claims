import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoGrey from './logo-left-grey.png';
import '../../styles/header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 768; // Check if the screen size is mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header solid">
      <div className="header-content">
        <div className="logo">
          <li>
            <Link to="/">
              <img src={logoGrey} alt="Guardian Claim Logo" />
            </Link>
          </li>
        </div>
        {isMobile && (
          <>
            <button
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={isMenuOpen ? 'open' : ''}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/claim">Claims</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
              </ul>
            </nav>
          </>
        )}
        {!isMobile && (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/claim">Claims</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
