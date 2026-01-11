import React from 'react';

const VendorAnalytics = () => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Detailed Analytics</h4>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>Detailed breakdown of your traffic sources and user engagement.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid #93c5fd'
        }}>
          <h4 style={{ color: '#1e40af', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Total Views</h4>
          <p style={{ color: '#1e3a8a', fontSize: '2.5rem', fontWeight: '700' }}>0</p>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid #86efac'
        }}>
          <h4 style={{ color: '#166534', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Total Clicks</h4>
          <p style={{ color: '#14532d', fontSize: '2.5rem', fontWeight: '700' }}>0</p>
        </div>
      </div>
      
      <div style={{ height: '300px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
        Chart Visualization Placeholder
      </div>
    </div>
  );
};

export default VendorAnalytics;
