import React from 'react';

const VendorMessages = () => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Messages</h4>
      <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
        <p>No new messages</p>
      </div>
    </div>
  );
};

export default VendorMessages;
