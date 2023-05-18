import React from 'react';
import '../styles/splash.css';
import { Link } from 'react-router-dom';
import content from '../content.json';

export default function Splash() {
    return (
        <div className="splash-wrapper">
            <p>{content.splash.heading}</p>
            <p>{content.splash.description}</p>
            <button>
                <Link to={content.splash.buttonLink}>{content.splash.buttonText}</Link>
            </button>
            <p>{content.splash.footerText}</p>
        </div>
    );
}
