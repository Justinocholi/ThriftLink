import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);
    if (result.success) {
      const from = location.state?.from?.pathname || `/${result.type}`;
      navigate(from, { replace: true });
    } else {
      setError(result.error);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f5f7fa' 
    }}>
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '16px', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
        width: '100%', 
        maxWidth: '400px' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>Welcome Back</h2>
          <p style={{ color: '#64748b' }}>Sign in to continue to ThriftLink</p>
        </div>

        {error && (
          <div style={{ 
            background: '#fee2e2', 
            color: '#dc2626', 
            padding: '0.75rem', 
            borderRadius: '8px', 
            marginBottom: '1rem',
            fontSize: '0.875rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px',
                fontSize: '1rem'
              }}
              placeholder="Enter username"
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px',
                fontSize: '1rem'
              }}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" style={{ 
            background: '#3b82f6', 
            color: 'white', 
            padding: '0.75rem', 
            borderRadius: '8px', 
            fontWeight: '600',
            marginTop: '1rem',
            transition: 'background 0.2s'
          }}>
            Sign In
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#64748b' }}>
          <p>Demo Credentials:</p>
          <div style={{ marginTop: '0.5rem', display: 'grid', gap: '0.25rem' }}>
            <code>User: user / user</code>
            <code>Vendor: vendor / vendor</code>
            <code>Admin: admin / admin</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
