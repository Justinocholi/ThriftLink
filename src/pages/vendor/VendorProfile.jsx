import React from 'react';

const VendorProfile = () => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Vendor Profile</h4>
      <form style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Store Name</label>
          <input type="text" defaultValue="Zara Thrift Store" style={{
            width: '100%',
            padding: '0.875rem 1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            fontSize: '0.95rem',
            outline: 'none'
          }} />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Description</label>
          <textarea rows="4" defaultValue="Premium thrift clothing store in Lagos. We sell high-quality vintage wears." style={{
            width: '100%',
            padding: '0.875rem 1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            fontSize: '0.95rem',
            outline: 'none',
            fontFamily: 'inherit'
          }}></textarea>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Location</label>
          <select style={{
            width: '100%',
            padding: '0.875rem 1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            fontSize: '0.95rem',
            outline: 'none',
            background: 'white'
          }}>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
          </select>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>WhatsApp Number</label>
          <input type="text" defaultValue="+234 801 234 5678" style={{
            width: '100%',
            padding: '0.875rem 1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            fontSize: '0.95rem',
            outline: 'none'
          }} />
        </div>
        
        <button type="button" style={{
          padding: '0.875rem 1.5rem',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontWeight: '600',
          fontSize: '0.95rem',
          cursor: 'pointer',
          width: 'fit-content',
          marginTop: '1rem'
        }}>Save Changes</button>
      </form>
    </div>
  );
};

export default VendorProfile;
