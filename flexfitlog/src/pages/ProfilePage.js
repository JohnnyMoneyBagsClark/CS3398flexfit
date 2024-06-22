// ProfilePage.js

import React from 'react';
import Header from './header'; // Assuming Header.js is in the same directory
import '../styles/header.css'; // Import header styles
import '../styles/profilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <Header /> {/* Include Header component */}
      <div className="profile-content">
        <h2>Profile</h2>
        <p>Welcome to your profile page!</p>
      </div>
    </div>
  );
};

export default ProfilePage;
