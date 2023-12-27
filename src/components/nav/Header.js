import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWhite from './logo-left.png';
import logoGrey from './logo-left-grey.png';
import '../../styles/header.css';
import '../../content.json';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSplashPage, setIsSplashPage] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsSplashPage(
      location.pathname === '/' ||
      location.pathname === '/residential' ||
      location.pathname === '/commercial' ||
      location.pathname === '/contractors' 
    );

    // Preload logos
    const whiteLogo = new Image();
    whiteLogo.src = logoWhite;

    const greyLogo = new Image();
    greyLogo.src = logoGrey;
  }, [location]);

  const logoSrc = isSplashPage ? (isScrolled ? logoGrey : logoWhite) : logoGrey;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isSplashPage ? (isScrolled ? 'header solid' : 'header transparent') : 'header solid'}>
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src={logoSrc} alt="Guardian Claim Logo" />
          </Link>
        </div>
        {isMobile && (
          <>
            <button className="menu-icon-wrapper" onClick={toggleMenu} title="Toggle Menu">
              <img src={process.env.PUBLIC_URL + "images/svg-icons/menu-icon.svg"} className="menu-icon" alt="Menu Icon" />
            </button>
            <nav className={isMenuOpen ? 'open' : ''}>
              <ul>
                <li>
                  <Link to="/" className={isSplashPage ? 'active' : ''}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/residential" className={!isSplashPage ? 'active' : ''}>
                    Residential
                  </Link>
                </li>
                <li>
                  <Link to="/commercial" className={!isSplashPage ? 'active' : ''}>
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link to="/contractors" className={!isSplashPage ? 'active' : ''}>
                    Contractors & Associations
                  </Link>
                </li>
                <li>
                  <Link to="/claim" className={!isSplashPage ? 'active' : ''}>
                    Claims Portal
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className={!isSplashPage ? 'active' : ''}>
                    About
                  </Link>
                </li>
                <div>
                  {/* 
                    <p>{content.copyright}</p>
                  */}
                </div>
              </ul>
            </nav>
          </>
        )}
        {!isMobile && (
          <nav>
            <ul>
              <li>
                <Link to="/" className={isSplashPage ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/residential" className={!isSplashPage ? 'active' : ''}>
                  Residential
                </Link>
              </li>
              <li>
                <Link to="/commercial" className={!isSplashPage ? 'active' : ''}>
                  Commercial
                </Link>
              </li>
              <li className="wrap-text">
                <Link to="/contractors" className={!isSplashPage ? 'active' : ''}>
                  Contractors & Associations
                </Link>
              </li>
              <li>
                <Link to="/claim" className={!isSplashPage ? 'active' : ''}>
                  Claims Portal
                </Link>
              </li>
              <li>
                <Link to="/about-us" className={!isSplashPage ? 'active' : ''}>
                  About
                </Link>
              </li>
            </ul>
          </nav>

        )}
      </div>
    </header>
  );
}
