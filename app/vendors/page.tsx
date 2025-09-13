// app/vendors/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getVendors } from '@/lib/supabaseClient';
import { Vendor } from '@/lib/database';
import Link from 'next/link';

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadVendors() {
      try {
        const data = await getVendors(20); // Get top 20 vendors
        setVendors(data);
      } catch (err: any) {
        console.error('Error loading vendors:', err);
        setError('Failed to load vendors. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    
    loadVendors();
  }, []);

  if (loading) {
    return <div className="loading">Loading vendors...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="btn btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="vendors-page-container">
      <div className="vendors-header">
        <h1>Verified WhatsApp Vendors</h1>
        <p>Connect directly with trusted vendors via WhatsApp</p>
      </div>
      
      {vendors.length === 0 ? (
        <div className="empty-vendors">
          <p>No vendors found. Check back soon!</p>
        </div>
      ) : (
        <div className="vendors-grid">
          {vendors.map((vendor) => (
            <Link href={`/vendors/${vendor.id}`} key={vendor.id}>
              <div className="vendor-card">
                <div className="vendor-card-header">
                  <div className="vendor-avatar">
                    {vendor.avatar_url ? (
                      <img src={vendor.avatar_url} alt={vendor.business_name} />
                    ) : (
                      <div className="default-avatar">
                        {vendor.business_name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="vendor-info">
                    <h3>{vendor.business_name}</h3>
                    {vendor.verified && (
                      <span className="verification-badge">✅ Verified</span>
                    )}
                  </div>
                </div>

                <div className="vendor-stats">
                  <span>
                    ⭐ {vendor.rating ? vendor.rating.toFixed(1) : '0.0'} ({vendor.total_reviews || 0} reviews)
                  </span>
                  <span>📦 {(vendor.total_orders || 0).toLocaleString()} orders</span>
                </div>

                <div className="vendor-location">📍 {vendor.location}</div>

                <div className="vendor-description">
                  {vendor.description && vendor.description.length > 100
                    ? `${vendor.description.substring(0, 100)}...`
                    : vendor.description || 'No description provided.'}
                </div>

                <div className="vendor-actions">
                  <span className="btn btn-outline">View Profile</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}