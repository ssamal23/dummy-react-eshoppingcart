import React, { useState } from 'react';
import { Button, Checkbox, Input, RadioGroup, Typography } from '@evoke-tech/ui';
import './LoginPage.css';

const VALID_EMAIL = 'ssamal1@evoketechnologies.com';
const VALID_PASSWORD = 'soumya@123';

const ACCOUNT_TYPES = [
  { value: 'customer', label: 'Customer' },
  { value: 'seller', label: 'Seller' },
];

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('customer');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setError('');
      console.log('login success', { accountType, rememberMe });
      onLoginSuccess();
    } else {
      setError('Invalid email or password');
      setPassword('');
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-heading">
          <Typography variant="h2" as="h1">Welcome back</Typography>
          <Typography variant="p2" className="login-subtitle">
            Sign in to continue shopping
          </Typography>
        </div>

        <div className="login-fields">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="Enter your email"
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            placeholder="Enter your password"
            error={error || undefined}
            required
          />

          <RadioGroup
            label="Sign in as"
            name="accountType"
            options={ACCOUNT_TYPES}
            value={accountType}
            onChange={setAccountType}
            orientation="horizontal"
          />

          <Checkbox
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
        </div>

        <Button type="submit" fullWidth size="lg">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
