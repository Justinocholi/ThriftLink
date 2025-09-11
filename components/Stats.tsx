// components/Stats.tsx
import React from "react";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="section-container">
        <div className="stats-grid">
          {/* Stat 1 */}
          <div className="stat-item">
            <span className="stat-number" aria-label="five thousand plus">
              5,000+
            </span>
            <span className="stat-label">Verified Vendors</span>
          </div>

          {/* Stat 2 */}
          <div className="stat-item">
            <span className="stat-number" aria-label="two point four million plus">
              2.4M+
            </span>
            <span className="stat-label">Products Listed</span>
          </div>

          {/* Stat 3 */}
          <div className="stat-item">
            <span className="stat-number" aria-label="five hundred thousand plus">
              500K+
            </span>
            <span className="stat-label">Happy Customers</span>
          </div>

          {/* Stat 4 */}
          <div className="stat-item">
            <span className="stat-number" aria-label="twenty five plus">
              25+
            </span>
            <span className="stat-label">States Covered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
