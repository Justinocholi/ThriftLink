// components/Categories.tsx
'use client';

import React from "react";
import Link from "next/link";
import styles from "../style/Categories.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faTshirt, faUtensils, faHome, faPaintBrush, faTools, faStore, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function Categories() {
  return (
    <section className={styles.categories} id="categories">
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Find vendors by category</h2>
        <div className={styles.categoriesGrid}>
          {/* Category 1 */}
          <Link href="/categories/electronics" className={styles.categoryCard}>
            <span className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faMobileAlt} />
            </span>
            <div className={styles.categoryName}>Electronics</div>
            <div className={styles.categoryCount}>12,450 vendors</div>
          </Link>

          {/* Category 2 */}
          <Link href="/categories/fashion" className={styles.categoryCard}>
            <span className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faTshirt} />
            </span>
            <div className={styles.categoryName}>Fashion &amp; Beauty</div>
            <div className={styles.categoryCount}>8,920 vendors</div>
          </Link>

          {/* Category 3 */}
          <Link href="/categories/food" className={styles.categoryCard}>
            <span className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faUtensils} />
            </span>
            <div className={styles.categoryName}>Food &amp; Groceries</div>
            <div className={styles.categoryCount}>7,340 vendors</div>
          </Link>

          {/* Category 4 */}
          <Link href="/categories/home" className={styles.categoryCard}>
            <span className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faHome} />
            </span>
            <div className={styles.categoryName}>Home &amp; Living</div>
            <div className={styles.categoryCount}>5,670 vendors</div>
          </Link>

          {/* Category 5 */}
          <Link href="/categories/beauty" className={styles.categoryCard}>
            <span className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faPaintBrush} />
            </span>
            <div className={styles.categoryName}>Beauty &amp; Personal Care</div>
            <div className={styles.categoryCount}>4,890 vendors</div>
          </Link>

          {/* Category 6 */}
          <Link href="/categories/services" className={styles.categoryCard}>
            <span className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faTools} />
            </span>
            <div className={styles.categoryName}>Services</div>
            <div className={styles.categoryCount}>3,560 vendors</div>
          </Link>
        </div>
        <div className={styles.ctaContainer}>
        <h2>Can't find what you're looking for?</h2>
        <p>Check out all our verified vendors or contact support for assistance.</p>
        <div className={styles.ctaButtons}>
          <Link href="/vendors" className={styles.ctaButton}>
            <FontAwesomeIcon icon={faStore} /> Browse All Vendors
          </Link>
          <Link href="/support" className={styles.ctaButtonSecondary}>
            <FontAwesomeIcon icon={faHeadset} /> Contact Support
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
