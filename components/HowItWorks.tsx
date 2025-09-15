// components/HowItWorks.tsx
'use client';
import React from "react";
import styles from "../style/HowItWorks.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCommentDots, faShieldAlt, faUserPlus, faStore } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>How Thrift Link Works</h2>
        <div className={styles.stepsContainer}>
          {/* Step 1 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <h3 className={styles.stepTitle}>Search &amp; Discover</h3>
            <p className={styles.stepDescription}>
              Browse thousands of verified WhatsApp vendors by category or
              search for specific products and services.
            </p>
          </div>

          {/* Step 2 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
            <h3 className={styles.stepTitle}>Connect Instantly</h3>
            <p className={styles.stepDescription}>
              Click to chat directly with vendors on WhatsApp. No middleman, just
              instant communication.
            </p>
          </div>

          {/* Step 3 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3 className={styles.stepTitle}>Shop Safely</h3>
            <p className={styles.stepDescription}>
              All vendors are verified and rated by real customers. Shop with
              confidence and security.
            </p>
          </div>
        </div>
      </div>
      
      <div className={styles.ctaContainer}>
        <h2>Ready to Get Started?</h2>
        <div className={styles.ctaButtons}>
          <Link href="/vendors" className={styles.ctaButton}>
            <FontAwesomeIcon icon={faStore} /> Browse Vendors
          </Link>
          <Link href="/become-vendor" className={styles.ctaButton}>
            <FontAwesomeIcon icon={faUserPlus} /> Become a Vendor
          </Link>
        </div>
      </div>
    </section>
  );
}
