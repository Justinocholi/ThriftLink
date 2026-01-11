import React from 'react';

const VendorOrders = () => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Orders Received</h4>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8fafc', textAlign: 'left' }}>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Order ID</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Customer</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Item</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Date</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Status</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '1rem', color: '#475569' }}>#ORD-001</td>
              <td style={{ padding: '1rem', color: '#0f172a', fontWeight: '600' }}>Chioma Okeke</td>
              <td style={{ padding: '1rem', color: '#475569' }}>Vintage Denim Jacket</td>
              <td style={{ padding: '1rem', color: '#475569' }}>Oct 24, 2023</td>
              <td style={{ padding: '1rem' }}><span style={{ background: '#dcfce7', color: '#15803d', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>Completed</span></td>
              <td style={{ padding: '1rem', color: '#475569' }}>₦15,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '1rem', color: '#475569' }}>#ORD-002</td>
              <td style={{ padding: '1rem', color: '#0f172a', fontWeight: '600' }}>Emmanuel T.</td>
              <td style={{ padding: '1rem', color: '#475569' }}>Nike Air Max</td>
              <td style={{ padding: '1rem', color: '#475569' }}>Oct 25, 2023</td>
              <td style={{ padding: '1rem' }}><span style={{ background: '#fef3c7', color: '#b45309', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>Pending</span></td>
              <td style={{ padding: '1rem', color: '#475569' }}>₦25,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorOrders;
