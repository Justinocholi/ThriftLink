import React from 'react';

const VendorSettings = () => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Settings</h4>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div>
          <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Notifications</h5>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input type="checkbox" defaultChecked id="emailNotif" />
            <label htmlFor="emailNotif">Email Notifications</label>
          </div>
        </div>
        <div>
          <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Password</h5>
          <button style={{
            padding: '0.5rem 1rem',
            border: '1px solid #e2e8f0',
            background: 'white',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default VendorSettings;
