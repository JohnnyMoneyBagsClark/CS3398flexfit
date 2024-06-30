//loginPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/loginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showSignupSuccess, setShowSignupSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showError, setShowError] = useState(false);

    const handleGoToSignUp = () => {
        navigate('/');
    };

    const handleBypass = () => {
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

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await axios.post('http://localhost:3001/api/users/login', {
                email,
                password,
            });

            if (response.data.success) {
                console.log('Login successful!');
                // Save the token in localStorage or context
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard'); // or wherever you want to redirect after login
            } else {
                setErrorMessage(response.data.message || 'Failed to log in');
                setShowError(true);
                setTimeout(() => setShowError(false), 3000);
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'An error occurred during the login process.');
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        }
    };

    return (
        <div className="main-background">
            <div className="login-container">
                <h2>Login</h2>

                {showSignupSuccess && (
                    <div className="success-message">Signup successful! Please log in.</div>
                )}

                {showError && (
                    <div className="error-message">{errorMessage}</div>
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

                <div className="signup-link">
                    Don't have an account? <span onClick={handleGoToSignUp}>Sign up</span>
                </div>

                <button className="bypass-button" onClick={handleBypass}>Bypass Login</button>
            </div>
        </div>
    );
};

export default LoginPage;
