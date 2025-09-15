// app/become-vendor/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import styles from '@/style/BecomeVendor.module.css';

export default function BecomeVendor() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessName: '',
    description: '',
    whatsappNumber: '',
    category: '',
    location: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/signin?redirect=/become-vendor');
      } else if (user.role === 'vendor') {
        router.push('/dashboard');
      }
    }
  }, [user, loading, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      if (!user) throw new Error('You must be logged in to become a vendor');

      // Create vendor record
      const { error: vendorError } = await supabase.from('vendors').insert([
        {
          user_id: user.id,
          business_name: formData.businessName,
          description: formData.description,
          whatsapp_number: formData.whatsappNumber,
          category_id: formData.category || null,
          verified: false,
          rating: 0,
          total_reviews: 0,
          total_orders: 0,
          location: formData.location,
        },
      ]);

      if (vendorError) throw vendorError;

      // Update user role to vendor
      const { error: userUpdateError } = await supabase
        .from('users')
        .update({ role: 'vendor' })
        .eq('id', user.id);

      if (userUpdateError) throw userUpdateError;

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Error becoming vendor:', err);
      setError(err.message || 'Failed to create vendor profile. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.becomeVendorContainer}>
      <div className={styles.becomeVendorHeader}>
        <h1>Become a Vendor</h1>
        <p>Start selling your products on Thrift Link</p>
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <div className={styles.becomeVendorCard}>
        <form onSubmit={handleSubmit} className={styles.becomeVendorForm}>
          <div className={styles.formGroup}>
            <label htmlFor="businessName">Business Name</label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleChange}
              required
              placeholder="Enter your business name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Business Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Describe your business and what you sell"
              rows={4}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="whatsappNumber">WhatsApp Number</label>
            <input
              id="whatsappNumber"
              name="whatsappNumber"
              type="text"
              value={formData.whatsappNumber}
              onChange={handleChange}
              required
              placeholder="Enter your WhatsApp number with country code (e.g., +2348012345678)"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category">Business Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="fashion">Fashion & Clothing</option>
              <option value="electronics">Electronics & Gadgets</option>
              <option value="beauty">Beauty & Personal Care</option>
              <option value="home">Home & Kitchen</option>
              <option value="food">Food & Groceries</option>
              <option value="health">Health & Wellness</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="location">Business Location</label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter your business location (e.g., Lagos, Nigeria)"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <p>
              By becoming a vendor, you agree to our Vendor Terms of Service and
              commit to providing excellent customer service through WhatsApp.
            </p>
          </div>

          <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={submitting}>
            {submitting ? 'Creating Vendor Profile...' : 'Become a Vendor'}
          </button>
        </form>
      </div>
    </div>
  );
}