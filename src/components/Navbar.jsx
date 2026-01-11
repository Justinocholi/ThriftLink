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
          <div className="location-selector" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={gpsIcon} alt="Location" className="location-icon" style={{ position: 'absolute', marginLeft: '10px', width: '16px', height: '16px' }} />
            <select 
              style={{ 
                padding: '0.5rem 0.5rem 0.5rem 2rem', 
                border: '1px solid #e5e7eb', 
                borderRadius: '20px', 
                background: '#f9fafb', 
                fontSize: '0.9rem', 
                outline: 'none', 
                cursor: 'pointer',
                appearance: 'none',
                minWidth: '120px'
              }}
            >
              <option value="">Select State</option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="FCT">FCT - Abuja</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
            </select>
          </div>

          {!user ? (
            <Link to="/login" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e5e7eb'
            }}>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Guest" alt="Guest" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </Link>
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
          
          <Link to={getCTALink()} className="btn post-ad-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>{getCTAText()}</Link>
        </div>
      </div>
      
      {/* Mobile Menu Styles Injection for the button since it wasn't in original CSS */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
            z-index: 1100;
            position: relative;
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
             z-index: 1000;
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
