import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Assests/logo.png';
import sun from '../../Assests/sun.png';
import moon from '../../Assests/moon.png';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const listener = () => {
      setDarkMode(document.documentElement.getAttribute('data-theme') === 'dark');
    };
    window.addEventListener('themechange', listener);
    return () => window.removeEventListener('themechange', listener);
  }, []);

  const handleToggle = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
      window.dispatchEvent(new Event('themechange'));
      return newMode;
    });
  };

  const handleNavClick = () => {
    if (window.innerWidth <= 900) {
      setMenuOpen(false);
    }
  };

  return (
    

    <div className="navbar">
      <div className="logo">
        <img src={logo} className="nav-logo" alt="..." />
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="/" onClick={handleNavClick}>Home</a></li>
        <li><a href="/" onClick={handleNavClick}>Resources</a></li>
        <li><a href="/" onClick={handleNavClick}>About</a></li>
        <li><a href="/" onClick={handleNavClick}>Contact</a></li>
        <button className="btn-login" onClick={handleNavClick}>Login</button>
        <button className="mode-toggle" onClick={(e) => { handleToggle(); handleNavClick(); }} aria-label="Toggle dark mode">
          <img src={darkMode ? sun : moon} alt={darkMode ? 'Light mode' : 'Dark mode'} className="mode-icon" />
        </button>
      </ul>
    </div>
    
    
  );
}
