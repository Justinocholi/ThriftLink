// components/FeaturedVendors.tsx
import React from "react";

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
    <section className="featured-vendors" id="vendors">
      <div className="section-container">
        <h2 className="section-title">Top Verified Vendors This Week</h2>
        <div className="vendors-grid">
          {vendors.map((vendor, index) => (
            <div key={index} className="vendor-card">
              <div className="vendor-header">
                <div className="vendor-avatar">{vendor.avatar}</div>
                <div className="vendor-info">
                  <h3>{vendor.name}</h3>
                  {vendor.verified && (
                    <span className="verification-badge">✅ Verified</span>
                  )}
                </div>
              </div>

              <div className="vendor-stats">
                <span>
                  ⭐ {vendor.rating} ({vendor.reviews} reviews)
                </span>
                <span>📦 {vendor.orders.toLocaleString()} orders</span>
              </div>

              <div className="category-tag">{vendor.category}</div>

              <a href={vendor.whatsappLink} className="btn btn-whatsapp">
                💬 Chat on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
