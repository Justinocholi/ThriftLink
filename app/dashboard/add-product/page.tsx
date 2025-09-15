// app/dashboard/add-product/page.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AddProduct() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
    inStock: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'vendor')) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSubmitting(true);

    try {
      if (!user) throw new Error('You must be logged in to add a product');

      // Get vendor ID
      const { data: vendorData, error: vendorError } = await supabase
        .from('vendors')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (vendorError || !vendorData) {
        throw new Error('Vendor profile not found. Please create a vendor profile first.');
      }

      // Create product record
      const { error: productError } = await supabase.from('products').insert([
        {
          vendor_id: vendorData.id,
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          category_id: formData.category || null,
          image_url: formData.imageUrl,
          in_stock: formData.inStock,
        },
      ]);

      if (productError) throw productError;

      // Show success message and reset form
      setSuccess(true);
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
        inStock: true,
      });
    } catch (err: any) {
      console.error('Error adding product:', err);
      setError(err.message || 'Failed to add product. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="add-product-container">
      <div className="add-product-header">
        <h1>Add New Product</h1>
        <p>List a new product for sale on Thrift Link</p>
      </div>

      {error && <div className="error-message">{error}</div>}
      {success && (
        <div className="success-message">
          Product added successfully! <button onClick={() => router.push('/dashboard')}>View All Products</button>
        </div>
      )}

      <div className="add-product-card">
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter product name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Describe your product in detail"
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price (NGN)</label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Enter product price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Product Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="fashion">Fashion & Clothing</option>
              <option value="electronics">Electronics & Gadgets</option>
              <option value="beauty">Beauty & Personal Care</option>
              <option value="home">Home & Kitchen</option>
              <option value="food">Food & Groceries</option>
              <option value="health">Health & Wellness</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Product Image URL</label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              placeholder="Enter URL for product image"
            />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="inStock" className="checkbox-label">
              <input
                id="inStock"
                name="inStock"
                type="checkbox"
                checked={formData.inStock}
                onChange={handleChange}
              />
              <span>Product is in stock</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Adding Product...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
}