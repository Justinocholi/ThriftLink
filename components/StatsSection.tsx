import styles from "./StatsSection.module.css";

export default function StatsSection() {
  const stats = [
    { number: "50K+", label: "Active Listings" },
    { number: "10K+", label: "Trusted Vendors" },
    { number: "1M+", label: "Happy Customers" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((stat, idx) => (
          <div key={idx} className={styles.statItem}>
            <span className={styles.statNumber}>{stat.number}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
