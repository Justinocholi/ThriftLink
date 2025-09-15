'use client';

import { useState } from 'react';
import styles from '../style/SearchSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMobileAlt, faTshirt, faUtensils, faHome, faPaintBrush, faTools } from '@fortawesome/free-solid-svg-icons';

export default function Search() {

  return (
    <section className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <h2 className={styles.searchTitle}>Find Trusted WhatsApp Vendors Near You</h2>
        <div className={styles.mainSearch}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="What are you looking for? (e.g. iPhone, fashion, food)"
          />
          <button className={styles.searchBtn}><FontAwesomeIcon icon={faSearch} /> Search</button>
        </div>
        <div className={styles.quickFilters}>
          <a href="#" className={styles.filterChip}><FontAwesomeIcon icon={faMobileAlt} /> Electronics</a>
          <a href="#" className={styles.filterChip}><FontAwesomeIcon icon={faTshirt} /> Fashion</a>
          <a href="#" className={styles.filterChip}><FontAwesomeIcon icon={faUtensils} /> Food</a>
          <a href="#" className={styles.filterChip}><FontAwesomeIcon icon={faHome} /> Home & Living</a>
          <a href="#" className={styles.filterChip}><FontAwesomeIcon icon={faPaintBrush} /> Beauty</a>
          <a href="#" className={styles.filterChip}><FontAwesomeIcon icon={faTools} /> Services</a>
        </div>
      </div>
    </section>
  );
}
