'use client';
import styles from '../style/SearchSection.module.css';

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
          <input
            type="text"
            className={styles.locationInput}
            placeholder="Lagos, NG"
            defaultValue="Lagos, NG"
          />
          <button className={styles.searchBtn}>🔍 Search</button>
        </div>
        <div className={styles.quickFilters}>
          <a href="#" className={styles.filterChip}>📱 Electronics</a>
          <a href="#" className={styles.filterChip}>👗 Fashion</a>
          <a href="#" className={styles.filterChip}>🍕 Food</a>
          <a href="#" className={styles.filterChip}>🏠 Home & Living</a>
          <a href="#" className={styles.filterChip}>💄 Beauty</a>
          <a href="#" className={styles.filterChip}>🔧 Services</a>
        </div>
      </div>
    </section>
  );
}
