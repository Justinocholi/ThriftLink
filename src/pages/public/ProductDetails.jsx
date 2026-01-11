import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Star, Shield, MessageCircle, MapPin, Heart, Share2, Check } from 'lucide-react';

const ProductDetails = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1, padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
            {/* Image Gallery */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                width: '100%', 
                height: '500px', 
                background: '#f1f5f9', 
                borderRadius: '16px', 
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1576995853123-5a297da40303?auto=format&fit=crop&q=80&w=800" 
                  alt="Product" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{ 
                    aspectRatio: '1', 
                    background: '#f1f5f9', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src="https://images.unsplash.com/photo-1576995853123-5a297da40303?auto=format&fit=crop&q=80&w=200" 
                      alt={`Thumbnail ${i}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#1f2937' }}>Vintage Denim Jacket</h1>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}>
                    <Share2 size={20} color="#64748b" />
                  </button>
                  <button style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}>
                    <Heart size={20} color="#ef4444" />
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: '700', color: '#2563eb' }}>₦15,000</span>
                <span style={{ padding: '0.25rem 0.75rem', background: '#dcfce7', color: '#15803d', borderRadius: '20px', fontSize: '0.875rem', fontWeight: '600' }}>In Stock</span>
              </div>

              <div style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '1.5rem 0', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#e2e8f0', overflow: 'hidden' }}>
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Vendor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700', color: '#1f2937', margin: 0 }}>Zara Thrift Store</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#f59e0b', fontSize: '0.875rem' }}>
                      <Star size={14} fill="#f59e0b" />
                      <span>4.8 (120 reviews)</span>
                    </div>
                  </div>
                  <button style={{ marginLeft: 'auto', padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '6px', background: 'white', fontWeight: '600', cursor: 'pointer' }}>
                    View Profile
                  </button>
                </div>
                
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b' }}>
                    <MapPin size={18} />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#25D366', fontWeight: '600' }}>
                    <Shield size={18} />
                    <span>Verified Vendor</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Description</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  Authentic vintage denim jacket in excellent condition. Minimal wear, great wash. Perfect for casual outings. Size M but fits slightly oversized.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button style={{
                  padding: '1rem',
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(37, 211, 102, 0.2)'
                }}>
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </button>
                <button style={{
                  padding: '1rem',
                  background: 'white',
                  color: '#1f2937',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  cursor: 'pointer'
                }}>
                  Show Contact Number
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
