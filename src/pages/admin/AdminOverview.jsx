import React from 'react';

const AdminOverview = () => {
  // Mock Data
  const stats = {
    totalVendors: 3,
    pendingVendors: 1,
    totalReviews: 2,
    totalUsers: 2
  };

  const recentReviews = [
    { id: 1, user: 'User 1', rating: 5, text: 'Great service!', date: '2023-10-25' },
    { id: 2, user: 'User 2', rating: 4, text: 'Good quality items.', date: '2023-10-24' }
  ];

  return (
    <div>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '0.5rem', fontWeight: 'bold' }}>Admin Dashboard</h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>Manage vendors, reviews, and users across ThriftLink</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {[
          { label: 'Total Vendors', value: stats.totalVendors },
          { label: 'Pending Verifications', value: stats.pendingVendors },
          { label: 'Total Reviews', value: stats.totalReviews },
          { label: 'Total Users', value: stats.totalUsers }
        ].map((stat, i) => (
          <div key={i} style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            border: '1px solid #f1f5f9'
          }}>
            <h4 style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.75rem' }}>
              {stat.label}
            </h4>
            <p style={{ color: '#0f172a', fontSize: '2.5rem', fontWeight: '700' }}>{stat.value}</p>
          </div>
        ))}
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
          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: '700' }}>Recent Activity</h2>
        </div>
        
        <div>
          {recentReviews.map((review) => (
            <div key={review.id} style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '1rem'
            }}>
              <div style={{ color: '#fbbf24', fontSize: '1rem', marginBottom: '0.5rem' }}>
                {"⭐".repeat(review.rating)}
              </div>
              <div style={{ color: '#475569', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                {review.text}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#94a3b8' }}>
                <span>{review.date}</span>
                <span>by {review.user}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
