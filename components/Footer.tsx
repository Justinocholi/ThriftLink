// components/Footer.js
import styles from '../style/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sectionContainer}>
        <div className={styles.footerContent}>
          {/* Brand + Trust */}
          <div className={styles.footerSection}>
            <div
              className={styles.logo}
              style={{ color: "#1f2937", marginBottom: "1rem" }}
            >
              🔗 Thrift Link
            </div>
            <p style={{ marginBottom: "1rem" }}>
              Nigeria&apos;s most trusted WhatsApp vendor marketplace. Connecting
              buyers with verified sellers since 2024.
            </p>
            <div
              className={styles.trustIndicators}
              style={{ justifyContent: "flex-start", margin: 0 }}
            >
              <div className={styles.trustItem} style={{ fontSize: "0.8rem" }}>
                <span>🛡️</span>
                <span>Secure Platform</span>
              </div>
              <div className={styles.trustItem} style={{ fontSize: "0.8rem" }}>
                <span>✅</span>
                <span>Verified Vendors</span>
              </div>
            </div>
          </div>

          {/* For Buyers */}
          <div className={styles.footerSection}>
            <h4>For Buyers</h4>
            <div className={styles.footerLinks}>
              <a href="/vendors">Verified Vendors</a>
              <a href="/categories">Categories</a>
              <a href="/howitworks">How It Works</a>
              <a href="/support">Safety Tips</a>
            </div>
          </div>

          {/* For Vendors */}
          <div className={styles.footerSection}>
            <h4>For Vendors</h4>
            <div className={styles.footerLinks}>
              <a href="/become-vendor">Register as Vendor</a>
              <a href="/#verification">Get Verified</a>
              <a href="/#pricing">Pricing Plans</a>
              <a href="/#vendor-guide">Vendor Guide</a>
            </div>
          </div>

          {/* Support */}
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <div className={styles.footerLinks}>
              <a href="/support">Help Center</a>
              <a href="/support">Contact Us</a>
              <a href="/howitworks">FAQ</a>
              <a href="/support">Report Issues</a>
            </div>
          </div>

          {/* Legal */}
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <div className={styles.footerLinks}>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#vendor-policy">Vendor Policy</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p>
            © 2025 Thrift Link Nigeria. All rights reserved. | Made with ❤️ in
            Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
