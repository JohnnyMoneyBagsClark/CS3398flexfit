// dashboardPage.js

import React from 'react';
import Header from './header'; 
import '../styles/header.css'
import '../styles/dashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <Header /> {/* Include Header component */}
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard!</p>
      </div>
    </div>
  );
};

export default DashboardPage;
