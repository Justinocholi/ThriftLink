import React, { useState } from 'react';

const AdminUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Chioma Okeke', email: 'chioma@example.com', location: 'Lagos', joined: 'Oct 20, 2023' },
    { id: 2, name: 'Emmanuel T.', email: 'emmanuel@example.com', location: 'Abuja', joined: 'Oct 22, 2023' }
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
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
        <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '0.5rem', fontWeight: 'bold' }}>User Management</h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>View and manage registered users</p>
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
          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: '700' }}>All Users</h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', textAlign: 'left' }}>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Name</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Email</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Location</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Joined</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem', color: '#0f172a', fontWeight: '600' }}>{user.name}</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>{user.email}</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>{user.location}</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>{user.joined}</td>
                  <td style={{ padding: '1rem' }}>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      style={{
                        padding: '0.5rem 1rem',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        background: '#fef3c7',
                        color: '#b45309',
                        fontWeight: '600',
                        fontSize: '0.85rem'
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && (
             <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
              <p>No users found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
