// app/howitworks/page.tsx
'use client';

import Link from 'next/link';
import styles from '@/style/HowItWorks.module.css';

export default function HowItWorksPage() {
  return (
    <div className={styles.howItWorks}>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>How Thrift Link Works</h1>
        <p>Connect with WhatsApp vendors in a few simple steps</p>
      

        <div className={styles.stepsContainer}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div>
              <h2 className={styles.stepTitle}>Browse Vendors</h2>
              <p className={styles.stepDescription}>Explore our marketplace to find verified WhatsApp vendors across various categories including fashion, electronics, food, home & living, beauty, and services.</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <div>
              <h2 className={styles.stepTitle}>View Vendor Profiles</h2>
              <p className={styles.stepDescription}>Check vendor ratings, reviews, and product offerings to find the perfect match for your needs.</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <div>
              <h2 className={styles.stepTitle}>Connect via WhatsApp</h2>
              <p className={styles.stepDescription}>Contact vendors directly through WhatsApp to inquire about products, negotiate prices, and arrange delivery.</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <div>
              <h2 className={styles.stepTitle}>Complete Your Purchase</h2>
              <p className={styles.stepDescription}>Finalize your transaction with the vendor through their preferred payment method.</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>5</div>
            <div>
              <h2 className={styles.stepTitle}>Leave a Review</h2>
              <p className={styles.stepDescription}>Share your experience to help other buyers and support quality vendors on our platform.</p>
            </div>
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Why Use Thrift Link?</h2>
          <div className={styles.stepsContainer}>
            <div className={styles.stepCard}>
              <h3 className={styles.stepTitle}>Direct Communication</h3>
              <p className={styles.stepDescription}>Chat directly with vendors without intermediaries</p>
            </div>
            <div className={styles.stepCard}>
              <h3 className={styles.stepTitle}>Verified Vendors</h3>
              <p className={styles.stepDescription}>All vendors are verified to ensure trustworthiness</p>
            </div>
            <div className={styles.stepCard}>
              <h3 className={styles.stepTitle}>No Platform Fees</h3>
              <p className={styles.stepDescription}>Connect and transact without additional charges</p>
            </div>
            <div className={styles.stepCard}>
              <h3 className={styles.stepTitle}>Local Businesses</h3>
              <p className={styles.stepDescription}>Support small and medium enterprises in your community</p>
            </div>
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Ready to Get Started?</h2>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/vendors" className="btn btn-primary" style={{ marginRight: '1rem' }}>Browse Vendors</Link>
            <Link href="/become-vendor" className="btn btn-secondary">Become a Vendor</Link>
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <details style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem 0' }}>Is Thrift Link free to use?</summary>
              <p style={{ padding: '1rem 0 0.5rem', lineHeight: '1.6' }}>Yes, Thrift Link is completely free for buyers. We don't charge any fees for connecting with vendors.</p>
            </details>
            <details style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem 0' }}>How are vendors verified?</summary>
              <p style={{ padding: '1rem 0 0.5rem', lineHeight: '1.6' }}>Vendors go through a verification process that includes business information validation and compliance with our platform policies.</p>
            </details>
            <details style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem 0' }}>Can I sell on Thrift Link?</summary>
              <p style={{ padding: '1rem 0 0.5rem', lineHeight: '1.6' }}>Yes! Visit our <Link href="/become-vendor">Become a Vendor</Link> page to register as a seller.</p>
            </details>
            <details style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem 0' }}>Is it safe to buy from WhatsApp vendors?</summary>
              <p style={{ padding: '1rem 0 0.5rem', lineHeight: '1.6' }}>We verify all vendors on our platform, but we recommend following our safety guidelines when transacting. Always check vendor ratings and reviews before making a purchase.</p>
            </details>
            <details style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem 0' }}>What if I have an issue with a vendor?</summary>
              <p style={{ padding: '1rem 0 0.5rem', lineHeight: '1.6' }}>You can report any issues through our <Link href="/support">Support</Link> page, and our team will investigate the matter.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}