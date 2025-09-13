'use client';

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import styles from "../style/Navbar.module.css";

export default function Navbar() {
  const { user, loading, signOut } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>Thrift Link</Link>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/vendors">Verified Vendors</Link></li>
            <li><Link href="/#how-it-works">How It Works</Link></li>
            <li><Link href="/#categories">Categories</Link></li>
          </ul>
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.locationSelector}>📍 Lagos, NG</div>
          
          {!loading && (
            <>
              {user ? (
                <>
                  <Link href="/dashboard" className={`${styles.btn} ${styles.btnOutline}`}>
                    Dashboard
                  </Link>
                  {user.role === 'vendor' ? (
                    <Link href="/dashboard/add-product" className={`${styles.btn} ${styles.postAdBtn}`}>
                      📢 Add Product
                    </Link>
                  ) : (
                    <Link href="/become-vendor" className={`${styles.btn} ${styles.postAdBtn}`}>
                      📢 Become a Vendor
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link href="/signin" className={`${styles.btn} ${styles.btnOutline}`}>Sign In</Link>
                  <Link href="/signup" className={`${styles.btn} ${styles.postAdBtn}`}>📢 Join Now</Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}


