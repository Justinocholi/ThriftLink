// components/Stats.tsx
'use client';
import React from "react";
import styles from '../style/StatsSection.module.css';
import CountUp from './CountUp';

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.statsGrid}>
          {/* Stat 1 */}
          <div className={styles.statItem}>
            <span className={styles.statNumber} aria-label="five thousand plus">
              <CountUp end={5000} suffix="+" />
            </span>
            <span className={styles.statLabel}>Verified Vendors</span>
          </div>

          {/* Stat 2 */}
          <div className={styles.statItem}>
            <span className={styles.statNumber} aria-label="two point four million plus">
              <CountUp end={2.4} suffix="M+" decimals={1} />
            </span>
            <span className={styles.statLabel}>Products Listed</span>
          </div>

          {/* Stat 3 */}
          <div className={styles.statItem}>
            <span className={styles.statNumber} aria-label="five hundred thousand plus">
              <CountUp end={500} suffix="K+" />
            </span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>

          {/* Stat 4 */}
          <div className={styles.statItem}>
            <span className={styles.statNumber} aria-label="twenty five plus">
              <CountUp end={25} suffix="+" />
            </span>
            <span className={styles.statLabel}>States Covered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
