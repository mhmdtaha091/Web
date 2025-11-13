"use client";

import React, { useState } from 'react';

function Login() {
  // Task 1: Use useState to store input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Task 2: Use useState to manage validation messages
  const [message, setMessage] = useState('');

  // Task 3: Manage login status using useState
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Task 2: Hardcoded credentials
  const validUser = 'admin';
  const validPass = 'password123';

  // Show/hide password toggle
  const [showPassword, setShowPassword] = useState(false);

  // Task 2: Form submission handling
  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === validUser && password === validPass) {
      setMessage('Login successful.');
      setIsLoggedIn(true);
    } else {
      setMessage('Invalid credentials.');
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setMessage('');
    setShowPassword(false);
  };

  if (isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-box welcome-container">
          <h2>Welcome, {username || validUser}!</h2>
          <p className="login-message success" aria-live="polite">{message}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Lab 7a: Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div style={{display: 'flex', gap: 8}}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-describedby="toggle-password"
              />
              <button
                type="button"
                id="toggle-password"
                onClick={() => setShowPassword((s) => !s)}
                aria-pressed={showPassword}
                style={{padding: '6px 8px'}}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>

        {message && (
          <p
            className={`login-message ${
              message.toLowerCase().includes('invalid') ? 'error' : 'success'
            }`}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
