import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Assests/logo.png';
import sun from '../../Assests/sun.png';
import moon from '../../Assests/moon.png';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark');

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

  return (
    

    <div className="navbar">
      <div className="logo">
        <img src={logo} className="nav-logo" alt="..." />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Resources</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
        <button className="btn-login">Login</button>
        <button className="mode-toggle" onClick={handleToggle} aria-label="Toggle dark mode">
          <img src={darkMode ? sun : moon} alt={darkMode ? 'Light mode' : 'Dark mode'} className="mode-icon" />
        </button>
      </ul>
    </div>
    
  );
}
