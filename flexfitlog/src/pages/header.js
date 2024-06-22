// header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Import header styles
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
              <Link to="/landing">Home</Link>
            </li>
            <li>
              <Link to="/workout">Workout Log</Link>
            </li>
            {/* Add more navigation links as needed */}
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
