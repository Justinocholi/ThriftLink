// app/dashboard/edit-product/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function EditProduct() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
    inStock: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'vendor')) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!user || !productId) return;

      try {
        // Get vendor ID
        const { data: vendorData, error: vendorError } = await supabase
          .from('vendors')
          .select('id')
          .eq('user_id', user.id)
          .single();

        if (vendorError || !vendorData) {
          throw new Error('Vendor profile not found');
        }

        // Get product
        const { data: product, error: productError } = await supabase
          .from('products')
          .select('*')
          .eq('id', productId)
          .eq('vendor_id', vendorData.id)
          .single();

        if (productError) {
          if (productError.code === 'PGRST116') {
            throw new Error('Product not found or you do not have permission to edit it');
          }
          throw productError;
        }

        if (!product) {
          throw new Error('Product not found');
        }

        // Set form data
        setFormData({
          name: product.name,
          description: product.description,
          price: product.price.toString(),
          category: product.category_id || '',
          imageUrl: product.image_url || '',
          inStock: product.in_stock,
        });
      } catch (err: any) {
        console.error('Error fetching product:', err);
        setError(err.message || 'Failed to load product');
      } finally {
        setIsLoading(false);
      }
    };

    if (user && !loading) {
      fetchProduct();
    }
  }, [user, loading, productId]);

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
      if (!user) throw new Error('You must be logged in to update a product');
      if (!productId) throw new Error('Product ID is missing');

      // Get vendor ID
      const { data: vendorData, error: vendorError } = await supabase
        .from('vendors')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (vendorError || !vendorData) {
        throw new Error('Vendor profile not found');
      }

      // Update product record
      const { error: productError } = await supabase
        .from('products')
        .update({
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          category_id: formData.category || null,
          image_url: formData.imageUrl,
          in_stock: formData.inStock,
        })
        .eq('id', productId)
        .eq('vendor_id', vendorData.id);

      if (productError) throw productError;

      // Show success message
      setSuccess(true);
    } catch (err: any) {
      console.error('Error updating product:', err);
      setError(err.message || 'Failed to update product. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error && !formData.name) {
    return (
      <div className="add-product-container">
        <div className="error-message">{error}</div>
        <button 
          onClick={() => router.push('/dashboard/products')} 
          className="btn btn-primary"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="add-product-container">
      <div className="add-product-header">
        <h1>Edit Product</h1>
        <p>Update your product details</p>
      </div>

      {error && <div className="error-message">{error}</div>}
      {success && (
        <div className="success-message">
          Product updated successfully! <button onClick={() => router.push('/dashboard/products')}>Back to Products</button>
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

          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => router.push('/dashboard/products')}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Updating...' : 'Update Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}