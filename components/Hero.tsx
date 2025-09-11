// components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Nigeria&apos;s #1 WhatsApp Vendor Marketplace</h1>
        <p className="hero-subtitle">
          Connect with 5,000+ verified WhatsApp vendors • Shop safely • Buy smarter
        </p>
        <div className="trust-indicators">
          <div className="trust-item">
            <span role="img" aria-label="check">
              ✅
            </span>
            <span>2.4M+ Active Listings</span>
          </div>
          <div className="trust-item">
            <span role="img" aria-label="shield">
              🛡️
            </span>
            <span>100% Verified Vendors</span>
          </div>
          <div className="trust-item">
            <span role="img" aria-label="chat">
              💬
            </span>
            <span>Direct WhatsApp Chat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
