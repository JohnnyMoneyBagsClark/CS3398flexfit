// LandingPage.js

import React from 'react';
import Header from './header'; // Assuming Header.js is in the same directory
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/header.css'; // Import header styles
import '../styles/landingPage.css'; // Import landing page specific styles

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Header />
      <div className="landing-content">
        <h2>Welcome to the Project!</h2>
        <p>This is where you can provide general information about your project.</p>
      </div>
    </div>
  );
};

export default LandingPage;
