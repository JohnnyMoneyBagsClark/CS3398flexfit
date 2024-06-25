// dashboardPage.js

import React from 'react';
import Header from './header'; 
import '../styles/header.css';
import '../styles/dashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <Header /> {/* Include Header component */}
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard!</p>
        
        <div className="search-bar">
          <input type="text" placeholder="Search posts..." />
        </div>

        <div className="posts-container">
          {/* Placeholder posts */}
          <div className="post">
            <div className="post-header">
              <h3>Friend's Post</h3>
              <p>Posted by User</p>
            </div>
            <div className="post-content">
              <p>This is where the post content will be.</p>
            </div>
            <div className="post-interactions">
              <button>Like</button>
              <button>Comment</button>
            </div>
          </div>
          
          <div className="post">
            <div className="post-header">
              <h3>Friend's Post</h3>
              <p>Posted by User</p>
            </div>
            <div className="post-content">
              <p>This is where the post content will be.</p>
            </div>
            <div className="post-interactions">
              <button>Like</button>
              <button>Comment</button>
            </div>
          </div>
          
          {/* Placeholder ads */}
          <div className="ad">
            <p>Ad Content</p>
          </div>

          <div className="ad">
            <p>Ad Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

//Workout log UI fix for ranking then backend connect 
//profile picture selector rank 
//fetch user posts from friends psuedo for dashboard.