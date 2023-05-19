import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWhite from './logo-left.png';
import logoGrey from './logo-left-grey.png';
import '../../styles/header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location]);

  const logoSrc = isHomePage ? (isScrolled ? logoGrey : logoWhite) : logoGrey;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isHomePage ? (isScrolled ? 'header solid' : 'header transparent') : 'header solid'}>
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
                <li>
                  <Link to="/" className={isHomePage ? 'active' : ''}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/claim" className={!isHomePage ? 'active' : ''}>
                    Claims
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className={!isHomePage ? 'active' : ''}>
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
        {!isMobile && (
          <nav>
            <ul>
              <li>
                <Link to="/" className={isHomePage ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/claim" className={!isHomePage ? 'active' : ''}>
                  Claims
                </Link>
              </li>
              <li>
                <Link to="/about-us" className={!isHomePage ? 'active' : ''}>
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
