// components/Footer.js
export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          {/* Brand + Trust */}
          <div className="footer-section">
            <div
              className="logo"
              style={{ color: "#1f2937", marginBottom: "1rem" }}
            >
              🔗 Thrift Link
            </div>
            <p style={{ marginBottom: "1rem" }}>
              Nigeria&apos;s most trusted WhatsApp vendor marketplace. Connecting
              buyers with verified sellers since 2024.
            </p>
            <div
              className="trust-indicators"
              style={{ justifyContent: "flex-start", margin: 0 }}
            >
              <div className="trust-item" style={{ fontSize: "0.8rem" }}>
                <span>🛡️</span>
                <span>Secure Platform</span>
              </div>
              <div className="trust-item" style={{ fontSize: "0.8rem" }}>
                <span>✅</span>
                <span>Verified Vendors</span>
              </div>
            </div>
          </div>

          {/* For Buyers */}
          <div className="footer-section">
            <h4>For Buyers</h4>
            <div className="footer-links">
              <a href="verifiedvendors.html">Browse Vendors</a>
              <a href="categories.html">Shop by Category</a>
              <a href="#safety">Safety Tips</a>
              <a href="#reviews">Vendor Reviews</a>
            </div>
          </div>

          {/* For Vendors */}
          <div className="footer-section">
            <h4>For Vendors</h4>
            <div className="footer-links">
              <a href="">Register as Vendor</a>
              <a href="#verification">Get Verified</a>
              <a href="#pricing">Pricing Plans</a>
              <a href="#vendor-guide">Vendor Guide</a>
            </div>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Support</h4>
            <div className="footer-links">
              <a href="#help">Help Center</a>
              <a href="support.html">Contact Us</a>
              <a href="#faq">FAQ</a>
              <a href="#report">Report Issues</a>
            </div>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4>Legal</h4>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#vendor-policy">Vendor Policy</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2025 Thrift Link Nigeria. All rights reserved. | Made with ❤️ in
            Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
