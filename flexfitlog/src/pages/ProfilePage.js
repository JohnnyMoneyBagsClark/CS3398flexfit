// ProfilePage.js

import React, { useState } from 'react';
import Header from './header'; // Assuming Header.js is in the same directory
import '../styles/header.css'; // Import header styles
import '../styles/profilePage.css';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    username: 'John Doe', // Replace with actual username from state or context
    email: 'johndoe@example.com', // Replace with actual email
    bio: 'Fitness enthusiast and web developer.', // Replace with actual bio
    profilePicture: '', // URL of profile picture or default image path
  });

  const handleProfilePictureChange = (e) => {
    // Implement logic to handle profile picture upload
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData({ ...profileData, profilePicture: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameChange = (e) => {
    // Implement logic to update username
    setProfileData({ ...profileData, username: e.target.value });
  };

  const handleBioChange = (e) => {
    // Implement logic to update bio
    setProfileData({ ...profileData, bio: e.target.value });
  };

  return (
    <div className="profile-container">
      <Header /> {/* Include Header component */}
      <div className="profile-content">
        <h2>Profile</h2>
        <div className="profile-details">
          <div className="profile-picture">
            <img
              src={profileData.profilePicture || '/default-profile.png'} // Use default image path if profile picture is not set
              alt="Profile"
              className="profile-img"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="profile-picture-input"
            />
          </div>
          <div className="profile-info">
            <label>Username:</label>
            <input
              type="text"
              value={profileData.username}
              onChange={handleUsernameChange}
              className="profile-input"
            />
            <label>Email:</label>
            <p>{profileData.email}</p>
            <label>Bio:</label>
            <textarea
              value={profileData.bio}
              onChange={handleBioChange}
              className="profile-textarea"
            />
          </div>
        </div>
        <div className="profile-settings">
          <h3>Settings</h3>
          <button className="profile-save-button">Save Changes</button>
          {/* Add more settings options as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
