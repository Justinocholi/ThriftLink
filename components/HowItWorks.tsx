// components/HowItWorks.tsx
'use client';
import React from "react";
import styles from "../style/HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>How Thrift Link Works</h2>
        <div className={styles.stepsContainer}>
          {/* Step 1 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepIcon} role="img" aria-label="search">
              🔍
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
            <div className={styles.stepIcon} role="img" aria-label="chat">
              💬
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
            <div className={styles.stepIcon} role="img" aria-label="shield">
              🛡️
            </div>
            <h3 className={styles.stepTitle}>Shop Safely</h3>
            <p className={styles.stepDescription}>
              All vendors are verified and rated by real customers. Shop with
              confidence and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
