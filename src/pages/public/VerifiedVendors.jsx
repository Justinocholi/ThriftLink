import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Import Assets
import whatsappIcon from '../../assets/whatsapp.png';
import shieldIcon from '../../assets/shield.png';
import starIcon from '../../assets/star.png';
import heartIcon from '../../assets/heart.png';

const VerifiedVendors = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const vendors = [
    {
      id: 1,
      name: "Gadget Hub NG",
      avatarColor: "linear-gradient(135deg, #25D366, #128C7E)",
      initials: "GH",
      verified: true,
      rating: 4.9,
      reviews: 120,
      specialties: ["Phones", "Laptops", "Accessories"],
      stats: { sales: "500+", responseTime: "< 10 mins", location: "Lagos" },
      description: "Premium gadgets at affordable prices. All items come with warranty. Fast delivery nationwide.",
      premium: true
    },
    {
      id: 2,
      name: "Luxe Fashion House",
      avatarColor: "linear-gradient(135deg, #ec4899, #be185d)",
      initials: "LF",
      verified: true,
      rating: 4.8,
      reviews: 85,
      specialties: ["Dresses", "Shoes", "Bags"],
      stats: { sales: "300+", responseTime: "< 30 mins", location: "Abuja" },
      description: "Trendy fashion for the modern woman. Quality materials and perfect fit guaranteed.",
      premium: false
    },
    {
      id: 3,
      name: "Tech Solutions",
      avatarColor: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      initials: "TS",
      verified: true,
      rating: 4.7,
      reviews: 45,
      specialties: ["Repairs", "Software", "Support"],
      stats: { sales: "150+", responseTime: "< 1 hr", location: "PHC" },
      description: "Expert repairs for all your devices. Quick turnaround time and reliable service.",
      premium: false
    }
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#f9fafb', color: '#333', minHeight: '100vh' }}>
      <style>
        {`
          @media (max-width: 768px) {
            .page-header { padding: 6rem 1rem 2rem !important; }
            .page-header h1 { font-size: 2rem !important; }
            .verification-stats { gap: 1.5rem !important; }
            .filters-section { margin: -2rem 0 1rem !important; padding: 1.5rem !important; }
            .vendor-actions { flex-direction: column; }
            .filters-header { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
            .vendors-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
            .sort-dropdown { width: 100%; }
          }
        `}
      </style>
      <Navbar />

      {/* Page Header */}
      <header className="page-header" style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        color: 'white',
        padding: '8rem 2rem 3rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Verified Vendors</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Connect with trusted and verified sellers across Nigeria. Shop with confidence and peace of mind.
        </p>
        <div className="verification-stats" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div className="stat-item" style={{ textAlign: 'center' }}>
            <span className="stat-number" style={{ display: 'block', fontSize: '2rem', fontWeight: '800', marginBottom: '0.3rem' }}>100%</span>
            <span className="stat-label" style={{ fontSize: '0.9rem', opacity: 0.9 }}>Verified IDs</span>
          </div>
          <div className="stat-item" style={{ textAlign: 'center' }}>
            <span className="stat-number" style={{ display: 'block', fontSize: '2rem', fontWeight: '800', marginBottom: '0.3rem' }}>24/7</span>
            <span className="stat-label" style={{ fontSize: '0.9rem', opacity: 0.9 }}>Support</span>
          </div>
          <div className="stat-item" style={{ textAlign: 'center' }}>
            <span className="stat-number" style={{ display: 'block', fontSize: '2rem', fontWeight: '800', marginBottom: '0.3rem' }}>4.8/5</span>
            <span className="stat-label" style={{ fontSize: '0.9rem', opacity: 0.9 }}>Avg Rating</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        
        {/* Filters Section */}
        <div className="filters-section" style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          margin: '-4rem 0 2rem', // Negative margin to overlap header
          border: '1px solid #e5e7eb',
          position: 'relative',
          zIndex: 10
        }}>
          <div className="filters-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="filters-title" style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1f2937' }}>Filter Vendors</div>
            <div className="results-count" style={{ color: '#6b7280', fontSize: '0.9rem' }}>Showing 3 of 150+ vendors</div>
          </div>

          <div className="filters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="filter-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label className="filter-label" style={{ fontWeight: '600', color: '#374151', fontSize: '0.9rem' }}>Location</label>
              <select className="filter-select" style={{ padding: '0.7rem', border: '1px solid #d1d5db', borderRadius: '6px', background: 'white', fontSize: '0.9rem' }}>
                <option>All Locations</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
            </div>
            <div className="filter-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label className="filter-label" style={{ fontWeight: '600', color: '#374151', fontSize: '0.9rem' }}>Category</label>
              <select className="filter-select" style={{ padding: '0.7rem', border: '1px solid #d1d5db', borderRadius: '6px', background: 'white', fontSize: '0.9rem' }}>
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Services</option>
              </select>
            </div>
            <div className="filter-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label className="filter-label" style={{ fontWeight: '600', color: '#374151', fontSize: '0.9rem' }}>Rating</label>
              <select className="filter-select" style={{ padding: '0.7rem', border: '1px solid #d1d5db', borderRadius: '6px', background: 'white', fontSize: '0.9rem' }}>
                <option>Any Rating</option>
                <option>4.0 & above</option>
                <option>4.5 & above</option>
              </select>
            </div>
          </div>

          <div className="filter-chips" style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {['All', 'Premium', 'New', 'Most Popular'].map(chip => (
              <button 
                key={chip}
                onClick={() => setActiveFilter(chip)}
                className={`filter-chip ${activeFilter === chip ? 'active' : ''}`}
                style={{
                  padding: '0.5rem 1rem',
                  background: activeFilter === chip ? '#25D366' : '#f3f4f6',
                  color: activeFilter === chip ? 'white' : '#6b7280',
                  border: activeFilter === chip ? '1px solid #25D366' : '1px solid #e5e7eb',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="vendors-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="vendors-title" style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1f2937' }}>Top Verified Vendors</h2>
          <select className="sort-dropdown" style={{ padding: '0.7rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: 'white', fontSize: '0.9rem', cursor: 'pointer' }}>
            <option>Sort by: Recommended</option>
            <option>Highest Rated</option>
            <option>Most Recent</option>
          </select>
        </div>

        <div className="vendors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {vendors.map(vendor => (
            <div key={vendor.id} className="vendor-card" style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '1.8rem',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              {vendor.premium && (
                <div className="premium-badge" style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '15px',
                  background: '#ff6b35',
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: '700'
                }}>PREMIUM</div>
              )}
              
              <div className="vendor-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem' }}>
                <div className="vendor-avatar" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: vendor.avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  flexShrink: 0
                }}>
                  {vendor.initials}
                </div>
                <div className="vendor-info" style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.3rem' }}>{vendor.name}</h3>
                  <div className="verification-badge" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: '#dcfce7',
                    color: '#166534',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    <img src={shieldIcon} alt="Verified" style={{ width: '12px', height: '12px', objectFit: 'contain' }} /> Verified Vendor
                  </div>
                  <div className="vendor-rating" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#6b7280' }}>
                    <div className="rating-stars" style={{ display: 'inline-flex', gap: '2px', verticalAlign: 'middle' }}>
                      {[1, 2, 3, 4, 5].map(star => (
                        <img key={star} src={starIcon} alt="star" style={{ width: '14px', height: '14px' }} />
                      ))}
                    </div>
                    <span>{vendor.rating} ({vendor.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="vendor-specialties" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {vendor.specialties.map(tag => (
                  <span key={tag} className="specialty-tag" style={{
                    background: '#f3f4f6',
                    color: '#6b7280',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>{tag}</span>
                ))}
              </div>

              <div className="vendor-stats" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem', fontSize: '0.85rem', color: '#6b7280' }}>
                <div className="stat-group" style={{ textAlign: 'center' }}>
                  <span className="number" style={{ display: 'block', fontWeight: '700', color: '#1f2937', fontSize: '1rem' }}>{vendor.stats.sales}</span>
                  <span>Sales</span>
                </div>
                <div className="stat-group" style={{ textAlign: 'center' }}>
                  <span className="number" style={{ display: 'block', fontWeight: '700', color: '#1f2937', fontSize: '1rem' }}>{vendor.stats.responseTime}</span>
                  <span>Response</span>
                </div>
                <div className="stat-group" style={{ textAlign: 'center' }}>
                  <span className="number" style={{ display: 'block', fontWeight: '700', color: '#1f2937', fontSize: '1rem' }}>{vendor.stats.location}</span>
                  <span>Location</span>
                </div>
              </div>

              <p className="vendor-description" style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                {vendor.description}
              </p>

              <div className="vendor-actions" style={{ display: 'flex', gap: '0.8rem' }}>
                <button className="btn btn-whatsapp" style={{
                  background: '#25D366',
                  color: 'white',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}>
                  <img src={whatsappIcon} alt="WhatsApp" style={{ width: '16px', height: '16px', filter: 'brightness(0) invert(1)' }} />
                  Chat on WhatsApp
                </button>
                <button className="btn btn-secondary" style={{
                  background: '#f3f4f6',
                  color: '#6b7280',
                  border: '1px solid #e5e7eb',
                  padding: '0.7rem',
                  minWidth: '40px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img src={heartIcon} alt="Save" style={{ width: '18px', height: '18px', opacity: 0.6 }} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem' }}>
          <a href="#" className="page-btn disabled" style={{ padding: '0.7rem 1rem', border: '1px solid #e5e7eb', background: 'white', color: '#6b7280', textDecoration: 'none', borderRadius: '6px', opacity: 0.5, cursor: 'not-allowed' }}>Prev</a>
          <a href="#" className="page-btn active" style={{ padding: '0.7rem 1rem', border: '1px solid #25D366', background: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '6px' }}>1</a>
          <a href="#" className="page-btn" style={{ padding: '0.7rem 1rem', border: '1px solid #e5e7eb', background: 'white', color: '#6b7280', textDecoration: 'none', borderRadius: '6px' }}>2</a>
          <a href="#" className="page-btn" style={{ padding: '0.7rem 1rem', border: '1px solid #e5e7eb', background: 'white', color: '#6b7280', textDecoration: 'none', borderRadius: '6px' }}>3</a>
          <a href="#" className="page-btn" style={{ padding: '0.7rem 1rem', border: '1px solid #e5e7eb', background: 'white', color: '#6b7280', textDecoration: 'none', borderRadius: '6px' }}>Next</a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VerifiedVendors;
