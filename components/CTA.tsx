// components/CTA.tsx
'use client';
import React from "react";
import styles from "../style/CTA.module.css";

interface CTAButton {
  text: string;
  href: string;
  type: "primary" | "outline" | "white";
  icon?: string;
  style?: React.CSSProperties;
}

const buttons: CTAButton[] = [
  {
    text: "Get Verified Now",
    href: "#apply",
    type: "white",
    icon: "🚀",
  },
  {
    text: "Learn More",
    href: "#learn",
    type: "outline",
    icon: "📚",
    style: { borderColor: "white", color: "white" },
  },
];

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Selling on WhatsApp?</h2>
          <p>
            Join thousands of successful vendors already using Thrift Link to
            grow their business
          </p>
          <div className={styles.ctaButtons}>
            {buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className={`${btn.type === 'white' ? styles.btnWhite : btn.type === 'outline' ? styles.btnOutline : ''} ${styles.btnLarge}`}
                style={btn.style}
              >
                {btn.icon && <span>{btn.icon}</span>} {btn.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
