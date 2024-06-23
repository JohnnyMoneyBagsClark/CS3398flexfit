//loginPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/loginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [showSignupSuccess, setShowSignupSuccess] = useState(false);

  const handleGoToSignUp = () => {
    navigate('/'); 
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Simulate successful login
    if (email && password) {
      navigate('/dashboard');
    }
  };

  const handleBypassLogin = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    if (location.state?.fromSignup) {
      setShowSignupSuccess(true);
      window.history.replaceState({}, document.title);

      const timer = setTimeout(() => {
        setShowSignupSuccess(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="main-background">
      <div className="login-container">
        <h2>Login</h2>

        {showSignupSuccess && (
          <div className="success-message">Signup successful! Please log in.</div>
        )}

        <form onSubmit={handleLogin} autoComplete="off">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <br />
            <input type="email" id="email" name="email" placeholder="Your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Log In</button>
        </form>

        <button className="bypass-button" onClick={handleBypassLogin}>Bypass Login</button>
        
        <div className="signup-link">
          Don't have an account? <span onClick={handleGoToSignUp}>Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
