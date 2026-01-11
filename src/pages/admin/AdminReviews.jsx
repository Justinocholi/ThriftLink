import React, { useState } from 'react';

const AdminReviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, rating: 5, text: 'Great service!', time: new Date().toISOString() },
    { id: 2, rating: 4, text: 'Good quality items.', time: new Date().toISOString() }
  ]);

  const handleDelete = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  return (
    <div>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '0.5rem', fontWeight: 'bold' }}>Review Management</h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>Moderate and manage customer reviews</p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #f1f5f9'
        }}>
          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: '700' }}>All Reviews</h2>
        </div>
        
        <div id="reviewsList">
          {reviews.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
              <p>No reviews to moderate</p>
            </div>
          ) : (
            reviews.map((r) => (
              <div key={r.id} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ color: '#fbbf24', fontSize: '1rem' }}>{"⭐".repeat(r.rating)}</div>
                  <button 
                    onClick={() => handleDelete(r.id)}
                    style={{
                      background: '#fef3c7',
                      color: '#b45309',
                      padding: '0.5rem 1rem',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.85rem'
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div style={{ color: '#475569', lineHeight: '1.6', marginBottom: '0.75rem' }}>{r.text}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#94a3b8' }}>
                   <span>{new Date(r.time).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminReviews;
