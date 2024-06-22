// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signupPage'; // Adjust the import paths as per your project structure
import LoginPage from './pages/loginPage'; // Adjust the import paths as per your project structure
import DashboardPage from './pages/dashboardPage'; // Adjust the import paths as per your project structure
import ProfilePage from './pages/ProfilePage'; // Adjust the import paths as per your project structure
import WorkoutPage from './pages/workoutPage'; // Adjust the import paths as per your project structure
import LandingPage from './pages/landingPage'; // Import the LandingPage component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/landing" element={<LandingPage />} /> {/* Default route to LandingPage */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
