// app/vendors/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getVendorById, getProductsByVendor } from '@/lib/supabaseClient';
import { Vendor, Product } from '@/lib/database';
import Link from 'next/link';

export default function VendorProfile() {
  const { id } = useParams();
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadVendorData() {
      try {
        if (typeof id !== 'string') {
          throw new Error('Invalid vendor ID');
        }
        
        const vendorData = await getVendorById(id);
        setVendor(vendorData);
        
        const productsData = await getProductsByVendor(id);
        setProducts(productsData);
      } catch (err: any) {
        console.error('Error loading vendor data:', err);
        setError('Failed to load vendor information. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    
    loadVendorData();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading vendor information...</div>;
  }

  if (error || !vendor) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error || 'Vendor not found'}</p>
        <Link href="/vendors" className="btn btn-primary">
          Browse All Vendors
        </Link>
      </div>
    );
  }

  return (
    <div className="vendor-profile-container">
      <div className="vendor-header">
        <div className="vendor-banner">
          {vendor.banner_url ? (
            <img src={vendor.banner_url} alt={`${vendor.business_name} banner`} />
          ) : (
            <div className="default-banner" />
          )}
        </div>
        
        <div className="vendor-info-container">
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
            <h1>{vendor.business_name}</h1>
            {vendor.verified && (
              <span className="verification-badge">✅ Verified Vendor</span>
            )}
            <div className="vendor-stats">
              <span>⭐ {vendor.rating.toFixed(1)} ({vendor.total_reviews} reviews)</span>
              <span>📦 {vendor.total_orders.toLocaleString()} orders</span>
              <span>📍 {vendor.location}</span>
            </div>
          </div>
          
          <div className="vendor-actions">
            <a 
              href={`https://wa.me/${vendor.whatsapp_number}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <div className="vendor-content">
        <div className="vendor-description">
          <h2>About {vendor.business_name}</h2>
          <p>{vendor.description || 'No description provided.'}</p>
        </div>
        
        <div className="vendor-products">
          <h2>Products ({products.length})</h2>
          
          {products.length === 0 ? (
            <div className="empty-products">
              <p>This vendor hasn't added any products yet.</p>
            </div>
          ) : (
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    {product.images && product.images.length > 0 ? (
                      <img src={product.images[0]} alt={product.name} />
                    ) : (
                      <div className="no-image">No Image</div>
                    )}
                  </div>
                  
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-price">
                      {product.sale_price ? (
                        <>
                          <span className="sale-price">₦{product.sale_price.toLocaleString()}</span>
                          <span className="original-price">₦{product.price.toLocaleString()}</span>
                        </>
                      ) : (
                        <span>₦{product.price.toLocaleString()}</span>
                      )}
                    </div>
                    
                    <p className="product-description">
                      {product.description.length > 100
                        ? `${product.description.substring(0, 100)}...`
                        : product.description}
                    </p>
                    
                    <div className="product-actions">
                      <a 
                        href={`https://wa.me/${vendor.whatsapp_number}?text=Hi, I'm interested in your product: ${product.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-whatsapp"
                      >
                        💬 Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}