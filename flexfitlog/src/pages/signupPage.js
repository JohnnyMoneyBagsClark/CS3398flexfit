//signupPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signupPage.css'; 

const SignupPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleGoToLogin = () => {
    navigate('/login'); // Adjust the path as needed to match your login page's route
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(prev => !prev);
  };
  
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
  
      <form autoComplete="off">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <br />
          <input type="text" id="fullName" name="fullName" placeholder="Your full name" required />
        </div>
  
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <br />
          <input type="email" id="email" name="email" placeholder="Your email address" required />
        </div>
  
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" id="username" name="username" placeholder="Create a username" required />
        </div>
  
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <div className="password-input-container">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Create a password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <div className={`eye-icon ${isPasswordVisible ? '' : 'eye-crossed'}`} onClick={togglePasswordVisibility}>
              <div className="eye">
                <div className="eyeball"></div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <div className="password-input-container">
            <input
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
            <div className={`eye-icon ${isConfirmPasswordVisible ? '' : 'eye-crossed'}`} onClick={toggleConfirmPasswordVisibility} />
          </div>
        </div>
  
        <div className="terms-container">
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms"> I agree with the Terms and Privacy Policy.</label>
        </div>
  
        <button type="submit">Sign Up</button>
      </form>
  
      <div className="signup-link">
        Already have an account? <span onClick={handleGoToLogin}>Login here</span>
      </div>
    </div>
  );
};

export default SignupPage;
