// Header.js

import React from 'react';
import { Link } from 'react-router-dom'; 

// Import the logo image from the directory
import logoImg from '../images/FlexFitLogo.webp';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/landing" className="logo-link">
            <img src={logoImg} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <nav className="top-menu">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/workout">Workout Log</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
