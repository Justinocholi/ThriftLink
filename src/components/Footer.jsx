import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/thriftlink-logo-.png';
import shieldIcon from '../assets/shield.png';
import checklistIcon from '../assets/checklist.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo footer-logo">
              <img src={logo} alt="Thrift Link Logo" />
            </div>

            <p>The most trusted WhatsApp vendor marketplace. Connecting buyers with verified sellers since 2024.</p>
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="icon">
                  <img src={shieldIcon} alt="Shield" className="icon-sm" />
                </span>
                <span>Secure Platform</span>
              </div>
              <div className="trust-item">
                <span className="icon">
                  <img src={checklistIcon} alt="Check" className="icon-sm" />
                </span>
                <span>Verified Vendors</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h4>For Buyers</h4>
            <div className="footer-links">
              <Link to="/verified-vendors">Browse Vendors</Link>
              <Link to="/categories">Shop by Category</Link>
              <Link to="/support#safety">Safety Tips</Link>
              <Link to="/support#reviews">Vendor Reviews</Link>
            </div>
          </div>
          <div className="footer-section">
            <h4>For Vendors</h4>
            <div className="footer-links">
              <Link to="/login">Register as Vendor</Link>
              <Link to="/how-it-works#verification">Get Verified</Link>
              <Link to="/support#pricing">Pricing Plans</Link>
              <Link to="/support#vendor-guide">Vendor Guide</Link>
            </div>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <div className="footer-links">
              <Link to="/support#help">Help Center</Link>
              <Link to="/support">Contact Us</Link>
              <Link to="/support#faq">FAQ</Link>
              <Link to="/support#report">Report Issues</Link>
            </div>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <div className="footer-links">
              <Link to="/support#privacy">Privacy Policy</Link>
              <Link to="/support#terms">Terms of Service</Link>
              <Link to="/support#vendor-policy">Vendor Policy</Link>
              <Link to="/support#cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Thrift Link Nigeria. All rights reserved. | Made with ❤️ in Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
