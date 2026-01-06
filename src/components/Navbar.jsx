import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/thriftlink-logo-.png';
import gpsIcon from '../assets/gps.png';

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getDashboardLink = () => {
    if (!user) return '/login';
    if (user.type === 'admin') return '/admin';
    if (user.type === 'vendor') return '/vendor';
    if (user.type === 'user') return '/user';
    return '/';
  };

  const getCTALink = () => {
    if (!user) return '/login';
    if (user.type === 'vendor') return '/vendor/products';
    if (user.type === 'admin') return '/admin';
    return '/categories';
  };

  const getCTAText = () => {
    if (!user) return 'Get Started';
    if (user.type === 'vendor') return 'Post Ad';
    if (user.type === 'admin') return 'Dashboard';
    return 'Start Shopping';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Thrift Link Logo" className="logo-img" />
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/verified-vendors">Verified Vendors</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="location-selector">
            <img src={gpsIcon} alt="Location" className="location-icon" />
            <span>Abuja, NG</span>
          </div>

          {!user ? (
            <Link to="/login" className="btn btn-outline" id="signInBtn">Sign In</Link>
          ) : (
            <Link to={getDashboardLink()} className="btn btn-outline" style={{ border: 'none', padding: 0 }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#25D366',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                border: '2px solid #25D366'
              }}>
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
            </Link>
          )}
          
          <Link to={getCTALink()} className="btn post-ad-btn">{getCTAText()}</Link>
        </div>
      </div>
      
      {/* Mobile Menu Styles Injection for the button since it wasn't in original CSS */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .nav-links {
             flex-direction: column;
             position: absolute;
             top: 100%;
             left: 0;
             width: 100%;
             background: white;
             padding: 1rem;
             box-shadow: 0 4px 6px rgba(0,0,0,0.1);
             display: none; /* Default hidden on mobile */
          }
          .nav-links.active {
            display: flex;
          }
          .header-actions {
            gap: 0.5rem;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
