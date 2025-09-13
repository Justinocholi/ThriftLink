// components/Categories.tsx
'use client';

import React from "react";
import styles from "../style/Categories.module.css";

export default function Categories() {
  return (
    <section className={styles.categories} id="categories">
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Browse by Category</h2>
        <div className={styles.categoriesGrid}>
          {/* Category 1 */}
          <a href="#" className={styles.categoryCard}>
            <span className={styles.categoryIcon} role="img" aria-label="electronics">
              📱
            </span>
            <div className={styles.categoryName}>Electronics</div>
            <div className={styles.categoryCount}>12,450 vendors</div>
          </a>

          {/* Category 2 */}
          <a href="#" className={styles.categoryCard}>
            <span className={styles.categoryIcon} role="img" aria-label="fashion">
              👗
            </span>
            <div className={styles.categoryName}>Fashion &amp; Beauty</div>
            <div className={styles.categoryCount}>8,920 vendors</div>
          </a>

          {/* Add more categories here */}
        </div>
      </div>
    </section>
  );
}
