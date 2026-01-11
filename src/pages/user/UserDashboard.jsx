import React from 'react';
import { ShoppingBag, Heart, Truck } from 'lucide-react';

const UserDashboard = () => {
  return (
    <div style={{ background: '#dcfce7', padding: '1.5rem', borderRadius: '16px', minHeight: '80vh' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '12px', color: '#3b82f6' }}>
            <ShoppingBag size={24} />
          </div>
          <div>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Total Orders</p>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a' }}>12</h4>
          </div>
        </div>
        
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{ background: '#fef2f2', padding: '1rem', borderRadius: '12px', color: '#ef4444' }}>
            <Heart size={24} />
          </div>
          <div>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Saved Items</p>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a' }}>5</h4>
          </div>
        </div>
        
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '12px', color: '#22c55e' }}>
            <Truck size={24} />
          </div>
          <div>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Pending Delivery</p>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a' }}>1</h4>
          </div>
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}>
        <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem' }}>Recent Orders</h4>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', textAlign: 'left' }}>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600' }}>Order ID</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600' }}>Item</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600' }}>Date</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600' }}>Status</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '1rem', color: '#475569' }}>#ORD-789</td>
                <td style={{ padding: '1rem', color: '#0f172a', fontWeight: '600' }}>Vintage Denim Jacket</td>
                <td style={{ padding: '1rem', color: '#475569' }}>Oct 24, 2023</td>
                <td style={{ padding: '1rem' }}><span style={{ background: '#dcfce7', color: '#15803d', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>Delivered</span></td>
                <td style={{ padding: '1rem', color: '#475569' }}>₦15,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
