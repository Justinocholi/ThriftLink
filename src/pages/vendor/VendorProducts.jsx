import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const VendorProducts = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '', image: null });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem({ ...newItem, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!newItem.image || !newItem.name || !newItem.price) {
      alert("Please fill all fields");
      return;
    }
    setItems([...items, newItem]);
    setNewItem({ name: '', price: '', image: null });
    alert("Item uploaded successfully!");
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Add New Product</h4>
      
      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ 
          border: '2px dashed #cbd5e1', 
          borderRadius: '10px', 
          padding: '2rem', 
          textAlign: 'center',
          cursor: 'pointer',
          background: '#f8fafc'
        }}>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            style={{ display: 'none' }} 
            id="product-image"
          />
          <label htmlFor="product-image" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', color: '#64748b' }}>
            {newItem.image ? (
              <img src={newItem.image} alt="Preview" style={{ maxHeight: '200px', maxWidth: '100%', borderRadius: '8px' }} />
            ) : (
              <>
                <Upload size={32} />
                <span>Click to upload image</span>
              </>
            )}
          </label>
        </div>

        <input 
          type="text" 
          placeholder="Item name (e.g., Vintage Denim Jacket)" 
          value={newItem.name}
          onChange={(e) => setNewItem({...newItem, name: e.target.value})}
          style={{ padding: '0.875rem 1rem', border: '1px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem' }}
        />
        
        <input 
          type="number" 
          placeholder="Price (₦)" 
          value={newItem.price}
          onChange={(e) => setNewItem({...newItem, price: e.target.value})}
          style={{ padding: '0.875rem 1rem', border: '1px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem' }}
        />
        
        <button 
          onClick={handleUpload}
          style={{ padding: '0.875rem 1.5rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '10px', fontWeight: '600', cursor: 'pointer' }}
        >
          Upload Item
        </button>
      </div>

      <h4 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>Your Inventory</h4>
      
      {items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
          <p>No items uploaded yet</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
          {items.map((item, index) => (
            <div key={index} style={{ cursor: 'pointer' }}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '0.5rem' }} 
              />
              <div style={{ fontWeight: '600', color: '#0f172a' }}>{item.name}</div>
              <div style={{ color: '#25D366', fontWeight: '600' }}>₦{Number(item.price).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VendorProducts;
