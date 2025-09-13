// components/FeaturedVendors.tsx
'use client';
import React from "react";
import styles from '../style/FeaturedVendors.module.css';

interface Vendor {
  name: string;
  avatar: string;
  verified: boolean;
  rating: string;
  reviews: number;
  orders: number;
  category: string;
  whatsappLink: string;
}

const vendors: Vendor[] = [
  {
    name: "Jane's Fashion Hub",
    avatar: "JF",
    verified: true,
    rating: "4.9",
    reviews: 324,
    orders: 2450,
    category: "Fashion & Beauty",
    whatsappLink: "#",
  },
  {
    name: "Tech World",
    avatar: "TW",
    verified: true,
    rating: "4.8",
    reviews: 289,
    orders: 1800,
    category: "Electronics",
    whatsappLink: "#",
  },
  // Add more vendors as needed
];

export default function FeaturedVendors() {
  return (
    <section className={styles.featuredVendors} id="vendors">
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Top Verified Vendors This Week</h2>
        <div className={styles.vendorsGrid}>
          {vendors.map((vendor, index) => (
            <div key={index} className={styles.vendorCard}>
              <div className={styles.vendorHeader}>
                <div className={styles.vendorAvatar}>{vendor.avatar}</div>
                <div className={styles.vendorInfo}>
                  <h3>{vendor.name}</h3>
                  {vendor.verified && (
                    <span className={styles.verificationBadge}>✅ Verified</span>
                  )}
                </div>
              </div>

              <div className={styles.vendorStats}>
                <span>
                  ⭐ {vendor.rating} ({vendor.reviews} reviews)
                </span>
                <span>📦 {vendor.orders.toLocaleString()} orders</span>
              </div>

              <div className={styles.categoryTag}>{vendor.category}</div>

              <a href={vendor.whatsappLink} className={styles.btnWhatsapp}>
                💬 Chat on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
