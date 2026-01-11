import React from 'react';

const VendorDashboard = () => {
  // Mock Data
  const stats = {
    views: 0,
    clicks: 0,
    conversion: '0%'
  };

  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          border: '1px solid #93c5fd',
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)'
        }}>
          <h4 style={{ color: '#1e40af', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Profile Views</h4>
          <p style={{ color: '#1e3a8a', fontSize: '2.5rem', fontWeight: '700' }}>{stats.views}</p>
        </div>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          border: '1px solid #86efac',
          background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)'
        }}>
          <h4 style={{ color: '#166534', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.75rem' }}>WhatsApp Clicks</h4>
          <p style={{ color: '#14532d', fontSize: '2.5rem', fontWeight: '700' }}>{stats.clicks}</p>
        </div>
        <div style={{
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          border: '1px solid #fcd34d',
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'
        }}>
          <h4 style={{ color: '#92400e', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Conversion Rate</h4>
          <p style={{ color: '#78350f', fontSize: '2.5rem', fontWeight: '700' }}>{stats.conversion}</p>
        </div>
      </div>

      <div style={{
        background: '#dcfce7',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}>
        <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Recent Activity</h4>
        <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
          No reviews yet
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
