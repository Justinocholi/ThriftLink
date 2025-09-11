// components/HowItWorks.tsx
import React from "react";

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-container">
        <h2 className="section-title">How Thrift Link Works</h2>
        <div className="steps-container">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon" role="img" aria-label="search">
              🔍
            </div>
            <h3 className="step-title">Search &amp; Discover</h3>
            <p className="step-description">
              Browse thousands of verified WhatsApp vendors by category or
              search for specific products and services.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon" role="img" aria-label="chat">
              💬
            </div>
            <h3 className="step-title">Connect Instantly</h3>
            <p className="step-description">
              Click to chat directly with vendors on WhatsApp. No middleman, just
              instant communication.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon" role="img" aria-label="shield">
              🛡️
            </div>
            <h3 className="step-title">Shop Safely</h3>
            <p className="step-description">
              All vendors are verified and rated by real customers. Shop with
              confidence and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
