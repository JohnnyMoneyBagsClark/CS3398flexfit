//signupPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios if not already imported
import '../styles/signupPage.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleGoToLogin = () => {
    navigate('/login');
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

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Extract form data
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value; // Make sure to include password here
    const confirmPassword = event.target.confirmPassword.value;
    const termsAccepted = event.target.terms.checked;

    // Basic validation (add your password validation logic here)
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!termsAccepted) {
      setErrorMessage('You must accept the terms and conditions');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/users/signup', {
        fullName,
        email,
        username,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        console.log("Signup successful!");
        navigate('/login', { state: { fromSignup: true } });
      } else {
        setErrorMessage('Failed to sign up');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.error('Signup error:', error.response.data.message);
        setErrorMessage(error.response.data.message || 'User already exists. Please log in or use a different email.');
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      } else {
        setErrorMessage(error.response?.data?.message || 'An error occurred during the signup process.');
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      {showError && <div className="error-message">{errorMessage}</div>}

      <form autoComplete="off" onSubmit={handleSignUp}>
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
