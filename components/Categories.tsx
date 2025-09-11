// components/Categories.tsx
import React from "react";
import  "./style/Categories.module.css"
import "./app/globals.css"

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="section-container">
        <h2 className="section-title">Browse by Category</h2>
        <div className="categories-grid">
          {/* Category 1 */}
          <a href="#" className="category-card">
            <span className="category-icon" role="img" aria-label="electronics">
              📱
            </span>
            <div className="category-name">Electronics</div>
            <div className="category-count">12,450 vendors</div>
          </a>

          {/* Category 2 */}
          <a href="#" className="category-card">
            <span className="category-icon" role="img" aria-label="fashion">
              👗
            </span>
            <div className="category-name">Fashion &amp; Beauty</div>
            <div className="category-count">8,920 vendors</div>
          </a>

          {/* Add more categories here */}
        </div>
      </div>
    </section>
  );
}
