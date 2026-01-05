import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const UserSaved = () => {
  const savedItems = [
    { id: 1, name: 'Vintage Denim Jacket', price: 15000, vendor: 'Zara Thrift', image: 'https://images.unsplash.com/photo-1576995853123-5a297da40303?auto=format&fit=crop&q=80&w=300' },
    { id: 2, name: 'Nike Air Max 97', price: 25000, vendor: 'Kicks Plug', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=300' },
    { id: 3, name: 'Floral Summer Dress', price: 8000, vendor: 'Chic Styles', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=300' },
  ];

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Saved Items</h4>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {savedItems.map(item => (
          <div key={item.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '200px' }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button style={{
                position: 'absolute', top: '10px', right: '10px',
                background: 'white', border: 'none', borderRadius: '50%',
                width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <Heart size={16} fill="#ef4444" color="#ef4444" />
              </button>
            </div>
            <div style={{ padding: '1rem' }}>
              <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem' }}>{item.name}</h5>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>{item.vendor}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '700', color: '#0f172a' }}>₦{item.price.toLocaleString()}</span>
                <button style={{
                  padding: '0.5rem',
                  background: '#eff6ff',
                  color: '#3b82f6',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSaved;
