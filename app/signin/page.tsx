// app/signin/page.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CountUp from '@/components/CountUp';
import '../auth.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn, signInWithGoogle, signInWithFacebook } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn(email, password);
      if (result.error) {
        setError(result.error);
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-split-container">
      {/* Left side - Content */}
      <div className="auth-content-side">
        <div className="auth-content-wrapper">
          <h1>Join Nigeria's Largest<br />WhatsApp Marketplace</h1>
          <p className="auth-content-subtitle">Connect with thousands of verified vendors, shop safely, and grow your business on Thrift Link.</p>
          
          <div className="auth-features">
            <div className="auth-feature-item">
              <div className="auth-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <div className="auth-feature-text">
                <h3>Discover Trusted Vendors</h3>
                <p>Browse 5,000+ verified sellers across 25+ categories</p>
              </div>
            </div>
            
            <div className="auth-feature-item">
              <div className="auth-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="auth-feature-text">
                <h3>Direct WhatsApp Connection</h3>
                <p>Chat instantly with vendors - no app downloads needed</p>
              </div>
            </div>
            
            <div className="auth-feature-item">
              <div className="auth-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="auth-feature-text">
                <h3>Safe & Secure Platform</h3>
                <p>All vendors verified with ratings and reviews</p>
              </div>
            </div>
          </div>
          
          <div className="auth-stats">
            <div className="auth-stat-item">
              <span className="auth-stat-number">5,248</span>
              <span className="auth-stat-label">VERIFIED VENDORS</span>
            </div>
            <div className="auth-stat-item">
              <span className="auth-stat-number">500K+</span>
              <span className="auth-stat-label">HAPPY CUSTOMERS</span>
            </div>
            <div className="auth-stat-item">
              <span className="auth-stat-number">2.4M+</span>
              <span className="auth-stat-label">PRODUCTS LISTED</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="auth-form-side">
        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <h2>Welcome Back</h2>
            <p className="auth-subtitle">Sign in to your Thrift Link account to continue</p>
          </div>
          
          <div className="auth-form-tabs">
            <Link href="/signin" className="auth-tab active">
              Sign In
            </Link>
            <Link href="/signup" className="auth-tab">
              Sign Up
            </Link>
          </div>
          
          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email or Phone Number</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter email or phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="forgot-password">
              <Link href="/reset-password">Forgot password?</Link>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          
          <div className="auth-divider">
            <span>Or continue with</span>
          </div>
          
          <div className="auth-social-buttons">
            <button 
              className="auth-social-btn auth-google-btn"
              onClick={async () => {
                setError(null);
                setLoading(true);
                try {
                  const result = await signInWithGoogle();
                  if (result.error) {
                    setError(typeof result.error === 'string' ? result.error : 'Failed to sign in with Google');
                  } else {
                    router.push('/dashboard');
                  }
                } catch (err: any) {
                  setError(err.message);
                } finally {
                  setLoading(false);
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
              Google
            </button>
            <button 
              className="auth-social-btn auth-facebook-btn"
              onClick={async () => {
                setError(null);
                setLoading(true);
                try {
                  const result = await signInWithFacebook();
                  if (result.error) {
                    setError(typeof result.error === 'string' ? result.error : 'Failed to sign in with Facebook');
                  } else {
                    router.push('/dashboard');
                  }
                } catch (err: any) {
                  setError(err.message);
                } finally {
                  setLoading(false);
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}