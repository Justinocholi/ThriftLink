// components/Hero.tsx
'use client';
import React from "react";
import styles from "../style/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Nigeria&apos;s #1 WhatsApp Vendor Marketplace</h1>
        <p className={styles.heroSubtitle}>
          Connect with 5,000+ verified WhatsApp vendors • Shop safely • Buy smarter
        </p>
        <div className={styles.trustIndicators}>
          <div className={styles.trustItem}>
            <span role="img" aria-label="check">
              ✅
            </span>
            <span>2.4M+ Active Listings</span>
          </div>
          <div className={styles.trustItem}>
            <span role="img" aria-label="shield">
              🛡️
            </span>
            <span>100% Verified Vendors</span>
          </div>
          <div className={styles.trustItem}>
            <span role="img" aria-label="chat">
              💬
            </span>
            <span>Direct WhatsApp Chat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
