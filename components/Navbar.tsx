'use client';

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import styles from "../style/Navbar.module.css";
import { useState, useRef, useEffect } from "react";
import { nigerianStates } from "@/utils/nigerianStates";

export default function Navbar() {
  const { user, loading, signOut } = useAuth();
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [selectedState, setSelectedState] = useState("Lagos");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowStateDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>Thrift Link</Link>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/vendors">Verified Vendors</Link></li>
            <li><Link href="/howitworks">How It Works</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.locationSelector} ref={dropdownRef}>
            <div 
              className={styles.locationDisplay} 
              onClick={() => setShowStateDropdown(!showStateDropdown)}
            >
              📍 {selectedState}, NG
            </div>
            {showStateDropdown && (
              <div className={styles.stateDropdown}>
                <div className={styles.stateList}>
                  {nigerianStates.map((state) => (
                    <div 
                      key={state} 
                      className={styles.stateItem}
                      onClick={() => {
                        setSelectedState(state);
                        setShowStateDropdown(false);
                      }}
                    >
                      {state}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {!loading && (
            <>
              {user ? (
                <>
                  <Link href={user ? "/dashboard" : "/signin"} className={`${styles.btn} ${styles.btnOutline}`}>
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


