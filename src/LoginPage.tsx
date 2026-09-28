import React, { useState } from 'react';
import './LoginPage.css';
import HomePage from './HomePage';

const VALID_EMAIL = 'ssamal1@evoketechnologies.com';
const VALID_PASSWORD = 'soumya@123';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setError('');
      setIsLoggedIn(true);
    } else {
      setError('Invalid email or password');
      setPassword('');
    }
  };

  if (isLoggedIn) {
    return <HomePage />;
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;