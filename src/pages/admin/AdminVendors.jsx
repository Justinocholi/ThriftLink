import React, { useState } from 'react';

const AdminVendors = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'Zara Thrift Store', category: 'Fashion', location: 'Lagos', status: 'verified' },
    { id: 2, name: 'Retro Kicks', category: 'Sneakers', location: 'Abuja', status: 'pending' },
    { id: 3, name: 'Vintage Vault', category: 'Accessories', location: 'Lagos', status: 'rejected' }
  ]);
  const [filter, setFilter] = useState('all');

  const filteredVendors = filter === 'all' ? vendors : vendors.filter(v => v.status === filter);

  const handleAction = (id, action) => {
    // In a real app, this would make an API call
    console.log(`Vendor ${id} action: ${action}`);
    if (action === 'approve') {
      setVendors(vendors.map(v => v.id === id ? { ...v, status: 'verified' } : v));
    } else if (action === 'reject') {
      setVendors(vendors.map(v => v.id === id ? { ...v, status: 'rejected' } : v));
    } else if (action === 'delete') {
      setVendors(vendors.filter(v => v.id !== id));
    } else if (action === 'revoke') {
        setVendors(vendors.map(v => v.id === id ? { ...v, status: 'pending' } : v));
    }
  };

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'verified': return { background: '#dcfce7', color: '#15803d' };
      case 'pending': return { background: '#fef3c7', color: '#b45309' };
      case 'rejected': return { background: '#fee2e2', color: '#dc2626' };
      default: return {};
    }
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
        <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '0.5rem', fontWeight: 'bold' }}>Vendor Management</h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>Approve, reject, or manage vendor verifications</p>
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
          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: '700' }}>All Vendors</h2>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            style={{
              padding: '0.625rem 1rem',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              background: 'white',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Vendors</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', textAlign: 'left' }}>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Vendor Name</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Category</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Location</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.map(vendor => (
                <tr key={vendor.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem', color: '#0f172a', fontWeight: '600' }}>{vendor.name}</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>{vendor.category}</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>{vendor.location}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      ...getStatusBadgeStyle(vendor.status),
                      padding: '0.375rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      display: 'inline-block'
                    }}>
                      {vendor.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    {vendor.status === 'pending' && (
                      <>
                        <button onClick={() => handleAction(vendor.id, 'approve')} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: '#dcfce7', color: '#15803d', fontWeight: '600' }}>Approve</button>
                        <button onClick={() => handleAction(vendor.id, 'reject')} style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: '#fee2e2', color: '#dc2626', fontWeight: '600' }}>Reject</button>
                      </>
                    )}
                    {vendor.status === 'verified' && (
                        <button onClick={() => handleAction(vendor.id, 'revoke')} style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: '#fee2e2', color: '#dc2626', fontWeight: '600' }}>Revoke</button>
                    )}
                    {vendor.status === 'rejected' && (
                        <>
                            <button onClick={() => handleAction(vendor.id, 'approve')} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: '#dcfce7', color: '#15803d', fontWeight: '600' }}>Approve</button>
                            <button onClick={() => handleAction(vendor.id, 'delete')} style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: '#fef3c7', color: '#b45309', fontWeight: '600' }}>Delete</button>
                        </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredVendors.length === 0 && (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
              <p>No vendors found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminVendors;
