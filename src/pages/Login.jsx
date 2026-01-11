import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import magnifierIcon from '../assets/magnifier.png';
import whatsappIcon from '../assets/whatsapp (1).png';
import shieldIcon from '../assets/shield.png';
import cartIcon from '../assets/shopping-cart.png';
import briefcaseIcon from '../assets/briefcase.png';
import searchIcon from '../assets/search.png';
import facebookIcon from '../assets/facebook.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'signin') {
      const result = login(username, password);
      if (result.success) {
        const from = location.state?.from?.pathname || `/${result.type}`;
        navigate(from, { replace: true });
      } else {
        setError(result.error);
      }
    } else {
      alert('Signup flow is not yet connected. Use Sign In for now.');
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', display: 'flex', alignItems: 'center' }}>
      <style>
        {`
          @media (max-width: 768px) {
            .auth-container { flex-direction: column; padding: 1rem; gap: 2rem; }
            .info-section { order: 2; text-align: center; }
            .login-section { order: 1; width: 100%; max-width: 400px; margin: 0 auto; padding: 2rem; }
            .features-list { gap: 0.8rem; }
            .info-title { font-size: 2rem !important; }
          }
        `}
      </style>
      <div className="auth-container" style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '2rem', gap: '3rem', alignItems: 'center', width: '100%' }}>
        <div className="info-section" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 className="info-title" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1f2937', marginBottom: '1rem', lineHeight: 1.2 }}>
            Join Nigeria's Largest WhatsApp Marketplace
          </h1>
          <p className="info-subtitle" style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '2rem', lineHeight: 1.5 }}>
            Connect with thousands of verified vendors, shop safely, and grow your business on Thrift Link.
          </p>
          <div className="features-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '50px', height: '50px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <img src={magnifierIcon} alt="" style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.3rem' }}>Discover Trusted Vendors</h4>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Browse 5,000+ verified sellers across 25+ categories</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '50px', height: '50px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <img src={whatsappIcon} alt="" style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.3rem' }}>Direct WhatsApp Connection</h4>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Chat instantly with vendors - no app downloads needed</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '50px', height: '50px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <img src={shieldIcon} alt="" style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.3rem' }}>Safe & Secure Platform</h4>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>All vendors verified with ratings and reviews</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: '800', color: '#25D366' }}>5,248</span>
              <span style={{ fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>Verified Vendors</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: '800', color: '#25D366' }}>500K+</span>
              <span style={{ fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>Happy Customers</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: '800', color: '#25D366' }}>2.4M+</span>
              <span style={{ fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>Products Listed</span>
            </div>
          </div>
        </div>

        <div className="login-section" style={{ flex: '0 0 450px', background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>{activeTab === 'signin' ? 'Welcome Back' : 'Create Account'}</h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>{activeTab === 'signin' ? 'Sign in to your Thrift Link account to continue' : 'Join thousands of users on Thrift Link marketplace'}</p>
          </div>

          <div className="auth-tabs" style={{ display: 'flex', background: '#f3f4f6', borderRadius: '8px', padding: '0.3rem', marginBottom: '2rem' }}>
            <button onClick={() => setActiveTab('signin')} className="tab-btn" style={{ flex: 1, padding: '0.8rem 1rem', border: 'none', background: activeTab === 'signin' ? 'white' : 'transparent', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: activeTab === 'signin' ? '#25D366' : '#6b7280', boxShadow: activeTab === 'signin' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.3s ease', fontSize: '0.9rem' }}>Sign In</button>
            <button onClick={() => setActiveTab('signup')} className="tab-btn" style={{ flex: 1, padding: '0.8rem 1rem', border: 'none', background: activeTab === 'signup' ? 'white' : 'transparent', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: activeTab === 'signup' ? '#25D366' : '#6b7280', boxShadow: activeTab === 'signup' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.3s ease', fontSize: '0.9rem' }}>Sign Up</button>
          </div>

          {error && (
            <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.875rem' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: activeTab === 'signin' ? 'block' : 'none' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email or Phone Number</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '0.9rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', transition: 'all 0.3s ease', background: 'white' }} placeholder="Enter email or phone number" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '0.9rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', transition: 'all 0.3s ease', background: 'white' }} placeholder="Enter your password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '0.9rem' }}>{showPassword ? 'Hide' : 'Show'}</button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#6b7280' }}>
                <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: '#25D366' }} />
                <span>Remember me</span>
              </label>
              <a href="#" style={{ color: '#25D366', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Forgot Password?</a>
            </div>
            <button type="submit" style={{ width: '100%', padding: '1rem', background: '#25D366', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', marginBottom: '1.5rem' }}>
              Sign In
            </button>
          </form>

          <form onSubmit={handleSubmit} style={{ display: activeTab === 'signup' ? 'block' : 'none' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', border: '2px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s ease', textAlign: 'center', background: 'white' }}>
                <span style={{ display: 'block', marginBottom: '0.5rem' }}>
                  <img src={cartIcon} alt="" style={{ width: '32px', height: '32px' }} />
                </span>
                <div style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.3rem' }}>I want to buy</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Browse and shop from vendors</div>
              </div>
              <div style={{ padding: '1.5rem', border: '2px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s ease', textAlign: 'center', background: 'white' }}>
                <span style={{ display: 'block', marginBottom: '0.5rem' }}>
                  <img src={briefcaseIcon} alt="" style={{ width: '32px', height: '32px' }} />
                </span>
                <div style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.3rem' }}>I want to sell</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Become a verified vendor</div>
              </div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Full Name</label>
              <input type="text" style={{ width: '100%', padding: '0.9rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', transition: 'all 0.3s ease', background: 'white' }} placeholder="Enter your full name" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
              <input type="email" style={{ width: '100%', padding: '0.9rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', transition: 'all 0.3s ease', background: 'white' }} placeholder="Enter your email" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Phone Number</label>
              <input type="tel" style={{ width: '100%', padding: '0.9rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', transition: 'all 0.3s ease', background: 'white' }} placeholder="+234 800 000 0000" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input type="password" style={{ width: '100%', padding: '0.9rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', transition: 'all 0.3s ease', background: 'white' }} placeholder="Create a strong password" />
                <button type="button" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '0.9rem' }}>Show</button>
              </div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#374151', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Confirm Password</label>
              <div style={{ position: 'relative' }}>
                <input type="password" style={{ width: '100%', padding: '0.9rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', transition: 'all 0.3s ease', background: 'white' }} placeholder="Confirm your password" />
                <button type="button" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '0.9rem' }}>Show</button>
              </div>
            </div>
            <button type="submit" style={{ width: '100%', padding: '1rem', background: '#25D366', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', marginBottom: '1.5rem' }}>
              Create Account
            </button>
          </form>

          <div style={{ position: 'relative', textAlign: 'center', margin: '1.5rem 0' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: '#e5e7eb' }} />
            <span style={{ position: 'relative', background: 'white', padding: '0 1rem', color: '#6b7280', fontSize: '0.9rem' }}>Or continue with</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button style={{ flex: 1, padding: '0.8rem', border: '2px solid #e5e7eb', background: 'white', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#ea4335' }}>
              <img src={searchIcon} alt="" style={{ width: '20px', height: '20px' }} />
              <span>Google</span>
            </button>
            <button style={{ flex: 1, padding: '0.8rem', border: '2px solid #e5e7eb', background: 'white', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#1877f2' }}>
              <img src={facebookIcon} alt="" style={{ width: '20px', height: '20px' }} />
              <span>Facebook</span>
            </button>
          </div>
          <div style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.9rem' }}>
            <p>By signing up, you agree to our <a href="#" style={{ color: '#25D366', textDecoration: 'none', fontWeight: '600' }}>Terms of Service</a> and <a href="#" style={{ color: '#25D366', textDecoration: 'none', fontWeight: '600' }}>Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
