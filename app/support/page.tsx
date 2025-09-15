// app/support/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/style/Support.module.css';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Support form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={styles['support-page-container']}>
      <div className={styles['support-header']}>
        <h1>Customer Support</h1>
        <p>We're here to help with any questions or concerns</p>
      </div>

      <div className={styles['support-content']}>
        <div className={styles['support-options']}>
          <div className={styles['support-card']}>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our platform.</p>
            <div className={styles['faq-list']}>
              <details>
                <summary>How do I contact a vendor?</summary>
                <p>You can contact vendors directly through WhatsApp by viewing their profile and clicking on the WhatsApp button.</p>
              </details>
              <details>
                <summary>How do I become a vendor?</summary>
                <p>Visit our <Link href="/become-vendor">Become a Vendor</Link> page to register as a vendor on our platform.</p>
              </details>
              <details>
                <summary>Is my information secure?</summary>
                <p>Yes, we use industry-standard security measures to protect your personal information.</p>
              </details>
              <details>
                <summary>How do I report a problem with a vendor?</summary>
                <p>You can report issues using the form on this page or by contacting our support team directly.</p>
              </details>
            </div>
          </div>

          <div className={styles['support-card']}>
            <h2>Contact Methods</h2>
            <div className={styles['contact-methods']}>
              <div className={styles['contact-method']}>
                <h3>Email Support</h3>
                <p>support@thriftlink.com</p>
                <p>Response time: 24-48 hours</p>
              </div>
              <div className={styles['contact-method']}>
                <h3>WhatsApp Support</h3>
                <p>+234 800 123 4567</p>
                <p>Available: Mon-Fri, 9am-5pm WAT</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['support-form-container']}>
          <h2>Send Us a Message</h2>
          {submitted ? (
            <div className={styles['success-message']}>
              <p>Thank you for your message! Our support team will get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)} 
                className={`${styles.btn} ${styles['btn-primary']}`}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles['support-form']}>
              <div className={styles['form-group']}>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is your inquiry about?"
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your issue or question in detail"
                  rows={5}
                />
              </div>

              <button type="submit" className={`${styles.btn} ${styles['btn-primary']}`}>
                Submit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}