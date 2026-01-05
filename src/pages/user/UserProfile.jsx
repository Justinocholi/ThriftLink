import React from 'react';

const UserProfile = () => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Profile Settings</h4>
      
      <form style={{ display: 'grid', gap: '1.5rem', maxWidth: '600px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>First Name</label>
            <input type="text" defaultValue="User" style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid #e2e8f0', borderRadius: '10px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Last Name</label>
            <input type="text" defaultValue="One" style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid #e2e8f0', borderRadius: '10px' }} />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Email Address</label>
          <input type="email" defaultValue="user@example.com" style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid #e2e8f0', borderRadius: '10px' }} />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Phone Number</label>
          <input type="tel" defaultValue="+234 800 000 0000" style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid #e2e8f0', borderRadius: '10px' }} />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Delivery Address</label>
          <textarea rows="3" defaultValue="123 Thrift Street, Lagos, Nigeria" style={{ width: '100%', padding: '0.875rem 1rem', border: '1px solid #e2e8f0', borderRadius: '10px', fontFamily: 'inherit' }}></textarea>
        </div>

        <button type="button" style={{
          padding: '0.875rem 1.5rem',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontWeight: '600',
          cursor: 'pointer',
          width: 'fit-content'
        }}>Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;
